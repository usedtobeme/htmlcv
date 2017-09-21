<template>
  <div>
    <form>
      <ul>
        <li :v-for="experience" :key="id">
          <label>Company:</label>
          <input :value="company" @input="updateCompany">
          <label>Start Time:</label>
          <input type="date" :value="startTime" @input="updateStartTime">
          <label>End time:</label>
          <input type="date" :value="endTime" @input="updateEndTime">
          <label>Position:</label>
          <input :value="position" @input="updatePosition">
          <label>Description:</label>
          <textarea :value="description" @input="updateDescription"></textarea>

        </li>
      </ul>
    </form>
  </div>
</template>
