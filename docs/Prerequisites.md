## Prerequisites

- [`Node.js v14.15.0+`](https://nodejs.org/en/) - Package manager
- [`yarn v1.22+`](https://yarnpkg.com/getting-started/install) - Package & Project manager
- [`MongoDB Cluster`](https://mongodb.com/) - MongoDB Cluster URI

**Windows:**

- [**`windows-build-tools`**](https://www.npmjs.com/package/windows-build-tools)

```shell
npm i -g windows-build-tools # Should be in elevated shell.
```

**Linux:**

- Debian
  - `dpkg`
  - `dpkg-dev`

```shell
sudo apt install dpkg dpkg-dev
```

- Red Hat
  - `rpm`

```shell
sudo yum install rpm
```

replace `yum` with your distro package provider.

**MacOS**

- `rpm`

```shell
brew install rpm
```

**Optional:**

- [`Postman`](https://www.postman.com/) - API Testing
- [`MongoDB Compass`](https://www.mongodb.com/try/download/compass) - MongoDB GUI

## Environment Variables

Create `.env` files for both projects.

**Server** `./server/.env`

- **`MONGO_URL`** - **Required** _(Production)_
- **`MONGO_ADMIN`** - **Required** _(Admin)_
- **`ROLLBAR_TOKEN`** - _Rollbar Error Tracking (Server)_
- **`INGESTION_KEY`** - _LogDNA Log Management_

**Client** `./client/.env`

- **`REACT_APP_API`** - **Required** _Server deployment URL_
- **`REACT_APP_GITHUB_URL`** - **Required** _GitHub Repo (GitHub API)_
- **`REACT_APP_ROLLBAR_TOKEN`** - _Rollbar Error Tracking (Client)_

See `.env` pre-configured templates:

- [`./server/.env.template`](./server/.env.template) - **Server**

- [`./client/.env.template`](./client/.env.template) - **Client**

**Example:**

```dotenv
MONGO_URL=Your URI Here
```

> Do not add quotation marks between values!
