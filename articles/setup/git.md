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

これで、コミット時に名前とメールアドレスが正しく記録されます。

## GitHub アカウントの作成

1. [GitHub の公式サイト](https://github.com/)にアクセスし、「Sign up」ボタンをクリックします。

![GitHubサインアップ画面](./dummy-images/github-signup.png)

2. 必要な情報を入力し、アカウントを作成します。

## リポジトリの作成とクローン

1. GitHub のホームページで、「New repository」ボタンをクリックします。

![新しいリポジトリの作成](./dummy-images/create-repository.png)

2. リポジトリ名を入力し、「Create repository」ボタンをクリックします。

3. リポジトリページの「Code」ボタンをクリックし、リポジトリの URL をコピーします。

![リポジトリURLのコピー](./dummy-images/copy-repo-url.png)

4. ターミナル（Mac、Linux）またはコマンドプロンプト（Windows）を開き、適切なディレクトリに移動します。

5. 以下のコマンドを実行して、リポジトリをローカルにクローンします。

```bash
git clone <リポジトリのURL>
```

## 変更のコミットとプッシュ

1. ローカルリポジトリ内のファイルを変更した後、ターミナルで以下のコマンドを実行して、変更をステージします。

```bash
git add <ファイル名>
```

2. 以下のコマンドを実行して、変更をコミットします。

```bash
git commit -m "コミットメッセージ"
```

3. 以下のコマンドを実行して、変更をリモートリポジトリにプッシュします。

```bash
git push
```

![コミットとプッシュのコマンド](./dummy-images/git-commit-push.png)

## まとめ

これで、Git と GitHub の基本を学びました。次の章では、HTML と CSS を使って日記サイトを作成していきます。Git を使って、コードの変更履歴を管理しながら作業を進めていきましょう！
