<template>
  <div class="cvi-profile-info">
    <h1>{{name}}</h1>
    <p>{{idType}}: {{id}}</p>
    <p>{{birthDate.toLocaleDateString()}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.profileInfo.name;
    },
    idType() {
      return this.$store.state.profileInfo.idType;
    },
    id() {
      return this.$store.state.profileInfo.id;
    },
    birthDate() {
      const date = this.$store.state.profileInfo.birthDate || '';
      return new Date(date.replace('-', '/'));
    },
  },
};
</script>

<style lang="postcss">
.cvi-profile-info {
  padding: 1em;
}
</style>
