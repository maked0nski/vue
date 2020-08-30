<template>
    <div>
        <p>Counter is {{counter}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Result',

        // props:{
        //     counter:{
        //         type: Number,
        //     }
        // }

        computed:{
            counter(){
                return this.$store.state.counter
            }
        }
    }
</script>