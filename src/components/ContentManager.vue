<template>
  <div>
    <edit-profile-info></edit-profile-info>
    <edit-contact-info></edit-contact-info>
    <edit-profile></edit-profile>
    <edit-experience></edit-experience>
    <edit-education></edit-education>
    <edit-skills></edit-skills>
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
