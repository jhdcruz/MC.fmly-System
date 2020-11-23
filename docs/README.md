# MC.fmly Inventory System

![MC.fmly Rebranded Logo](https://i.imgur.com/JCzhyzM.png)

### Inventory System specifically built for [MC.fmly](https://www.facebook.com/MC.fmly/).

---

## Table of Contents:

#### Specification

- [Architecture](#architecture)
- [Languages](#languages)
- [Front-End](#front-end)
- [Back-End](#back-end)
- [Database](#database)
- [Tools](#tools)

#### Development

- [Prerequisites](#prerequisites)
- [Installing Dependencies](#install-dependencies)
- [Development](#development)
  - [Web App](#web-app)
  - [Desktop](#desktop)
- [Production](#production)
  - [Web App](#web-app-1)
  - [Desktop](#desktop-1)
- [Testing](#testing) _(Planned)_

#### Misc

- [License](#license)

## Architecture

[![MERN Stack](https://webassets.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png)](https://www.mongodb.com/mern-stack)

<p align="center"><a href="https://www.mongodb.com/mern-stack">MERN Stack Architecture</a></p>

### Languages:

- [**JavaScript (ES2019/JSX)**](https://www.ecma-international.org/publications/standards/Ecma-262.htm) - _Main
  implementation_
- **HTML5** - _Compiled UI handler_
- **CSS3** - _Stylesheet_

### Front-End:

- [**React**](https://reactjs.org/) - _JS Library_
- [**Electron**](https://electronjs.org) - _X-Platform Desktop Integration_
- [**Sass/Scss**](https://sass-lang.com) - _CSS Preprocessor_
- [**MongoDB Charts**](https://mongodb.com/products/charts) - _Integrated Charts & Data Analytics_
- [**`react-bootstrap`**](https://react-bootstrap.github.io/) - _UI Toolkit for `React`_
- [**`styled-components`**](https://styled-components.com/) - _ES6 Component Styling_

### Back-End:

- [**Express**](https://expressjs.com) - _Server-side Framework_
- [**Axios**](https://github.com/axios/axios) - _HTTP Client_
- [**Mongoose**](https://mongoosejs.com) - _Object Modeling_
- [**`node-argon2`**](https://github.com/ranisalt/node-argon2) - _Node.js bindings for `Argon2` hashing algorithm_
  - [`Argon2`](https://github.com/P-H-C/phc-winner-argon2) - A password-hashing function that summarizes the **state of
    the art in the design** of memory-hard functions and can be used to hash passwords for credential storage, key
    derivation, or other applications.

### Database:

- [**MongoDB**](https://mongodb.com) - _Document database_

### Tools

- [**Vercel**](https://vercel.com) - _Web & API Deployment_
- [**Datadog**](https://datadog.com) - _Server/Database Monitoring_
- [**Sentry**](https://sentry.io) - _Application Monitoring_
- [**CircleCI**](https://circleci.com/) - _Continuous Integration (Main)_
- [**TravisCI**](https://travis-ci.com/) - _Continuous Integration (Secondary)_
- [**GitHub Actions**](https://github.com/features/actions) - _Continuous Integration (Fallback)_
- [**CodeFactor**](https://codefactor.io) - _Code Review_
- [**SonarCloud**](https://sonarcloud.io/) - _Code Quality & Security_
- [**WhiteSource Renovate**](https://renovate.whitesourcesoftware.com/) - _Automated Dependency Updates_
- [**WhiteSource Bolt**](https://whitesourcesoftware.com/free-developer-tools/bolt/) - _Dependency Security_
- [**Snyk**](https://snyk.io/) - _Dependency Security & Exploit POC_
- [**GitGuardian**](https://gitguardian.com/) -  _Secrets Detection and Security Policies Enforcement_

> Boilerplate generated through ejected `create-react-app`.

---

## Prerequisites

- [`Node.js v14.15.0+`](https://nodejs.org/en/) - Package manager
- [`yarn v1.22+`](https://yarnpkg.com/getting-started/install) - Package & Project manager
- [`MongoDB Cluster`](https://mongodb.com/) - MongoDB Cluster URI

**Windows:**

Can be either of the ff:

- [**`MSBuild`**](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild)
- [**`windows-build-tools`**](https://www.npmjs.com/package/windows-build-tools)
- [**`python2.7`**](https://getpython.org) - For native dependency rebuilds

**Linux:**

- Debian
  - `dpkg`
  - `dpkg-dev`
  - `python2.7`

```shell
sudo apt install dpkg dpkg-dev python2.7
```

- Red Hat
  - `rpm`
  - `python2.7`

```shell
sudo yum install rpm python2.7
```

replace `yum` with your distro package provider.

**MacOS**

- `rpm`
- `python2.7`

> `brew install rpm python2.7`

**Optional:**

- [`Postman`](https://www.postman.com/) - API Testing
- [`MongoDB Compass`](https://www.mongodb.com/try/download/compass) - MongoDB GUI

## Environment Variables

- **`MONGO_ADMIN`** - **Required** _(Admin user)_
- **`MONGO_URL`** - **Required** _(Production User)_
- `SENTRY_PROJECT_DSN` - _Application Monitoring_

> Add your environment variables inside `/api/.env`.

```dotenv
MONGO_ADMIN=[Your URI Here] # Don't add quotation marks
MONGO_URL=[Your URI Here]
SENTRY_PROJECT_DSN=[Your DSN Here]
```

## Install Dependencies

You have to install the dependencies before running any of the scripts located in `/package.json`.

```shell
yarn
```

## Development

![](https://i.imgur.com/nkR4dYP.png)

### Web App:

```shell
yarn web
```

### Desktop:

```shell
yarn start
```

## Production

### Web App:

You need to have a web provider that supports **`functions`**. Such as [**Vercel**](https://vercel.com), it can also be
other provider such as DigitalOcean, AWS, etc...

```shell
yarn build
```

Front-end output on `./client/build/` directory. Ready to deploy to hosting.

### Desktop:

The desktop version on production relies on loading the web app. You need to deploy the web app, then changing
the `loadURL` link in `public/electron.js`.

```shell
cd client/ && package-[os]
```

Where `os` can be one of the ff:

- `all` - all platforms (`win`, `mac`, `linux`)
- `win` - Windows x64 (`x32` architecture is not supported.)
- `mac` - MacOS
- `linux` - `deb`/`rpm` installer based on current linux system.

Output on `release/` directory.

**NOTE**

Packaging the desktop app depends on the current system you have.

Running `linux || mac` on a `win` system can throw an error due to missing required tools.

Packaging the desktop app for `linux` can be made in `win` system inside `WSL`.

### Testing

**Unit test is planned**

## License

This work is licensed under [GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0).

> _License will not be applicable when in actual business use._
