<template>
  <div>
    <form @submit="addTask">
      <label for="add-todo">Task</label>
      <input v-model="newTask" id="add-todo" />
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodoItem",
  data: () => ({
    newTask: '',
  }),
  methods: {
    addTask() {
      event.preventDefault();
      if(this.newTask) {
        this.$emit('create-new-task', this.newTask);
        this.newTask = '';
      } else {
        // Error or empty
      }
    }
  }
};
</script>