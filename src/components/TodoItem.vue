<template>
  <div>
    <input :id="task.title + task.index" type="checkbox" :checked="task.completed" @click="$emit('completed-changed')"/>
    <label :for="task.title + task.index" :class="{ completed: task.completed }">{{ task.title }}</label>
    <button @click="$emit('delete-task')">Delete</button>
  </div>
</template>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>

<script>
export default {
  name: "TodoItem",
  props: {
    task: {
      type: Object
    },
  },
};
</script>