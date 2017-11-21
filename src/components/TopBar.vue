<template>
  <header>
    <icon-button icon-name="home" button-url="/" icon-size="1.5"></icon-button>
    <div class="app-title">
      <h3>{{ appName }}</h3>
    </div>
    <ul class="options-list languages">
      <li class="clickable" v-if="locale !== 'en'" @click="setLocale('en')">EN</li>
      <li class="clickable" v-if="locale !== 'es'" @click="setLocale('es')">ES</li>
    </ul>
    <icon-button
      icon-name="download"
      :button-url="pdfPath"
      icon-text-left="PDF"
    ></icon-button>
    <progress-bar :progress="styleProgress"></progress-bar>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import 'vue-awesome/icons/home';
import 'vue-awesome/icons/download';
import IconButton from './IconButton';
import ProgressBar from './ProgressBar';

export default {
  props: ['app-name'],
  components: {
    IconButton,
    ProgressBar,
  },
  data() {
    return {
      pdfPath: '/assets/cv.pdf',
      pageProgress: 0,
    };
  },
  computed: {
    styleProgress() {
      return `border-left-width: ${this.pageProgress}vw`;
    },
    locale() {
      return this.$store.state.locale;
    },
  },
  methods: {
    ...mapActions([
      'setLocale',
    ]),
  },
};
</script>

<style scoped>
header {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: hsl(0, 0%, 0%);
  text-transform: uppercase;
  background-color: hsla(55, 50%, 90%, 0.9);
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
}

.options-list {
  list-style: none;
  padding: 0 1em;
}

.app-title {
  flex: 1 1 auto;
  text-align: left;
  padding: 0 1em;
}

h3 {
  letter-spacing: 3px;
  font-weight: 400;
}
</style>
