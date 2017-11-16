<template>
  <section class="wcv-main">
    <profile-info class="wcv-profile-info row"></profile-info>
    <profile class="wcv-profile row"></profile>
    <contact-info class="wcv-contact-info row"></contact-info>
    <experience class="wcv-experience row"></experience>
    <education class="wcv-education row"></education>
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
.wcv-main {
  padding: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

.wcv-main .row {
  flex: 1 0 100%;
  padding: 1em;
}
</style>

