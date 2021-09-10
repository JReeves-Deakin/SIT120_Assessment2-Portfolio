<template>
    <div class="container">
        <div class="header">
            <h4> <slot name="HeaderSlot"/> </h4>
        </div>
        <div class="content">
            <div class="sidebar">
                Page 1 <br>
                Page 2 <br>
            </div>
            <div class="content_slotContainer">
                <slot name="ContentSlot"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
h4{
    margin: 0;
}
.container{
    margin: 0 auto;
    margin-top: 10%;
    height: 150px;
    width: 90%;
    border-width: 2px 0 2px 0;
    border: solid 2px black;
}

.header{
    width: 100%;
    height: 39px;
    text-align: center;
    background: rgb(86, 221, 153);

    display: flex;
    align-items: center;
    justify-content: center;
    
    border-bottom: solid 1px black;
    
}

.content{
    display: flex;
}

.sidebar{
    padding-right: 4px;
    width: 20%;
    background: rgb(108, 108, 216);
    height: 110px;
    border-right: solid 1px black;
}

.content_slotContainer{
    width: 80%;
    word-break: break-all;
    height: 110px;
    text-align: center;
    background: rgb(240, 175, 240);
}
</style>
