<template>
    <div>
        <h1>Vuex</h1>
        <Result/>
        <hr>
        <Counter/>
    </div>
</template>

<script>

import Result from "@/components/Result";
import Counter from "@/components/Counter";
export default {
  name: 'App',
  components: {
      Counter,
      Result
  },

  // data(){
  //     return{
  //         counter: 0,
  //     }
  // }
}
</script>

<style>
</style>
