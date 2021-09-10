<template>
    <backToTopButton/>
    <navbar/>
  <div class="page" id="page">
    <div class="page_content">
      <SecondaryNavbar :ItemAmount="TaskAmount"/>

      <router-view/>
    </div>
  </div>
  
</template>

<script>
import navbar from './components/navbar.vue'
import backToTopButton from './components/ScrollToTopButton.vue'
import SecondaryNavbar from "./components/Secondary_navbar.vue"

export default {
  components:{
    navbar,
    SecondaryNavbar,
    backToTopButton,
  },
  data(){
    return{
      TaskAmount: 4, 
    }
  },
  watch:{
    '$route': 'SetTaskAmount'
  },
  methods:{
    SetTaskAmount: function(){
      if(this.$route.name == "week4"){ this.TaskAmount = 2; }
      else { this.TaskAmount = 4; }
      console.log(this.$route.id)
    },
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

:root{
  
  --NavBarHeight: 50px; /* Week navigation bar  */
  --ProgressBarHeight: 3px; /* height of progress bar */
  --SecondaryNavBarHeight: 30px; /* Task navigation bar  */

  --PageHeight: calc(100vh - var(--SecondaryNavBarHeight) ); /* Calculated page height  */

  --ToTopButtonSize: 42px;
  --ToTopButtonSizeMargin: 10px;
  --font: 'Poppins', sans-serif;
  
  font-family: var(--font);
}

.page{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
}

.page_content{
  padding-top: var(--NavBarHeight);
  width: 100%;
  height: fit-content;
}

html {
  scroll-behavior: smooth;
}

/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-left: solid 2px black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: darkgrey;
  border-left: solid 2px black;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(136, 136, 136);
}

@media only screen and (max-width: 700px) {
  :root{
    --NavBarHeight: 30px;
  }
}

@media only screen and (max-width: 500px) {
  :root{
    font-size: 0.9em;
    --ToTopButtonSize: 32px;
    --ToTopButtonSizeMargin: 5px;
  }
}
</style>
