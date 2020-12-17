<div align="center">

![](https://github.com/jhdcruz/MC.fmly-System/blob/main/docs/diagram.svg)

<i>Computer-generated diagram by <a href="https://arkit.pro">Arkit.pro</a>.</i>

</div>

<br />

This project uses yarn's [`workspaces`](https://classic.yarnpkg.com/en/docs/workspaces/) to seperate the **Front-End**
and the **Back-End** and run `scripts` without navigating back & forth to project folders.

> **Hoisting is set to `"*"`** to avoid compilation problems regarding missing dependencies.

**You have to install all dependencies before running any of the scripts.**

```shell
yarn
```

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

> This project uses [**Vercel**](https://vercel.com) as its front-end provider, and [**Heroku**](https://heroku.com) as its back-end provider to bypass _Vercel's_ 12 API endpoint limit.

```shell
yarn build
```

Output in `./client/build` directory. Ready to deploy to hosting.

### Desktop:

The desktop version on production relies on loading the web app. You need to deploy the web app, then change
the `loadURL` link in `./client/public/electron.js`.

```shell
yarn workspace client package-[os]
```

Where `os` can be one of the ff:

- `all` - all platforms (`win`, `mac`, `linux`)
- `win` - Windows x64 (`x32` architecture is not supported.)
- `mac` - MacOS 10+
- `linux` - `deb`/`rpm` installer based on current linux system.
- `ci` - For continuous integrations. _Automatic OS Detection._

Output on `/release` directory.

**NOTE**

Packaging the desktop app depends on the current system you have.

Running `linux` or `mac` on a `win` system will throw an error due to missing required tools.

Packaging the desktop app for `linux` can be made in `win` system inside `WSL` with
fulfilled [prerequisites](./Prerequisites).
