# MC Inventory System

<div align="center">
<b>Status:</b>

[![CodeFactor](https://www.codefactor.io/repository/github/jhdcruz/mc-ims/badge?s=9cbd304f48d68f7bf9e24ffc80b24cb5f4dc577a)](https://www.codefactor.io/repository/github/jhdcruz/mc-ims) [![Build Status](https://travis-ci.com/jhdcruz/MC-IMS.svg?token=fiiouVpFksoACZRN1N2B&branch=main)](https://travis-ci.com/jhdcruz/MC-IMS)

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

