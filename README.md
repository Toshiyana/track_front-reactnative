# 実行手順

1. ngrok の起動（ない場合、インストールする）

```
ngrok http 3000
```

2. シミュレータの起動

```
npm run ios
```

なお、サーバーと通信するために、リポジトリ（https://github.com/Toshiyana/track_server-express）をクローンして、以下のコマンドで起動する必要あり。

```
npm run dev
```
