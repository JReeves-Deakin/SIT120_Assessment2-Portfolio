<template>
    <div class="content">

      <transition name='fade'>
        <PopUp :MessageContent="PopUpContent" :MessageHeader="PopUpHeader" :CloseFunc="ClosePopUp" v-if="PopUpOpen"/>
      </transition>
      
      <!-- Task 1 -->
      <TaskTemplate :TaskID="1"
      :TaskDescription="'Learn Composing with Components'"
      :TaskResponse="' This page utilises a v-for loop much like the final task of week4, however instead of creating list items, this loop is using a component to create unique elements. By passing the loop index as a prop, the component can use this prop to name itself `component x` and to create a custom alert containing the prop `clicked on component x`.'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>
            <h4 class="centered">The elements below are generated using v-for with components and props.</h4>
            <br> <br>
            <div style="display:flex; justify-content: space-evenly">
              <button @click="incrementComponentCount(true)"> Add component </button> 
              <button @click="incrementComponentCount(false)"> remove component </button>
            </div>


            <div class="component_holder" style="overflow: hidden; width:100%">
              <transition-group name='slide'>
                <Week5Component v-for="index in componentCount" :key="index" :text='"Component " + index'
                    v-bind:style="IsEvenNumber(index) ? '' : 'background:lightGrey'"
                />
              </transition-group>
            </div>
        </template> 
      </TaskTemplate>

      <!-- Task 2 -->
      <TaskTemplate :TaskID="2"
      :TaskDescription="'Find 2 components useful for your project'"
      :TaskResponse="' I have created two components I feel will help with my websites design and speed up development. the first component is a customisable button, allowing for different text and colours, this button also resizes to accomodate the new text. The second component is used to create alerts that grab the users attention, this component allows for both alerts with and without headers. Both of these components will help keep my website design consitent.'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>

          <div class="centered">
            <h4> A custom button component </h4>
            Button text: <input type="text" style="text-align: center" v-model="buttonText"/> <br> 
            Colour: <select name="Color" id="Color_select" @change="SetColor()">
              <option value="pink">Pink</option>
              <option value="orange">Orange</option>
              <option value="Red">Red</option>
              <option value="lightBlue">Light Blue</option>
              <option value="lightGreen">Light Green</option>
            </select> <br> <br>
            <BtnComp :text="buttonText" :Color="ButtonColor"/>

            <br>
            <hr>
            <h4> A custom popup component </h4> No header text will remove the header entirely <br>
            <br>

            <div style="display:flex; justify-content: space-evenly">
              Header: <input type="text" style="text-align: center" v-model="PopUpHeader"/> <br>
            </div>

            <div style="display:flex; justify-content: space-evenly">
              Content: <input type="text" style="text-align: center" v-model="PopUpContent"/> <br>
            </div>
            <br>
            <button @click="ClosePopUp"> Open PopUp </button>
          </div>
        </template> 
      </TaskTemplate>

      <!-- Task 3 -->
      <TaskTemplate :TaskID="3"
      :TaskDescription="'Understanding handling user input'"
      :TaskResponse="'This page uses a function to reverse the header when the `Reverse` button is clicked. Declarative rendering is also used to display text from a textbox within a parahraph.'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>

          <div class="centered">
            <h4> {{ReverseMessage}} </h4>
            <button @click="ReverseMsg()"> Reverse! </button> <br> <br>
            <hr>
            <h4> User input as a paragraph </h4> <br>
            <input type="text" style="text-align: center" v-model="Task3text"/> <br> 
            <p> {{Task3text}} </p>
          </div>
        </template> 
      </TaskTemplate>

      <!-- Task 4 -->
      <TaskTemplate :TaskID="4"
      :TaskDescription="'Learn components in depth. Note down components you want to include in your project'"
      :TaskResponse="''"
      :IncludeFakePage="false">
        <template v-slot:TaskTextSlot>
        After some research I feel my website will require quite a lot of components, however I should be careful to only create components that will add to my website or improve development time. Below I have created a list of components I feel are neccesary to create almost immediatley, with another list below detailing functions these components will use.
          <br> <br>
          <h4 class="centered"> My components will include</h4>
          <ul style="text-align: left">
            <li> Registration form </li>
            <li> A post component </li>
            <li> A user profile component </li>
            <li> User login and logout components </li>
            <li> Navigation bars </li>
          </ul>

          <br>

          <h4 class="centered"> These components will utilise</h4>
          <ul style="text-align: left">
            <li> Props </li>
            <li> Custom events and Emits </li>
            <li> Slots </li>
            <li> Async functions </li>
          </ul>
        </template> 
      </TaskTemplate>

    </div>
</template>

<script>
import TaskTemplate from "../components/TaskTemplate.vue"
import PopUp from "../components/Week5/Week5_popup.vue"
import BtnComp from "../components/Week5/Week5Button.vue"
import Week5Component from "../components/Week5/Week5Component.vue"


export default {
    components:{
        TaskTemplate,
        Week5Component,
        PopUp,
        BtnComp,
    },
    mounted(){
        this.componentCount = 1;
    },
    data(){
        return{
            componentCount: 0,
            PopUpHeader: 'Alert!',
            PopUpContent: 'Something happened!',
            PopUpOpen: false,
            buttonText: "Button component",
            ButtonColor: 'Pink',
            ReverseMessage: 'Click the button below to reverse this heading using a function!',
            Task3text: "Some text",
        }
    },
    methods:{
        IsEvenNumber: function(value){
            if(value % 2 == 0) { return true }
            else { return false }
        },
        incrementComponentCount(bool){
            if(bool) { this.componentCount++ }
            else {this.componentCount--}
        },
        ClosePopUp: function(){
            this.PopUpOpen = !this.PopUpOpen;
        },
        SetColor: function(){
            this.ButtonColor = document.getElementById("Color_select").value;
        },
        ReverseMsg: function(){
            this.ReverseMessage = this.ReverseMessage.split('').reverse().join('')
        }
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


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>