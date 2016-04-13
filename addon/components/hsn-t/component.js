import Ember from 'ember';
import computedFallbackIfUndefined from '../../utils/computed-fallback-if-undefined';

export default Ember.Component.extend({

  headComponent: computedFallbackIfUndefined('head-base')

});
