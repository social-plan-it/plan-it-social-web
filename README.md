# Welcome to Plan-it Social

Welcome to `plan-it-social-web`! These are some quick notes on how to start contributing to our open source project. A good place to start is to join our [Discord server](https://discord.gg/tTD7PvwpuX).

The group meets most Mondays 6pm PST ([meetup](https://www.meetup.com/all-things-web-react-html-css-javascript-tutoring/))

## Helpful Links

- [Discord server](https://discord.gg/tTD7PvwpuX)
- [Figma wire-frame](https://www.figma.com/file/6e3cBuEHOIpWvqT31Zd29p/Social-Plan-it?type=design&node-id=0-1&mode=design&t=DpLSfRITCDDG1pj0-0)
- [GitHub](https://github.com/social-plan-it)
- [Meetup](https://www.meetup.com/all-things-web-react-html-css-javascript-tutoring/)

## What we're using

- [Figma](https://www.figma.com/)
- [MySQL](https://www.mysql.com/)
- [PlanetScale] (https://planetscale.com/)
- [Prisma](https://www.prisma.io/)
- [React 18](https://react.dev)
- [Remix](https://remix.run/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

<img align="center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagMR3FC2rPHvoqZFjHunC5DkmFLdeNzok9d7P8OHW&s" width="50%" alt="Vercel" >

## Contributing

1. If you're a contributor to the repo skip to `Step 2`
   1. Join the group, check out the [Discord server](https://discord.gg/tTD7PvwpuX)!
   2. Fork the repo
   3. Clone your fork
   4. Set your upstream to the project main branch to avoid merge conflicts `git remote add upstream https://github.com/social-plan-it/plan-it-social-web.git`
2. Create a branch `git checkout -b <name>`
3. Add your `.env` file ([example here](./EXAMPLE.ENV) or ask the Discord for help on details)
4. Run `npm install`
5. Make your changes
6. Add you changed files with `git add` and `git commit -m "<a stellar commit message>"`
7. Push your changes to your fork with `git push`
8. Create a pull request
9. Iterate on the solution
10. Get merged

## Formatting and Linting

Please utilize our formatting and linting command `npm run lint`. Also included in our documentation, are great instructions on how to [setup this functionality to automatically run on save in VS code](./docs/formatting-and-linting.md).

## Prisma

We've created some handy scripts to help with database management with Prisma. Occasionally you might need to use these to update the database on your local machine.

- `npm run build:db` - [generate your prisma client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client) when starting out or when updates are made to the Prisma schema

- `npm run update:db` - [prototype your schema](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push) to iterate on schema design locally

- `npm run seed:db` - [consistently create data by seeding](https://www.prisma.io/docs/guides/migrate/seed-database) data into our database. We have a slightly different setup than when is in the Prisma docs. We are using `--require tsconfig-paths/register` to use the `~` path feature in Remix ([ref: Kent C. Dodds](https://github.com/remix-run/blues-stack/issues/143#issuecomment-1515339235))
