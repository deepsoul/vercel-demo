<template>
  <img class="qr" :src="imageUrl" alt="">
</template>

<script>
export default {
    props: {
        name: {
            type:String,
            default: 'boris'
        }
    },
    computed: {
       imageUrl() {
           return require(`@/assets/${this.name}-qr.png`);
       } 
    }
}
</script>

<style>
   img.qr {
       width: 300px;
   } 
</style>