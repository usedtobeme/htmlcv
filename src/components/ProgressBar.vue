<template>
  <div role="presentation" :style="progress">
  </div>
</template>

<script>
export default {
  props: ['progress'],
};
</script>

<style scoped>
div {
  height: 3px;
  border: 0px solid hsla(0, 0%, 40%, 0.3);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
