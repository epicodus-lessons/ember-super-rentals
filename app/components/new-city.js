import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    saveCity() {
     var params = {
       name: this.get('name'),
       country: this.get('country')
     };
     this.set('addNewCental', false);
     this.sendAction('saveCity', params);
   }
  }
});
