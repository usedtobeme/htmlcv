<template>
  <div>
    <form>
      <label for="profile">Profile English:</label>
      <textarea id="profile" cols="30" rows="10" :value="profile" @input="updateProfile"></textarea>
      <label for="perfil">Profile Spanish:</label>
      <textarea id="perfil" cols="30" rows="10" :value="perfil" @input="updatePerfil"></textarea>
    </form>
    <profile></profile>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Profile from './Profile';

  export default {
    name: 'edit-profile',
    computed: {
      ...mapState({
        profile: state => state.profile.en,
        perfil: state => state.profile.es,
      }),
    },
    methods: {
      ...mapActions([
        'updateProfile',
        'updatePerfil',
      ]),
    },
    components: {
      Profile,
    },
  };
</script>
