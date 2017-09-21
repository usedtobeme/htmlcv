<template>
  <div class="cvi-definition-list">
    <dl>
      <dt>{{ addressLabel }}</dt>
      <dd>
        <p>{{ address }}</p>
        <p>{{ city }}, {{ country }}</p>
      </dd>
      <dt>{{ phoneLabel }}</dt>
      <dd>
        <p>{{ phone }}</p>
        <p>{{ cellphone }}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressLbl: {
        en: 'Address',
        es: 'Dirección',
      },
      phoneLbl: {
        en: 'Phone',
        es: 'Teléfono',
      },
    };
  },
  computed: {
    addressLabel() {
      return this.addressLbl[this.$store.state.locale];
    },
    phoneLabel() {
      return this.phoneLbl[this.$store.state.locale];
    },
    address() {
      return this.$store.state.contactInfo.address;
    },
    city() {
      return this.$store.state.contactInfo.city;
    },
    country() {
      return this.$store.state.contactInfo.country;
    },
    phone() {
      return this.$store.state.contactInfo.phone;
    },
    cellphone() {
      return this.$store.state.contactInfo.cellphone;
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
