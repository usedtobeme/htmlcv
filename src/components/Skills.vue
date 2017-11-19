<template>
  <div class="wcv-skills">
    <h4>{{ skillsLabel }}</h4>
    <el-row :tag="'ul'" class="wcv-list wcv-list--wrap" :type="'flex'" :gutter="5">
      <el-col
        :tag="'li'"
        :sm="8"
        :class="`wcv-list--item bg-${item.score}`"
        v-for="(item, key) in skills"
        :key="key"
      >
        {{ item.name }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        skillsLbl: {
          en: 'Skills',
          es: 'Habilidades',
        },
      };
    },
    computed: {
      skillsLabel() {
        return this.skillsLbl[this.$store.state.locale];
      },
      skills() {
        return this.$store.getters.skills;
      },
    },
  };
</script>

<style lang="postcss">
.wcv-skills {
  padding: 1em;
}

.wcv-list--wrap {
  flex-flow: row wrap;
}
</style>

