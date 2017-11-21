<template>
  <div class="wcv-content-editor">
    <el-card header="Basic" class="wcv-content-editor--card">
      <edit-profile-info></edit-profile-info>
    </el-card>
    <el-card header="Contact Info" class="wcv-content-editor--card">
      <edit-contact-info></edit-contact-info>
    </el-card>
    <el-card header="Profile" class="wcv-content-editor--card">
      <edit-profile></edit-profile>
    </el-card>
    <el-card header="Experience" class="wcv-content-editor--card">
      <edit-experience></edit-experience>
    </el-card>
    <el-card header="Education" class="wcv-content-editor--card">
      <edit-education></edit-education>
    </el-card>
    <el-card header="Skills" class="wcv-content-editor--card">
      <edit-skills></edit-skills>
    </el-card>
  </div>
</template>

<script>
  import EditProfileInfo from './EditProfileInfo';
  import EditContactInfo from './EditContactInfo';
  import EditProfile from './EditProfile';
  import EditExperience from './EditExperience';
  import EditEducation from './EditEducation';
  import EditSkills from './EditSkills';

  export default {
    name: 'content-manager',
    components: {
      EditProfileInfo,
      EditContactInfo,
      EditProfile,
      EditExperience,
      EditEducation,
      EditSkills,
    },
  };
</script>

<style lang="postcss">
.wcv-content-editor {
  padding: 1em;
}

.wcv-content-editor--card {
  margin: 1em;
}

</style>

