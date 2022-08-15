# Contributing

defaang lives through contributions from the community. In contributing to this repository, please first discuss the change you wish to make via an issue, discord, or any other method with the maintainers of this repository before making a change.

**Table of Contents**

- [Contributing](#contributing)
  - [Where to Get Help](#where-to-get-help)
    - [All Communication Channels](#all-communication-channels)
  - [How to Help](#how-to-help)
    - [Our Stack (with linked documentation)](#our-stack)
    - [Issue Labels](#issue-labels)
    - [Semantic Commits](#semantic-commits)
    - [Commit Example](#commit-example)
  - [Remarks](#remarks)

## Where to Get Help

An active community forms the backbone of every major Open Source project. The community is present on various platforms on the internet, where we actively help each other out – not only with regard to using the application. GitHub is the most tech-focused part of the community, albeit [discussing here](https://github.com/ykdojo/defaang/discussions) is the way to go for more theoretical discussions. Furthermore, we have a [Discord-server](https://discord.gg/aJp6Fypb) where we discuss building the app and help each other out.

### All Communication Channels

- [Discord](https://discord.gg/aJp6Fypb)
- [GitHub](https://github.com/ykdojo/defaang/discussions)

## How to Help

If you have some experience with developing, we would gladly welcome your help in fixing issues and adding features. Even if you just start: There are tons of smaller things and chores to do, so by cleaning up code here and there you can improve your skills and also help the project. Even if it's a minor fix, it is still a fix!

First, feel free to search for good first issues to tackle: [check here](https://github.com/ykdojo/defaang/labels/good%20first%20issue)

Even if you're an advanced coder, feel free to take one of them :)

Second, please take a look through the other issues and discussions to get a better idea about our vision, and to get inspired. If you have any idea about something you want to contribute, feel free to start an issue or discussion around that.

### Our Stack

- Frontend: [NextJS / React](https://nextjs.org/)
- CSS framework: [Tailwind](https://tailwindcss.com/)
- Backend: [Supabase](https://supabase.com/)
- Hosting: [Vercel](https://vercel.com/)

### Issue Labels

There are – broadly speaking – three categories of issues on the defaang GitHub issue tracker, which you can distinguish with their associated labels.

1. **Bugs** come in two flavours: non-critical and critical. Non-critical bugs are those that sometimes can mean a nuisance but that do not seriously affect working with the app. Critical bugs, however, make the app barely or un-usable, and fixes need to be addressed urgently.
2. **Enhancements** are some small additions that require adding some more functionality to a feature, but that should not evolve into an own distinct feature. Even if the issue description reads like a full feature to you, the "enhancement" label means there is already said functionality, which just needs to be amended. Please ask if you are unsure.
3. **Features** are bigger additions to the application that require a completely new feature.

If you want to help, make sure to _communicate your intent_, that is:

1. If you want to tackle an issue, comment and say that you want to develop a PR. In the PR, please link the issue.
2. If you want to tackle an issue, but along the way realize that you ran out of time and can't finish it: _communicate it_! This is an Open Source project, and retracting is no shame, but not communicating that you cannot finish something will hinder all other people involved.
3. If you have a PR and are not completely sure about whether it's right, or not, just open the PR and outline your questions there. It is much easier to work with something we can see and improve the PR than if you ask without something concrete.

In any case, just remember to just open PRs and dive in. The worst that could happen is that we ask you to rewrite some file, but that has never happened and is pretty unlikely to happen in the future.

### Semantic commits

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

```bash
feat: added authentication using supabase auth
```

[Learn more about semantic commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Remarks

If something is missing here, or you feel something is not well described, either directly open a PR or ask one of the community places.
