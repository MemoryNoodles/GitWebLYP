/**
 * 函数xxx功能
 创建时期：2017/4/16.
 */

/*ajax封装
 method -》 传输的方式get/post
 url -->    后台的地址
 data -->   传送的数据
 succesFunc->请求成功后执行的函数
 */
function ajax(method, url, data, succesFunc) {
    var xhr = new XMLHttpRequest();
    if (method == 'get') {

        xhr.open(method, url + '?' + data, true);
        xhr.upload.addEventListener("progress", onprogress, false);
        /*发送请求*/
        xhr.send();

    } else if (method == 'post') {

        xhr.open(method, url, true);
        /*设置发送的数据类型*/
        /*xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');*/
        /*发送请求*/
        xhr.send(data);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var obj = JSON.parse(xhr.responseText);
           /* console.log(xhr.responseText,2);*/
            succesFunc && succesFunc(obj);

        }

    }

}
