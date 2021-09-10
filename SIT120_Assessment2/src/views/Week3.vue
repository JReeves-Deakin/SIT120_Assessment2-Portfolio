<template>
    <div class="content">
      
      <!-- Task 1 -->
      <TaskTemplate :TaskID="1"
      :TaskDescription="'JavaScript string methods'"
      :TaskResponse="' This page contains a text input, utilising declarative rendering the input length is displayed above a button that will trigger an alert() function, containing the text from the input. '"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>

          <div class="centered">
            Generate an alert with input
            <br> <br>
            Input text: <input type="text" style="text-align: center" v-model="task1Data.textbox" @keyup="SetLength"/> <br> <br>
            Input text length: {{ task1Data.textlength}} <br> <br>
            <button @click="alert(task1Data.textbox)"> Alert with input </button>
          </div>

        </template> 
      </TaskTemplate>

      <!-- Task 2 -->
      <TaskTemplate :TaskID="2"
      :TaskDescription="'JavaScript Number and Array Methods'"
      :TaskResponse="' This page contains some user input, when the first button is pressed the input is then turned into a list using the split() function. The second button joins the new list together into a single string again, using .Join() with the supplied user input from the Joining Character text input '"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>

          <div class="centered">

            Seperate list entries with a space<br> <br>
            Input text: <input type="text" style="text-align: center" v-model="task2Data.textbox" @keyup="SetLength"/> <br> <br>
            <button @click="generateList()"> Generate list from array </button>

            <ul>
              <li v-for="item in task2Data.listItems" :key="item" style="text-align: left"> {{item}} </li>
            </ul>

            <div v-if="task2Data.listItems[0]">
              Array length: {{task2Data.ArrayLength}} <br> <br>
              <button @click="RejoinString()" > Join list back together </button> <br>
              Joining character: <input type="text" v-model="task2Data.textbox2"  style="text-align: center; width: 25px"/> <br> <br>
              {{ task2Data.RejoinedString }}
            </div>

          </div>

        </template> 
      </TaskTemplate>

      <!-- Task 3 -->
      <TaskTemplate :TaskID="3"
      :TaskDescription="'JavaScript Get/Set Methods'"
      :TaskResponse="' The buttons on this page utilises multiple get functions such as .getHour, .getMonth joining these values together in order to display the time or date in an alert. '"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>
          <h4 class="centered">Use the buttons below to get the current date or time</h4>
          <br>
          <div class="centered">
            <button @click="AlertTime()"> Get time </button> <br> <br>
            <button @click="AlertDate()"> Get Date </button>
          </div>

        </template> 
      </TaskTemplate>

      <!-- Task 4 -->
      <TaskTemplate :TaskID="4"
      :TaskDescription="'Get started with some new concepts/components'"
      :TaskResponse="'This page uses many different computed properties to generate different outputs, this could be used to clean user input or even to implement case insensitive features such as a search function.'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>
          <div class="centered" style="marginTop:10%;">
            Input text: <input type="text" style="text-align: center" v-model="task4Data.textbox" @keyup="SetLength"/> <br>
            <h4> Origional </h4> {{task4Data.textbox}} <br>
            <h4> Uppercase </h4> {{UppercaseText}} <br>
            <h4> Lowercase </h4> {{LowercaseText}} <br>
            <h4> Reversed </h4> {{ReverseText}} <br>
            <h4> Split </h4> {{SpaceBetween}} <br>
            <h4> To array </h4> {{SplitString}} <br>
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
            task1Data: {
                textbox: "Hello World!",
                textlength: "12",
            },
            task2Data:{
                textbox: "Cat Dog Horse Mouse Fish",
                textbox2: "*",
                listItems: [],
                RejoinedString: "",
                ArrayLength: "",
            },
            task4Data:{
                textbox: "Hello world!",
            },
        }
    },
    computed:{
        ReverseText: function(){
            return this.task4Data.textbox.split('').reverse().join('')
        },
        UppercaseText: function(){
            return this.task4Data.textbox.toUpperCase();
        },
        LowercaseText: function(){
            return this.task4Data.textbox.toLowerCase();
        },
        SplitString: function(){
            if(this.task4Data.textbox == "") return
            else return this.task4Data.textbox.split('');
        },
        SpaceBetween: function(){
            return this.task4Data.textbox.split('').join(', ');
        }
    },
    methods:{
        SetLength: function(){
            this.task1Data.textlength = this.task1Data.textbox.length;
        },
        alert: function(ref){
            alert(ref);
        },
        generateList: function(){
            this.task2Data.listItems = this.task2Data.textbox.split(" ");
            this.task2Data.ArrayLength = this.task2Data.listItems.length;
        },
        RejoinString: function(){
            this.task2Data.RejoinedString = this.task2Data.listItems.join(this.task2Data.textbox2);
        },
        AlertDate: function(){
            var cd = new Date;
            alert( cd.getDay() + "/" + (cd.getMonth() + 1 ) + "/" + cd.getFullYear());
        },
        AlertTime: function(){
            var cd = new Date;
            alert( cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds() );
        }
    },
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