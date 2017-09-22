<template>
  <div>
    <h4>
      Contact Info
    </h4>
    <form>
      <label for="address">Address:</label>
      <input id="address" :value="address" @input="updateAddress($event.target.value)">
      <label for="city">City:</label>
      <input id="city" :value="city" @input="updateCity($event.target.value)">
      <label for="country">Country:</label>
      <input id="country" :value="country" @input="updateCountry($event.target.value)">
      <label for="phone">Phone:</label>
      <input id="phone" :value="phone" @input="updatePhone($event.target.value)">
      <label for="cellphone">Cellphone</label>
      <input id="cellphone" :value="cellphone" @input="updateCellphone($event.target.value)">
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
        'updateAddress',
        'updateCity',
        'updateCountry',
        'updatePhone',
        'updateCellphone',
      ]),
    },
    components: {
      ContactInfo,
    },
  };
</script>
