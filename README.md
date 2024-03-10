# Astro + Cloudflare D1

Code written by following the [Tutorial Blog Post](https://kevinkipp.com/blog/going-full-stack-on-astro-with-cloudflare-d1-and-drizzle) by [Kevin Kipp](https://kevinkipp.com).

## Setup

1. `git clone <url>`
2. `npm install`
3. `cp .env.example .env`
4. `npm run dev`
5. `npm run build`
6. `npm run pages:deploy`

## Cloudflare

### Setup

1. [Manually setup](https://developers.cloudflare.com/pages/functions/bindings/#d1-databases) the D1 binding(s) for "Preview" and "Production"
1. `npm run pages:deploy`
1. `npm run db:migrate:preview`
1. `npm run db:migrate:prod`

### Cleanup

1. `npx wrangler d1 list`
2. `npx wrangler pages project list`
3. `npx wrangler pages project delete <name>`
4. `npx wrangler d1 delete <name>`
5. `npx wrangler d1 list`
6. `npx wrangler pages project list`

## Useful Commands

```sh
npm run dev
npm run start
npm run build
npm run preview

npm run lint
npm run format
npm run check

npm run pages:deploy
npm run db:generate
npm run db:migrate:local
npm run db:migrate:prod
npm run db:migrate:preview
npm run db:studio:local
npm run db:studio:preview
npm run db:studio:prod

npx astro add <name>

npx wrangler pages project create <name>
npx wrangler pages project list
npx wrangler pages project delete <name>

npx wrangler d1 create <name>
npx wrangler d1 execute <name> [--local] --file=./<name>.sql
npx wrangler d1 execute <name> [--local] --command="select * from <name>;"
npx wrangler d1 list
npx wrangler d1 backup
npx wrangler d1 delete <name>
```
