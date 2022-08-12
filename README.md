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
First of all, feel free to submit feature requests as issues.

If you have any other thoughts, feel free to start discussions around those, too.

Right now, we don't even have a UI mockup yet. This is a completely new project. So, the next step is probably to make some UI mockups. Feel free to take a stab at that and submit your idea as a PR!

The other thing that'd be helpful is a flowchart of how users might interact with the website.

Finally - feel free to search for good first issues to tackle: https://github.com/ykdojo/defaang/labels/good%20first%20issue

# How to start Frontend (Next.js + TailwindCSS)

##### Steps:-

`#1)`  Make sure you have installed  [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) in your local machine where you want to start app

`#2)` Use below commands respective to your node package manager (npm or Yarn) installed on your system

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