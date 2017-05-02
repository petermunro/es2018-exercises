# Modules

## Environment Setup

You can perform all exercises up to and including module 7 in Chrome.
Module 8 needs `create-react-app`.

### Getting started with create-react-app

#### 1. Install node

	**Mac**: I use nvm as we don't need to be root, and we can manage multiple node versions.

	1. Install nvm from https://github.com/creationix/nvm
	2. Run `nvm install 7.9`
			// To list available versions: `nvm ls-remote`

	**WIN**: Install node from https://nodejs.org/

#### 2. Install create-react-app

	npm install create-react-app -g

#### 3. [Optional extra] Install Yarn

	yarn offers alternate package installation - it's pretty
	much equivalent to npm. To install, download from
	https://yarnpkg.com/

#### 4. Run create-react-app

	create-react-app myapp


## Exporting and Importing Named Module Entries

1. If you have not done so, `npm install create-react-app -g`.

2. Use `create-react-app myfirstapp` to create a React skeleton. This will create
   the following directory structure:

       myfirstapp/
        ├── README.md
        ├── node_modules/
        ├── package.json
        ├── public/
        │   ├── favicon.ico
        │   └── index.html
        ├── src/
        │   ├── App.css
        │   ├── App.js      -- Main React component module
        │   ├── App.test.js
        │   ├── index.css
        │   ├── index.js    -- Start module: renders the app
        │   └── logo.svg
        └── yarn.lock


### Using a Named Export

1. Create a `src/mymod.js` file. Inside it, `export` a simple variable (eg a string or number) as a _named export_ (just precede it with the keyword `export`). Also add a `console.log()` to display a message.

2. Now `import` it from `index.js`. When do you see the `console.log()` output?

3. Can you export _any_ JavaScript data type (eg functions, arrays or objects) this way?

### Multiple Named Exports

1. Now add another variable, and export both in a single `export`
   clause. Should you use the `{…}` syntax here or not?

2. In `index.js`, `import` both and ensure they are available.
   Again, determine whether you should use the curly braces or not.

3. How many _named_ exports can you have?

### Renaming a Named Import

1. To avoid naming conflicts with other libraries, you can rename imports using the `as` syntax. Rename one or more module entries on import, and call them with the new name.

### Hoisting of Imports

1. Add another `console.log()` statement _before_ your import.
   Which appears first - this new one or the original one?

2. Imports are _hoisted_, meaning that they are always executed first,
   before any other code in that file.

### Default Exports

1. Add a simple object to `mymod.js` and export it as the default export.

2. Now import this object and ensure you can access its properties.

   > Normally, you either use _named_ exports if you need to export multiple things, or a single _default_ export for the 'main' thing you want to export. React uses both styles however.

3. If you haven't done so, try importing both the default export _and_ the named exports in a single `import` clause.

4. To summarize, when should you use the curly braces, and when not?

### Importing an Entire Module's Contents

1. Now import _all_ named exports using the `*` syntax.
