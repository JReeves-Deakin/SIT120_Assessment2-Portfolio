<template>
    <div class="nav_container">
        <!-- Navbar item links -->
        <div class="item" v-for="index in ItemAmount" :key="index" >
            <a :href="'#task'+index"> Task {{index}} </a>
        </div>

        <!-- Progress bar that fills as the user scrolls -->
        <div class="ProgressBar">
            <div class="progressBar_fill" v-bind:style="ProgressBarFil_style">
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props:{
        ItemAmount: Number,
    },
    created(){
        window.addEventListener('scroll', this.OnScroll);
        window.addEventListener('resize', this.OnResize); // This was a painful one to figure out
    },
    data(){
        return{
            ProgressBarFil_style:{
                width: "0",
            },
            ScrollMax_height: 0,
            window_size: .0,
        }
    },
    methods:{
        OnScroll: function(){
            this.ScrollMax_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            this.ProgressBarFil_style.width  = (window.scrollY / this.ScrollMax_height) * 100 + "%"
        },
        OnResize: function(){
            this.ScrollMax_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            this.ProgressBarFil_style.width  = (window.scrollY / this.ScrollMax_height) * 100 + "%"
        },
    }
}
</script>


<style scoped>
.nav_container{
    z-index: 1; /*  Z-index is not my friend */
    position: sticky;
    top:0;
    background: rgb(4, 5, 4);
    width: 100%;
    height: 30px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    color: white;
}

.item{
    user-select: none;
}

.item a{
    color: inherit;
    text-decoration: none;
    height: 100%;
    padding: 0px 10px;
    transition: background-color 0.3s ease-out;
}

.item a:hover{
    display: block;
    cursor: pointer;
    background-color: rgb(44, 44, 44);
}

.ProgressBar{
    position: absolute;
    top: 100%;
    height: var(--ProgressBarHeight);
    width: 100%;
    background: rgb(255, 255, 255);
    border-bottom: solid 1px black;
    overflow-x: hidden;
}

.progressBar_fill{
    width: 100%;
    height: 100%;
    background: blueviolet;
}
</style>