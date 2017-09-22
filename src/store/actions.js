import * as types from './mutationTypes';
import firebase from './firebase';

export const getInitialState = ({ commit }) => {
  firebase.database.ref().on('value', (snapshot) => {
    commit(types.GET_INITIAL_STATE, snapshot.val());
  });
};

export const updateName = (context, value) => {
  firebase.database.ref('profileInfo/name').set(value);
};

export const updateIdType = (context, value) => {
  firebase.database.ref('profileInfo/idType').set(value);
};

export const updateId = (context, value) => {
  firebase.database.ref('profileInfo/id').set(value);
};

export const updateBirthDate = (context, value) => {
  firebase.database.ref('profileInfo/birthDate').set(value);
};

export const updateAddress = (context, value) => {
  firebase.database.ref('contactInfo/address').set(value);
};

export const updateCity = (context, value) => {
  firebase.database.ref('contactInfo/city').set(value);
};

export const updateCountry = (context, value) => {
  firebase.database.ref('contactInfo/country').set(value);
};

export const updatePhone = (context, value) => {
  firebase.database.ref('contactInfo/phone').set(value);
};

export const updateCellphone = (context, value) => {
  firebase.database.ref('contactInfo/cellphone').set(value);
};

export const updateProfile = (context, value) => {
  firebase.database.ref('profile/en').set(value);
};

export const updatePerfil = (context, value) => {
  firebase.database.ref('profile/es').set(value);
};

export const addNewExperience = () => {
  firebase.database.ref('experience').push({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: {
      en: '',
      es: '',
    },
  });
};

export const updateCompany = (key) => {
  console.log(key);
};
// 'updateStartTime',
// 'updateEndTime',
// 'updatePosition',
// 'updateDescription',
// 'updateDescripcion',
