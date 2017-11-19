<template>
  <div class="cvi-definition-list">
    <dl class="wcv-dl">
      <dt class="wcv-dl--title">{{ addressLabel }}</dt>
      <dd class="wcv-dl--content">
        <p>{{ address }}</p>
        <p>{{ city }}, {{ country }}</p>
      </dd>
      <dt class="wcv-dl--title">{{ phoneLabel }}</dt>
      <dd>
        <p>{{ phone }}</p>
        <p>{{ cellphone }}</p>
      </dd class="wcv-dl--content">
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

<style lang="postcss">
.cvi-definition-list {
  padding: 1em;
}

.wcv-dl--title {
  font-size: 1.1em;
  font-weight: 900;
  margin-bottom: 0.2em;
  text-transform: uppercase;
}

.wcv-dl--content {
  margin-bottom: 1em;
}
</style>
