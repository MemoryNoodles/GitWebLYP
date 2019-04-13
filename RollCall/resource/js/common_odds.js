
/************************************************/
/* 全局变量定义部分 */
/************************************************/
var allData = "李良龙,李良龙,李良龙,李良龙,罗浩,罗浩,罗浩,罗浩,罗浩,罗浩,罗浩,罗浩,罗浩,高波,高波,高波,高波,杨茗皓,陈作,江宣宋,陈虹宇,高波,黄思源,杨成耀,罗浩,刘宸睿,李良龙,李和林,李红仪,吕龙成,石力灵,王宇浩,余洋,赵朗,马国梁,唐春明,王敏,杨坤,刘二源,何通"; 
var allDataArr = allData.split(","); 
var num = allDataArr.length-1 ; 
var timer;
/************************************************/
/* 文档加载后执行 */
/************************************************/
$(function() {
    $("table td").click(function() {
        var isName = $(this).text()!="",
            isChecked = $(this).hasClass("checked"),
            isRunning = $(this).parents("table").hasClass("running");
        if(isName && !isChecked && !isRunning) {
            $(this).addClass("checked");
        }
        else if(isName && isChecked && !isRunning) {
            $(this).removeClass("checked");
        }
        else {
            return;
        }
    });
});
/************************************************/
/* 方法函数定义部分 */
/************************************************/
/* 动态显示出人员名单 */
function change() { 
    $("#studentName").html(allDataArr[getRnd(0,num)]); 
} 
/* 开始随机选择 */
function start() { 
    clearInterval(timer); 
    timer = setInterval('change()',10); 
    $("#header").addClass("moveBg");
    $(".everybody").addClass("running");
    $("#studentName").removeClass("scaleFont");
    $("#header .maskBlcok").addClass("rotateBlock");
} 
/* 结束随机选择 */
function stop(){ 
    var isRunning = $("table").hasClass("running");
    if(isRunning) {
        clearInterval(timer); 
        $("#header").removeClass("moveBg");
        $(".everybody").removeClass("running");
        $("#studentName").addClass("scaleFont");
        $("#header .maskBlcok").removeClass("rotateBlock");
        // 选中或取消对应人员
        var checkedName = $("#studentName").text(),
            tb_td = $("table").find("td"),
            td_len = tb_td.length;
        for(var i = 0; i < td_len; i++) {
            // 选中
            if(tb_td.eq(i).text() == checkedName && !tb_td.eq(i).hasClass("checked")) {
                tb_td.eq(i).addClass("checked");
            }
            // 取消选中
            else if(tb_td.eq(i).text() == checkedName && tb_td.eq(i).hasClass("checked")) {
                tb_td.eq(i).removeClass("checked");
                $("#studentName").append("<span class='cancelCheck'>取消</span>")
            }
        }
    }
    else {
        return;
    }
} 
/* 刷新页面 */
function refresh() {
    window.location.reload();
}
function getRnd(min,max) { 
    return parseInt(Math.random()*(max-min+1)); 
} 
