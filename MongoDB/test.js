
var data = [
    { "name":"张三", "age":23,
     "skill":["html","css"],
     "score":90
    },
    { "name":"赵四", "age":25,
     "skill":["html","css","javascript"],
     "score":80
    },{ "name":"王五", "age":26,
     "skill":["html","css","javascript"],
     "score":80        
    }
];

var data = [
    { 
        "content":"人民的名义"
    },{ 
        "content":"西游记"
    },{ 
        "content":"不知道了"
    }
];
db.hotWord.insert({"content":"新的热词"});

var data = [
    { "title" : "PHP 教程", 
     "description" : "PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。", 
     "by" : "菜鸟教程",
     "url" : "http://www.runoob.com",
     "tags" : [ "php" ], 
     "likes" : 200 
    },
    {  "title" : "Java 教程", 
     "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。", 
     "by" : "菜鸟教程", 
     "url" : "http://www.runoob.com",
     "tags" : [ "java" ], 
     "likes" : 150 
    },
    {  "title" : "MongoDB 教程", 
     "description" : "MongoDB 是一个 Nosql 数据库", 
     "by" : "菜鸟教程",
     "url" : "http://www.runoob.com",
     "tags" : [ "mongodb" ], 
     "likes" : 100 
    }

]
db.webClass.insert(data);

/*将年龄为23岁的学生中第一条成绩更新为100*/
db.webClass.update({ "age":"23" }, {"score":100}, false, false);
 /*or*/
db.webClass.update({ "age":"23" }, {"$set":{"score":100}}, false, false);

/*选中多条默认改第一条*/
db.webClass.update({ "age" : "23"}, {"$inc":{"score":-10}});

/*
语法：{"$unset" : {"成员" : 1}}
     删除名字为张三的成绩 
*/
db.webClass.update({"name" : "张三"}, { "$unset":{"skill" : 1} });

/*
  语法：${"$push" : {成员 : []}}
  向“张三”添加技能信息 
*/
db.webClass.update({"name":"张三"}, { "$pushA":{"skill":"babel"} });

/*$addToSet 有点类似push但是又不完全相同
  只有在没有的时候添加app
*/
db.webClass.update({"name" : "赵四"}, { "$addToSet":{"skill":"app"} });


db.webClass.update({"name" : "赵四"}, { "$pullAll":{"skill":["html"]} });

/*$rename 把name改为姓名 值是不能改的*/
db.webClass.update({"name" : "赵四"}, { "$rename":{"name" : "姓名"} });

/*删除姓名带有“四”的数据，要求只删除一个*/
db.webClass.remove({"name" : /四/}, true);
/*删除姓名带有“四”的数据都删除*/
db.webClass.remove({"name" : /四/});
/*清空webClass集合中的内容*/
db.webClass.remove({})

while( cursor.hasNext() ){
    printjson( cursor.next() );
}


var cursor = db.webClass.find();
while( cursor.hasNext() ){
    /*cursor.next()  不行*/
    printjson( cursor.next() );
}

cursor.hasNext();  //检查是否有下一行
cursor.next();     //输出下一行的数据

select avg form person
select * from person
select avg form person where id="sdfsdf";

insert into person (avg) valus("8000")
update person set avg=4999 where  id="sdfsdf"；
delete form person where  id="sdfsdf"

db.webClass.find({"age":{"&gt":20}).explain();
 
/*count() 得到集合中的所有文档*/
db.webClass.count();
/*可以增加过滤条件*/
db.webClass.count({"name":/王/});


db.runCommand({"distinct":"webClass","key":"skill"});

//都必须是string
db.createUser({
    "user":"admin",
    "pwd":"123456",
    "roles":[{"role":"readWrite","db":"rfDB"}]
})


/*
  $sum:总计
  _id:不能更改 
  totlaMony:自己命名
*/
db.webClass.aggregate([{$group : {"_id" : "$name", 
                                  "totlaMony" : {"$sum" :"$avg"}
                                 }
                       }])


/*$avg : 平均*/
db.webClass.aggregate([{$group : {"_id" : "$name", 
                                  "totlaMony" : {"$sum" :"$avg"},
                                  "平均工资":{"$avg" :"$avg"}
                                 }
                       }])

/*$first : 根据资源文档的排序获取第一个文档数据。
  $last:最后一个    
*/
db.webClass.aggregate([{$group : {"_id" : "$name", 
                                  "最低工资" : {"$first" :"$avg"},
                                 }
                       }])
//备份
mongodump   -o D:\mongodb\data\reserve
//还原
mongorestore  --port=27808 -0 D:\mongodb\data\reserve

mongorestore   –drfDB D:\mongodb\data\reserve\rfDB

mongorestore -h dbhost -d dbname –directoryperdb dbdirectory
//启用用户验证

/*
   27808:配置里的端口号
   rfDB: 创建用户时的数据库
   -u  : 自己猜
   -p
*/
mongo localhost:27808/rfDB -u admin -p 123456
//更改密码
db.changeUserPassword("admin","111");

/*
   hotWord:集合名称
   capped :true 表示为一个固定集合
   size:1024 指的是集合所占的空间容量（字节）
   max : 3   最多只能够有3条记录
*/
db.createCollection('hotWord', {"capped":true, "size":1024, "max":3});


/*
  $sort 排序
  按照工资进行排序
*/
db.webClass.aggregate([{"$sort":{"money" :1}}]);
/*如果说在工资相同的情况下，想用年龄进行再次排序怎么办*/
db.webClass.aggregate([{"$sort":{"money" :1, "age":-1}}]);



db.webClass.insert({
     "name" : "张三",
        "age" : 25,
        "money" : 4000,
        "skill" : [
                "html",
                "css",
                "javascript"
        ]
})

MongoDB 3.2之后默认启动的是wiredTiger 引擎这个引擎和原来的引擎访问方式不一样。你用命令

/*
  --storageEngine mmapv1:切换引擎
  D:\mongodb\data\dbMmapv : 跟换数据目录
*/
mongod  --storageEngine mmapv1 --dbpath D:\mongodb\data\dbMmapv





var MongoClient = require('mongodb').MongoClient;
var rfDB = 'mongodb://localhost:27017/rfDB';    
 
var selectData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('site');
  //查询数据
  var whereStr = {};
  collection.find(whereStr).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log("连接成功！");
  selectData(db, function(result) {
    console.log(result);
    db.close();
  });
});




