<template>
  <div>
    <form>
      <ul>
        <li v-for="(item, key) in education" :key="key">
          <label>Degree:</label>
          <input :value="item.degree.en" @input="updateEntry({ path: `education/${key}/degree/en`, value: $event.target.value })">
          <label>Titulo:</label>
          <input :value="item.degree.es" @input="updateEntry({ path: `education/${key}/degree/es`, value: $event.target.value })">
          <label>Date:</label>
          <input type="date" :value="item.date" @input="updateEntry({ path: `education/${key}/date`, value: $event.target.value })">
          <label>University:</label>
          <input :value="item.university" @input="updateEntry({ path: `education/${key}/university`, value: $event.target.value })">
          <button @click="removeEntry(`education/${key}`)">remove</button>
        </li>
      </ul>
      <button @click="addNewEducation">+</button>
    </form>
    <education></education>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Education from './Education';

export default {
  name: 'edit-experience',
  computed: {
    ...mapState({
      education: state => state.education,
    }),
  },
  methods: {
    ...mapActions([
      'updateEntry',
      'removeEntry',
      'addNewEducation',
    ]),
  },
  components: {
    Education,
  },
};
</script>
