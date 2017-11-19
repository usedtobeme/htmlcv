<template>
  <main id="app">
    <top-bar app-name="Curriculum Vitae"></top-bar>
    <router-view></router-view>
  </main>
</template>

<script>
import TopBar from './components/TopBar';

export default {
  components: { TopBar },
  created() {
    this.$store.dispatch('getInitialState');
  },
};
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 5em;
}
</style>
