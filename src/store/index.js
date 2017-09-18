import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    contact: null,
    profile: null,
    experience: [],
    education: [],
    skills: [],
    locale: 'en',
  },
  mutations: {
    ...firebaseMutations,
  },
  actions,
  getters,
  strict: debug,
});
