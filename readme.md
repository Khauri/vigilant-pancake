Webpack's native worker implementation with `async-node` target generates a file that can't really be used as it doesn't
add any webpack runtime code and keeps all the relative imports in tact.

The file `dist/worker.js` is generated using the webpack config in this repo and there's no way to run it as the file includes a call to `require('./isWorker.js')` which of course does not exist in the dist folder.

Although an example is not included in this repo, the file does get run through babel and other loaders if setup.

## Building

```
npm run build
```

(if you're using node 10 `npm run build:node-10`)