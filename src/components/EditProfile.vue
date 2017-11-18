<template>
  <div>
    <form>
      <label for="profile">Profile English:</label>
      <textarea
        id="profile"
        cols="30"
        rows="10"
        :value="profile"
        @input="updateEntry({
          path: `profile/en`,
          value: $event.target.value,
        })"
      ></textarea>
      <label for="perfil">Profile Spanish:</label>
      <textarea
        id="perfil"
        cols="30"
        rows="10"
        :value="perfil"
        @input="updateEntry({
          path: `profile/es`,
          value: $event.target.value,
        })"
      ></textarea>
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
        'updateEntry',
      ]),
    },
    components: {
      Profile,
    },
  };
</script>
