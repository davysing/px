/******************************
⚠️如果放远程，请把ningmeng.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:柠檬轻断食
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/fast.lmfasting.cn\/api\/User\/loginUserInfo.*? url script-response-body ningmeng.js


[mitm]
hostname = fast.lmfasting.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"\w+_name"/g,'"vip_expire":"2099-12-31 18:10:32","flag":"year","apple_name"');
$done(body);
