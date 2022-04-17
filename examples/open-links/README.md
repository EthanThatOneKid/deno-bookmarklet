# _Open Links_

Use this bookmarklet to open a list of links.

```js
javascript:%2F%2F%20deno-fmt-ignore-file%20%2F%2F%20deno-lint-ignore-file%20%2F%2F%20This%20code%20was%20bundled%20using%20%60deno%20bundle%60%20and%20it's%20not%20recommended%20to%20edit%20it%20manually%20(function()%20%7B%20const%20LINKS%20%3D%20prompt(%22Enter%20a%20list%20of%20links%20separated%20by%20line%20breaks...%22)%3B%20if%20(LINKS%20!%3D%20null)%20%7B%20LINKS.split(%22%5Cn%22).forEach((link)%3D%3E%7B%20try%20%7B%20window.open(new%20URL(link.trim())%2C%20%22_blank%22)%3B%20%7D%20catch%20%7B%7D%20%7D)%3B%20%7D%20return%20%7B%7D%3B%20%7D)()%3B%20
```

## Generating the Bookmarklet

Simply verify that you machine has
[Deno installed](https://github.com/denoland/deno_install). Then, run the
following command.

**Remote method**:

```sh
deno run --unstable --allow-read https://github.com/EthanThatOneKid/deno-bookmarklet/raw/main/mod.ts https://github.com/EthanThatOneKid/deno-bookmarklet/raw/main/examples/open-links/mod.ts
```

**Local method**:

```sh
deno run --unstable --allow-read mod.ts examples/open-links/mod.ts
```
