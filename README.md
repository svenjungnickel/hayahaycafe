# Hayahay Café

![](https://github.com/svenjungnickel/hayahaycafe//workflows/CI/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e70d696f-4174-47d1-a9c9-db1c5599246b/deploy-status)](https://app.netlify.com/sites/hayahaycafe/deploys)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fsvenjungnickel%2Fhayahaycafe%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/svenjungnickel/hayahaycafe/master)

## 🚀 Quick start

1.  **Clone repository.**

    Clone this repository to your local environment

    ```sh
    git clone https://github.com/svenjungnickel/hayahaycafe.git
    ```

2.  **Install dependencies.**

    Navigate into the cloned repo and install dependencies.

    ```sh
    cd hayahaycafe/
    npm install
    ```
    
3.  **Define environment variables.**

    - Gatsby
    
        Define your environment variables before you start. To do so, simply copy `.env.dist` and rename it to `.env.development`.
        Then update the variables with your parameters.
    
        > Hint: Use the predefined SITE_RECAPTCHA_KEY and GATSBY_SITE_RECAPTCHA_KEY for automated tests. More details under **E2E tests**.

    - Cypress
    
        You have to define the Netlify CMS login details in the cypress environment files in order to run E2E Tests. 
        Copy `cypress.env.json.dist`, rename it to `cypress.env.json` and enter the login credentials.
        Additional copy the `.env.development` and rename it to `.env.production`. This is necessary because we are 
        running the cypress tests against a local production server.
    
    
4.  **Start developing.**

    4.1 Netlify CMS local backend
        
    If you want to use Netlify CMS locally to edit your content first start the Netlify CMS proxy server before you
    start the gatsby developer server.
        
    ```sh
    npx netlify-cms-proxy-server
    ```
        
    Alternatively you can use a predefined npm command
                
    ```sh
    npm run netlifycms:proxyserver
    ```
        
    4.2 Gatsby local developer server
    
    Start a local server for developing via gatsby.
    
    ```sh
    gatsby develop
    ```
        
    Alternatively you can use a predefined npm command which cleans also the gatsby cache and makes the dev server 
    accessible in your local network (for visiting from your mobile device). 
        
    ```sh
    npm run develop
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment 
    with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `hayahaycafe` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and 
    the browser will update in real time!

## 💫 Deploy

To deploy on [Netlify](https://www.netlify.com/) just hit following button:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/svenjungnickel/hayahaycafe)

You can also test the Netlify build before you deploy. 

1.  **Link Netlify Project.**

    Run following command to link the project.

    ```sh
    netlify link
    ```
    
    Select a way to link the project.

2.  **Run test build.**
    
    To test the build run following command:
    
    ```sh
    netlify build
    ```

    This will run the build on your local dev environment. The logs will show if the build will be successful or has 
    any errors.

## 🚨 Linting

We are using [EsLint](https://eslint.org/) for Javascript linting. Simply run following command to lint your code:

```sh
npm run lint
```

To fix any issues simply run the fix command:

```sh
npm run lint:fix
```

## ✅ Unit tests

We are using [Jest](https://jestjs.io/) for unit tests. You can find more details in the [gatsby docs](https://www.gatsbyjs.org/docs/unit-testing/).

To run all unit tests simply use following command:

```sh
npm run test
```

You can also watch unit tests while developing:

```sh
npx jest --watch
```

To watch all unit tests run following:

```sh
npx jest --watchAll
```

All unit tests generate also code coverage. You can find the generated code coverage under `<rootDir>/coverage/index.html`. 

## 🎉 E2E tests

We are using [Cypress](https://www.cypress.io/) for E2E tests. You can find more details in the [gatsby docs](https://www.gatsbyjs.org/docs/end-to-end-testing/).

To start cypress simply use following command:

```sh
npm run test:e2e
```

To run all tests in headless mode use following command:

```sh
npm run test:e2e:ci
```

E2E tests running in CI are recorded. You can find all recorded tests in the [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/imkh2i/runs)

## 🎉 Lighthouse audits

We are running lighthouse audits via [lighthouse CI CLI](https://github.com/GoogleChrome/lighthouse-ci).

To start Lighthouse audits simply use following command:

```sh
npm run lighthouse
```

## ✅ Mutations tests

We are using [stryker](https://stryker-mutator.io/docs/stryker/introduction) for mutation tests.

To start stryker simply use following command:

```sh
npm run stryker:run
```

You can find a full report of the mutation tests in the [Stryker Dashboard](https://dashboard.stryker-mutator.io/reports/github.com/svenjungnickel/hayahaycafe/master)

## 🎬 Run GitHub actions locally

To test GitHub actions locally before pushing to GitHub we are using [nektos/act](https://github.com/nektos/act).
You have to install it first via brew `brew install act`. Then you can run actions via following command:

```sh
act -j <workflow-name>
```

Visit the docs for more [example commands](https://github.com/nektos/act#example-commands).

## Preventing commits to the master branch

This project is setup to reject push and commits directly to master. To prevent commits to master on your local machine
install following pre-commit hook to your `.git/hooks/pre-commit` file. 

```sh
#!/bin/sh

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "master" ]; then
  echo "You can't commit directly to master branch"
  exit 1
fi
```

After your created the file you have to make it executable:


```sh
chmod +x .git/hooks/pre-commit
```

### Trouble shooting

If you work on a Mac OS using OS X Mojave and get weird error messages, try following [work around](https://meyerweb.com/eric/thoughts/2020/02/10/preventing-commits-to-the-master-branch-in-os-x-mojave/). 
