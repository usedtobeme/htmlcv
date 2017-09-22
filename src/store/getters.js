import _ from 'lodash';

export const profile = state => state.profile[state.locale];

export const experience = state =>
  _.mapValues(state.experience,
    item => Object.assign({ desc: item.description[state.locale] }, item));
