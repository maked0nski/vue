<template>
  <div>
      <h1>Список справ до виконання</h1>
      <input type="text" placeholder="Що, ще ти собі надумав?" v-model="text" v-on:keyup.enter="additem">
      <button @click="additem" >Just do it</button>

  </div>
</template>

<script>
export default {
    name: 'AddTodo',
    
    methods: {
      additem() {
        this.arrtodo.push(this.text)
      }
    },

    props: {
      arrtodo: {
            type: Array,
            required: true,
            default: null
        }
    }
}
</script>

