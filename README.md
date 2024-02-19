[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/xuXPu7?referralCode=codebrew)

# Bun with Elysia & Drizzle
This is a template repo for the base of a Bun server using Elysia for the API and Drizzle ORM for a Postgres DB.

You can [deploy on Railway](https://railway.app/template/xuXPu7?referralCode=codebrew) or simply [create a new repo](https://github.com/thecodebrew/bun-elysia-drizzle-base/generate) using this template.

## Development
1. Install dependencies
```
bun install
```
2. Start a Docker container for the Postgres database
```
docker run --name dev-postgres -p 5432:5432 -e POSTGRES_PASSWORD=12345678 -d postgres
```

3. Add the `DATABASE_URL` env variable to a _.env_ file
```
DATABASE_URL="postgresql://postgres:12345678@localhost:5432/postgres?schema=public"
```

4. Add your tables to `src/db/schema/index.ts`.

5. Generate migrations
```shell
bun run generate
```

6. Run migrations 
```shell
bun run migrate
```

7. To start the development server run:
```bash
bun run dev
```
Open http://localhost:3000/ with your browser to see the result.
