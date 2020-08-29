<template>
  <div>
    <h1>HTTP Lesson</h1>
    <div>
      <label>Username</label>
      <label>
        <input type="text"  v-model="user.username">
      </label>
    </div>
    <div>
      <label>E-mail</label>
      <label>
        <input type="text" v-model="user.emile" >
      </label>
    </div>
    <button @click="submitData">Submit</button>
    <button @click="GetUsers">GetUsers</button>
    <button @click="deleteUser">Delete user</button>
    <button @click="updateUser">Update User</button>
    <hr>
    <ul>
      <li v-for="(user, index) in users" :key="index">{{user}}</li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      user: {
        username: '',
        emile: ''
      },
      users: [],
    }
  },
  methods: {
    submitData() {
      this.$http.post('https://http-lesson-vue-bd4aa.firebaseio.com/users.json', this.user)
      .then((res) => {
        console.log(res)
      }, error => {
        console.log(error)
      })
      console.log(this.user)
    },
    GetUsers() {
      this.$http.get('https://http-lesson-vue-bd4aa.firebaseio.com/users.json')
      .then((res) => {
        console.log(res, 'Response')
        return res.json()
      }).then((res)=>{
        console.log(res, 'JSON');
        Object.values(res).forEach(u=>this.users.push(u))
      })
    },
    deleteUser() {
      this.$http.delete('https://http-lesson-vue-bd4aa.firebaseio.com/users/-MFt3EyUAoVd3wZyTW_d.json');
    },

    updateUser(){
      this.$http.put('https://http-lesson-vue-bd4aa.firebaseio.com/users/-MFt3HWefsrfyeBSOtIY.json', {
        username: 'Aleksandros',
        emile: '8788787878787878'
      })
      .then((res)=>
      console.log(res) )
    }
  }
}
</script>

<style>

</style>
