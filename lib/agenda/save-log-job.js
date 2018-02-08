'use strict';
const debug = require('debug')('agenda:saveJob');
const utils = require('../utils');

const processJobs = utils.processJobs;

/**
 * Save the properties on a job to MongoDB
 * @param {String} reason reason that job executes failed
 * @param {module.Job} job job to save into MongoDB
 * @param {Function} cb called when job is saved or errors
 * @returns {undefined}
 */
module.exports = function(reason, job, cb) {
    const id = job.attrs._id;
    const body = {
        jobId: id
    }
    if (reason) {
        body.reason = reason
    }
    this._logCollection.insertOne(body);
};
