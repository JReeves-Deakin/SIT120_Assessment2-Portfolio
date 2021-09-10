<template>
<div style="position: fixed;">

    <div class="whiteOut" @click="CloseFunc">
                <div class="popupCont">
                <div class="PopUp_header">
                <h2> {{MessageHeader}} </h2>
                </div>
                <h3> {{MessageContent}} </h3>
        </div>
    
</div>
    
</div>
   
</template>

<script>
export default{
    props:{
        MessageHeader: String,
        MessageContent: String,
        CloseFunc: Function,
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.popupCont{
    position: fixed;
    top: calc(50% - 12.5%);
    z-index: 2;
    font-family: 'Poppins', sans-serif;
    bottom: calc(50% - 12.5%);
    left: calc(50% - 12.5%);
    background: rgba(0, 0, 0, 0.7);
    width: 25%;
    height: fit-content;
    border-radius: 25px;
    overflow: hidden;
    color: white;
}

.whiteOut{
    position: fixed;
    top: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.4);
    width: 100%;
    height: 100%;
}

.PopUp_header{
    background: rgb(0, 0, 0);
    color: white;
    width: 100%;
    height: 20%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.PopUp_header h2{
    margin: 0;
}

.popupCont h3{
    margin: 10px;
    text-align: center;
    font-weight: 300;
    text-shadow: 1px 1px black;
}
</style>
