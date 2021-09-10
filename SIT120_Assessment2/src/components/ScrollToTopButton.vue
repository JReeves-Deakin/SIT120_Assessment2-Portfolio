<template>
    <transition name='fade'>
        <div class="ToTopbutton" @click="ScrollToTop()" v-if="scrollpos > 0.03">
            <span class="material-icons">expand_less</span>
        </div>
    </transition>
</template>

<script>
export default {
    props:{

    },
    data(){
        return{
            scrollpos: 0,
            ScrollMax_height: 0,
        }
    },
    mounted(){
        this.ScrollMax_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        window.addEventListener('scroll', this.OnScroll);
    },
    methods: {
        ScrollToTop: function(){
            window.scroll(0, 0);
        },
        OnScroll: function(){
            this.scrollpos = (window.scrollY / this.ScrollMax_height);
        },
    },
}
</script>

<style scoped>

.ToTopbutton{
    z-index: 99;
    width: var(--ToTopButtonSize);
    height: var(--ToTopButtonSize);
    margin: var(--ToTopButtonSizeMargin);
    position: fixed;
    bottom: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    border: inset 3px black;
    user-select: none;    

    transition: all 0.5s ease-in-out;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
}

.ToTopbutton span{
    transition: all .3s ease;
    font-size: calc(var(--ToTopButtonSize) * 0.8);
    font-weight: 800;
}

.ToTopbutton:hover{
    cursor: pointer;
    transform: scale(105%);
    background: rgba(255, 255, 255, 0.5);
    
}

.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(120%);
  opacity: 0;
}


</style>