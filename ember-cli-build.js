/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: [
        'SEGMENT_WRITE_KEY'
      ]
    }
  });

  return app.toTree();
};
