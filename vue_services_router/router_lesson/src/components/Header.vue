<template>
    <ul class="nav nav-pills">
<!--        <li class="nav-item">-->
<!--            <router-link class="nav-link" active-class="active" exact to="/">Home</router-link>-->
<!--        </li>-->
        <router-link class="nav-link" style="cursor: pointer" active-class="active" exact tag="li" to="/">Home</router-link>
<!--        <li class="nav-item">-->
<!--            <router-link class="nav-link" active-class="active"  to="/user">User</router-link>-->
<!--        </li>-->
        <router-link class="nav-link" style="cursor: pointer" active-class="active" tag="li" to="/user">User</router-link>

    </ul>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>