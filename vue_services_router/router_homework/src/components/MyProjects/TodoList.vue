<template>
    <div>
        <h3>Список усього, що прийшло тобі в голову</h3>
        <div v-for="(doitem, i) in arrtodo" :key="i">
            <TodoItem
                    :doitem='doitem'
                    :index ='i'
                    @done="done(index)"
            />
        </div>
    </div>
</template>



<script>
    import TodoItem from 'TodoItem.vue'


    export default {
        name: 'TodoList',

        components: {
            TodoItem,
        },

        props: {
            arrtodo: {
                type: Array,
                required: true,
                default: null
            },
        },

        methods: {
            done(index) {
                this.$emit('done', index)
            }
        },

    }
</script>