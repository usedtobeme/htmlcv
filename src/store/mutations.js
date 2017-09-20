import Vue from 'vue';
import * as types from './mutationTypes';

export default {
  [types.GET_INITIAL_STATE](state, fbState) {
    Vue.set(state, 'profileInfo', fbState.profileInfo);
    Vue.set(state, 'contactInfo', fbState.contactInfo);
    Vue.set(state, 'profile', fbState.profile);
  },

  [types.UPDATE_NAME](state, { name }) {
    Vue.set(state.profileInfo, 'name', name);
  },

  [types.UPDATE_ID_TYPE](state, { idType }) {
    Vue.set(state.profileInfo, 'idType', idType);
  },

  [types.UPDATE_ID](state, { id }) {
    Vue.set(state.profileInfo, 'id', id);
  },

  [types.UPDATE_BIRTHDATE](state, { birthDate }) {
    Vue.set(state.profileInfo, 'birthDate', birthDate);
  },
};
