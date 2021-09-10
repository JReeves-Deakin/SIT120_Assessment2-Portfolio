<template>
    <div class="task_container" :id="'task'+TaskID" v-bind:style="style">

        <div class="Task_text" v-bind:style="Task_textStyle">
            <h2> Task {{TaskID}} </h2>
            <h4> {{ TaskDescription }} </h4>
            <h4> {{ TaskDescriptionLine2 }} </h4>
            <p> {{ TaskResponse }} </p> <br>
            <slot name="TaskTextSlot"/>
        </div>
        
        <div class="Task_PageContainer" v-if="IncludeFakePage">

            <div class="fakePage">
                <slot name="FakePageSlot"> Nothing here! </slot>
            </div>

        </div>
    </div>
</template>

<script>
export default{
    props:{
        TaskID: Number,
        TaskDescription: String,
        TaskDescriptionLine2: String,
        TaskResponse: String,
        IncludeFakePage: Boolean, 
    },
    data() {
        return{
            style:{
                background: '',
            },
            Task_textStyle:{
                borderWidth: '',
                borderColor: '',
            }
        }
    },
    created(){
        // We're making an even page, change the background and border colour
        if(this.TaskID % 2 == 0) {
            this.style.background = 'rgb(192, 192, 192)';
            this.Task_textStyle.borderColor = 'lightgray'
        }

        // We're making a page that only includes text content, change the borders
        if(!this.IncludeFakePage) {
            this.Task_textStyle.borderWidth = '0px 4px 0px 4px'
        }
    }
    
}
</script>


<style>
.task_container{
    scroll-margin-top: var(--SecondaryNavBarHeight);
    height: var(--PageHeight);
    background: lightgray;

    display: flex;
}

.Task_text{
    width: 50%;
    border: solid 2px rgb(192, 192, 192);
    border-width: 0px 4px 0px 0px;
    text-align: center;
    margin: 0 auto;
    padding: 10px 20px;
    word-break: auto;
}

.Task_text h4{
    margin: 0;
}

.Task_text h2{
    margin-bottom: 0;
}

.Task_text p{
    margin-bottom: 0;
}

.Task_PageContainer{
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    width: 50%;
}

.fakePage{
    width: 50%;
    height: 65%;
    min-width: 300px;
    min-height: 400px;
    max-height: 800px;
    
    background: white;
    border: solid 4px black;

    overflow-y: auto;

}

.fakePage h4{
   margin: 20px 0 5px;
}

.centered{
    margin: 0, auto;
    text-align: center;
}



@media only screen and (max-width: 650px) {
  .task_container {
    display:block;
    }

    .Task_PageContainer{
        margin-top: auto;
    }
  
  .Task_text{
      border: none;
      margin-bottom: 2%;
      padding: 0;
    }

  .Task_text{
      width: 90%;
    }

  .fakePage h4{
    margin-top: 0;
    margin-bottom: 5px;
    }
}

@media only screen and (max-height: 650px) {
  .fakePage{
    min-width: 300px;
    min-height: 0px;
    height: 40vh;
  }
}
</style>