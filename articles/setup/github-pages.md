---
title: 1.4 リポジトリの作成とGitHub Pagesの設定
date: 2023-04-01
order: 4
quiz:
  question: "GitHub Pagesを使用する主な利点は何ですか？"
  options:
    - "無料でウェブサイトをホスティングできる"
    - "プログラミングスキルが必要ない"
    - "広告がない"
    - "カスタムドメインが無料で使用できる"
  answer: 1
---

# リポジトリの作成と GitHub Pages の設定

このセクションでは、GitHub アカウントを使ってリポジトリを作成し、GitHub Pages を設定して、自分のプロジェクトを公開する方法を学びます。リポジトリは、プロジェクトのすべてのファイルと変更履歴が保存される場所です。GitHub Pages は、GitHub リポジトリからウェブサイトをホスティングするサービスです。

## リポジトリの作成

1. GitHub にログインし、画面右上の＋ボタンをクリックして「New repository」を選択します。
2. リポジトリ名を入力し、公開（Public）または非公開（Private）を選択します。
3. 「Initialize this repository with a README」のチェックボックスをオンにし、「Create repository」をクリックしてリポジトリを作成します。

## ローカルプロジェクトとリポジトリの連携

1. ローカルプロジェクトフォルダに移動し、ターミナルで `git init` を実行して、新しい Git リポジトリを初期化します。
2. `git add .` と `git commit -m "Initial commit"` を実行して、すべてのファイルをステージし、コミットを作成します。
3. GitHub リポジトリのページに表示されているリモートリポジトリの URL をコピーし、ターミナルで `git remote add origin [リモートリポジトリのURL]` を実行して、リモートリポジトリを追加します。
4. `git push -u origin master` を実行して、ローカルリポジトリの内容をリモートリポジトリにプッシュします。

## GitHub Pages の設定

1. GitHub リポジトリのページに移動し、設定（Settings）タブをクリックします。
2. スクロールして「GitHub Pages」セクションに移動し、Source ドロップダウンで「master branch」または「main branch」を選択し、変更を保存します。
3. 数分待ってから、表示される GitHub Pages の URL を開いて、ウェブサイトが公開
