<div align="center">
  
# MC.fmly Inventory System

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=jhdcruz_MC.fmly-System)](https://sonarcloud.io/dashboard?id=jhdcruz_MC.fmly-System)

**Status:**

![Desktop Builds](https://github.com/jhdcruz/MC.fmly-System/workflows/Desktop%20Builds/badge.svg) [![CodeFactor](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system/badge?s=12c335ef55a5d9cb0a15c337d17ac27b97e843cd)](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system)   

**Source Code:**

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jhdcruz_MC.fmly-System&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=jhdcruz_MC.fmly-System) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jhdcruz_MC.fmly-System&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=jhdcruz_MC.fmly-System) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jhdcruz_MC.fmly-System&metric=security_rating)](https://sonarcloud.io/dashboard?id=jhdcruz_MC.fmly-System)

**Project:**

 [![time tracker](https://wakatime.com/badge/github/jhdcruz/MC.fmly-System.svg)](https://wakatime.com/badge/github/jhdcruz/MC.fmly-System) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=jhdcruz_MC.fmly-System&metric=ncloc)](https://sonarcloud.io/dashboard?id=jhdcruz_MC.fmly-System)


### Inventory System specifically built for [MC.fmly](https://www.facebook.com/MC.fmly/).

</div>

---

## Table of Contents:

#### Tools/Languages
- [Frameworks](#frameworks)
- [Front-End](#front-end)
- [Back-End](#back-end)
- [Database](#database)
- [Tools](#tools)

#### Development
- [Prerequisites](#prerequisites)
- [Installing Dependencies](#install-dependencies)
- [Running Scripts](#running-scripts)
- [Development](#development)
    - [Web App](#web-app)
    - [Desktop](#desktop)
- [Production](#production)
    - [Web App](#web-app-1)
    - [Desktop](#desktop-1)
    
#### Misc

- [License](#license)

## Frameworks:

[![MERN Stack](https://webassets.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png)](https://www.mongodb.com/mern-stack)
<p align="center"><a href="https://www.mongodb.com/mern-stack">MERN Stack Architecture</a></p>

### Front-End:

- [**React**](https://reactjs.org/) - _UI Library_
- [**Electron**](https://electronjs.org) - _X-Platform Desktop Integration_
- [**Sass/Scss**](https://sass-lang.com) - _Stylesheet_
- [**`react-bootstrap`**](https://react-bootstrap.github.io/) - _UI Toolkit for `React`_
- [**`styled-components`**](https://styled-components.com/) - _ES6 Component Styling_

### Back-End:

- [**Express**](https://expressjs.com) - _Server-side Framework_
- [**Axios**](https://github.com/axios/axios) - _HTTP Client_
- [**Mongoose**](https:/mongoosejs.com) - _Object Modeling_

### Database:

- [**MongoDB**](https://mongodb.com) - _Document database_

### Tools

- [**Vercel**](https://vercel.com) - _Web & API Deployment_
- [**GitHub Actions**](https://vercel.com) - _CI/CD for Desktop App (`win`, `mac`, `linux`)_
- [**CodeFactor**](https://codefactor.io) - _Code Quality_
- [**SonarCloud**](https://sonarcloud.io/) - _Code Quality & Security_
- [**Sentry**](https://sentry.io) - _Application Monitoring_
- [**Moesif API**](https://www.moesif.com/) - _API Analytics_
- [**WhiteSource Renovate**](https://renovate.whitesourcesoftware.com/) - _Automated Dependency Updates_

Boilerplate generated through ejected `create-react-app`.

---

## Prerequisites

- [`npm v6.14+`](https://nodejs.org/en/) - Package manager
- [`yarn v1.22+`](https://yarnpkg.com/getting-started/install) - Package & Project manager
- [`Node.js v15.0+`](https://nodejs.org/en/) - JavaScript runtime
- [`MongoDB Cluster`](https://mongodb.com/) - MongoDB Cluster URI

**Windows:**

Can be either of the ff:

- [**`MSBuild`**](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild)
- [**`windows-build-tools`**](https://www.npmjs.com/package/windows-build-tools)

**Linux:**

- Debian
   - `dpkg`
   - `dpkg-dev`
- Red Hat
   - `rpm`

**Optional:**

- [`Postman`](https://www.postman.com/) - API Testing
- [`MongoDB Compass`](https://www.mongodb.com/try/download/compass) - MongoDB GUI

## Environment Variables

Add your MongoDB URI to `.env` variable located in `api/`

```
MONGO_ADMIN=[Your URI Here] # Don't add quotation marks
```

You also need a Moesif ID which you can get [here](https://www.moesif.com/wrap?onboard=true). But it's entirely **optional**.

To start the app without a Moesif ID, you need to remove the _middleware_ in `index.js` located also in `api/` directory.

> Remove the ff. lines: `25`, `37-39`, `50`, `51`

## Install Dependencies

```
yarn  # same as `yarn install`
```

This will install dependencies on both `client/` and `server/`.

### Running Scripts

This project uses yarn's `workspaces` to manage the dependencies on both `client/` and `server/` by sharing the `node_modules` in both projects, reducing overall project size.

Running scripts in specified workspace:

```yarn workspace [client || server] [command]```

Running scripts on both projects:

```yarn workspaces run [script]```

> All scripts are **ideally** ran in the root directory,
> except when packaging the desktop app.

## Development

### Web App:

```bash
yarn start
```

### Desktop:

```bash
yarn start-electron
```

If you've written your own test files, put them in `tests/` and replace the `test` script in `package.json` with `node scripts/test.js`, then run `yarn test`.

> Yes, I know. I didn't write any test...

## Production

### Web App:

```bash
yarn build
```

Output on `./client/build` directory. Ready to deploy to hosting.

### Desktop:

```bash
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

Packaging the desktop app for `linux` can be made on a `win` system inside `WSL`.

## License

This work is licensed under [GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0).
