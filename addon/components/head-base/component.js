import Ember from 'ember';

export default Ember.Component.extend({

  click() {
    if (this.get('clickCB')) {
      this.get('clickCB')();
    }
  }

});
