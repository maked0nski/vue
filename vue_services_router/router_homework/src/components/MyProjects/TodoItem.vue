<template>
    <ul>
        <li>
            {{index+1}}. {{doitem}}
            <button @click="done(index)">Я зробив це</button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'TodoItem',

        props: {
            doitem: {
                type: String,
                required: true,
                default: null
            },
            index: {
                type: Number,
                required: true,
                default: null
            }
        },
        methods: {
            done(index) {
                console.log('todo item ' + index);
                this.$emit('done', index)
            }
        },
    }
</script>

