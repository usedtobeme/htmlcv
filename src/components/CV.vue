<template>
  <section>
    <profile-info class="row"></profile-info>
    <profile class="row"></profile>
    <contact-info class="row"></contact-info>
    <experience class="row"></experience>
    <education class="row"></education>
    <skills></skills>
  </section>
</template>

<script>
import ProfileInfo from './ProfileInfo';
import ContactInfo from './ContactInfo';
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

export default {
  name: 'cv',
  components: {
    ProfileInfo,
    ContactInfo,
    Profile,
    Experience,
    Education,
    Skills,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
section {
  padding: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

.row {
  flex: 1 0 100%;
  padding: 1em;
}
</style>

