This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

✔ What is your project named? … nextjs-starter-kit\
✔ Would you like to use TypeScript? … Yes\
✔ Would you like to use ESLint? … Yes\
✔ Would you like to use Tailwind CSS? … Yes\
✔ Would you like to use `src/` directory? … No\
✔ Would you like to use App Router? (recommended) … Yes\
✔ Would you like to customize the default import alias (@/\*)? … No

First, run the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

---

## Guidelines

### Review your changes

```
bun lint
bun format:fix
bun build
```

---

## Troubleshooting

1. Git cola bypass the husky lint-staged check. Run before commit:
   - `bun lint`
   - `bun format:fix`
