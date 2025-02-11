import os
from flask import Flask, render_template, send_from_directory
from flask_socketio import SocketIO
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler


template_dir = os.path.abspath('.')
app = Flask(__name__, template_folder=template_dir)
socketio = SocketIO(app)

@app.route('/<string:page>')
def index(page):
    ending = page.split('.')[-1]
    if ending == "html":
        return send_from_directory(template_dir, page, mimetype='text/html')
    if ending == "css":
        return send_from_directory(template_dir, page, mimetype='text/css')
    elif ending == "js":
        return send_from_directory(template_dir, page, mimetype='text/javascript')
    elif ending == "ico":
        return send_from_directory(template_dir, page, mimetype='image/vnd.microsoft.icon')
    elif ending == "mov":
        return send_from_directory(os.path.abspath('./videos/'), page)

class MyHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.is_directory:
            return
        print("reloading...")
        socketio.emit('reload', namespace='/')

if __name__ == '__main__':
    observer = Observer()
    observer.schedule(MyHandler(), path='.', recursive=True)
    observer.start()

    socketio.run(app, debug=True, port=5000)
