import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  logo_uri() {
    return faker.internet.avatar();
  },

  name() {
    return 'foo';
  },

  slug() {
    return 'foo';
  },

  website() {
    return faker.internet.uri();
  }
});
