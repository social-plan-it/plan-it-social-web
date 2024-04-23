# Welcome to Plan-it Social

Welcome to `plan-it-social-web`! These are some quick notes on how to start contributing to our open source project. A good place to start is to join our [Discord server](https://discord.gg/tTD7PvwpuX).

The group meets most Mondays 6pm PST ([meetup](https://www.meetup.com/all-things-web-react-html-css-javascript-tutoring/))
Small Co-working sessions are held on Sunday 9am PST on [Discord](https://discord.gg/tTD7PvwpuX)


## Community

- [Discord server](https://discord.gg/tTD7PvwpuX)
- [Meetup](https://www.meetup.com/all-things-web-react-html-css-javascript-tutoring/)

## What we're using

- [GitHub](https://github.com/social-plan-it)
- [Figma](https://www.figma.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [SupaBase](https://supabase.com/)
- [Prisma](https://www.prisma.io/)
- [React 18](https://react.dev)
- [Remix](https://remix.run/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)

## Design Development

- [Figma wire-frame](https://www.figma.com/file/6e3cBuEHOIpWvqT31Zd29p/Social-Plan-it?type=design&node-id=0-1&mode=design&t=DpLSfRITCDDG1pj0-0)

## Development

To run your Remix app locally, make sure your project's local dependencies are installed and environment variables are set up:

```sh
npm install
```

```sh
mv .env.example .env
```

Then, you'll need to fill in the `.env` file with the appropriate values.
Come to the Discord server or meetup for help with this step.


Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

<img align="center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagMR3FC2rPHvoqZFjHunC5DkmFLdeNzok9d7P8OHW&s" width="50%" alt="Vercel" >

## Storybook ( UI Component Development )

```sh
npm run storybook
```

then visit [http://localhost:6006](http://localhost:6006) to see all the components in action.

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
10. Get merged!


## VS Code Setup

Use the following settings to format your files on save:

```json
{
  // These are all my auto-save configs
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript][javascriptreact][typescript][typescriptreact]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Prisma

We've created some handy scripts to help with database management with Prisma. Occasionally you might need to use these to update the database on your local machine.

- `npm run build:db` - [generate your prisma client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client) when starting out or when updates are made to the Prisma schema

- `npm run update:db` - [prototype your schema](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push) to iterate on schema design locally

- `npm run seed:db` - [consistently create data by seeding](https://www.prisma.io/docs/guides/migrate/seed-database) data into our database. We have a slightly different setup than when is in the Prisma docs. We are using `--require tsconfig-paths/register` to use the `~` path feature in Remix ([ref: Kent C. Dodds](https://github.com/remix-run/blues-stack/issues/143#issuecomment-1515339235))



## Running Tests


### Code Style
We use ESLint to enforce code style. You can run the linter using the following command:

```sh
npm run lint
```

for auto fix
```sh
npm run lint:fix
```

Also included in our documentation, are great instructions on how to [setup this functionality to automatically run on save in VS code](./docs/formatting-and-linting.md).

### Type Checking
We use TypeScript to enforce static typing. You can run the type checker using the following command:

```sh
npm run typecheck
```

### End-to-End Test
You can run the test suite using the following commands:

```sh
npm run test:e2e
```

Please ensure that the tests are passing when submitting a pull request.
Or get help from the Discord community to get them passing.



