<template>
    <div class="content">
      
      <!-- Task 1 -->
      <TaskTemplate :TaskID="1"
      :TaskDescription="'Declarative Rendering'"
      :TaskResponse="'Utilizing decelarative rendering, this page allows for a customisable heading. This works by binding the style of the <h1></h1> to a style stored in data(). this style is altered by different functions when each input is triggered.'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>
          <div class="centered">
              <h4> Font settings </h4> <br>
              Text: <input type="text" v-model="textbox"/> <br>  <br> 

              <label for="Color">Colour:</label>
              <select name="Color" id="Color_select" @change="SetColor()">
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select> <br> 

              <label for="Font">Font:</label>
              <select name="Font" id="Fontselect" @change="SetFont()">
                  <option value="'Lucida Console', 'Courier New', monospace">Lucida console</option>
                  <option value="'Poppins', sans-serif">Poppins</option>
                  <option value="'Arial, Helvetica', sans-serif">Arial</option>
                  <option value="'Times New Roman', Times, serif">Times new roman</option>
              </select> <br> 

              Size: {{currentFontSize}}px
              <button @click="increaseFontSize()"> + </button>
              <button @click="DecreaseFontSize()"> - </button> <br>
              <br>
              Underline <input type="checkbox" id="underline" value="underline" @change="setFontStyle('underline', 'textDecoration')" checked> 
              italic <input type="checkbox" id="italic" value="italic" @change="setFontStyle('italic', 'fontStyle')"> 
              Bold <input type="checkbox" id="bold" value="800" @change="setFontStyle('bold', 'fontWeight')">
              <br><br>

              <hr>
              <h1 :style="style"> {{textbox}} </h1> <br>
              <hr>

          </div>
        </template> 

      </TaskTemplate>

      <!-- Task 2 -->
      <TaskTemplate :TaskID="2"
      :TaskDescription="'Conditionals And Loops'"
      :TaskResponse="' This page using conditions such as v-if and v-else to choose whether an element is displayed or not. A V-for loop is used to create a dynamic list that creates X amount of list items, with buttons that either add or remove from the X value'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>
          <div class="centered">
              <h4> v-if </h4>
                {{ task2.div1Bool }} <input type="checkbox" id="Task2Check" value="none" @change="setBool('div1Bool', 'Task2Check')" checked> 
                <div class="samplediv" v-if="task2.div1Bool"> Hello! </div>
                <br>
                <hr>

                <h4> v-if, v-else </h4>
                {{ task2.div2Bool }} <input type="checkbox" id="Task2Check2" value="none" @change="setBool('div2Bool', 'Task2Check2')" checked> 
                <div class="samplediv" v-if="task2.div2Bool"> Hello! </div>
                <div class="samplediv" v-else> Hello again! </div> 
                <br>
                <hr>

                <h4> v-show </h4>
                {{ task2.div3Bool }} <input type="checkbox" id="Task3Check" value="none" @change="setBool('div3Bool', 'Task3Check')" checked> 
                <div class="samplediv" v-show="task2.div3Bool"> Hello! </div>
                <br>
                <hr>

                <h4> v-for</h4>
                Add/Remove list item <button @click="ChangeListSize(true)"> + </button> <button @click="ChangeListSize(false)"> - </button>
                <ul>
                    <li v-for="index in task2.ListLength" :key="index" style="text-align:left"> Item {{index}} </li>
                </ul>
          </div>
        </template> 
        
      </TaskTemplate>

    </div>
</template>

<script>
import TaskTemplate from "../components/TaskTemplate.vue"

export default {
    components:{
        TaskTemplate,
    },
    data(){
        return{
            style:{
                fontSize: "45px",
                color: "black",
                fontWeight: "300",
                textDecoration: "underline",
                fontStyle: "",
                fontFamily: "'Lucida Console', 'Courier New', monospace",
            },
            textbox: 'Sample text!',
            currentFontSize: 45,
            task2:{
                div1Bool: true,
                div2Bool: true,
                div3Bool: true,
                ListLength: 1,
            }
        }
    },
    methods:{
        increaseFontSize: function(){
            this.currentFontSize++;
            this.style.fontSize = this.currentFontSize + 'px';
        },
        DecreaseFontSize: function(){
            this.currentFontSize--;
            this.style.fontSize = this.currentFontSize + 'px';
        },
        SetColor: function(){
            this.style.color = document.getElementById("Color_select").value;
        },
        SetFont: function(){
            this.style.fontFamily = document.getElementById("Fontselect").value;
        },
        setFontStyle: function(ref, data){
            if( document.getElementById(ref).checked){
                this.style[data] = document.getElementById(ref).value;
            }
            else if(data == 'fontWeight'){
                this.style[data] = '300'
            }
            else{
                this.style[data] = ''
            }
        },
        setBool: function(Boolref, ID){
            if(document.getElementById(ID).checked){
                this.task2[Boolref] = true;
            }
            else{
                this.task2[Boolref] = false;
            }
        },
        ChangeListSize: function(bool){
            if(bool){
                this.task2.ListLength++;
            }
            else{
                this.task2.ListLength--;
            }
        },
    },
    computed:{
    }
}
</script>


<style scoped>
.content{
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
}
</style>