<template>
  <section class="wcv-main">
    <el-row :gutter="10" :justify="'end'" :type="'flex'" class="wcv-row--wrap">
      <el-col :xs="24" :sm="8" :md="8">
        <profile-info></profile-info>
        <contact-info></contact-info>
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" class="wcv-column--pushdown">
        <profile></profile>
        <experience></experience>        
        <education></education>    
        <skills></skills>
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
<style lang="postcss">
.wcv-main {
  margin: 0 2em;
}

.wcv-row--wrap {
  flex-flow: row wrap;
}

@media only screen and (min-width: 768px)  {
  .wcv-column--pushdown {
    margin-top: 4.7em;
  }  
}

</style>

