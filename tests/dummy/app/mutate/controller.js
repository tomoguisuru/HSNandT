import Ember from 'ember';

export default Ember.Controller.extend({

  isActive: false,

  actions: {

    clicked() {
      this.toggleProperty('isActive');
    }

  }

});
