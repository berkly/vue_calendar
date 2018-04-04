<template>
<div class="container">
      <h1>Workers</h1>
      <draggable v-model="workers">
        <div v-for="worker in workers" :key="worker.name" class="list">
          {{worker.name}}
        </div>
      </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    components: {
        draggable
    },
    data() {
      return {
          workers: [
            {
                name: "Егор"
            },
            {
                name: "Михаил"
            },
            {
                name: "Максим"
            },
            {
                name: "Евгений"
            },
          ]
      }
  }
}
</script>

