---
title: Tairitsu
published: 2025-08-31
description: Arcaea Mod Wiki
tags: [Rhythm, Hack, Proxy]
category: Game
---

# Tairitsu

## Setting up Private Server

### Requirements

- WI-FI router (Optional)
- A PC (Laptop, Desktop) or Servers.
- A Rooted mobile device
- IDA Pro (optional)

### Get Bundle data

#### Android & IOS ( Root/Jailbreak )

find and backup data from `/data/data/moe.low.arc/files`.

> [!TIP]
> For PC **(Linux)**: install waydroid and run the [wydroid-script](https://github.com/casualsnek/waydroid_script).

### Patching

#### Android

When you want to bypass SSL pinning ( Without IDA Pro ):

```json
"files": [
     {
        "title": "Bypass SSL (Tairitsu)",
        "open": "libcocos2dcpp.so",
        "patches": [
          {
            "wildcard": "81 42 00 91 82 A2 00 91 E0 03 13 AA ?? ?? ?? ??",
            "hex_replace": "81 42 00 91 82 A2 00 91 E0 03 13 AA 1F 20 03 D5"
          },
          {
            "wildcard": "E0 03 40 F9 E1 83 03 91 ?? ?? ?? ?? E8 83 43 39",
            "hex_replace": "E0 03 40 F9 E1 83 03 91 1F 20 03 D5"
          }
        ]
      }
]
```

## More

For more steps please search for `ArcaeaModWiki`
