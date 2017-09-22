<template>
  <div>
    <form>
      <ul>
        <li v-for="(item, key) in experience" :key="key">
          <label>Company:</label>
          <input :value="item.company" @input="updateCompany">
          <label>Start Time:</label>
          <input type="date" :value="item.startTime" @input="updateStartTime">
          <label>End time:</label>
          <input type="date" :value="item.endTime" @input="updateEndTime">
          <label>Position:</label>
          <input :value="item.position" @input="updatePosition">
          <label>Description:</label>
          <textarea :value="item.description.en" @input="updateDescription"></textarea>
          <label>Descripción</label>
          <textarea cols="30" rows="10" :value="item.description.es" @input="updateDescripcion"></textarea>
        </li>
      </ul>
      <button @click="addNewExperience">+</button>
    </form>
    <experience></experience>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Experience from './Experience';

export default {
  name: 'edit-experience',
  computed: {
    ...mapState({
      experience: state => state.experience,
    }),
  },
  methods: {
    ...mapActions([
      'updateCompany',
      'updateStartTime',
      'updateEndTime',
      'updatePosition',
      'updateDescription',
      'updateDescripcion',
      'addNewExperience',
    ]),
  },
  components: {
    Experience,
  },
};
</script>
