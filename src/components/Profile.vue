<template>
  <div class="cvi-profile">
    <h4>{{ profileLabel }}</h4>
    <p>{{ profile }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileLbl: {
        en: 'Profile',
        es: 'Perfil',
      },
    };
  },
  computed: {
    profileLabel() {
      return this.profileLbl[this.$store.state.locale];
    },
    profile() {
      return this.$store.getters.profile;
    },
  },
};
</script>

<style scoped>
h4 {
  text-transform: uppercase;
}
</style>

