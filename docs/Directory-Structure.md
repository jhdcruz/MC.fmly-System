## Root Structure

```shell
| ./
    | - .circleci/                # CircleCI CI config
    | - .github/                  # GitHub config & workflows
    | - client/                   # Client workspace/project
    | - server/                   # Server workspace/project
    | - release/                  # Compile electron output (Desktop app)
    | - docs/                     # Project docs (GH Wiki)
    | .editorconfig               # Diverse editor config (for various TEs & IDEs)
    | .eslintignore               # Ignored files for eslint linting & checks
    | .gitignore                  # Ignored files for git
    | .prettierignore             # Ignored files for prettier
    | .prettierrc                 # Prettier config for code formatting
    | .stylelintrc                # Stylelint config for code linting
    | .travis.yml                 # Travis CI config
    | .yarnrc                     # Yarn project-specific config
    | .arkit.json                 # Arkit config for diagram generation
    | .LICENSE.txt                # Project License
    | .package.json               # Project-wide metadata (Workspaces & Project-wide packages)
    | .Procfile                   # Heroku deployment config (currently for API)
    | .README.md                  # Project README (About)
    | .renovate.json              # Renovate config for dependency management
    | .sonar-project.properties   # SonarCloud project config
    | .yarn.lock                  # Project dependency lockfile
```

## Client Structure

```shell
| client/
    | - build/        # build/compilation output (autogenerated)
    | - config/       # Build configurations
    | - public/       # Contains the root HTML & electron file and manifests
    | - resources/    # Desktop app (electron-builder) resources
    | - scripts/      # Custom scripts such as running and building (w/ hot reload), and tests
    | - src/          # Main source files (every client's source code goes here)
    | .eslintrc       # Eslint configuration for code linting and rules
    | jsconfig.json   # JS-specific compiler options
    | package.json    # client's specific metadata
```

### Client's Source Code

```shell
| src/
    | - assets/       # Project assets (img, etc...)
    | - components/   # Dumb/Presentational components (UI)
    | - containers/   # Smart/Stateful components (Business Logic)
    | - pages/        # Available web pages
    | - services/     # Services/API calls, etc...
    | - utils/        # Project utilities (constants, routes, etc...)
    | - views/        # Available views for each user roles (ports to pages/)
    | App.scss        # Global styles
    | index.jsx       # Entry point for the App.
    | Login.jsx       # Login form
    | themes.scss     # Override themes for react-bootstrap
```

## Server Structure

```shell
| server/
    | - controllers/  # Contains logic actions for designated routes
    | - middlewares/  # API middlewares mostly comprises of 3rd-party integrations
    | - models/       # Collections schematics
    | - public/       # Contains the root HTML for viewing
    | - routes/       # Designated/open API routes
    | .env            # Environment variables
    | .env.template   # Environment variables template
    | .eslintrc       # Eslint configuration for code linting and rules
    | .package.json   # server's specific metadata
    | server.js       # Main API/server instance
```

`.env` are created manually based from `.env.template`.