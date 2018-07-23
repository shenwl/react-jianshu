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
    ret = {
        "result": 1, 
        "msg": "获取成功",
        "data": ["科技", "前端", "区块链", "生活大爆炸", "美剧", "英语", "python", "云服务", "大数据", "疫苗", "switch", "任天堂", "塞尔达传说", "马里奥奥德赛", "蘑菇队长", "eshop"]
    }
    return make_response(jsonify(ret))


if __name__ == "__main__":
    config = dict(
        host='0.0.0.0',
        port=3001,
        debug=True
    )
    app.run(**config)