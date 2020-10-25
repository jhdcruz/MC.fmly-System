> TODO: Directory Structure

----

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
