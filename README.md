# Qualities CC Website

Professional corporate website for **Qualities CC** built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Build and Production Run

Build the project:

```bash
npm run build
```

Run production server locally:

```bash
npm run start
```

## Company Information Source

All shared company identity/contact details are centralized in:

- `lib/company.ts`

Update this file to change company-wide data (name, director, email, phone, address).

## Pages

- `/` Home
- `/about`
- `/services`
- `/industries`
- `/collaborate`
- `/contact`
- `/legal`

## Vercel Deployment

1. Push the project to a Git repository (GitHub, GitLab, or Bitbucket).
2. Sign in to Vercel and create a new project.
3. Import the repository.
4. Keep default Next.js build settings.
5. Deploy.

Vercel will automatically run:

- `npm install`
- `npm run build`

After deployment, configure your domain `qualities.cc` in Vercel project settings.
