# _Star Wars_ Intro-ify

Use this bookmarklet to turn any webpage into a scrolling _Star Wars_
introduction.

## Generating Your Bookmarklet

Simply verify that you machine has
[Deno installed](https://github.com/denoland/deno_install). Then, run the
following command.

```sh
deno run --unstable --allow-read https://github.com/EthanThatOneKid/deno-bookmarklet/raw/main/mod.ts https://github.com/EthanThatOneKid/deno-bookmarklet/raw/main/examples/star-wars-intro-ify/mod.ts
```

### Setting the Scroll Speed

<!-- TODO(@ethanthatonekid): Add information about setting the speed. -->

## Future Improvements

- [ ] Use
  [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
  over
  [`setInverval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval).
- [ ] Optimize code minification.
