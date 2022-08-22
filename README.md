# defaang.io

A website that will curate recently-asked interview questions from FAANG+ to help people practice &amp; prep!

The questions will be submitted anonymously, or at least semi-anonymously. We'll ensure that no matter who submits them, we won't reveal the usernames, emails or any other personal info unless they explicitly choose to do so.

## How to start frontend (Next.js + Tailwind CSS)

Make sure you have [git](https://git-scm.com/) and [npm](https://docs.npmjs.com/cli/init) installed in your local machine.

The repository has a `.vscode` folder that contains `settings.json` and `extensions.json`. The `settings.json` file configures your VS Code editor to use `eslint` and `prettier` on every code save action (`ctrl + s`). The `extension.json` file contains a list of VS Code extensions, VS Code will show these extensions as suggestions in the extensions tab. After installing these extensions, auto linting and formatting should start working.

### Steps:

1. Clone this repo

   ```sh
   git clone https://github.com/ykdojo/defaang.git
   ```

2. Go into the project root directory

   ```sh
   cd defaang
   ```

3. Install all the dependencies

   ```sh
   npm install
   ```

4. Start the application development server

   ```sh
   npm run dev
   ```

## How to deploy the application to Vercel

1. Ensure you have a vercel account. If not, sign up for one [here](https://vercel.com/).

2. Import the project into vercel.

3. Give vercel the nessecary permissions, deploy the projects and voila the deployment is done.

## How to enable email auth in Supabase

1. Sign up on Supabase [here](https://supabase.com/).

2. Create a new Project inside Supabase

3. Go to settings -> API and copy the Project `URL` and `Anon/Public`

4. Paste the values in the .env.template at `NEXT_PUBLIC_SUPABASE_URL` for the URL and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for the anon.

5. Go to the [SQL Editor](https://app.supabase.com/project/_/sql) Page inside the Supabase Dashboard

6. Click User Management Starter and then run

7. Change the .env.template to .env.local and all is done.

For more reference watch the [Next Quickstart for Supabase](https://supabase.com/docs/guides/with-nextjs)

## Demo

https://defaang.vercel.app/

## Contributing

After you have installed defaang on your local machine, head over to our [CONTRIBUTING.md](https://github.com/ykdojo/defaang/blob/main/CONTRIBUTING.md) guide to assist with all you need to know before getting started with making changes to the codebase.

## Discord

Join us [here](https://discord.gg/nNtVfKddDD).

## Resources

You can find YK's original tweet [here](https://twitter.com/ykdojo/status/1557611357251350528).
