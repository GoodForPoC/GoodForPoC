/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'goodforpoc',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    sentry: {
      dsn: 'https://4aa9427eddf041e3abd79c43bfbf9c36@sentry.io/221258',
      // debug: environment === 'development',
      // development: environment === 'development',
    },
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' cdn.ravenjs.com",
      'img-src': "data: app.getsentry.com",
      'connect-src': "'self' localhost",
    },
    APP: {},
    segment: {
      WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
      LOG_EVENT_TRACKING: ''
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
