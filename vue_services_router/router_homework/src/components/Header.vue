<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <router-link
                        class="nav-link nav-item"
                        style="cursor: pointer"
                        active-class="active"
                        exact
                        tag="li"
                        to="/"
                >
                    Головна
                </router-link>
                <router-link
                        class="nav-link nav-item"
                        style="cursor: pointer"
                        active-class="active"
                        tag="li"
                        to="/contacts"
                >
                    Контакти
                </router-link>
                <router-link
                        class="nav-link nav-item"
                        style="cursor: pointer"
                        active-class="active"
                        tag="li"
                        to="/projects"
                >
                    Проекти
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>