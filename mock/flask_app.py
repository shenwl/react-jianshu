from flask import Flask, jsonify, make_response
from functools import wraps

app = Flask(__name__)


def allow_cross_domain(fun):
    @wraps(fun)
    def wrapper_fun(*args, **kwargs):
        rst = make_response(fun(*args, **kwargs))
        rst.headers['Access-Control-Allow-Origin'] = '*'
        rst.headers['Access-Control-Allow-Methods'] = 'POST'
        return rst
    return wrapper_fun

@app.route('/api/list')
@allow_cross_domain
def get_todo_list():
    return make_response(jsonify(["item1", "item2", "item3", "item1", "item2", "item3"]))


if __name__ == "__main__":
    config = dict(
        host='0.0.0.0',
        port=3001,
        debug=True
    )
    app.run(**config)