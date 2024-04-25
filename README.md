This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Create a file named `.env.local` in the root folder of the project and enter the following parameter (this is only for assessment purposes, the environment variables should not be shared carelessly)
```
DB_HOST='localhost'
DB_USER='root'
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Ounch Frontend assessment

MySQL database for this project is on localhost, on user 'root' with no password.

A MySQL database named `sample_db` with a table named `items` having columns `id` (INT, AUTO_INCREMENT), `name` (VARCHAR), and `description` (TEXT) was created and table `items` was populated with sample data

## Screenshots

![1](https://github.com/hafiyb/ounch-assessment/assets/90592549/4a88ac4f-0d69-41bd-af4e-22a712f9b2e0)
Fetched and displayed 10 data from table `items` in database

![2](https://github.com/hafiyb/ounch-assessment/assets/90592549/60b489ea-d366-4350-a4e3-a25760f47d9a)
Page 5 of fetched data showing items 41-44 from table `items` in database

![3](https://github.com/hafiyb/ounch-assessment/assets/90592549/cbfc26f7-27b1-40b5-b43f-adfcc651af4c)
Demonstration of width responsivess of page

![4](https://github.com/hafiyb/ounch-assessment/assets/90592549/e4e9c146-bab3-4fd7-a839-c9b61d6fb163)
Handling in case of fetched data being empty (fetching error)

![5](https://github.com/hafiyb/ounch-assessment/assets/90592549/16a0fbbd-e53f-4884-9124-9d2ae92103c3)
Temporary Next.js app router error handling in case of unhandled and unexpected errors


