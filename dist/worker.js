const {isMainThread} = require('worker_threads');

const isWorker = require('./isWorker');

console.log('worker.js run inside a worker:', isWorker());