# Overview
Basic type script setup with html live reload 

```sh
npm start
tsc --watch

```


# to get import export working 
you need to use es6modules . ES6 modules understood by browser

```json
    "target": "ES6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "ES6" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    //
```