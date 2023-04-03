---
title: 1.3 GitHubアカウントの作成
date: 2023-04-01
order: 3
quiz:
  question: "GitHubはどのようなサービスですか？"
  options:
    - "オンラインストレージサービス"
    - "バージョン管理システム"
    - "プログラミング言語"
    - "コードホスティングサービス"
  answer: 4
---

# 1.3 GitHub アカウントの作成

## GitHub とは

GitHub は、Git リポジトリをホストするウェブベースのプラットフォームです。GitHub を使うことで、リポジトリをオンラインで管理し、チームでの共同作業やオープンソースプロジェクトへの貢献が容易になります。

![GitHubのロゴ](./dummy-images/github-logo.png)

## GitHub アカウントの作成

1. [GitHub](https://github.com/)のウェブサイトにアクセスします。
2. サインアップページに移動し、ユーザー名、メールアドレス、パスワードを入力します。
3. アカウントプランを選択し、続けてプロフィール設定を行います。
4. インストールされた Git と連携させるために、以下のコマンドをターミナルで実行します。名前とメールアドレスをご自身のものに置き換えてください。

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

![GitHubアカウント作成](./dummy-images/github-signup.png)

これで GitHub アカウントの作成が完了しました。次の章では、リポジトリの作成と GitHub Pages の設定を行います。
