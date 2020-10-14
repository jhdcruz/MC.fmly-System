# MC.fmly System


**Status:**

[![CodeFactor](https://www.codefactor.io/repository/github/jhdcruz/mc-inventory-system/badge?s=7b7898544cfd6571214f45d58af62bd7fb028884)](https://www.codefactor.io/repository/github/jhdcruz/mc-inventory-system) [![Build Status](https://travis-ci.com/jhdcruz/MCIS.svg?token=fiiouVpFksoACZRN1N2B&branch=master)](https://travis-ci.com/jhdcruz/MCIS)

**Inventory System specifically built for [MC.fmly](https://www.facebook.com/MC.fmly/).**

-----

#### Frameworks:

- **Front-End**
    - _React_ - UI Components
    - _Redux_ - State Management
    - _Electron_ - X-Platform Development
    - _Sass/Scss_ - Stylesheet
- **Back-End** (if time permits)
    - _Express_ - Web Framework for Nodejs
    - _Axios_ - HTTP Client
 
#### Tools
 - **TravisCI** - *Continuous Integration*
 - **CodeFactor** - *Code Quality*
 - **Sentry** - *Application Monitoring*
 - **WhiteSource Renovate** - *Automated Dependency Updates*

 Boilerplate generated through`create-react-app`.
 
 ----
 
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
  
 
 ----
 

> Source code available at my GitHub:
> https://github.com/jhdcruz/MC-Inventory-System
