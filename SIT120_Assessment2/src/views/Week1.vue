<template>
    <div class="content">
      
      <!-- Task 1 -->
      <TaskTemplate :TaskID="1"
      :TaskDescription="'Create a HTML page that includes at least 5 main HTML tags.'"
      :TaskResponse="'I have created a page with the following. an unordered list of items using <ul> </ul>, this list contains 4 list elements <li> </li>. An anchor to google using <a> </a> and a form, with a submit button that requires the text input to have a value'"
      :IncludeFakePage="true">
      <template v-slot:TaskTextSlot>
        
      </template>

      <template v-slot:FakePageSlot>
        <h4 class="centered"> A list of items </h4>
        <ul style="text-align:left;">
            <li v-for="index in 4" :key="index"> List item {{index}} </li>
        </ul>

        <h4 class="centered"> <a href="https://www.google.com" target="_blank">A link to Google</a> </h4>
    
        <h4 class="centered"> A form with requirements </h4>
        <form class="centered">
            <label for="fname">Favourite animal:</label>
            <input type="text" id="fname" name="fname" placeholder="Frog" required style="width: 20%; margin-left: 10px"> <br>
            <input type="submit" value="Submit form">
        </form>
      </template> 
      </TaskTemplate>

      <!-- Task 2 -->
      <TaskTemplate :TaskID="2"
      :TaskDescription="'Add inline, internal and external styling rules to the HTML page you created in the previous task.'"
      :TaskResponse="'The list is now italic, with a different coloured font. The form now has a top margin of 20%, with the heading underlined. The input form text is also centered'"
      :IncludeFakePage="true"
      >
        <template v-slot:FakePageSlot style="display:flex; flex-direction:column;">
        <h4 class="centered"> A list of items </h4>
        <ul style="text-align:left;">
            <li v-for="index in 4" :key="index" style="color:darkRed; font-style: italic"> List item {{index}} </li>
        </ul>

        <h4 class="centered"> <a href="https://www.google.com" target="_blank">A link to Google</a> </h4>
    
        <h4 class="centered" style="text-decoration:underline; margin-top: 20%"> A form with requirements </h4>
        <form class="centered">
            <label for="fname">Favourite animal:</label>
            <input type="text" id="fname" name="fname" placeholder="Frog" required style="width: 20%; margin-left: 10px; text-align: center"> <br>
            <input type="submit" value="Submit form">
        </form>
      </template> 
      </TaskTemplate>

      <!-- Task 3 -->
      <TaskTemplate :TaskID="3"
      :TaskDescription="'Try adding responsive script elements somewhere in the page you have created.'"
      :TaskResponse="'The page now includes a button. When clicked the button will trigger the alert() function'"
      :IncludeFakePage="true">

      <template v-slot:FakePageSlot style="display:flex; flex-direction:column;">
        <h4 class="centered"> A list of items </h4>
        <ul style="text-align:left;">
            <li v-for="index in 4" :key="index" style="color:darkRed; font-style: italic"> List item {{index}} </li>
        </ul>

        <h4 class="centered"> <a href="https://www.google.com" target="_blank">A link to Google</a> </h4>
    
        <h4 class="centered" style="text-decoration:underline; margin-top: 20%"> A form with requirements </h4>
        <form class="centered">
            <label for="fname">Favourite animal:</label>
            <input type="text" id="fname" name="fname" placeholder="Frog" required style="width: 20%; margin-left: 10px; text-align: center"> <br>
            <input type="submit" value="Submit form">
        </form>
        <br>
        <div class="centered">
          <button @click="Alert()"> Click me! </button>
        </div>

      </template> 
      </TaskTemplate>

      <!-- Task 4 -->
      <TaskTemplate :TaskID="4"
      :TaskDescription="'Get started learning Vue by creating a Vue.js todo list.'"
      :TaskResponse="'A Todolist generated by using v-for with an array stored in data( )'"
      :IncludeFakePage="true">

      <template v-slot:FakePageSlot style="display:flex; flex-direction:column;">
        <h4 class='centered'> Todos </h4>
        <ol>
            <li v-for="todo in todos" :key="todo">
            {{ todo.text }}
            </li>
        </ol>
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
  methods:{
    Alert: function(){
      alert("Thanks for clicking me!")
    }
  },
  data(){
    return{
      todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ],
    }
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