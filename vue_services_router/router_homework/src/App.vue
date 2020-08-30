<template>
  <div>
    <h1>Привіт! Це сайт Візитка :) </h1>
    <Header/>
    <router-view/>
  </div>
</template>

<script>

import Header from "./components/Header";
export default {
  name: 'App',
  components: {Header},
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
