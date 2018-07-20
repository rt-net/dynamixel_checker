# dynamixel_checker
ROBOTIS製Dymamixelサーボモータの内部パラメータ変更ソフト

### 参考資料
 * [ROBOTIS-GIT/Dynamixel SDK](https://github.com/ROBOTIS-GIT/DynamixelSDK)
 * [Dynamixel XM430-W350 マニュアル](http://www.besttechnology.co.jp/modules/knowledge/?Dynamixel%20XM430-W350)

### 動作環境
 - OS:Linux ubuntu16.04 64bit
 - ブラウザ:firefox 61.0.1 64bit
 
### nodeのインストール
   本プログラムは[Node.js](https://nodejs.org/ja/)を使用している  

   - Node.js: 8.11.3 LTS
    [node-v8.11.3 sourc](https://nodejs.org/dist/v8.11.3/node-v8.11.3.tar.gz)でソースからインストール
   ``` 
   $ tar xzf node-v8.11.3.tar.gz
   $ cd node-v8.11.3
   $ ./configure
   $ make
   $ sudo make install 
   ```

### コンパイル手順 
   ```
   $ git clone https://github.com/rt-net/dynamixel_checker.git 
   $ cd dynamixel_checker
   ```
   ## npmパッケージのインストール
   - serialport
   - socket.io
   - express
   - async
   ```
   $ npm install -g
   ```
   
### 使用方法
   * デバイスが認識しているか確認をする
   ```
   $ ls /dev/ttyUSB*  
   ttyUSB0
   ```
   * 接続されたデバイスに書き込み読み込みの権限を渡す
   ```
   $ sudo chmod a+rw /dev/ttyUSB0 
   ```
   * プログラムの実行
   ```
   $ node server.js 
   ```
   * Webサーバに接続
   ブラウザを開いて [http://localhost:8080/] にアクセスするとDynamixel Checkerが起動する。
## License

This repository is licensed under the Apache License Version 2.0, see [LICENSE](./LICENSE).

このリポジトリはApache License Version 2.0で公開されています。詳細は[LICENSE](./LICENSE)を確認してください。
