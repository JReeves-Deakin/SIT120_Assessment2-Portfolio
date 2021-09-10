<template>
    <button @click="EmitIncrement"> Click me to emit an event </button>
</template>

<script>
export default{
    methods:{
        EmitIncrement: function(){
            this.$emit("clicked")
        }
    },
}
</script>
