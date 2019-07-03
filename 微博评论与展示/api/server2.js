const express = require("express");
const bodyParser = require("body-parser");
const db = require("./module/db");
const app = express();
app.use(bodyParser.json());
app.all("*",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    // 允许头部信息当中包含content-type属性
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Access-Control-Allow-Methods","DELETE,PUT");
    next();
})
// token
app.post("/weibo",function (req,res) {
    //提交微博  context
    db.insertOne("contextList",{
        context:req.body.context,
        topNum:0,
        downNum:0,
        addTime:Date.now()
    },function (err,results) {
        res.json({
            ok:1,
            msg:"成功"
        })
    })

})
app.get("/weibo",function (req,res) {
    var pageIndex = req.query.pageIndex/1;
    var cb = req.query.cb;
    db.count("contextList",{},function (err,count) {
        var limit = 5;// 每页显示的文档数量
        var pageSum = Math.ceil(count/limit);// 总页数
        if(pageSum < 1) pageSum =1;
        if(pageIndex > pageSum) pageIndex = pageSum;
        if(pageIndex < 1 ) pageIndex =1;
        db.find("contextList",{
            skip:(pageIndex-1)*limit,
            limit,
            sortObj:{
                addTime:-1
            }
        },function (err,contextList) {
            if(err){
                res.send({
                    ok:-1,
                    msg:"网络连接错误"
                })
            }else{
                res.send({
                    ok:1,
                    msg:"成功",
                    contextList,
                    pageIndex,
                    pageSum
                })
            }
        })
    })
});
app.delete("/weibo",function (req,res) {
    /*
   * 1、根据ID来删除
   * 2、连接库，执行命令，将删除后的结果返回给前端*/
    // console.log(req.query,req.body);
    db.deleteOneById("contextList",req.body.id,function (err,results) {
       res.json({
           ok:1,
           msg:"删除成功"
       })
    })
})
app.put("/weibo",function (req,res) {
    // id  type:1，顶，2 踩
    const {id} = req.body;
    const type = req.body.type / 1;
    if(type === 1 || type === 2){
        // 微博
        var $inc ={
            topNum:1
        };
        if(type === 2){
            $inc = {
                downNum:1
            }
        }
        db.updateOneById("contextList",id,{$inc},function (err,results) {
            res.json({
                ok:1,
                msg:"修改成功"
            })
        })
    }else res.json({
        ok:-1,
        msg:"异常"
    })
})
app.listen(80,function () {
    console.log("express");
})