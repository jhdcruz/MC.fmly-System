# MC.fmly System

**Status:**

[![CodeFactor](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system/badge?s=12c335ef55a5d9cb0a15c337d17ac27b97e843cd)](https://www.codefactor.io/repository/github/jhdcruz/mc.fmly-system) [![Build Status](https://travis-ci.com/jhdcruz/MC-Inventory-System.svg?token=fiiouVpFksoACZRN1N2B&branch=main)](https://travis-ci.com/jhdcruz/MC-Inventory-System)

**Inventory System specifically built for [MC.fmly](https://www.facebook.com/MC.fmly/).**

---

#### Frameworks:

The system will follow the **MERN** Stack.

- **Front-End**

  - _React_ - UI Components
  - _Electron_ - X-Platform Development
  - _Sass/Scss_ - Stylesheet

- **Back-End** (if time permits)

  - _Express_ - Server-side Framework

- **Database** (if time permits)
  - _MongoDB_ - Document-based Database

> Read more about the stack:
> https://www.mongodb.com/mern-stack

#### Tools

- **TravisCI** - _Continuous Integration_
- **CodeFactor** - _Code Quality_
- **Rollbar** - _Application Monitoring_
- **WhiteSource Renovate** - _Automated Dependency Updates_

Boilerplate generated through `create-react-app`.

---

### Development

This system can be run as a Desktop & Web app.

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

**Web App:**

```bash
yarn build
```

Output on `build/` directory. Ready to deploy to hosting.

**Desktop:**

```bash
yarn postinstall && yarn package-os
```

Where `os` can be one of the ff:

- `all` - all platforms (`win64`, `mac`, `linux`)
- `win` - Windows x64
- `mac` - MacOS
- `linux` - `deb`/`rpm` installer based on current linux system.

> `x32` architecture is not supported.
