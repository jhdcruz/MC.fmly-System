<div align="center">
  
# MC.fmly Inventory System

#### OS Builds

| **Windows** | **Linux** (deb/rpm) | **MacOS** |
| ----------- | ------------------- | --------- |
| ![Windows Build](https://github.com/jhdcruz/MC.fmly-System/workflows/Windows%20Build/badge.svg?branch=main) | ![Linux Build](https://github.com/jhdcruz/MC.fmly-System/workflows/Linux%20Build/badge.svg?branch=main) | ![MacOS Build](https://github.com/jhdcruz/MC.fmly-System/workflows/MacOS%20Build/badge.svg?branch=main)

#### Status

| **Code Compliance** | **Code Quality** | **Time Spent** | **Desktop**| **Web App** |
| --------------- | -------------| ---------- | ------- | -------- |
| [![BCH compliance](https://bettercodehub.com/edge/badge/jhdcruz/MC.fmly-System?branch=main&token=41eca38af03418dd824928de9755e8917fc9676b)](https://bettercodehub.com/) | [![CodeFactor](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system/badge?s=12c335ef55a5d9cb0a15c337d17ac27b97e843cd)](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system) | [![time tracker](https://wakatime.com/badge/github/jhdcruz/MC.fmly-System.svg)](https://wakatime.com/badge/github/jhdcruz/MC.fmly-System) | [![buddy pipeline](https://app.buddy.works/jhdcruz/mc-fmly-system/pipelines/pipeline/285802/badge.svg?token=88cd275c0ba0c928ef949169703e21440acb90c7d1488b5435bcfbb773fe9989 "buddy pipeline")](https://app.buddy.works/jhdcruz/mc-fmly-system/pipelines/pipeline/285802) | [![buddy pipeline](https://app.buddy.works/jhdcruz/mc-fmly-system/pipelines/pipeline/285797/badge.svg?token=88cd275c0ba0c928ef949169703e21440acb90c7d1488b5435bcfbb773fe9989 "buddy pipeline")](https://app.buddy.works/jhdcruz/mc-fmly-system/pipelines/pipeline/285797)


**Inventory System specifically built for [MC.fmly](https://www.facebook.com/MC.fmly/).**

</div>

---

## Frameworks:

[![MERN Stack](https://webassets.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png)](https://www.mongodb.com/mern-stack)

### Front-End:

  - [**React**](https://reactjs.org/) - _UI Library_
  - [**`react-bootstrap`**](https://react-bootstrap.github.io/) - _UI Toolkit for `React`_
  - [**Electron**](https://electronjs.org) - _X-Platform Desktop Integration_
  - [**Sass/Scss**](https://sass-lang.com) - _Stylesheet_

### Back-End:

  - [**Express**](https://expressjs.com) - _Server-side Framework_
  - [**Axios**](https://github.com/axios/axios) - _HTTP Client_
  - [**Mongoose**](https:/mongoosjes.com) - _Object Modeling_

### Database:

  - [**MongoDB**](https://mongodb.com) - _Document database_

### Tools

- [**Vercel**](https://vercel.com) - _Web Deployment_
- [**Buddy CI/CD**](https://app.buddy.works) - _Continuous Integration_
- [**CodeFactor**](https://codefactor.io) - _Code Quality_
- [**Rollbar**](https://rollbar.com) - _Application Monitoring_
- [**Moesif API**](https://www.moesif.com/) - _API Analytics_
- [**WhiteSource Renovate**](https://renovate.whitesourcesoftware.com/) - _Automated Dependency Updates_

Boilerplate generated through ejected `create-react-app`.

---

## Prerequisites

- [`npm v6.14+`](https://nodejs.org/en/) - Package manager
- [`yarn v1.22+`](https://yarnpkg.com/getting-started/install) - Package & Project manager
- [`python3`](https://www.python.org/downloads/) - Rebuilding `electron` native-deps (`yarn rebuild`)

**Linux**:

- Debian
   - `dpkg`
   - `dpkg-dev`
- Red Hat
   - `rpm`

**Optional:**

- [`Postman`](https://www.postman.com/) - API Testing
- [`MongoDB Compass`](https://www.mongodb.com/try/download/compass) - MongoDB GUI

**Install Dependencies**

```
yarn  # same as `yarn install`
```

This will install dependencies on both `client/` and `server/`.

**Running Scripts**

This project uses yarn's `workspaces` to manage the dependencies on both `client/` and `server/` by sharing the `node_modules` in both projects, reducing overall project size.

Running scripts in specified workspace:

```yarn workspace [client || server] [command]```

Running scripts on both projects:

```yarn workspaces run [script]```

> All scripts are **ideally** ran in the root directory,
> except for `rebuild` in `client/`

## Development

**Web App:**

```bash
yarn start
```

**Desktop:**

```bash
yarn dev
```

If you've written your own test files, put them in `tests/` and replace the `test` script in `package.json` with `node scripts/test.js`, then run `yarn test`.

## Production

> TODO: Deployment

**Web App:**

```bash
yarn build
```

Output on `~/public` directory. Ready to deploy to hosting.

**Desktop:**

```bash
cd client/ && yarn rebuild && package-[os]
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
