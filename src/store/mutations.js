import Vue from 'vue';
import * as types from './mutationTypes';

export default {
  [types.GET_INITIAL_STATE](state, fbState) {
    Vue.set(state, 'profileInfo', fbState.profileInfo);
    Vue.set(state, 'contactInfo', fbState.contactInfo);
    Vue.set(state, 'profile', fbState.profile);
    Vue.set(state, 'experience', fbState.experience);
    Vue.set(state, 'education', fbState.education);
    Vue.set(state, 'skills', fbState.skills);
  },

  [types.SET_LOCALE](state, locale) {
    Vue.set(state, 'locale', locale);
  },
};
