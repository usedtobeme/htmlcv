<template>
  <div class="wcv-experience">
    <h4>{{ experienceLabel }}</h4>
    <ul class="wcv-list">
      <el-row
        :tag="'li'"
        :gutter="10"
        :type="'flex'"
        :justify="'start'"
        v-for="(item, key) in experience" 
        :key="key" 
        class="wcv-list--item"
      >
        <el-col class="wcv-list--content" :sm="20">
          <h5>{{ positionLabel }}</h5>
          <p>{{ item.position }}</p>
        </el-col>
        <el-col class="wcv-list--content" :sm="20">
          <h5>{{ companyLabel }}</h5>
          <p>{{ item.company }}</p>
        </el-col>
        <el-col class="wcv-list--content" :sm="10">
          <h5>{{ startTimeLabel }}</h5>
          <p>{{ item.startTime }}</p>
        </el-col>
        <el-col class="wcv-list--content" :sm="10" v-if="item.endTime">
          <h5>{{ endTimeLabel }}</h5>
          <p>{{ item.endTime }}</p>
        </el-col>
        <el-col class="wcv-list--content" :sm="20">
          <h5>{{ descriptionLabel }}</h5>
          <p>{{ item.desc }}</p>
        </el-col>
      </el-row>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experienceLbl: {
        en: 'Work Experience',
        es: 'Experiencia Laboral',
      },
      companyLbl: {
        en: 'Company',
        es: 'Empresa',
      },
      positionLbl: {
        en: 'Position',
        es: 'Cargo',
      },
      startTimeLbl: {
        en: 'From',
        es: 'Desde',
      },
      endTimeLbl: {
        en: 'Until',
        es: 'Hasta',
      },
      descriptionLbl: {
        en: 'Description',
        es: 'Descripción',
      },
    };
  },
  computed: {
    experienceLabel() {
      return this.experienceLbl[this.$store.state.locale];
    },
    companyLabel() {
      return this.companyLbl[this.$store.state.locale];
    },
    positionLabel() {
      return this.positionLbl[this.$store.state.locale];
    },
    startTimeLabel() {
      return this.startTimeLbl[this.$store.state.locale];
    },
    endTimeLabel() {
      return this.endTimeLbl[this.$store.state.locale];
    },
    descriptionLabel() {
      return this.descriptionLbl[this.$store.state.locale];
    },
    experience() {
      return this.$store.getters.experience;
    },
  },
};

</script>

<style lang="postcss">
.wcv-experience {
  padding: 1em;
}

.wcv-list {
  list-style: none;
}

.wcv-list--item {
  margin: 1em 0;
  flex-flow: row wrap
}

.wcv-list--content {
  margin: 0.2em 0;
}

</style>

