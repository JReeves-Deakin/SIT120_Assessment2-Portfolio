<template>
    <div class="content">
      
      <!-- Task 1 -->
      <TaskTemplate :TaskID="1"
      :TaskDescription="'Visit any two existing websites that are close to your proposal idea and perform their responsive analysis'"
      :TaskResponse="''"
      :IncludeFakePage="false">

      <template v-slot:TaskTextSlot>
        I chose to review <a href="https://facebook.com"> Facebook</a> and <a href="https://www.linkedin.com/home/?originalSubdomain=au"> LinkedIn</a>.
        <br> <br> I found both wesbites to be incredibly responsive, even completely changing the website layout to fit the screen size.
        <br> <br> Using the <a href="https://archive.org/web/">wayback machine</a> I viewed these pages and found that only recently have they shifted into a responsive design, a few years ago
        the wesbites appear rather blocky and static in design.
        <br> <br> Both websites appear to be utilizing grids within their designs.
      </template> 
      </TaskTemplate>

      <!-- Task 2 -->
      <TaskTemplate :TaskID="2"
      :TaskDescription="'Use CSS to improve your web pages and work on the following:'"
      :TaskDescriptionLine2="'Page layout, Navigation, Colour/Graphics, Content and Functionality.'"
      :TaskResponse="'The website now uses CSS to create a better page layout, keeping things consistent and easy to read while providing easy and comfortable navigation.'"
      :IncludeFakePage="true">

      <template v-slot:FakePageSlot>
        <h2 class="centered" style="background:lightGrey"> My website </h2>

          <div class="centered">
              <h4  style="background:pink; margin-bottom: 0"> My blogpost! </h4>
              <p style="text-align: left; background: darkGrey; margin-top:0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eius! </p>
          </div>

          <div class="centered">
              <h4  style="background:lightGreen; margin-bottom: 0"> My blogpost! </h4>
              <p style="text-align: left; background: darkGrey; margin-top:0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eius! </p>
          </div>
  
      </template> 
      </TaskTemplate>

      <!-- Task 3 -->
      <TaskTemplate :TaskID="3"
      :TaskDescription="'Create user stories'"
      :TaskResponse="'Below are some user stories that I have created. I have also designed a basic website UX including a header, navigation bar and content area'"
      :IncludeFakePage="true">
      
      <template v-slot:TaskTextSlot>
        
        <div class="user-story">
          User story 1
          <div class="div" style="background: white"> <h4> Statement </h4> I want to use my phone to access the website.</div>
          <div class="div" style="background: white"> <h4> Acceptance Criteria </h4> Website must have mobile access.</div>
          <div class="div" style="background: red; width: 50%;"> <h4> Priority - High </h4> </div>
        </div>

        <div class="user-story">
            User story 2
            <div class="div" style="background: white"> <h4> Statement </h4> I like when websites have a login sound. </div>
            <div class="div" style="background: white"> <h4> Acceptance Criteria </h4> A sound plays when user signs in.</div>
            <div class="div" style="background: yellow; width: 50%;"> <h4> Priority - Medium </h4> </div>
        </div>

      </template> 

      <template v-slot:FakePageSlot>
        <div class="Task3Grid">
            <div class="header">  <h3> Website Header </h3> </div>
            <div class="sidebar"> Navbar <br> Page 1 <br> Page 2 <br> Page 3 </div>
            <div class="content"> <h4> Content </h4> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae! </div>
        </div>
      </template> 

      </TaskTemplate>

      <!-- Task 4 -->
     <TaskTemplate :TaskID="4"
      :TaskDescription="'Use graphics, media and APIs.'"
      :TaskResponse="'I have created a page with embedded youtube videos and a background Image'"
      :IncludeFakePage="true">

      <template v-slot:FakePageSlot>
        <div class="Task4Container">
          <iframe width="auto" height="auto" src="https://www.youtube.com/embed/J---aiyznGQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="auto" height="auto" src="https://www.youtube.com/embed/J---aiyznGQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="auto" height="auto" src="https://www.youtube.com/embed/J---aiyznGQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
}
</script>


<style scoped>
.content{
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.user-story{
    height: fit-content;
    width: auto;
    max-width: 320px;
    margin: 0 auto;
    margin-bottom: 3%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    background: gray;
    border-radius: 6px;
}

.user-story div{
    border: solid 2px black;
    width: 90%;
    margin-bottom: 10px;
}

.user-story div h4{
    text-align: center;
    margin-top: 0;
}

.Task3Grid{
  display: grid;
  grid-template-columns: .2fr 1fr;
  grid-template-rows: .1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
}

.Task3Grid .header{
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: 1 / 1 / 2 / 3;
    background: rgb(96, 155, 96);
}

.Task3Grid .content{
  grid-area: 2 / 2 / 3 / 3;
  background: rgb(190, 99, 99);
  height: 100%;
  text-align: center;
}

.Task3Grid.sidebar{
    grid-area: 2 / 1 / 3 / 2;
    background: rgb(85, 85, 138);
}

.Task4Container{
  background-image: url("https://images.unsplash.com/photo-1456083334823-6e5bc7132162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80");
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
}
</style>