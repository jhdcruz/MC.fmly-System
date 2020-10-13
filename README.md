# MC Inventory System

<div align="center">
<b>Status:</b>

[![CodeFactor](https://www.codefactor.io/repository/github/jhdcruz/mcis/badge?s=58de08a23400a3f8b401fdee68b858cbb0732d1f)](https://www.codefactor.io/repository/github/jhdcruz/mcis) [![Build Status](https://travis-ci.com/jhdcruz/MCIS.svg?token=fiiouVpFksoACZRN1N2B&branch=master)](https://travis-ci.com/jhdcruz/MCIS)

</div>

**Inventory System specifically built for [MC.fmly](https://www.facebook.com/MC.fmly/).**


## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn package-[os]
```

> check `package.json` in `scripts` section for `package-XXXX` scripts.

