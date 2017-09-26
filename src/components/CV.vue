<template>
  <section>
    <profile-info :info="personalData"></profile-info>
    <contact-info :info="contactInfo"></contact-info>
    <profile :info="profile"></profile>
    <experience></experience>
  </section>
</template>

<script>
import ProfileInfo from './ProfileInfo';
import ContactInfo from './ContactInfo';
import Profile from './Profile';
import Experience from './Experience';

export default {
  name: 'cv',
  data() {
    return {
      personalData: {
        name: 'Ivan Amortegui',
        id: '80.039.249',
        idType: 'CC',
        birthDate: new Date(1982, 0, 23),
      },
      contactInfo: {
        address: 'Calle 56 # 35a - 56 Apto 501',
        city: 'Bogota, Colombia',
        phone: '(+571) 3873612',
        cellPhone: '(+57) 3002829854',
      },
      profile: {
        profile: 'I am a creative and curious person, driven by digital product design, development and management. Experienced front end developer, currently involved in technical leadership and product management.',
      },
    };
  },
  components: {
    ProfileInfo,
    ContactInfo,
    Profile,
    Experience,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
