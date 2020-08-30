<template>
    <div>
        <h1>Some user info</h1>
        <p>USER ID {{$route.params.id}}</p>
        <router-link
                tag="button"
                :to="{name:'UserEdit', params: {id: $route.params.id}}"
        >
            User Edit
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'UserInfo',
    }
</script>