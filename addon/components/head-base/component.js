import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['isActive:isActive'],

  isActive: false,

  click() {
    if (this.get('clickCB')) {
      this.get('clickCB')();
    }
  }

});
