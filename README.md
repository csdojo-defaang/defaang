# defaang.io
A website that will curate recently-asked interview questions from FAANG+ to help people practice &amp; prep!

The questions will be submitted anonymously, or at least semi-anonymously. We'll ensure that no matter who submits them, we won't reveal the usernames, emails or any other personal info unless they explicitly choose to do so.

# Resources
You can find YK's original tweet [here](https://twitter.com/ykdojo/status/1557611357251350528).

# Tech stack
Currently planning to use:
- frontend: Next.js / React
- CSS framework: Tailwind
- backend: Supabase
- hosting: Vercel

# How to contribute

First, feel free to search for good first issues to tackle: https://github.com/ykdojo/defaang/labels/good%20first%20issue

Even if you're an advanced coder, feel free to take one of them.

Second, please take a look through [the other issues](https://github.com/ykdojo/defaang/issues) and [discussions](https://github.com/ykdojo/defaang/discussions) to get a better idea about our vision, and to get inspired. If you have any idea about something you want to contribute, feel free to start an issue or discussion around that.

### Semantic commits
Please use `Semantic Commits` while you commit your code changes. It helps reviewers to review the code and makes you a **better coder**.

```feat: (new feature for the user, not a new feature for build script)
feat: (adding new feature)
fix: (bug fix for the user, not a fix to a build script)
docs: (changes to the documentation)
style: (formatting, missing semi colons, etc; no production code change)
refactor: (refactoring production code, eg. renaming a variable)
test: (adding missing tests, refactoring tests; no production code change)
dx: (dev experience; anything that helps to improve developers' experience)
chore: (updating grunt tasks etc; no production code change)
```
#### Example
```bash 
feat: added authentication using supabase auth
```
[learn more about semantic commits](https://www.conventionalcommits.org/en/v1.0.0/)

# How to start Frontend (Next.js + TailwindCSS)

### Steps:

`#1`  Make sure you have installed  [npm](https://docs.npmjs.com/cli/init) in your local machine where you want to start app

`#2` Run ```npm install``` to install all the required packages

`#3` Use below commands

### To start the application as development server
```bash
npm run dev (in case of npm)
```

### To start the application as a production server
```bash
npm run build && npm run start (in case of npm, it will build for production and start the server on that build)
```

# How to deploy the application to Vercel

`#1` Ensure you have a vercel account if not signup for one [here](https://vercel.com/).

`#2` Import the project into vercel.

`#3` Give vercel the nessecary permissions, deploy the projects and voila the deployment is done.

# How to enable E-Mail auth in Supabase

`#1` Sign up on Supabase [here](https://supabase.com/).

`#2` Create a new Project inside Supabase

`#3` Go to settings -> API and copy the Project ```URL``` and ```Anon/Public```

`#4` Paste the values in the .env.template at ```NEXT_PUBLIC_SUPABASE_URL``` for the URL and ```NEXT_PUBLIC_SUPABASE_ANON_KEY``` for the anon.

`#5` Go to the [SQL Editor](https://app.supabase.com/project/_/sql) Page inside the Supabase Dashboard

`#6` Click User Management Starter and then run

`#7` Change the .env.template to .env.local and all is done. 

For more reference watch the [Next Quickstart for Supabase](https://supabase.com/docs/guides/with-nextjs)

# Demo

https://defaang.vercel.app/
