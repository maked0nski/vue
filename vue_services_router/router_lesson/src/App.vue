<template>
<div>
    <h1>Router Lesson</h1>
    <Header/>
    <router-view/>
</div>
</template>

<script>


import Header from "./components/Header";

export default {
  name: 'App',
    components: {Header},
    comments: {
      Header
  }

}
</script>

<style>

</style>
