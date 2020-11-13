<template>
<div class="card">
     <h1>{{name}}</h1>
     <h2>{{count}}</h2>
</div>
 
</template>

<script>
export default {
    props :{
        count: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss"> 
.card {
    background: rgba(255,255,255, 0.4);
    width: 200px;
    height: 200px;

    h1 {
        font-size: 44px;
    }
    h2 {
        font-size: 36px;
    }
}

</style>