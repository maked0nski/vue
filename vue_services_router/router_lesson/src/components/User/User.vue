<template>
    <div>
        <h1>User page</h1>
        <button @click="gotohome">Go to home</button>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'User',

        data() {
            return {
                id: ''
            }
        },

        methods: {
            gotohome() {
                this.$router.push({path: '/'})
            }
        }
    }
</script>