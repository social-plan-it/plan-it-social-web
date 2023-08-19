# Welcome to Plan-it Social

Welcome to `plan-it-social-web`! These are some quick notes on how to start contributing to our open source project. A good place to start is to join our [Discord server](https://discord.gg/tTD7PvwpuX).

The group meets most Mondays 6pm PST ([meetup](https://www.meetup.com/all-things-web-react-html-css-javascript-tutoring/))

## Helpful Links

- [Discord server](https://discord.gg/tTD7PvwpuX)
- [Figma wire-frame](https://www.figma.com/file/6e3cBuEHOIpWvqT31Zd29p/Social-Plan-it?type=design&node-id=0-1&mode=design&t=DpLSfRITCDDG1pj0-0)
- [github repo](https://github.com/social-plan-it/plan-it-social-web)
- [meetup](https://www.meetup.com/all-things-web-react-html-css-javascript-tutoring/)

## What we're using

- [MySQL](https://www.mysql.com/)
- [Prisma](https://www.prisma.io/)
- [tailwindcss](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React18](https://react.dev)
- [Remix](https://remix.run/docs)
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

## Contributing - [look at our doc here](./CONTRIBUTING.md)

## Formatting and Linting

Please utilize our formatting and linting command `npm run lint`. Also included in our documentation, are great instructions on how to [setup this functionality to automatically run on save in VS code](./docs/formatting-and-linting.md).

## Prisma

We've created some handy scripts to help with database management with Prisma. Occasionally you might need to use these to update the database on your local machine.

- `npm run build:db` - [generate your prisma client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client) when starting out or when updates are made to the Prisma schema

- `npm run update:db` - [prototype your schema](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push) to iterate on schema design locally

- `npm run seed:db` - [consistently create data by seeding](https://www.prisma.io/docs/guides/migrate/seed-database) data into our database. We have a slightly different setup than when is in the Prisma docs. We are using `--require tsconfig-paths/register` to use the `~` path feature in Remix ([ref: Kent C. Dodds](https://github.com/remix-run/blues-stack/issues/143#issuecomment-1515339235))

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).
