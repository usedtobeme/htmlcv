<template>
  <div class="wcv-education">
    <h4>{{ educationLabel }}</h4>
    <ul class="wcv-list">
      <el-row
        class="wcv-list--item"
        :tag="'li'"
        :type="'flex'"
        :justify="'start'"
        :gutter="10"
        v-for="(item, key) in education"
        :key="key"
      >
        <el-col
          class="wcv-list--content wcv-list--content--bold"
          :tag="'p'"
          :sm="20"
        >{{ item.degreeLoc }}</el-col>
        <el-col
          class="wcv-list--content"
          :tag="'p'"
          :sm="20"
        >{{ item.university }}</el-col>
        <el-col
          class="wcv-list--content"
          :tag="'p'"
          :sm="20"
        >{{ item.date }}</el-col>
      </el-row>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      educationLbl: {
        en: 'Education',
        es: 'Educación',
      },
    };
  },
  computed: {
    educationLabel() {
      return this.educationLbl[this.$store.state.locale];
    },
    education() {
      return this.$store.getters.education;
    },
  },
};
</script>

<style lang="postcss">
.wcv-education {
  padding: 1em;
}

.wcv-list--content--bold {
  font-weight: 900;
}
</style>

