<template>
    <div class="navbar_content">

        <!--If We're loading the link to the current page, 
            Apply correct ID so user cant click on link to current page -->
        <div class="large_navbar_item" v-for="index in 7" 
            :key="index" v-bind:style="IscurrentPage(index) ? style : '' "  
            v-bind:id="IscurrentPage(index) ? 'CurrentPage' : 'NotCurrentPage' " 
            @click="ChangePage(index);"> 
            Week {{index}} 
        </div>

        <!-- Same as above, with a different class -->
        <div class="DropDown_container" v-bind:style="OpenDropDown ? DropDownBoxStyle : '' " @click="ToggleDropDown()">
            Select week<hr>
            <div class="DropDown_item" v-for="index in 7" :key="index" 
            v-bind:id="IscurrentPage(index) ? 'CurrentPage' : 'NotCurrentPage' " 
            @click="ChangePage(index);"> 
            Week {{index}} 
        </div>
        </div>

    </div>
</template>

<script>
export default {
    created(){
        window.addEventListener('scroll', this.OnScroll);
    },
    data(){
        return{
            style:{
                borderBottom: '3px solid',
                borderColor: 'white',
                margin: '3px 0 0 0',
            },
            DropDownBoxStyle:{
                height: '253px'
            },
            currentPage: 1,
            OpenDropDown: false,
        }
    },
    methods:{
        IscurrentPage: function(ref){
            if("week" + ref == this.$route.name) { return true }
            else{ return false }
        },
        ChangePage: function(ref){
            if(ref != this.currentPage)
            {
                this.$router.push({ path: 'Week'+ref })
                this.currentPage = ref;
                this.DropBoxOpen = false;
            }
        },
        ToggleDropDown(){
            this.OpenDropDown = !this.OpenDropDown
        },
        OnScroll: function(){ //CLosing to dropdown box when the user scrolls 
            if(this.OpenDropDown){
                this.OpenDropDown=false;
            }
        }
    },
}
</script>

<style scoped>
.navbar_content{
    z-index: 2; /*  Z-index is not my friend */
    position: absolute;
    top: 0;
    left: 0;
    height: var(--NavBarHeight);
    width: 100%;
    background: darkgray;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: solid 2px black;
    border-width: 2px 0px 0px 0px;
}

.large_navbar_item{
    font-size: 1.3em;
    font-weight: 600;
    text-align: center;
    transition: transform 0.3s;
    user-select: none;
}

.large_navbar_item#NotCurrentPage:hover{
    cursor: pointer;
    transform: translateY(-3px);
}

.DropDown_container {
    display: none;
    z-index: 99;
    width: 120px;
    height: 100%;
    background: gray;
    margin: auto auto  0 0;
    text-align: center;
    overflow: hidden;
    transition: height 0.4s ease-in-out;
}

.DropDown_container {
    display: none;
    z-index: 99;
    width: 120px;
    height: 30px;
    background: gray;
    margin: auto auto  0 0;
    text-align: center;
    overflow: hidden;
    transition: height 0.4s ease-in-out;
}
.DropDown_container:hover {
    cursor: pointer;
}

.DropDown_container#NotCurrentPage:hover {
    cursor: pointer;
}

.DropDown_item{
    margin: 0 auto;
    height: 20px;
    width: 100%;
    padding: 5px 0;
    transition: background-color 0.3s ease-in-out;
}

.DropDown_item#CurrentPage{
    background-color: rgb(148, 147, 147);
    width: 100%;
}

.DropDown_item#NotCurrentPage:hover{
    cursor: pointer;
    background-color: rgb(182, 182, 182);
}

@media only screen and (max-width: 700px) {
  .large_navbar_item{
    display: none;
  }

  .DropDown_container{
    display: block;
  }
}

</style>
