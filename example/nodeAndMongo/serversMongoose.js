/*连接数据库*/
var MongoClient = require('mongodb').MongoClient;
var rfDB;
var json = {};
var whereObj = {};
var skipNum = 0, limitNum = 5;

/*  把查询到的数据返回给前端的ajax
*   db --> 数据库
*   res --> 响应
* */
var selectDB = function(db, where,  res){
    db.collection('webClass').find(where).skip(skipNum).limit(limitNum).toArray(function(err, data){
        res.end(JSON.stringify(data));
    })
};

/*
*  查询总页数
* */
var selectDBCount = function(db, where, res){

     db.collection('webClass').find(where).count().then(function(count){

         json.allPage = Math.ceil( count/limitNum );
         res.end( JSON.stringify(json) );

         whereObj = {};

     })
}

/* 连接数据库
* */
MongoClient.connect('mongodb://127.0.0.1:27017/rfDB', function(err, db){
    if(err){
        console.log("连接失败");
    }else{
       rfDB = db;
    }
})


/*
*   搭建服务器
* */
var http  =require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){

    var urlObj  = url.parse( req.url );
    if(urlObj.pathname == '/'){     //默认显示页面
        getFile('./html/index.html', res);

     //处理请求其他资源文件（.css/.js/.html/.png）
    }else if( urlObj.pathname != 'favicon.ico' && urlObj.pathname.indexOf('.') != -1){
        getFile(urlObj.pathname.substring(1), res);

    }else if( urlObj.query ){  //处理get请求

        if(urlObj.query == 'allPage'){   //请求页数

            selectDBCount(rfDB, whereObj, res);

        }else if(urlObj.pathname == '/searchName'){  //请求搜素的数据

            whereObj.name = new RegExp( decodeURIComponent(urlObj.query) );
            selectDB(rfDB, whereObj,  res);

        }else{
            //根据请求的页面返回相应的数据
            skipNum = ( urlObj.query - 1 )*limitNum;
            selectDB(rfDB, whereObj,  res);
        }


    }

}).listen(8085);

/*
* 读取文件信息
* */
function getFile(fileName, res){
    fs.readFile(fileName, function(err, data){
        if(err){
            console.log(err);
        }else{
            res.end(data);
        }
    })
}







