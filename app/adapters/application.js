import GraphQLAdapter from 'ember-graphql-adapter';
import Ember from 'ember';

export default GraphQLAdapter.extend({
  endpoint: 'http://localhost:9292/gql',
  httpMethod: 'get',
  normalizeCase: function(string) {
    return Ember.String.underscore(string);
  },
});
