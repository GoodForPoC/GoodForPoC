import GraphQLAdapter from 'ember-graphql-adapter';

export default GraphQLAdapter.extend({
  endpoint: 'http://localhost:3000/graph'
});
