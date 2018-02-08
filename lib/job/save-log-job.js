'use strict';

/**
 * Saves a log job into the MongoDB
 * @param {String} reason reason that job executes failed
 * @param {Function} cb called after log job is saved or errors
 * @returns {exports} instance of Job
 */
module.exports = function(reason, cb) {
  this.agenda.saveLogJob(reason, this, cb);
  return this;
};
