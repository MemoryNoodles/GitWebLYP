/*上网时段全国统计 */
var internet_option = {
    title:{
      text:"上网时段全国统计(昨日)",
      textStyle:{
          color:"white",
          fontWeight:"normal",
          fontFamily:"黑体"
      },
      padding:20,
    },
    textStyle:{
        color:"#96bbe8",
      },
    color: ['#366fb6'],
    toolbox:{
        show: true,
        zlevel:100,
        z:101
    },
    backgroundColor:{
      color:"#18191d"  
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['0-5', '6', '7', '8', '9', '10', '11','12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'上网人数',
            type:'bar',
            itemStyle: {
                    normal: {
　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                              '#366fb6','#366fb6','#366fb6','#366fb6','#366fb6',
                               '#366fb6','#366fb6','#366fb6','#366fb6','#366fb6',
                               '#366fb6','#366fb6','#366fb6','#366fb6','#366fb6'
                            ];
                            //功能 -》对第一名、第二名、第三名分别显示不同的颜色
                            function compara(a,b){
                                return b-a
                            }
                            var newArr = this.internet_option.series[0].data.sort(compara);
                            if(params.value == newArr[0] ){
                               colorList[params.dataIndex] = "#e73f3f" 
                            }
                            if(params.value == newArr[1]){
                               colorList[params.dataIndex] = "#f0931c"  
                            }
                            if(params.value == newArr[2]){
                               colorList[params.dataIndex] = "#35a165"  
                            }
                            return colorList[params.dataIndex]
                        },
　　　　　　　　　　　　　　//以下为是否显示，显示位置和显示格式的设置了
/*                        label: {
                            show: true,
                            position: 'top',
//                             formatter: '{c}'
                            formatter: '{b}\n{c}'
                        }*/
                    }
                },
            barWidth: '60%',
            data:[2000,1502,2500,2850,2600,1200,1300,1000,1150,1000,2750,3200,2560,2700,2640,2510,2040,2140,1587],
            
        }
    ]
};

/*上网人群留存*/
var retained_option = {
        baseOption: {
            title : {
                text: '上网人群留存',
                textStyle:{
                      color:"white",
                      fontWeight:"normal",
                      fontFamily:"黑体"
                  },
                padding:20,
            },
            backgroundColor:{
              color:"#18191d"  
            },
            legend: {
                data:['有效认证人数','有效使用人数','app总人数','超过5min的人数'],
                textStyle:{
                    color:"white"
                },
                orient: 'horizontal'
            },
            /*工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。*/
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                },
                top:20
            },
            series : [
                {
                    name:'半径模式',
                    type:'pie',
                    roseType : 'radius',
                    itemStyle:{
                      
                    },
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {value:3500, name:'有效认证人数'},
                        {value:2500, name:'有效使用人数'},
                        {value:1500, name:'app总人数'},
                        {value:750, name:'超过5min的人数'},
                    ]
                }
            ]
        },
        media: [
            {
                query: {
                    maxWidth: 500
                },
                option: {
                    legend: {
                        left:"auto",
                        right: "auto",
                        bottom: '5%',
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            radius: [20, '60%'],
                            center: ['50%', '50%']
                        }
                    ]
                }
            }
        ]
    };

/*上网用户数据*/
var interUser_option = {
   /* title: {
        text: '',
        textStyle:{
             color:"white",
             fontWeight:"normal",
             fontFamily:"黑体"
        },
        padding:0 
    },*/
    textStyle:{
        color:"#96bbe8",
    },
    /*移动上去显示*/
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
   /* color:["#356fb6", "#35a166"],*/
    /*小图标*/
    legend: {
        bottom:20,
        right:40,
        data:[
            {
                name: '上网用户',
                icon: 'rect',
                textStyle: {
                    color: '#8caad1',
                    fontSize:12
                }
            },
            {
                name: '联网用户',
                icon: 'rect',
                textStyle: {
                    color: '#8caad1',
                    fontSize:12
                }
            }
        ],
        
    },
    backgroundColor:"#18191d",
    toolbox: {
        feature: {
           /* saveAsImage: {}*/
        }
    },
    grid: {
        top:"5%",
        left: '3%',
        right: '3%',
        bottom: '15%',
        containLabel: true
    },
    xAxis : [
        {
            offset:0,
            type : 'category',
            boundaryGap : false,
            data : ['6.6','6.7','6.8','6.9','6.10','6.11','6.12']
        }
    ],
    yAxis : [
        { 
            offset:0,
            type : 'value',
        }
    ],
    center:[120,220],
    series : [
       
        {
            name:'上网用户',
            type:'line',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle:{
                normal:{
                   
                }
            },
           
        },
        {
            name:'联网用户',
            type:'line',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
};

/*各城市上网数据*/
var city_option = {
    title: {
        text: '各城市上网数据',
        textStyle:{
          color:"white",
          fontWeight:"normal",
          fontFamily:"黑体"
        },
        padding:20,
    },
     textStyle:{
        color:"#96bbe8",
    },
    color: ['#366fb6'],
    tooltip: {
        trigger: 'item'
    },
     backgroundColor:{
      color:"#18191d"  
    },
    geo:{
         map:"china",
         zoom:0.1,
    },
    /*legend: {
        orient: 'vertical',
        left: 'left',
        data:['上网数据']
    },*/
    visualMap: {
        min: 0,
        max: 500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true,
        color: ['yellow','lightskyblue'],
        textStyle:{
            color:"#96bbe8"
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '上网数据',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '北京',value: 230 },
                {name: '天津',value: 200 },
                {name: '上海',value: 321 },
                {name: '重庆',value: 124 },
                {name: '河北',value: 187 },
                {name: '河南',value: 167 },
                {name: '云南',value: 211 },
                {name: '辽宁',value: 198 },
                {name: '黑龙江',value: 175 },
                {name: '湖南',value: 255 },
                {name: '安徽',value: 200 },
                {name: '山东',value: 167 },
                {name: '新疆',value: 210 },
                {name: '江苏',value: 222 },
                {name: '浙江',value: 333 },
                {name: '江西',value: 356 },
                {name: '湖北',value:342 },
                {name: '广西',value: 121},
                {name: '甘肃',value: 111 },
                {name: '山西',value: 165 },
                {name: '内蒙古',value: 211 },
                {name: '陕西',value: 212 },
                {name: '吉林',value: 198 },
                {name: '福建',value: 232 },
                {name: '贵州',value: 143 },
                {name: '广东',value: 425 },
                {name: '青海',value: 234 },
                {name: '西藏',value: 276 },
                {name: '四川',value: 398 },
                {name: '宁夏',value: 215},
                {name: '海南',value: 145 },
                {name: '台湾',value: 543 },
                {name: '香港',value: 423 },
                {name: '澳门',value: 378 }
            ]
        },
    ]
};








