<template>
  <div>
    <edit-profile-info></edit-profile-info>
    <edit-contact-info></edit-contact-info>
    <edit-profile></edit-profile>
  </div>
</template>

<script>
  import EditProfileInfo from './EditProfileInfo';
  import EditContactInfo from './EditContactInfo';
  import EditProfile from './EditProfile';

  export default {
    name: 'content-manager',
    components: {
      EditProfileInfo,
      EditContactInfo,
      EditProfile,
    },
  };
</script>
