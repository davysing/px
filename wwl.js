[rewrite_local]
https://api.wawalu.cn/wawalu/practise/download url script-response-body https://gist.githubusercontent.com/Sliverkiss/daaeab5573613f3adfe28d80ea19760c/raw/wwl.js

^https:\/\/api\.wawalu\.cn\/wawalu\/practise\/list.+ url script-response-body https://gist.githubusercontent.com/Sliverkiss/daaeab5573613f3adfe28d80ea19760c/raw/wwl.js

[mitm]
hostname = api.wawalu.cn

*/
var obj = JSON.parse($response.body);
var url = $request.url;
const api={
 "download":'https://api.wawalu.cn/wawalu/practise/download',
 "list":/^https:\/\/api\.wawalu\.cn\/wawalu\/practise\/list.+/
}

if (url.includes(api.download)) {
    obj.data = true;
} else if (url.match(api.list)) {
    let array = obj.data;
    array.map(e => {
        e.price = 0;
        e.isFree = 1;
    });
    obj.data = array;
}

$done({ body:JSON.stringify(obj) });
