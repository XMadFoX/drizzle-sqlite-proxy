# drizzle-sqlite-proxy

To install bun:
```
curl -fsSL https://bun.sh/install | bash
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

But if you really want to run with node, you can do smth like
```bash
pnpm install tsup
ppnm exec tsup index.ts && node dist/index.cjs
```

This project was created using `bun init` in bun v1.0.14. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
