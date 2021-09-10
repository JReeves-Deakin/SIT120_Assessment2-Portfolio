<template>
    <div class="Component_container" :style="style">
        {{text}}
        <button @click="Alert()"> Click me! </button>
    </div>
</template>

<script>
export default {
    props:{
        text: String,
    },
    methods:{
        Alert: function(){
            alert("You have clicked on " + this.text)
        },
    }
}
</script>

<style scoped>

.Component_container{
    background: rgb(175, 175, 175);
    margin: 10px;
    display: flex;
    justify-content: space-around;
    border-radius: 24px;
    padding: 5px 0;
    border: solid 2px black;
}

</style>
