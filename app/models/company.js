import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  websiteUri: DS.attr('string'),
  careersUri: DS.attr('string'),
  rating: DS.attr('number'),
  benefits: DS.hasMany('benefit'),
  locations: DS.hasMany('location'),
  sectors: DS.hasMany('sector'),
});
