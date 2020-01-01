<template>
   <div class="">
       <h6>busC</h6>
       <p>busa={{busa}}</p>
       <p>busb={{busb}}</p>
       <p>busc={{busc}}</p>
   </div>
</template>

<script>
// import EventBus from "./../../../until/bus.js";
export default {
   name: '',
   data() {
       return {
           busa: '',
           busb: ''
       }
   },
   computed: {
       busc() {
           return +this.busa + +this.busb 
       }
   },
   created () {
       console.log(this)
       this.$bus.$on('busa', d => {
           console.log(d)
           this.busa = d
       });
       this.$bus.$on('busb', d => {
           console.log(d)
           this.busb = d
       });
   },
  components: {}
}
</script>

<style scoped lang="stylus">
</style>
