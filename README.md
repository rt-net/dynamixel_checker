# dynamixel_checker
ROBOTIS製Dymamixelサーボモータの内部パラメータ変更ソフト

## 参考資料
 * [ROBOTIS-GIT/Dynamixel SDK](https://github.com/ROBOTIS-GIT/DynamixelSDK)
 * [Dynamixel XM430-W350 マニュアル](http://www.besttechnology.co.jp/modules/knowledge/?Dynamixel%20XM430-W350)

## 開発環境
 - OS:Linux ubuntu16.04 64bit
 - ブラウザ:firefox 61.0.1 64bit
 
## nodeのインストール
   本プログラムは[Node.js](https://nodejs.org/ja/)を使用している  

   - Node.js: 8.11.3 LTS
    [node-v8.11.3 sourc](https://nodejs.org/dist/v8.11.3/node-v8.11.3.tar.gz)からインストール
   ``` 
   $ tar xzf node-v8.11.3.tar.gz
   $ cd node-v8.11.3
   $ ./configure
   $ make
   $ sudo make install 
   ```
   その他インストール方法もありますが、ここでは説明を省きます。

## パッケージのインストール
   ### dynamixel_checkerリポジトリのclone
   ```
   $ git clone https://github.com/rt-net/dynamixel_checker.git 
   $ cd dynamixel_checker/src
   ```
   ### npmパッケージのインストール
   本プログラムで使用するnpmパッケージをインストールする。
   以下が、パッケージの種類
   - serialport
   - socket.io
   - express
   - async
   
   ```
   $ npm install -g
   ```
   コマンドを実行することで、必要なパッケージをインストールできる。
   
## 起動方法
 ### プログラムの実行
   ```
   $ node server.js 
   ```
 ### Webサーバに接続
   ブラウザを開いて [http://localhost:8080/] にアクセスするとDynamixel Checkerが起動する。
   
   ![screenshot from 2018-07-20 17-28-41](https://user-images.githubusercontent.com/12367951/42992244-f39f4cee-8c42-11e8-8929-bc0b1d83ccca.png)

## 使用方法
 ### サーボ接続方法
 1. baudrateの設定    
  baudrateのselectboxから所望のrateを選択します。
 1. USB接続    
  USBポートにU2D2などの変換を接続、サーボの電源も入れてください。
 1. search ID   
  search IDボタンを押すと現在つながっているサーボのIDを一覧で取得します。
 1. ID選択   
  IDのselectboxで書き換えをしたいサーボのIDを選択してください。
  ## 注意事項
   ### baudrate,IDの書き換えを行った場合、USBを抜いてからサーボ接続方法をもう一度行ってください
  
 ### 各種操作説明
 operating Modeによって、挙動が変わります。[Dynamixelのマニュアル](http://www.besttechnology.co.jp/modules/knowledge/?Dynamixel%20XM430-W350)を確認してください。
 ### ・Torque on/off
 ボタンによるサーボのON/OFFを行えます。
 ### ・Change Position
 スクロールバーによるサーボの角度を変更できます。表示は[deg]となっています。
 各サーボの動作角の設定より動作は行えません。
 ### ・Reference Position
 ボタンを押すことで、サーボの原点に移動します。
 ### ・Table
 サーボのパラメータを読み書き込みすることができます。
 * current data     
 サーボに設定されているパラメータを読み込みます。
 全パラメータの読み込みが終わるまで他の操作を行わないでください。    
 * set      
 ボタンと同じ行にあるset numberに入力してあるパラメータを書き込みます。     
 書き込みのパラメータはすべて16進数となっています。
 種類によってモードがあるので、[マニュアル](http://www.besttechnology.co.jp/modules/knowledge/?Dynamixel%20XM430-W350)を確認してください。     
 * all input      
 set numberに入力してある全パラメータを書き込みます。未入力部分は書き込まれません。    

 ### デバイスが認識しない場合 
   * デバイスが認識しているか確認をする
   ```
   $ ls /dev/ttyUSB*  
   ttyUSB0
   ```
   * 接続されたデバイスに書き込み読み込みの権限を渡す
   ```
   $ sudo chmod a+rw /dev/ttyUSB0 
   ```
## License

This repository is licensed under the Apache License Version 2.0, see [LICENSE](./LICENSE).

このリポジトリはApache License Version 2.0で公開されています。詳細は[LICENSE](./LICENSE)を確認してください。
