import * as types from './mutationTypes';
import firebase from './firebase';

export const getInitialState = ({ commit }) => {
  firebase.database.ref().on('value', (snapshot) => {
    commit(types.GET_INITIAL_STATE, snapshot.val());
  });
};

export const updateName = ({ commit }, e) => {
  commit(types.UPDATE_NAME, {
    name: e.target.value,
  });
};

export const updateIdType = ({ commit }, e) => {
  commit(types.UPDATE_ID_TYPE, {
    idType: e.target.value,
  });
};

export const updateId = ({ commit }, e) => {
  commit(types.UPDATE_ID, {
    id: e.target.value,
  });
};

export const updateBirthDate = ({ commit }, e) => {
  commit(types.UPDATE_BIRTHDATE, {
    birthDate: e.target.value,
  });
};
