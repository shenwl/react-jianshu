from flask import Flask, jsonify, make_response, request
from functools import wraps
import json
import shortuuid

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

@app.route('/api/home')
@allow_cross_domain
def get_home_data():
    json_data = '{"topicList":[{"id":1,"title":"社会热点","imgUrl":"//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"},{"id":2,"title":"@IT·互联网","imgUrl":"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"}],"articleList":[{"id":1,"title":"玩转职场，你还差一个项目管理思维","summary":"PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...","imgUrl":"//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},{"id":2,"title":"玩转职场，你还差一个项目管理思维","summary":"PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...","imgUrl":"//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},{"id":3,"title":"玩转职场，你还差一个项目管理思维","summary":"PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...","imgUrl":"//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"}],"recommendList":[{"id":1,"title":"七日热门","imgUrl":"//pcertxgzb.bkt.clouddn.com/recommend1.png"},{"id":2,"title":"30日热门","imgUrl":"//pcertxgzb.bkt.clouddn.com/recommend2.png"},{"id":3,"title":"优先连载","imgUrl":"//pcertxgzb.bkt.clouddn.com/recommend3.png"},{"id":4,"title":"简书版权","imgUrl":"//pcertxgzb.bkt.clouddn.com/recommend4.png"},{"id":5,"title":"简书大学堂","imgUrl":"//pcertxgzb.bkt.clouddn.com/recommend5.png"}],"writerList":[{"id":1,"avatar":"//upload.jianshu.io/users/upload_avatars/11740279/5841dba1-205f-433e-a105-b3feb5981abd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240","name":"阿特otter","desc":"写了95.3k字 · 264喜欢"},{"id":2,"avatar":"//upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96","name":"王老师八卦美术史","desc":"写了130.1k字 · 545喜欢"},{"id":3,"avatar":"//upload.jianshu.io/users/upload_avatars/3343569/93161bfa-dda9-49ee-88e1-a85ec4227232.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96","name":"吴小布","desc":"写了530.7k字 · 11.7k喜欢"},{"id":4,"avatar":"//upload.jianshu.io/users/upload_avatars/11740279/5841dba1-205f-433e-a105-b3feb5981abd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240","name":"阿特otter","desc":"写了95.3k字 · 264喜欢"},{"id":5,"avatar":"//upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96","name":"王老师八卦美术史","desc":"写了130.1k字 · 545喜欢"}]}'
    ret = {
        "result": 1, 
        "msg": "获取成功",
        "data": json.loads(json_data),
    }
    return make_response(jsonify(ret))

@app.route('/api/articlelist')
@allow_cross_domain
def get_article_list():
    data = [{"id":shortuuid.uuid(),"title":"玩转职场，你还差一个项目管理思维","summary":"PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...","imgUrl":"//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},{"id":shortuuid.uuid(),"title":"玩转职场，你还差一个项目管理思维","summary":"PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...","imgUrl":"//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},{"id":shortuuid.uuid(),"title":"玩转职场，你还差一个项目管理思维","summary":"PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...","imgUrl":"//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"}]
    ret = {
        "result": 1, 
        "msg": "获取成功",
        "data": data
    }
    return make_response(jsonify(ret))

@app.route('/api/detail')
@allow_cross_domain
def article_detail():
    id = request.args.get('id')
    ret = {
        "id": id,
        "title": "测试文章",
        "content": "测试文章",
    }
    return make_response(jsonify(ret))

@app.route('/api/login')
@allow_cross_domain
def login():
    account = request.args.get('account')
    password = request.args.get('password')		
    ret = {
        "result": 1,
        "msg": 'login success',
    }
    return make_response(jsonify(ret))

if __name__ == "__main__":
    config = dict(
        host='0.0.0.0',
        port=3001,
        debug=True
    )
    app.run(**config)