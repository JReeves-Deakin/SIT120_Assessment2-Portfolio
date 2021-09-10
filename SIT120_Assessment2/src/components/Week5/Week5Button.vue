<template>
    <div class="button_cont" :style="'background:' + Color" @click="EnableComicSans">
        {{text}}
    </div>
</template>

<script>

export default {
    name: 'PopUp',
    props:{
        text: String,
        Color: String,
    },
    methods:{
        EnableComicSans: function(){ // MY FAVOURITE FONT!
            if(!this.isComicSans) {
                this.isComicSans = true;
                document.documentElement.style.setProperty("--font", "'Comic Sans MS', 'Comic Sans', monospace");
                alert("Great, now everything is comic sans...");
            }
        }
    },
    data(){
        return{
            isComicSans: false,
        }
    }
}
</script>

<style scoped>
.button_cont{
    width:fit-content;
    height: auto;
    background: rgb(240, 190, 236);
    padding: 2px 10px;
    border-radius: 24px;
    border: solid 2px black;
    font-size: 1.2em;
    margin: 0 auto;
    transition: filter 0.3s;
    transition: transform 0.3s;
    font-weight: 800;
    user-select: none;
}

.button_cont:hover{
   cursor: pointer;
   filter: brightness(105%);
   transform: rotate(-1deg) translateY(-5px) scale(105%);
}
</style>
