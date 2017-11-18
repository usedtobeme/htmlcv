<template>
  <div>
    <form>
      <label for="name">Name:</label>
      <input
        id="name"
        :value="name"
        @input="updateEntry({
          path: `profileInfo/name`,
          value: $event.target.value,
        })"
      />
      <label for="idType">ID Type:</label>
      <input
        id="idType"
        :value="idType"
        @input="updateEntry({
          path: `profileInfo/idType`,
          value: $event.target.value,
        })"
      />
      <label for="id">ID Number:</label>
      <input
        id="id"
        :value="id"
        @input="updateEntry({
          path: `profileInfo/id`,
          value: $event.target.value,
        })"
      />
      <label for="birthDate">Birth Date</label>
      <input
        type="date"
        id="birthDate"
        :value="birthDate"
        @input="updateEntry({
          path: `profileInfo/birthDate`,
          value: $event.target.value,
        })"
      />
    </form>
    <profile-info></profile-info>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import ProfileInfo from './ProfileInfo';

  export default {
    name: 'edit-profile-info',
    computed: {
      ...mapState({
        name: state => state.profileInfo.name,
        idType: state => state.profileInfo.idType,
        id: state => state.profileInfo.id,
        birthDate: state => state.profileInfo.birthDate,
      }),
    },
    methods: {
      ...mapActions([
        'updateEntry',
      ]),
    },
    components: {
      ProfileInfo,
    },
  };
</script>
