<template>
  <div>
    <h4>Education</h4>
    <ul>
      <li v-for="(item, key) in education" :key="key">
        <strong>{{ item.degreeLoc }}</strong>
        <p>{{ item.university }}</p>
        <p>{{ item.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.getters.education;
    },
  },
};
</script>
