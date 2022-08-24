# Contributing

defaang lives through contributions from the community. When contributing to this repository, please first discuss the change you wish to make via an issue, discord, or any other method with the maintainers of this repository before making a change.

**Table of Contents**

- [Contributing](#contributing)
  - [Where to Get Help](#where-to-get-help)
    - [All Communication Channels](#all-communication-channels)
  - [How to Help](#how-to-help)
    - [Our Stack](#our-stack)
    - [Project Board](#project-board)
    - [Contributor Guidelines](#contributor-guidelines)
    - [Semantic Commits](#semantic-commits)
      - [Commit Example](#commit-example)
    - [Making Changes](#making-changes)
    - [Pushing Changes](#pushing-changes)
  - [Remarks](#remarks)

## Where to Get Help

The community is present on various platforms on the internet, where we actively help each other out – not only with using the application. GitHub is the most tech-focused part of the community, albeit [discussing here](https://github.com/ykdojo/defaang/discussions) is the way to go for more theoretical discussions. Furthermore, we have a [Discord-server](https://discord.gg/aJp6Fypb) where we discuss building the app and help each other out.

### All Communication Channels

- [Discord](https://discord.gg/aJp6Fypb)
- [GitHub](https://github.com/ykdojo/defaang/discussions)

## How to Help

If you have some experience with developing, we would gladly welcome your help in fixing issues and adding features. Even if you just started: There are tons of smaller things and issues to take on, so by cleaning up code here and there, you can improve your skills and help the project. Even if it's a minor fix, it is still a fix!

First, feel free to search for good first issues to tackle: [check here](https://github.com/ykdojo/defaang/labels/good%20first%20issue)

Even if you're an advanced coder, feel free to take one of them :)

Second, please look through the other issues and discussions to get a better idea of our vision and get inspired. If you have any idea about something you want to contribute, feel free to start an issue or discussion around that.

### Our Stack

- Frontend: [NextJS / React](https://nextjs.org/)
- CSS framework: [Tailwind](https://tailwindcss.com/)
- Backend: [Supabase](https://supabase.com/)
- Hosting: [Vercel](https://vercel.com/)

### Project Board

You can find the project board [here](https://github.com/users/ykdojo/projects/1/views/1).

### Contributor Guidelines

If you want to help, make sure to _communicate your intent_, that is:

1. If you want to start working on an issue, comment and say that you want to develop a PR. In the PR, please link the issue.
2. If you want to tackle an issue but, along the way, realize that you ran out of time and can't finish it: _communicate it_! This is an Open Source project, and retracting is no shame, but not expressing that you cannot finish something will hinder all other people involved.
3. If you have a PR and are unsure whether it's right, open the PR and outline your questions there. It is much easier to work with something we can see and improve the PR than if you ask without something concrete.

In any case, remember to open PRs and dive in.

### Semantic Commits

Please use `Semantic Commits` while you commit your code changes. It helps reviewers to review the code and makes you a **better programmer**.

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

#### Commit Example

feat: added authentication using supabase auth

[Learn more about semantic commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Making Changes

To contribute, you will need to make a feature branch. This dramatically simplifies adding your code to the official repository and ensures the main branch is always working. As a heads up, it's best to let us know what you're working on by commenting on or creating an [issue](https://github.com/ykdojo/defaang/issues). This way, we all save time by working on different things.

1. Call `git checkout main`. Always ensure you are on main before making a feature branch.
2. Call `git checkout -b name-of-your-feature`. This will create a feature branch and switch to it. Try to be specific in your feature name, which helps us track it down in the future if we need to.
3. Make a meaningful change. You don't want to implement the whole feature in one shot. Try to break your task into meaningful (and revertible) chunks, though sometimes one chunk is all it takes, like minor bug fixes.
4. To create a commit, start by verifying with `git status` that only files you wanted to change are affected. If there are unexpected changes, please resolve them before continuing.
5. Stage all of your changes with `git add -A`.
6. Create your commit with `git commit -m "Type a precise description of only the changes made with this commit."` Use the format stated above.
7. Repeat steps 2-5 until the feature is complete.

### Pushing Changes

You are ready for your contribution to be reviewed and merged. There are a few things you can do to make this easier for maintainers to review your code, so please follow all steps.

1. Follow the instructions for Updating Your Repository.
2. Switch back to your feature branch with `git checkout name-of-your-feature`.
3. Rebase your branch with `git rebase main`. This will make sure there are no conflicts with other people's contributions.
4. Rebuild your project to make sure everything still works. If things are broken, resolve them, making commits along the way. Once resolved, return to step 1 as resolving conflict could have made more changes in the meantime.
5. Push your branch to your online fork with `git push origin name-of-your-feature`.
6. On GitHub, create a pull request for your feature branch.

## Remarks

If something is missing here, or you feel something is not well described, either directly open a PR or ask in one of the community places.
