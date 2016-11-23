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
            (r"/", MainHandler),
            (r"/chartsocket", ChatSocketHandeler)
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
    # 保存所有在线WebSocket连接
    waiters = set()

    # WebSocket建立时调用
    def open(self):
        ChatSocketHandeler.waiters.add(self)

    # WebSocket断开后调用
    def on_close(self):
        ChatSocketHandeler.waiters.remove(self)

    # 收到WebSocket消息后调用
    def on_message(self, message):
        logging.info("got message %r", message)
        parsed = tornado.escape.json_decode(message)
        self.username = parsed["username"]
        chat = {
            "id": str(uuid.uuid4()),
            "body": parsed["body"],
            "type": "message",
        }

        chat["html"] = tornado.escape.to_basestring(self.render_string("message.html", message=chat))

        ChatSocketHandeler.send_updates(chat)

    # 向所有客户端发送聊天消息
    def send_updates(self, cls, chat):
        logging.info("sending message to %d waiters", len(cls.waiters))
        for waiter in cls.waiters:
            try:
                waiter.write_message(chat)
            except:
                logging.error("Error sending message", exc_info=True)


# 主页处理
class MainHandler(tornado.web.RequestHandler):
    # GET 相应函数
    def get(self):
        # 渲染模板
        self.render("index.html")


def main():
    tornado.options.parse_command_line()
    app = Application()
    app.listen(options.port)
    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    main()