<template>
  <div>
    <h4>Skillset</h4>
    <ul>
      <li v-for="(item, key) in skills" :key="key">
        {{ item.name }}: {{ item.score }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      skills() {
        return this.$store.getters.skills;
      },
    },
  };
</script>
