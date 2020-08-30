<template>
    <div>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        name: 'Counter',

        methods: {
            increment(){
                // this.$emit('updated', 1)
                this.$store.state.counter++
            },
            decrement(){
                // this.$emit('updated', -1)
                this.$store.state.counter--
            }
        }
    }
</script>