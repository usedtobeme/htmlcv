<template>
  <div class="cvi-definition-list">
    <dl>
      <dt>{{ addressLabel }}</dt>
      <dd>
        <p>{{ info.address }}</p>
        <p>{{ info.city }}</p>
      </dd>
      <dt>{{ phoneLabel }}</dt>
      <dd>
        <p>{{ info.phone }}</p>
        <p>{{ info.cellPhone }}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data() {
    return {
      address: {
        en: 'Address',
        es: 'Dirección',
      },
      phone: {
        en: 'Phone',
        es: 'Teléfono',
      },
    };
  },
  computed: {
    addressLabel() {
      return this.address[this.$store.state.locale];
    },
    phoneLabel() {
      return this.phone[this.$store.state.locale];
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
