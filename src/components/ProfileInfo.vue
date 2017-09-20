<template>
  <div>
    <h1>{{name}}</h1>
    <p>{{idType}}: {{id}}</p>
    <p>{{birthDate}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.profileInfo.name;
    },
    idType() {
      return this.$store.state.profileInfo.idType;
    },
    id() {
      return this.$store.state.profileInfo.id;
    },
    birthDate() {
      return this.$store.state.profileInfo.birthDate;
    },
  },
};
</script>
