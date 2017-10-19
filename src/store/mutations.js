import Vue from 'vue';
import * as types from './mutationTypes';

export default {
    [types.GET_INITIAL_STATE](state, fbState) {
        Vue.set(state, 'profileInfo', fbState.profileInfo);
        Vue.set(state, 'contactInfo', fbState.contactInfo);
        Vue.set(state, 'profile', fbState.profile);
    },

    [types.SET_LOCALE](state, locale) {
        Vue.set(state, 'locale', locale);
    },
};