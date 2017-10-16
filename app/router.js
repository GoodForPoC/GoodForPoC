import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('companies', {
    path: '/companies'
  }, function() {
    this.route('all');
  });
});

export default Router;
