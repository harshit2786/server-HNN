'use strict';

/**
 * draft service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::draft.draft');
