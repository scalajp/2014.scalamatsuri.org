Scala Matsuri
===========================================================

この Project は Scala Matsuri の管理で利用します。

## scalamatsuri.org の更新

gh-pagesブランチに変更内容をpushします

## サイトの管理

ウェブサイトを複数ページに対応させるにあたり、Jekyll を使って作業をするようにします。

### セットアップ

Mac OS X でのみ確認しています（Windows での確認者求む）。

まず rbenv か RVM で Ruby のセットアップをします。

Jekyll が必要です。

```
gem install bundler
bundle install --path vendor/bundle
```

サーバを起動してブラウザから http://localhost:4000/ にアクセスすると確認できます。
[Jekyllの公式ドキュメント](http://jekyllrb.com/docs/usage/)

```
bundle exec jekyll serve -w
```

静的ファイルは _site 配下に生成されます。

### 使っているもの

- Jekyll

https://github.com/mojombo/jekyll

- Jekyll-Bootstrap

とりあえず不要なものは削っています。

http://jekyllbootstrap.com/

参考:

http://d.hatena.ne.jp/yuum3/20120620/1340180894

http://krakenbeal.blogspot.jp/2012/05/ruby-jekyll-jekyll-bootstrap.html

### 基本的な設定

_config.yml が基本設定です。

### レイアウト

_layout から _include/themes/twitter を参照しています。

ファイルは assets の下に置きます。

### 公開

[github pages](https://pages.github.com/)を使用しているため、ファイルを編集すれば、自動で反映されます。
