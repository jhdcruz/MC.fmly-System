<div align="center">
  
# MC.fmly Inventory System

### Status:

| **Code Quality** | CI/CD | **Time Spent** |
| ---------------- | ----- | -------------- |
| [![CodeFactor](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system/badge?s=12c335ef55a5d9cb0a15c337d17ac27b97e843cd)](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system) | [![buddy pipeline](https://app.buddy.works/jhdcruz/mc-fmly-system/pipelines/pipeline/285797/badge.svg?token=88cd275c0ba0c928ef949169703e21440acb90c7d1488b5435bcfbb773fe9989 "buddy pipeline")](https://app.buddy.works/jhdcruz/mc-fmly-system/pipelines/pipeline/285797) | [![time tracker](https://wakatime.com/badge/github/jhdcruz/MC.fmly-System.svg)](https://wakatime.com/badge/github/jhdcruz/MC.fmly-System)

### OS-Specific Builds:

| **Windows** | **Linux** (deb/rpm) | **MacOS** |
| ----------- | ------------------- | --------- |
| ![Windows Build](https://github.com/jhdcruz/MC.fmly-System/workflows/Windows%20Build/badge.svg?branch=main) | ![Linux Build](https://github.com/jhdcruz/MC.fmly-System/workflows/Linux%20Build/badge.svg?branch=main) | ![MacOS Build](https://github.com/jhdcruz/MC.fmly-System/workflows/MacOS%20Build/badge.svg?branch=main)

### Inventory System specifically built for [MC.fmly](https://www.facebook.com/MC.fmly/).

</div>

---

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

- [**Vercel**](https://vercel.com) - _Web Deployment_
- [**Buddy CI/CD**](https://app.buddy.works) - _Continuous Integration w/ API Testing `(Porting to TravisCI)`_
- [**GitHub Actions**](https://vercel.com) - _CI/CD for Desktop App (`win`, `mac`, `linux`)_
- [**CodeFactor**](https://codefactor.io) - _Code Quality_
- [**Rollbar**](https://rollbar.com) - _Application Monitoring_
- [**Moesif API**](https://www.moesif.com/) - _API Analytics_
- [**WhiteSource Renovate**](https://renovate.whitesourcesoftware.com/) - _Automated Dependency Updates_

Boilerplate generated through ejected `create-react-app`.

---

## Prerequisites

- [`npm v6.14+`](https://nodejs.org/en/) - Package manager
- [`yarn v1.22+`](https://yarnpkg.com/getting-started/install) - Package & Project manager
- [`Node.js v15.0+`](https://nodejs.org/en/) - JavaScript runtime 

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

**Web App:**

```bash
yarn start
```

**Desktop:**

```bash
yarn start-electron
```

If you've written your own test files, put them in `tests/` and replace the `test` script in `package.json` with `node scripts/test.js`, then run `yarn test`.

> Yes, I know. I didn't write any test...

## Production

**Web App:**

```bash
yarn build
```

Output on `./client/build` directory. Ready to deploy to hosting.

**Desktop:**

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
