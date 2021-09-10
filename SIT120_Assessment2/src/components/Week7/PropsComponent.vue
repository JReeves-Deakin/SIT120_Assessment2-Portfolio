<template>
    <div>
        <br>
        Normal: {{ message }} <br>
        Reversed: {{ ReverseText }} <br>
        Uppercase: {{ UppercaseText }} <br>
        Lowercase: {{ LowercaseText }} <br>
        Space between: {{ SpaceBetween }} <br>
        SplitString: {{ SplitString }} <br>
        <button @click="alert"> Alert! </button>
    </div>
</template>

<script>
export default({
    props:{
        message: String,
    },
    methods:{
        alert: function(){
            alert(this.message)
        }
    },
    computed:{
        ReverseText: function(){
        return this.message.split('').reverse().join('')
        },
        UppercaseText: function(){
        return this.message.toUpperCase();
        },
        LowercaseText: function(){
        return this.message.toLowerCase();
        },
        SplitString: function(){
        if(this.message == "") return
        else return this.message.split('');
        },
        SpaceBetween: function(){
        return this.message.split('').join(', ');
        }
    },
})
</script>

<style scoped>

</style>
