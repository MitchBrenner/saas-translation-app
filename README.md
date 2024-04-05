# SAAS Translation Chat App

This app is built with Next.js 13. 

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Frontend

### Styling 

Uses [Chadcn](https://ui.shadcn.com/docs) for components and styling.
Chadcn has design components that you can copy and paste into your project using the command line. 

```bash
npx shadcn-ui@latest init
```

- You can add components in the command line and it will generate the code for you to copy and paste into your project.

```bash
npx shadcn-ui@latest add button
```

- This adds a folder in your components folder called ui with a new button component.

Using Shadcn for:
- [dark mode](https://ui.shadcn.com/docs/dark-mode)
- [dropdown](https://ui.shadcn.com/docs/components/dropdown-menu)
- [avatar w/ dropdown](https://ui.shadcn.com/docs/components/avatar)

Icons from [Lucide-React](https://lucide.dev/guide/packages/lucide-react)


## Authentication

Uses [NextAuth.js](https://next-auth.js.org/getting-started/example) for authentication.
[Guide](https://next-auth.js.org/configuration/initialization#route-handlers-app) for using NextAuth.js with Next.js 13.

- Using GoogleAuth through firebase with NextAuth for authentication.
- [Firebase](https://firebase.google.com/docs/auth/web/google-signin) for Google Sign-In.

Using middleware to protect routes that require authentication. Checkout [middleware.ts](middleware.ts) for more information.

- Created a ClientProvider to wrap the entire app in the layout.tsx file. This allows us to access the session object in any component.

## Database

Using [firestore]() from firebase for the database.

You need two firebase files:
1. `firebase.json` for the client side
2. `firebase-admin.json` for the server side
    - have access to everything in the firebase project
    - npm i firebase-admin
    - [npm install @auth/firebase-adapter firebase-admin](https://authjs.dev/reference/adapter/firebase?_gl=1*1howmno*_gcl_au*ODQ2Njc2NTMuMTcxMjAyMzU2OC4yODc5OTc0NzEuMTcxMjAyNDA2MC4xNzEyMDI0MDYw)
    - to get firebase api keys and other info go under project settings -> service accounts -> generate new private key
