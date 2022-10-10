# TypeScript
## 環境構築
### package.json
パッケージを管理するファイル。
インストールしたパッケージやよく使うコマンドを登録しておくことで開発環境を簡単に構築、配布することができる。
### npm
npmコマンドは、パッケージのインストールをすることができる。
#### save-dev
開発環境のバージョンは固定した方が良いためオプションを指定する。
インストールしたものが有効なのは、このpackage.json配下のプロジェクトのみである。
### npx
npmインストールでインストールしたコマンドやライブラリを使えるコマンド。 
package.json配下で管理しているライブラリやコマンドを使えることができる。
### パッケージ
#### ts-node
コンパイルから実行までを全て一つのコマンドを行うことできる。
#### ts-node-dev
ts-node-dev --respawn hoge.ts 
上のコマンドで変更を検知して、コンパイルから実行までを行うことができる。

## 文法
https://github.com/DiveIntoHacking/typescript-for-javascript-developers/tree/master/src

