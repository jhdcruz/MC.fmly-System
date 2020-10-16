# MC.fmly System

**Status:**

[![CodeFactor](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system/badge?s=12c335ef55a5d9cb0a15c337d17ac27b97e843cd)](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system) [![Build Status](https://travis-ci.com/jhdcruz/MC.fmly-System.svg?token=fiiouVpFksoACZRN1N2B&branch=main)](https://travis-ci.com/jhdcruz/MC.fmly-System)

**Inventory System specifically built for [MC.fmly](https://www.facebook.com/MC.fmly/).**

---

#### Frameworks:

- **Front-End**

  - _React_ - UI Library
  - `react-bootstrap` - UI Toolkit for `React`
  - _Electron_ - X-Platform Development
  - _Sass/Scss_ - Stylesheet

- **Back-End** (if time permits)

  - _Express_ - Server-side Framework
  - _Axios_ - HTTP Client
  - _Mongoose_ - Object Modeling

- **Database** (if time permits)
  - _MongoDB_ - Document database 

> Read more about the stack:
> https://www.mongodb.com/mern-stack

#### Tools

- **TravisCI** - _Continuous Integration_
- **CodeFactor** - _Code Quality_
- **Rollbar** - _Application Monitoring_
- **WhiteSource Renovate** - _Automated Dependency Updates_

Boilerplate generated through `create-react-app`.

---

### Prerequisites

- `npm v6.14+` - Package manager
- `yarn v1.22+` - Package & Project manager
- `python3` - Rebuilding `electron` native-deps

**Optional:**

- `Postman` - API Testing
- `MongoDB Compass` - MongoDB GUI

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

### Starting Project

**Web App:**

```bash
yarn start
```

**Desktop:**

```bash
yarn dev
```

If you've written your own test files, put them in `tests/` and replace the `test` script in `package.json` with `node scripts/test.js`, then run `yarn test`.

### Production

> TODO: Deployment

**Web App:**

```bash
yarn build
```

Output on `build/` directory. Ready to deploy to hosting.

**Desktop:**

```bash
cd client/ && yarn rebuild && package-[os]
```

Where `os` can be one of the ff:

- `all` - all platforms (`win64`, `mac`, `linux`)
- `win` - Windows x64
- `mac` - MacOS
- `linux` - `deb`/`rpm` installer based on current linux system.

> `x32` architecture is not supported.
