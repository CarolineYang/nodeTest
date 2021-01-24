var xml = new XMLHttpRequest();
var data;
xml.onreadystatechange = function () {
    if(xml.readyState == 4){
        if(xml.readyState == 200){
            data = JSON.parse(xml.responseText);
        }
    }
}
xml.open('get',url,true);
xml.send();