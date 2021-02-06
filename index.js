const {Worker} = require('worker_threads');
const isWorker = require('./isWorker');

console.log('index.js run inside of worker:', isWorker());

const worker = new Worker(new URL('./worker.js', import.meta.url));