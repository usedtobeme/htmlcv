import * as types from './mutationTypes';
import firebase from './firebase';

export const getInitialState = ({ commit }) => {
  firebase.database.ref().on('value', (snapshot) => {
    commit(types.GET_INITIAL_STATE, snapshot.val());
  });
};

export const updateName = ({ commit }, e) => {
  firebase.database.ref('profileInfo/name').set(e.target.value);
};

export const updateIdType = ({ commit }, e) => {
  firebase.database.ref('profileInfo/idType').set(e.target.value);
};

export const updateId = ({ commit }, e) => {
  firebase.database.ref('profileInfo/id').set(e.target.value);
};

export const updateBirthDate = ({ commit }, e) => {
  firebase.database.ref('profileInfo/birthDate').set(e.target.value);
};

export const updateAddress = ({ commit }, e) => {
  firebase.database.ref('contactInfo/address').set(e.target.value);
};

export const updateCity = ({ commit }, e) => {
  firebase.database.ref('contactInfo/city').set(e.target.value);
};

export const updateCountry = ({ commit }, e) => {
  firebase.database.ref('contactInfo/country').set(e.target.value);
};

export const updatePhone = ({ commit }, e) => {
  firebase.database.ref('contactInfo/phone').set(e.target.value);
};

export const updateCellphone = ({ commit }, e) => {
  firebase.database.ref('contactInfo/cellphone').set(e.target.value);
};

export const updateProfile = ({ commit }, e) => {
  firebase.database.ref('profile/en').set(e.target.value);
};

export const updatePerfil = ({ commit }, e) => {
  firebase.database.ref('profile/es').set(e.target.value);
};
