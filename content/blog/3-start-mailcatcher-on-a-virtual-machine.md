---
title: Start Mailcatcher on a virtual machine
tags: DevOps Tips
createdAt: September 3, 2019
---

Stop mailcatcher if it’s running:

```shell
sudo lsof -nP -iTCP:1025 -sTCP:LISTEN
sudo kill [PID]
```

Start mailcatcher:

```shell
mailcatcher --ip=0.0.0.0
```
