<template>
  <div class="cvi-definition-list">
    <dl>
      <dt>{{ $te('addressLabel') }}</dt>
      <dd>
        <p>{{ info.address }}</p>
        <p>{{ info.city }}</p>
      </dd>
      <dt>{{ $te('phoneLabel') }}</dt>
      <dd>
        <p>{{ info.phone }}</p>
        <p>{{ info.cellPhone }}</p>
      </dd>
    </dl>
  </div>
</template>

<i18n>
{
  "en": {
    "addressLabel": "Address",
    "phoneLabel": "Phone"
  },
  "es": {
    "addressLabel": "Direccion",
    "phoneLabel": "Telefono"
  },
  "fr": {
    "addressLabel": "Adresse",
    "phoneLabel": "Telephone"
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
.cvi-definition-list dt {
  font-weight: 900;
  text-transform: uppercase;
}
</style>
