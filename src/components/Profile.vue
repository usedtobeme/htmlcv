<template>
  <div class="cvi-profile">
    <h4>{{ profileLabel }}</h4>
    <p>{{ info.profile }}</p>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data() {
    return {
      profile: {
        en: 'Profile',
        es: 'Perfil',
      },
    };
  },
  computed: {
    profileLabel() {
      return this.profile[this.$store.state.locale];
    },
  },
};
</script>

<style scoped>
h4 {
  text-transform: uppercase;
}
</style>

