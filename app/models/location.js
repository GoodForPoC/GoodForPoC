import DS from 'ember-data';

export default DS.Model.extend({
  companies: DS.hasMany('company'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
