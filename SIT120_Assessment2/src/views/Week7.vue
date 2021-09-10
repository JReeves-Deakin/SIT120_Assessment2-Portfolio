<template>
    <div class="content">
      
       <!-- Task 1 -->
      <TaskTemplate :TaskID="1"
      :TaskDescription="'Local and Global registration'"
      :TaskResponse="'This page contains both globally and locally registered components. Global components prevent the need to import the same componenent many times, instead the component can be referenced from anywhere.'"
      :IncludeFakePage="true">
      <template v-slot:FakePageSlot>
        <div id="test">
          <div class="centered">
            <GlobalComponent/> <hr>
            <LocalComponent/>
          </div>
        </div>
      </template> 
      </TaskTemplate>

      <!-- Task 2 -->
      <TaskTemplate :TaskID="2"
      :TaskDescription="'Coding props'"
      :TaskResponse="'This page uses an imported component with the text input passed as a prop to alter and display the text. '"
      :IncludeFakePage="true">
      <template v-slot:FakePageSlot>
        <div id="test">
          <div class="centered">
            <br>
            text input: <input type='text' v-model="Task2Input"/>
            <PropsComponent :message="Task2Input"/>
          </div>
        </div>
      </template> 
      </TaskTemplate>

      <!-- Task 3 -->
      <TaskTemplate :TaskID="3"
      :TaskDescription="'Custom events'"
      :TaskResponse="'Custom events can be used to pass data back to a parent, from a component. This can be especially useful for many aspects of my project, such as account registration and generating posts from the post component. This page contains a button component that generates a custom $emit, when this $emit is caught the times clicked variable is increased by a function '"
      :IncludeFakePage="true">
      <template v-slot:FakePageSlot>
        <div id="test">
          <div class="centered">
            <br>
            times clicked: {{Task3ClickCount}} <br>
            <CustomEventComponent @clicked="addToClickCount()"/>
          </div>
        </div>
      </template> 
      </TaskTemplate>

      <!-- Task 4 -->
      <TaskTemplate :TaskID="4"
      :TaskDescription="'Vue Slots - Coding Names Slots'"
      :TaskResponse="' This page contaings a component that utilises two named slots, `Header` and `Content` to display how named slots could be used to create a template that can be used throughout a website, as to maintain a consistent design. '"
      :IncludeFakePage="true">
      <template v-slot:FakePageSlot>
        <div id="test">
          <div class="centered">
            <br>
            Header input: <input type='text' v-model="Task4HeaderInput"/> <br>
            Content input: <input type='text' v-model="Task4ContentInput"/>
            <NamedSlotsComponent>
              <template v-slot:HeaderSlot>
                {{Task4HeaderInput}}
              </template>

              <template v-slot:ContentSlot>
                {{ Task4ContentInput }}
              </template>
            </NamedSlotsComponent>
          </div>
        </div>
      </template> 
      </TaskTemplate>
    </div>
</template>

<script>
import TaskTemplate from "../components/TaskTemplate.vue"
import LocalComponent from "../components/Week7/LocalComponent.vue"
import PropsComponent from "../components/Week7/PropsComponent.vue"
import CustomEventComponent from "../components/Week7/CustomEventComponent.vue"
import NamedSlotsComponent from "../components/Week7/NamedSlotsComponent.vue"


export default {
  components:{
    TaskTemplate,
    LocalComponent,
    PropsComponent,
    CustomEventComponent,
    NamedSlotsComponent,
  },
  data(){
    return{
      Task2Input: "",
      Task3ClickCount: 0,
      Task4HeaderInput: "My website header",
      Task4ContentInput: "My website content",
    }
  },
  methods:{
    addToClickCount: function(){
      this.Task3ClickCount++;
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