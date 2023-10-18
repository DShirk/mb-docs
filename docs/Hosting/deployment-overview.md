# Site Deployment

The mortgagebanking site consists of a React front-end and two seperate Node/Express.js backends. Both the front
and back end services are currently deployed on Mitch's Netlify and AWS account(s).

<!-- :::note Access

All mortgagebanking code is currently hosted in private repositories that require access rights. You must be signed in to Github and have been granted permission to view the project folders.

:::

:::danger

Only Mitch has up-to-date access to the project code at the time of writing.

::: -->

# Front End

[Mortgagebanking Front End Repository](https://github.com/mitchHartigan/mortgagebanking)

The front end is continuosly deployed from this github repository via Netlify. Each time a new commit is made, Netlify automatically pulls the code from the repo, builds it, and deploys it.

### Branch Deploys

The **'master'** branch of the front end repository is configured to point at **mortgagebanking.law** in the Netlify DNS settings. Any commits made in the **'master'** branch of the repo will be automatically deployed to **mortgagebanking.law** after a few minutes (assuming a successful build).

All other branches in the repository are also deployed automatically via Netlify [branch deploys](https://www.netlify.com/blog/2021/12/05/unlimited-environments-thanks-to-branch-deploys/). Branches other than master will point at an automatically generated **'.netlify.app'** domain specific to that branches name.

For instance, a new commit to the **'staging'** branch will deploy to **'staging--mortgagebanking-law.netlify.app'**.
