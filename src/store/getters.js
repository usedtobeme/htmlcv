import _ from 'lodash';

export const profile = state => state.profile[state.locale];

export const experience = state =>
  _.mapValues(state.experience,
    item => Object.assign({ desc: item.description[state.locale] }, item));

export const education = state =>
  _.mapValues(state.education,
    item => Object.assign({ degreeLoc: item.degree[state.locale] }, item));
