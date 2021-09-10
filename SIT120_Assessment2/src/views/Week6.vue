<template>
    <div class="content">
      
      <!-- Task 1 -->
      <TaskTemplate :TaskID="1"
      :TaskDescription="'Using v-model for handling user inputs'"
      :TaskResponse="' This page used v-model to store the values from the input fields. When the submit button is clicked, the text values for Name and Email are displayed, with only the length of the password in displayed'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>

          <div class="centered">
            <h4> Alert with user input </h4> <br>
            Name: <input type="text" style="text-align: center" required v-model="name"/> <br> 
            Email: <input type="text" style="text-align: center" required v-model="email"/> <br> 
            Password: <input type="password" id="passwordInput" style="text-align: center" required v-model="password"/> <br> 
            <button @click="DisplayInput()"> Submit! </button>
          </div>

        </template> 
      </TaskTemplate>

      <!-- Task 2 -->
      <TaskTemplate :TaskID="2"
      :TaskDescription="'Apply and implement a checkbox'"
      :TaskResponse="' This page creates a shopping list by getting the values from the selected check boxes and adding them into an array, this array is then iterated through using a v-for loop to display the different items.'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>
          <div class="centered">

            <h4> Shopping list generator </h4> <br> items<br>
            Milk <input type="checkbox" id="Milk" value="Milk" v-model="checkedItems" />
            Eggs <input type="checkbox" id="Eggs" value="Eggs" v-model="checkedItems" />
            Bread <input type="checkbox" id="Bread" value="Bread" v-model="checkedItems" /> <br>
            
            <br> Selected Items: <br> 
            {{checkedItems}}

            <br><br>Shopping list:
            <ol style="text-align: left">
              <li v-for="item in checkedItems" :key="item"> {{item}} </li>
            </ol>

          </div>

        </template> 
      </TaskTemplate>

      <!-- Task 3 -->
      <TaskTemplate :TaskID="3"
      :TaskDescription="'Apply and implement a checkbox'"
      :TaskResponse="' This page utilises an array with two different entries `text` and `value`, the value entry is displayed within the combobox with the text entry displayed next to it. The options within the combo box are generated using a v-for loop iterating through all of the `value` entries'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>

          <div class="centered">
            <br>
            <select v-model="Current_item">
              <option v-for="item in task3Items" v-bind:value="item.value" :key="item">
                {{ item.text }}
              </option>
            </select>

            Item selected: {{ Current_item }}

          </div>
         
        </template> 
      </TaskTemplate>

      <!-- Task 4 -->
      <TaskTemplate :TaskID="4"
      :TaskDescription="'Using Modifiers'"
      :TaskResponse="' This page uses different modifiers to modify the v-model function. the Trim modifier is used to remove extra spaces from user input, the number modifier is utilized when working with number inputs and the lazy modifier will only update the value when the user has pressed enter. These modifiers all have different use-cases however for my project I feel both the `lazy` and `trim` modifiers will help greatly with user input.'"
      :IncludeFakePage="true">

        <template v-slot:FakePageSlot>
          
          <div class="centered">

            <h4> Trim modifier </h4>
            Text: <input type="text" style="text-align: center"  v-model.trim="trimtext"/> <br> <br>
            Trimmed text <br>
            <span style="border: solid 2px black; padding: 0 4px">
              {{trimtext}}
            </span>
            <br> <br>

            <hr>
            <h4> Number modifier </h4>
            Text: <input type="number" style="text-align: center"  v-model.number="numbertext"/> <br> <br>
            Number text <br>
            <span style="border: solid 2px black; padding: 0 4px">
              {{numbertext}}
            </span>
            <br> <br>

            <hr>
            <h4> Lazy modifier </h4>
            Text: <input type="text" style="text-align: center"  v-model.lazy="LazyText"/> <br> <br>
            Lazy text <br>
            <span style="border: solid 2px black; padding: 0 4px">
              {{LazyText}}
            </span>

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
            name: "",
            email: "",
            password: "",
            checkedItems: [],
            Current_item: '1',
            task3Items: [
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
                { text: 'Three', value: '3' }
            ],
            trimtext: '     Hello      World',
            numbertext: '000',
            LazyText: 'This text is lazy',
        }
    },
    methods:{
        DisplayInput: function(){
            var PassLength = this.password.length;
            alert("name: "+ this.name + "\nemail: " + this.email + "\npassword length: " + PassLength);
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
</style>