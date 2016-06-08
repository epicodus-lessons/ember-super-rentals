import Ember from 'ember';

export function cityPopularity(params) {
  var city = params[0];

  if(city.get('rentals').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(cityPopularity);
