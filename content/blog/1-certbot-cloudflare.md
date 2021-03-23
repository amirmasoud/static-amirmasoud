---
title: Certbot + Cloudflare
description: How to set up cerbot on a cloudflare based DNS website.
tags: DevOps Tips
createdAt: May 25, 2019
---

1. Install Certbot

```shell
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot python-certbot-apache
```

more: [https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx](https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx)

2. Make cloudflare.ini

Get your `API key` from: [https://dash.cloudflare.com/profile](https://dash.cloudflare.com/profile)

```shell
# In ~/cloudflare.ini
# Cloudflare API credentials used by Certbot
dns_cloudflare_email = cloudflare@example.com
dns_cloudflare_api_key = 0123456789abcdef0123456789abcdef01234567
```

Secure `cloudflare.ini` file:

```shell
chmod 600 cloudflare.ini
```

more: [https://certbot-dns-cloudflare.readthedocs.io/en/stable/#credentials](https://certbot-dns-cloudflare.readthedocs.io/en/stable/#credentials)

3. Install Cloudflare plugin

```shell
sudo apt-get install certbot python3-certbot-dns-cloudflare
```

code: [https://github.com/certbot/certbot/tree/master/certbot-dns-cloudflare](https://github.com/certbot/certbot/tree/master/certbot-dns-cloudflare)
more: [https://certbot.eff.org/docs/using.html#plugins](https://certbot.eff.org/docs/using.html#plugins)

4. Activate SSL

Change `amirmasoud.me` and `www.amirmasoud.me` to your domains:

```shell
certbot certonly \
  --dns-cloudflare \
  --dns-cloudflare-credentials ~/cloudflare.ini \
  -d amirmasoud.me \
  -d www.amirmasoud.me
```
