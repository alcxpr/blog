# Blog

This is my blog's source code. It also is my [nue](https://github.com/nuejs/nue) playground.
Currently, it features a super minimal site from the `blog` template.

Most posts here are about compiler behaviors and low-level stuffs like file formats.

## Deploy

To deploy, simply clone the repository. Then install [bun](https://bun.sh/) and dependencies.

```sh
$ git clone https://github.com/alcxpr/blog.git

# If you have Bun installed, simply run `bun install`. Otherwise, you will have to install
# Bun with:
#
# curl -fsSL https://bun.sh/install | bash
#
$ bun install
$ bunx nue serve
```

## License

MIT with Attribution Protection. See [license](LICENSE.txt) for details.
