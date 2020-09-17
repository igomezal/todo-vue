<template>
  <div>
    <h1>To-Do Vue</h1>
    <AddTodoItem @create-new-task="createNewTask" />
    <TodoList :tasks="tasks" @delete-task="deleteTask" @completed-changed="updateCompletedTask" />
  </div>
</template>

<script>
import AddTodoItem from "./components/AddTodoItem.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "ToDoApp",
  components: {
    AddTodoItem,
    TodoList,
  },
  data: () => ({
    tasks: [],
  }),
  methods: {
    createNewTask(newTask) {
      this.tasks.push({ title: newTask, completed: false });
    },
    updateCompletedTask(taskIndex) {
      this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
    },
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
  },
};
</script>