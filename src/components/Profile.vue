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

<style lang="postcss">
.cvi-profile {
  padding: 1em;
}
</style>
