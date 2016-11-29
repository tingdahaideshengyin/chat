import tornado.ioloop
import tornado.options
import tornado.web
import os.path
from tornado.options import define, options

import tornado.websocket
import logging
import tornado.escape
import uuid

# 启动端口
define("port", default=8888, help="run on the given port", type=int)


class Application(tornado.web.Application):
    def __init__(self):
        # URL映射
        handlers = [
            (r"/", ChatSocketHandeler)
        ]

        # 初始参数设置
        settings = dict(
            cookie_secret="YOU CANT_GUESS_MY_SECRET",
            template_path=os.path.join(os.path.dirname(__file__), "templates"),
            static_path=os.path.join(os.path.dirname(__file__), "static"),
            xsrf_cookies=True
        )

        # 调用基类构造函数
        super(Application, self).__init__(handlers, **settings)


# 聊天请求
class ChatSocketHandeler(tornado.websocket.WebSocketHandler):
    # 不加这个会报错
    def check_origin(self, origin):
        return True

    # 客户端ID
    client_id = 1

    # 保存所有在线WebSocket连接
    waiters = set()

    # WebSocket建立时调用
    def open(self):
        self.client_id = ChatSocketHandeler.client_id
        ChatSocketHandeler.client_id += 1
        ChatSocketHandeler.waiters.add(self)

    # WebSocket断开后调用
    def on_close(self):
        ChatSocketHandeler.waiters.remove(self)

    # 收到WebSocket消息后调用
    def on_message(self, message):
        # logging.info("got message %r", message)
        ChatSocketHandeler.send_updates(self.client_id, message)
        
    @classmethod
    def send_updates(cls, id, message):  # 向所有客户端发送聊天消息
        # logging.info("sending message to %d waiters", len(cls.waiters))
        for waiter in cls.waiters:
            try:
                if waiter.client_id == id:
                    waiter.write_message("")
                else:
                    waiter.write_message(message)
            except:
                logging.error("Error sending message", exc_info=True)


def main():
    tornado.options.parse_command_line()
    app = Application()
    app.listen(options.port)
    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    main()
