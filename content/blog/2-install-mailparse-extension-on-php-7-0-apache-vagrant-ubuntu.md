---
title: Install Mailparse extension on PHP 7.0 + Apache + Vagrant (Ubuntu)
tags: DevOps Tips
createdAt: June 17, 2019
---

1. SSH into your server (Vagrant, Whatever)

```shell
vagrant ssh

# or

ssh whatever@whereever
```

2. Follow the following instruction:

```shell
cd /tmp
apt-get install php7.0-dev
pecl download mailparse
tar xvzf mailparse-3.0.2.tgz
cd mailparse-3.0.2
phpize
./configure
sed -i \
  's/^\(#error .* the mbstring extension!\)/\/\/\1/' \
  mailparse.c
make
make install
```

```shell
echo "extension=mailparse.so" > \
  /etc/php/7.0/fpm/conf.d/30-mailparse.ini
service php7.0-fpm reload
```

```shell
echo "extension=mailparse.so" > \ /etc/php/7.0/mods-available/mailparse.ini
ln -s /etc/php/7.0/mods-available/mailparse.ini /etc/php/7.0/cli/conf.d/30-mailparse.ini
ln -s /etc/php/7.0/mods-available/mailparse.ini /etc/php/7.0/cli/conf.d/30-mailparse.ini
```

Although I ended up adding manually (last step) maybe this can be a future reference for myself or any other developer.

Source: [https://stackoverflow.com/questions/35793216/installing-mailparse-php7-mbstring-error](https://stackoverflow.com/questions/35793216/installing-mailparse-php7-mbstring-error)
