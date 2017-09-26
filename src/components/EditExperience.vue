<template>
  <div>
    <form>
      <ul>
        <li v-for="(item, key) in experience" :key="key">
          <label>Company:</label>
          <input :value="item.company" @input="updateEntry({ path: `experience/${key}/company`, value: $event.target.value })">
          <label>Start Time:</label>
          <input type="date" :value="item.startTime" @input="updateEntry({ path: `experience/${key}/startTime`, value: $event.target.value })">
          <label>End time:</label>
          <input type="date" :value="item.endTime" @input="updateEntry({ path: `experience/${key}/endTime`, value: $event.target.value })">
          <label>Position:</label>
          <input :value="item.position" @input="updateEntry({ path: `experience/${key}/position`, value: $event.target.value })">
          <label>Description:</label>
          <textarea :value="item.description.en" @input="updateEntry({ path: `experience/${key}/description/en`, value: $event.target.value })"></textarea>
          <label>Descripción</label>
          <textarea cols="30" rows="10" :value="item.description.es" @input="updateEntry({ path: `experience/${key}/description/es`, value: $event.target.value })"></textarea>
          <button @click="removeEntry(`experience/${key}`)">remove</button>
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
      'updateEntry',
      'removeEntry',
      'addNewExperience',
    ]),
  },
  components: {
    Experience,
  },
};
</script>
