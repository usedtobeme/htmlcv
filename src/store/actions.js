import * as types from './mutationTypes';
import firebase from './firebase';

export const getInitialState = ({ commit }) => {
    firebase.database.ref().on('value', (snapshot) => {
        commit(types.GET_INITIAL_STATE, snapshot.val());
    });
};

export const setLocale = ({ commit }, value) => {
    commit(types.SET_LOCALE, value);
};

export const removeEntry = (context, path) => {
    firebase.database.ref(path).remove();
};

export const updateEntry = (context, payload) => {
    firebase.database.ref(payload.path).set(payload.value);
};