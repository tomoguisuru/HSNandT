/*
 Borrowed from Ember Power Select
 https://github.com/cibernox/ember-power-select/blob/master/addon/utils/computed-fallback-if-undefined.js
 */
import Ember from 'ember';

export default function computedFallbackIfUndefined(fallback) {
  return Ember.computed({
    get() { return fallback; },
    set(_, v) { return v === undefined ? fallback : v; }
  });
}
