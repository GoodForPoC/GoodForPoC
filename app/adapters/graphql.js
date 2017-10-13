import GraphQLAdapter from 'ember-graphql-adapter';

// TODO: Get valid host for local API
export default GraphQLAdapter.extend({
  endpoint: 'http://localhost:3000/graph'
});
