<template>
  <div>
    <input type="text" v-model="text">
    <button @click="do_it()" v-if="arr.length <= 10" >Do it!</button>
    <div v-if="arr.length >= 11">Ти спочатку це зроби... </div>


    <ol>
      <li v-for="(elem, i) in arr" :key="i">
        <span>{{elem}} </span>
        <button @click="remove(i)">I did it</button>
      </li>
    </ol>

  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      text: '',
      arr: [],
    }
  },

  methods: {
    do_it() {
      this.arr.push(this.text)
    },
    remove(i) {
      this.arr.splice(i,1)
    }
  },

}
</script>
  
// <style >
//   li {
//     list-style-type: none; 
//   }
// </style>