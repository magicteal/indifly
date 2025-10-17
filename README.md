# Indifly!!

## Environment

Create a .env file with:

- DATABASE_URL=postgresql://user:pass@localhost:5432/indifly
- BETTER_AUTH_SECRET=some-long-random-string
- BETTER_AUTH_URL=http://localhost:3000
- SIGNUP_ACCESS_CODE=optional-secret-to-restrict-signup (set in prod)
	- When set, POST /api/auth/signup must include accessCode in the JSON body matching this value.
	- In production, signup is blocked unless SIGNUP_ACCESS_CODE is set and provided correctly.
	- In development, if SIGNUP_ACCESS_CODE is unset, signup is open (for local testing).
- GITHUB_TOKEN=ghp_xxx (repo scope)
- GITHUB_OWNER=your-gh-user-or-org
- GITHUB_REPO=indifly
- GITHUB_BRANCH=main
