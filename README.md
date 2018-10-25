# dynamixel_checker

ROBOTIS製Dymamixelサーボモータの内部パラメータ変更ソフト

## 参考資料

- [ROBOTIS-GIT/Dynamixel SDK](https://github.com/ROBOTIS-GIT/DynamixelSDK)
- [Dynamixel XM430-W350 マニュアル](http://www.besttechnology.co.jp/modules/knowledge/?Dynamixel%20XM430-W350)

## 開発環境

- OS: Linux Ubuntu 16.04 64bit
- ブラウザ: Firefox 61.0.1 64bit

## nodeのインストール

本プログラムは[Node.js](https://nodejs.org/ja/)を使用しています。  
[hokaccha/nodebrew](https://github.com/hokaccha/nodebrew)を使ってインストールするか、ソースからインストールします。

### nodebrewを使ってインストール

[hokaccha/nodebrew](https://github.com/hokaccha/nodebrew)はNode.jsのバージョン管理ツールです。パッケージマネージャのようにNode.jsのバージョンを切り替えて使うことができます。  
nodebrewを使ってNode.js: 8.11.3 LTSをインストールする方法は以下の通りです。

``` 
$ curl -L git.io/nodebrew | perl - setup
$ echo "export PATH=\$HOME/.nodebrew/current/bin:\$PATH" >> ~/.bashrc
$ export PATH=$HOME/.nodebrew/current/bin:$PATH
$ nodebrew install-binary v8.11.3
$ nodebrew use v8.11.3
```

### ソースからインストール

Node.js: 8.11.3 LTSを[node-v8.11.3 source](https://nodejs.org/dist/v8.11.3/node-v8.11.3.tar.gz)からインストールする方法は以下の通りです。

``` 
$ wget https://nodejs.org/dist/v8.11.3/node-v8.11.3.tar.gz
$ tar xvf node-v8.11.3.tar.gz
$ cd node-v8.11.3
$ ./configure
$ make
$ sudo make install
```

## パッケージのインストール

### dynamixel_checkerリポジトリのclone

本リポジトリを `git clone` コマンドでダウンロードします。

```
$ git clone https://github.com/rt-net/dynamixel_checker.git 
```

### npmパッケージのインストール

本プログラムで使用する以下の4つのnpmパッケージをインストールします。

- serialport
- socket.io
- express
- async

```
$ cd dynamixel_checker/src
$ npm install
```

または、

```
$ cd dynamixel_checker/src
$ sudo npm install -g --unsafe-perm --build-from-source
```

コマンドを実行することで、必要なパッケージをインストールできます。

## 起動方法

### プログラムの実行

```
$ npm start
```

### Webサーバに接続

ブラウザを開いて [`http://localhost:8080/`](http://localhost:8080/) にアクセスするとDynamixel Checkerが起動します。

![screenshot from 2018-07-20 17-28-41](https://user-images.githubusercontent.com/12367951/42992244-f39f4cee-8c42-11e8-8929-bc0b1d83ccca.png)

## 使用方法

### デバイスの接続

デバイスを接続して、別端末を開いて、以下の操作を行います。

- デバイスが認識されているか確認します。

```
$ ls /dev/ttyUSB*  
ttyUSB0
```

- 接続されたデバイスに書き込み読み込みの権限を渡します。

```
$ sudo chmod a+rw /dev/ttyUSB0
```

### サーボ接続方法

1. baudrateの設定
    - `Baudrate` のselectboxから所望のrateを選択します。
1. USB接続
    - USBポートに[U2D2](https://www.rt-shop.jp/index.php?main_page=product_info&products_id=3618)などのUSB通信コンバータを接続、サーボの電源も入れてください。
1. 全ID検索
    - `search ID` ボタンを押すと現在つながっているサーボのIDを一覧で取得します。
1. ID選択
    - IDのselectboxで書き換えをしたいサーボのIDを選択してください。

## 注意事項

__baudrate,IDの書き換えを行った場合、USBケーブルを抜いてデバイスの再接続を行ってください__

## 各種操作説明

Operating Modeによって挙動が変わります。[Dynamixelのマニュアル](http://www.besttechnology.co.jp/modules/knowledge/?Dynamixel%20XM430-W350)を確認してください。

### Torque on/off

ボタンによるサーボのON/OFFを行えます。

### Change Position

スクロールバーによるサーボの角度を変更できます。表示は[deg]となっています。
各サーボの動作角の設定より動作は行えません。

### Reference Position

ボタンを押すことで、サーボの原点に移動します。

### Table

サーボのパラメータを読み書き込みすることができます。

- `current data`
    - サーボに設定されているパラメータを読み込みます。全パラメータの読み込みが終わるまで他の操作を行わないでください。
- `set`
    - ボタンと同じ行にある `set number` に入力してあるパラメータを書き込みます。
    - 書き込みのパラメータはすべて16進数となっています。
    - 種類によってモードがあるので、[マニュアル](http://www.besttechnology.co.jp/modules/knowledge/?Dynamixel%20XM430-W350)を確認してください。
-  `all input`
    - `set number` に入力してある全パラメータを書き込みます。未入力部分は書き込まれません。

## License

This repository is licensed under the Apache License Version 2.0, see [LICENSE](./LICENSE).

このリポジトリはApache License Version 2.0で公開されています。詳細は[LICENSE](./LICENSE)を確認してください。
