'use strict';
var mysql = require('mysql'); //调用MySQL模块

var connection = mysql.createConnection({
    host:"localhost",
    type: "mysql",
    host: '192.168.40.52', //主机
    database: "wt_peixunjigou",
    user: 'wttest', //MySQL认证用户名
    password: "4TVem5tjj3fXCKKR", //MySQL认证用户密码
    port: '3306', //端口号
});
connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("sucess");
})
connection.query("select * from users", (err, rows) => {
    console.log(rows);
})