<template>
  <header>
    <icon-button icon-name="home" button-url="/" icon-size="1.5"></icon-button>
    <div class="app-title">
      <h3>{{ appName }}</h3>
    </div>
    <icon-button
      icon-name="download" 
      :button-url="pdfPath" 
      icon-text-left="PDF"
    ></icon-button>
    <progress-bar :progress="styleProgress"></progress-bar>
  </header>
</template>

<script>
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
  background-color: hsla(55, 50%, 90%, 0.5);
  color: hsl(0, 0%, 0%);
  text-transform: uppercase;
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
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
