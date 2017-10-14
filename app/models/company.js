import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  website_uri: DS.attr('string'),
  careers_uri: DS.attr('string'),
  rating: DS.attr('integer'),
  benefits: DS.hasMany('benefit'),
  locations: DS.hasMany('location'),
  sectors: DS.hasMany('sector'),
});
