<template>
  <div class="cvi-profile-info">
    <h1>{{name}}</h1>
    <p>{{birthDate.toLocaleDateString()}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.profileInfo.name;
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
