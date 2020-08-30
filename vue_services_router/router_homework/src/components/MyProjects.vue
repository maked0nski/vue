<template>
    <div>
        <AddTodo :arrtodo="arrtodo"/>
        <TodoList
                :arrtodo="arrtodo"
                @done = "done"
        />
    </div>
</template>

<script>
    import AddTodo from './MyProjects/AddTodo.vue'
    import TodoList from './MyProjects/TodoList.vue'


    export default {
        name: 'MyProjects',

        data() {
            return {
                arrtodo: ['перше','друге'],
            }
        },

        components: {
            AddTodo,
            TodoList,
        },

        methods: {
            done(index) {
                this.arrtodo.splice(index, 1)
            }
        },
    }
</script>