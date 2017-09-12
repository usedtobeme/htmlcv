<template>
  <a class="button button-primary" :href="buttonUrl">
    <span class="button-text" v-if="iconTextLeft">{{ iconTextLeft }}</span>
    <icon :name="iconName" :scale="iconSize"/>
    <span class="button-text" v-if="iconTextRight">{{ iconTextRight }}</span>
  </a>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

export default {
  props: {
    iconName: String,
    buttonUrl: String,
    iconTextLeft: {
      default: false,
    },
    iconTextRight: {
      default: false,
    },
    iconSize: {
      default: 1.2,
    },
  },
  components: { Icon },
};
</script>
