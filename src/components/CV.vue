<template>
  <section class="wcv-main">
    <el-row :gutter="10" :justify="'end'" :type="'flex'">
      <el-col :xs="24" :sm="12" :md="8">
        <profile-info class="wcv-profile-info row"></profile-info>
        <contact-info class="wcv-contact-info row"></contact-info>
      </el-col>
      <el-col :xs="24" :sm="12" :md="16">
        <profile class="wcv-profile row"></profile>
        <experience class="wcv-experience row"></experience>        
        <education class="wcv-education row"></education>    
        <skills class="wcv-skills row"></skills>
      </el-col>
    </el-row>
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

