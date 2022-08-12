# defaang.io
A website that will curate recently-asked interview questions from FAANG+ to help people practice &amp; prep!

The questions will be submitted anonymously, or at least semi-anonymously. We'll ensure that no matter who submits them, we won't reveal the usernames, emails or any other personal info unless they explicitly choose to do so.

# Resources
You can find YK's original tweet [here](https://twitter.com/ykdojo/status/1557611357251350528).

# Tech stack
Currently planning to use:
- frontend: Next.js / React
- CSS framework: Tailwind - probably?
- backend: most likely Supabase
- hosting: Vercel

However, this is by no means set in stone!

# How to contribute

First, feel free to search for good first issues to tackle: https://github.com/ykdojo/defaang/labels/good%20first%20issue

Even if you're an advanced coder, feel free to take one of them.

Second, please take a look through [the other issues](https://github.com/ykdojo/defaang/issues) and [discussions](https://github.com/ykdojo/defaang/discussions) to get a better idea about our vision, and to get inspired. If you have any idea about something you want to contribute, feel free to start an issue or discussion around that.



# How to start Frontend (Next.js + TailwindCSS)

##### Steps:-

`#1)`  Make sure you have installed  [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) in your local machine where you want to start app

`#2` Run ```npm install ``` to install all the required packages

`#3)` Use below commands respective to your node package manager (npm or Yarn) installed on your system

### To start the application as development server
```bash
npm run dev (in case of npm)
# or
yarn run dev (in case of Yarn)
```

### To start the application as a production server
```bash
npm run build && npm run start (in case of npm, it will build for production and start the server on that build)
# or
yarn run build && npm run start (in case of Yarn, it will build for production and start the server on that build)
```

# How to deploy the application to Vercel

`#1` Ensure you have a vercel account if not signup for one [here](https://vercel.com/).

`#2` Import the project into vercel.

`#3` Give vercel the nessecary permissions, deploy the projects and voila the deployment is done.

# Demo

https://defaang.vercel.app/
