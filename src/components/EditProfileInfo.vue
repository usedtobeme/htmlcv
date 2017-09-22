<template>
  <div>
    <form>
      <label for="name">Name:</label>
      <input id="name" :value="name" @input="updateName($event.target.value)">
      <label for="idType">ID Type:</label>
      <input id="idType" :value="idType" @input="updateIdType($event.target.value)">
      <label for="id">ID Number:</label>
      <input id="id" :value="id" @input="updateId($event.target.value)">
      <label for="birthDate">Birth Date</label>
      <input type="date" id="birthDate" :value="birthDate" @input="updateBirthDate($event.target.value)">
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
        'updateName',
        'updateIdType',
        'updateId',
        'updateBirthDate',
      ]),
    },
    components: {
      ProfileInfo,
    },
  };
</script>
