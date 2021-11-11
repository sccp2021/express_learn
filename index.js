// expressのセットアップ
const express = require("express")
const app = express()

// エンドポイントの定義
app.get("/hello", (req, res) => {
    res.send("Hello world!")
})

// サーバーの起動
app.listen(3000, () => {
    console.log("server start")
})
