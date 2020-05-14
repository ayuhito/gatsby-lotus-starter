# Gatsby Lotus Starter

This is a fully featured personal starter I use as a base for my projects that I believe could serve to be useful to others in our community. Go wild and feel free to contribute improvements!

[[Demo](https://gatsby-lotus-starter.netlify.app/)]

_If you have any suggestions or bugs to report, feel free to create an [issue here](https://github.com/DecliningLotus/gatsby-lotus-starter/issues)._

## Features

- Gatsby v2
- [Bootstrap](https://getbootstrap.com/) + [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://github.com/react-icons/react-icons)
- [Typefaces](https://github.com/KyleAMathews/typefaces) + [Font Preloader](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-preload-fonts)
- [Image Processing](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image) + [SVGO Optimizations](https://github.com/vzhou842/gatsby-plugin-optimize-svgs)

- SEO Generation

  - [Sitemap Generation](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap)
  - [Robots.txt Generation](https://github.com/mdreizin/gatsby-plugin-robots-txt)
  - Site Metadata

- PWA Support

  - [Web Manifest Generation](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest)
  - [Responsive Favicon Generation](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest)
  - [Service Worker Offline Support](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-offline)
  - [nprogress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-nprogress)

- Development Tooling

  - [SASS Support](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass)
  - [PostCSS Preset Env](https://preset-env.cssdb.org/)
  - [CSSNano](https://cssnano.co/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Stylelint](https://stylelint.io/)
  - [Semantic Release](https://github.com/semantic-release/semantic-release)
    - [Conventional Commit Format](https://www.conventionalcommits.org/)
    - [Commitlint](https://github.com/conventional-changelog/commitlint)
    - [Husky Git Hooks](https://github.com/typicode/husky)
    - Changelog Generation
    - Automatic Releases and Tags

- Continuous Integration and Deployment
  - [Netlify Header Generation](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify)
  - [CircleCI Configuration](https://circleci.com/)
  - Automatic Deployment to Netlify with Semantic Release

## Installation

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    gatsby new projectname https://github.com/DecliningLotus/gatsby-lotus-starter
    ```

2.  **Configure the setup.**

    1.  **_Package Configuration_**

        Navigate to `gatsby-config.js` and customize the `siteMetadata` and `gatsby-plugin-manifest` to your personal requirements.

        Open `package.json` and personalize the package settings to your preferences.

    2.  **_Font Setup_**

        This starter uses [Typefaces](https://github.com/KyleAMathews/typefaces) as the default loader for fonts. This starter already has [Roboto](https://fonts.google.com/specimen/Roboto) installed, however we can customize it in the following:

        ```shell
        yarn remove typeface-roboto
        yarn add typeface-yourchosenfont
        ```

        Then navigate to `src/components/layout.js` and replace `import "typeface-roboto"` with your chosen font. Multiple fonts can be imported separately.

        This also uses an optional [font preload generator](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-preload-fonts) and instructions on how to utilize this can be found in the link.

    3.  **_Semantic Release_**

        The `.releaserc` file contains the configuration for [Semantic Release](https://github.com/semantic-release/semantic-release).

        The default preset with [commitlint](https://github.com/conventional-changelog/commitlint) uses the [conventionalcommit](https://www.conventionalcommits.org/) format that allows Semantic Release to analyze commits and generate changelogs as well as releases, automatically identifying whether it is a major, minor or patch update.

        You are able to change the commit style by editing `.releaserc`, adjusting the commit-analyzer preset with a list of options [here](https://github.com/semantic-release/commit-analyzer#options). Likewise, you will then need to update `commitlint.config.js` with a matching preset found [here](https://github.com/semantic-release/commit-analyzer#options).

        Note you will need to reset the package version in `package.json` (keep [this](https://semantic-release.gitbook.io/semantic-release/support/faq#can-i-set-the-initial-release-version-of-my-package-to-0-0-1) in mind) and delete `CHANGELOG.md` when you are ready to begin the release process.

    4.  **_Continuous Integration and Deployment_**

        The process of deployment and semantic releases is built upon a CircleCI
        config and served via Netlify.

        Login to CircleCI and select your Github repo. CircleCI should be able to read the configuration already set within this starter and will smoothly handle everything for you.

        Do note, you will then need to set project specific Environment
        Variables for CircleCI to modify your repo with Semantic Release and
        deploy to Netlify. The following:

        - GH_TOKEN
        - NETLIFY_AUTH_TOKEN
        - NETLIFY_SITE_ID

**And that should be it! Get right onto developing out your next blazing fast bootstrap website! Feel free to contribute and star this repo to support it.**
