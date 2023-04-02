---
title: 1.2 GitとGitHubの基本
date: 2023-03-31
order: 2
quiz:
  question: "Gitで変更をリモートリポジトリに反映させるためには、どのコマンドを使用する必要がありますか？"
  options:
    - "git add"
    - "git commit"
    - "git pull"
    - "git push"
  answer: 4
---

# 1.2 Git と GitHub の基本

## イントロダクション

Git は、分散型のバージョン管理システムです。複数の開発者が同じプロジェクトで作業する際に、ソースコードの変更履歴を管理するのに役立ちます。GitHub は、Git リポジトリをホストする Web サービスであり、プロジェクトの共有とコラボレーションを容易にします。

![GitとGitHubのロゴ](./dummy-images/git-and-github-logos.png)

## Git のインストール

1. [Git 公式サイト](https://git-scm.com/)にアクセスし、お使いのプラットフォーム用のインストーラをダウンロードします。

![Gitダウンロード画面](./dummy-images/download-git.png)

2. ダウンロードしたインストーラを実行し、表示される指示に従ってインストールを完了させます。

## Git の基本設定

Git をインストールしたら、以下のコマンドを使って基本設定を行いましょう。

1. ターミナル（Mac、Linux）またはコマンドプロンプト（Windows）を開きます。
2. 以下のコマンドを実行して、Git に名前とメールアドレスを登録します。

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```
