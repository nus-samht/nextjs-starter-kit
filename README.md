This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

✔ What is your project named? … nextjs-starter-kit\
✔ Would you like to use TypeScript? … Yes\
✔ Would you like to use ESLint? … Yes\
✔ Would you like to use Tailwind CSS? … Yes\
✔ Would you like to use `src/` directory? … No\
✔ Would you like to use App Router? (recommended) … Yes\
✔ Would you like to customize the default import alias (@/\*)? … No

```bash
bun install
bun dev
```

---

## Visual Studio Code Extensions

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
- https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next
- https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
- https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter

---

## Guidelines

### Review your changes

```
bun lint
bun format:fix
bun build
```

### ENV

```bash
cp .env.example .env.local
```

- Add public variable to `.env.local` with prefix `NEXT_PUBLIC_`
- Add private variable to `next.config.mjs`

**Reference:** https://nextjs.org/docs/app/building-your-application/configuring/environment-variables

### Scripts

- Optimize use internal/external script

**Reference:** https://nextjs.org/docs/app/building-your-application/optimizing/scripts

### Fonts

- Check implementation in official documentation

**Reference:** https://nextjs.org/docs/app/building-your-application/optimizing/fonts

### Images

- Put in /public
- Prioritize .svg -> .png -> etc.
- Resize image (.png, .jpg, .jpeg) once. For example: .png with https://tinypng.com/

**Reference:** https://nextjs.org/docs/app/building-your-application/optimizing/images

---

## Troubleshooting

1. Git cola bypass the husky lint-staged check. Run before commit:
   - `bun lint`
   - `bun format:fix`
