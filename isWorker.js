const {isMainThread} = require('worker_threads');

// A function that returns true if called inside a worker thread
module.exports = () => {
  return isMainThread;
};
