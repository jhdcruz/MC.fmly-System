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

Create a file called `.env` in `server/` derived from a template located in `./server/.env.template`.

**Required:**

- **`MONGO_ADMIN`** - **Required**

Add your environment variables inside `./server/.env`.

```dotenv
MONGO_ADMIN=[Your URI Here]
```

> Do not add quotation marks between values!
