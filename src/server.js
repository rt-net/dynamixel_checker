var fs = require('fs');
var express = require('express');
var app = express();

var http = require('http').Server(app);
var async = require('async');
var serial = require('./serial.js');

var io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client.html');
});

io.on('connection', function(socket){
    console.log('connected');
        socket.on('disconnect', function(){
            console.log('disconnect');
        });

    socket.on("command", function(data){
        console.log("data.value:" + data.value);
        switch(data.value) {
            case "on":
                serial.writeTxPacket(data.id, 64, 1, Number(data.deg));
                break;
            case "off":
                serial.writeTxPacket(data.id, 64, 1, Number(data.deg));
                break;
            case "set":
                var buf = serial.makedata(data.deg);
                serial.writeTxPacket(data.id, 116, 4, buf);
                break;
            case "zero":
                var buf = serial.makedata(0);
                serial.writeTxPacket(data.id, 116, 4, buf);
                break;
            case "get":
                var data;
                async.series([
                    function(callback){
                        console.log("first log");
                        serial.readRxPacket(data.id, data.addr, data.leng);
                        callback(null);
                    },
                    function(callback){
                        serial.rxPacket(Number(data.leng), function(result){
                            data = result;
                            console.log("get:" + data);
                            socket.emit("read",{val: data});
                        });
                        callback(null);
                    }],function(result){
                        console.log("async");
                    });
                break;
            case "write":
                serial.writeTxPacket(data.id, data.addr, Number(data.leng), Number(data.deg));
                break;
            case "ping":
            serial.setbaudRate(Number(data.deg));
            setTimeout(function(){
                console.log("ping");
                serial.pingPacket(data.id);
                serial.rxPacket(0, function(result){
                    data = result;
                    socket.emit("search",{val:data});
                });
            },2000);
                break;
            case "all":
                var buf = new Buffer(1);
                buf[0] = 1;
                for(var id = 2; id < data.id;id++){
                    serial.addParam(id, 64, 1, buf);
                }
                serial.bulkwriteTxPacket();
                break;
            case "send":
                var data;
                serial.readRxPacket(data.id, data.addr, data.leng);
                break;
            case "read":
                serial.rxPacket(Number(data.leng), function(result){
                        data = result;
                        console.log("get:" + data);
                        socket.emit("read",{val: data});
                });
                break;
            case "rate":
                console.log(data.id);
                serial.setbaudRate(Number(data.id));
            default:
                break;
        }
    });
});

http.listen(8080, function(){
    console.log('listening on * : 8080');
});
