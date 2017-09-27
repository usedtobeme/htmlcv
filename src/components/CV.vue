<template>
  <section>
    <profile-info></profile-info>
    <contact-info></contact-info>
    <profile></profile>
    <experience></experience>
    <education></education>
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
<style scoped>

</style>
