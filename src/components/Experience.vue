<template>
  <div>
    <h4>Experience</h4>
    <ul>
      <li v-for="(item, key) in experience" :key="key">
        <div>
          <h5>{{ companyLabel }}</h5>
          <p>{{ item.company }}</p>
        </div>
        <div>
          <h5>{{ positionLabel }}</h5>
          <p>{{ item.position }}</p>
        </div>
        <div>
          <h5>{{ startTimeLabel }}</h5>
          <p>{{ item.startTime }}</p>
        </div>
        <div v-if="item.endTIme">
          <h5>{{ endTimeLabel }}</h5>
          <p>{{ item.endTime }}</p>
        </div>
        <div>
          <h5>{{ descriptionLabel }}</h5>
          <p>{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyLbl: {
        en: 'Company',
        es: 'Empresa',
      },
      positionLbl: {
        en: 'Position',
        es: 'Cargo',
      },
      startTimeLbl: {
        en: 'Start date',
        es: 'Desde',
      },
      endTimeLbl: {
        en: 'End date',
        es: 'Hasta',
      },
      descriptionLbl: {
        en: 'Description',
        es: 'Descripción',
      },
    };
  },
  computed: {
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
