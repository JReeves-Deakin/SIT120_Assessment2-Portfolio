<template>
    <div><br><button @click="sayHi"><h2> I'm a Global component! </h2></button></div>
</template>

<script>
export default{
    data() {
        return{
            message: 'Hi , test'
        }
    },
    methods: {
    sayHi: function() {
      alert('Around the world!');
    },
  }
}
</script>