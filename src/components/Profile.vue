<template>
  <div class="cvi-profile">
    <h4>{{ $t('profileLabel') }}</h4>
    <p>{{ info.profile }}</p>
  </div>
</template>

<i18n>
{
  "en": {
    "profileLabel": "Profile"
  },
  "es": {
    "profileLabel": "Perfil profesional"
  },
  "fr": {
    "profileLabel": "Profil de carriere"
  }
}
</i18n>

<script>
export default {
  props: ['info'],
  data() { return { locale: 'en' }; },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>

<style scoped>
h4 {
  text-transform: uppercase;
}
</style>

