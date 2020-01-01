<template>
   <div>
       <div class="header">
           <slot name="header"></slot>
       </div>
       <div class="body">
           <slot></slot>
       </div>
       <div class="footer">
           <slot name="footer" :fc="footerContent"></slot>
       </div>
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {
           remark: [
               '锄禾日当午',
               '汗滴禾下土',
               '谁知盘中餐',
               '粒粒皆辛苦',
               '锄禾日当午1',
               '汗滴禾下土2',
               '谁知盘中餐3',
               '粒粒皆辛苦4'
           ]
       }
   },
   computed: {
       footerContent() {
           return this.remark[new Date().getDay() -1]
       }
   },
  components: {}
}
</script>

<style scoped >
.header{
    height: 80px;
    line-height: 80px;
    background: #f1f1f1
}
.body{
    min-height: 160px;
    background: aqua;
}
.footer{
    height: 60px;
    background: salmon;
}
</style>
