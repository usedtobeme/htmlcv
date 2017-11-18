<template>
  <div>
    <h4>
      Contact Info
    </h4>
    <form>
      <label for="address">Address:</label>
      <input
        id="address"
        :value="address"
        @input="updateEntry({
          path: `contactInfo/address`,
          value: $event.target.value,
        })"
      />
      <label for="city">City:</label>
      <input
        id="city"
        :value="city"
        @input="updateEntry({
          path: `contactInfo/city`,
          value: $event.target.value,
        })"
      />
      <label for="country">Country:</label>
      <input
        id="country"
        :value="country"
        @input="updateEntry({
          path: `contactInfo/country`,
          value: $event.target.value,
        })"
      />
      <label for="phone">Phone:</label>
      <input
        id="phone"
        :value="phone"
        @input="updateEntry({
          path: `contactInfo/phone`,
          value: $event.target.value,
        })"
      />
      <label for="cellphone">Cellphone</label>
      <input
        id="cellphone"
        :value="cellphone"
        @input="updateEntry({
          path: `contactInfo/cellphone`,
          value: $event.target.value,
        })"
      />
    </form>
    <contact-info></contact-info>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import ContactInfo from './ContactInfo';

  export default {
    name: 'edit-contact-info',
    computed: {
      ...mapState({
        address: state => state.contactInfo.address,
        city: state => state.contactInfo.city,
        country: state => state.contactInfo.country,
        phone: state => state.contactInfo.phone,
        cellphone: state => state.contactInfo.cellphone,
      }),
    },
    methods: {
      ...mapActions([
        'updateEntry',
      ]),
    },
    components: {
      ContactInfo,
    },
  };
</script>
