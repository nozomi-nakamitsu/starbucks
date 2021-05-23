# Statbucksサイトの模写

# 画面
![タイトルなし](https://user-images.githubusercontent.com/81731759/119259609-fb31bb00-bc09-11eb-8830-a49670e8f89f.gif)

<img width="1680" alt="スクリーンショット 2021-05-23 21 26 05" src="https://user-images.githubusercontent.com/81731759/119260380-819bcc00-bc0d-11eb-8af4-7bbecf41a1d4.png">
# 使用技術
html scss  生のjs 
# 実装内容
- 画面の作成
- レスポンシブ対応
- ヘッダーにサイドバー開閉
- RSCSS,ITCSSを使ってみた
- 小さいフラペチーノを押すと色が変わる
# できなかったこと
- サイドバーを閉じるときのアニメーション
- UIのずれ（真ん中の位置、背景の緑の円の実装方法がよくわからず力技感がある）
<img width="675" alt="スクリーンショット 2021-05-23 21 05 37" src="https://user-images.githubusercontent.com/81731759/119259872-397baa00-bc0b-11eb-997d-57becd895c0d.png">

#　疑問点 
## scssファイルの書き方
- コンポーネントの分け方
- クラス名の付け方
## UI
- 背景の緑の円の実装方法とheight,widthの上手な設定の仕方 (clip-pathを使った実装も試みたがうまくできず、position:relativeを使用)
- サイドバーを閉じるときのアニメーション
## その他
- scssを動的にjs使って書き換える方法はあるのか？今回は、クラスの付け替えでstyleを変更しています。

# レビューの際に見ていただきたい箇所
　お時間あれば、UI面とsassの書き方両方の面で疑問点にお応えいただけると幸いです。

# ローカルでの動かし方
　git clone →クロームでhtmlを開く

# 参考資料
- https://docs.google.com/document/d/1kFQ-PGBg2nW1C2jaaG_3wCgNEOYTlc9HrzjjReL5Il0/edit
- scssは、山中さんのシオノギのコードを真似してディレクトリを分けました。https://github.com/arsaga-partners/shionogi-server/blob/master/resources/sass/frontend/tools/_main.scss
- https://www.youtube.com/watch?v=91Q6RvKvd7o&t=324s
