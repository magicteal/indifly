# Indifly

## Environment

Create a .env file with:

- DATABASE_URL=postgresql://user:pass@localhost:5432/indifly
- BETTER_AUTH_SECRET=some-long-random-string
- BETTER_AUTH_URL=http://localhost:3000
- ADMIN_EMAIL=abdul.365m@gmail.com
- ADMIN_PASSWORD_HASH=...bcrypt-hash or set ADMIN_PASSWORD_PLAINTEXT for local seeding only
- GITHUB_TOKEN=ghp_xxx (repo scope)
- GITHUB_OWNER=your-gh-user-or-org
- GITHUB_REPO=indifly
- GITHUB_BRANCH=main

Seed admin locally (dev only): POST /api/dev/seed-admin
