<template>
  <ul v-if="tasks.length > 0">
    <li v-for="(task, index) in tasks" :key="index"><TodoItem :task="{ ...task, index }" @delete-task="$emit('delete-task', index)" @completed-changed="$emit('completed-changed', index)"/></li>
  </ul>
  <p v-else><b>Add new tasks!</b></p>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
</style>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  props: {
    tasks: {
      type: Array,
    },
  },
  components: {
    TodoItem,
  },
};
</script>