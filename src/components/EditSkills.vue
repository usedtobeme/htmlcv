<template>
  <div>
    <form>
      <ul>
        <li v-for="(item, key) in skills" :key="key">
          <label>Skill:</label>
          <input
            :value="item.name"
            @input="updateEntry({
              path: `skills/${key}/name`,
              value: $event.target.value,
            })"
          />
          <label>Score:</label>
          <input
            type="number"
            :value="item.score"
            @input="updateEntry({
              path: `skills/${key}/score`,
              value: $event.target.value,
            })"
          />
          <button @click="removeEntry(`skills/${key}`)">remove</button>
        </li>
      </ul>
      <button @click="addNewSkill">+</button>
    </form>
    <skills></skills>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Skills from './Skills';

  export default {
    computed: {
      ...mapState({
        skills: state => state.skills,
      }),
    },
    methods: {
      ...mapActions([
        'addNewSkill',
        'removeEntry',
        'updateEntry',
      ]),
    },
    components: {
      Skills,
    },
  };
</script>
