import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    profileInfo: {},
    contactInfo: {},
    profile: {},
    experience: {},
    education: {},
    skills: {},
    locale: 'en',
  },
  actions,
  getters,
  mutations,
  strict: debug,
});
