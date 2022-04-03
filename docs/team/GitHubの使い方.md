# GitHub の使い方

## チケット管理の流れ

1. ticket テンプレートから Issue を作成
2. Project で各プロパティを埋める
3. 定例会などで適宜で見直す
4. `Close #1`などで Issue と紐付けた PR を出す
5. お互いにレビューし、マージする。マージすると自動で`Status: Done`になる。

## ブランチ運用

`main`ブランチを本番デプロイ用とし、基本的に `develop` ブランチを軸に開発していく。

- `feature/`：新機能の追加
- `fix/`：バグの修正など

## コミットメッセージ

- `feat:`：追加
- `tune:`：修正・調整
- `car`: プルリクレビュー後の修正（Correction after review）
