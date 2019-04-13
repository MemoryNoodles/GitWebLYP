/**
 * ����xxx����
 ����ʱ�ڣ�2017/4/16.
 */

/*ajax��װ
 method -�� ����ķ�ʽget/post
 url -->    ��̨�ĵ�ַ
 data -->   ���͵�����
 succesFunc->����ɹ���ִ�еĺ���
 */
function ajax(method, url, data, succesFunc) {
    var xhr = new XMLHttpRequest();
    if (method == 'get') {

        xhr.open(method, url + '?' + data, true);
        xhr.upload.addEventListener("progress", onprogress, false);
        /*��������*/
        xhr.send();

    } else if (method == 'post') {

        xhr.open(method, url, true);
        /*���÷��͵���������*/
        /*xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');*/
        /*��������*/
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
