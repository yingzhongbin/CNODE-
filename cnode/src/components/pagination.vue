<template>
  <div class="pagination">
    <div class="btn-container">
      <div class="btn" @click="BtnClicked(3)">«</div>
      <div class="btn more"  v-if="picked>3">...</div>
      <div v-for="item in pageNums"
           :class="['btn',{pick:item === picked}]"
           @click="BtnClicked(item)"
      >
        {{item}}
      </div>
      <div class="btn more" v-if="picked<85">...</div>
      <div class="btn" @click="BtnClicked(85)">»</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "pagination",
        data(){
          return {
            pageNums:[1,2,3,4,5],
            picked:1
          }
        },
        methods:{
          BtnClicked(item){
            this.picked = item
            if(item>=3&item<=85){
              this.pageNums = [item-2,item-1,item,item+1,item+2]
            }
            this.$emit("sendMsg",item)
          }
        }
    }
</script>

<style scoped>
  .pagination{
    padding-bottom: 10px;
    margin: 10px 0 10px 10px;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  }
  .pagination .btn-container{
    height: 33px;
    display: flex;
  }
  .btn{
    border:1px solid #BABABA;
    width:33px;
    padding: 7px 0;
    color:#778087;
    border-right: 0px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .btn:hover{
    background-color: #F5F5F5;
  }
  .btn:first-child{
    border-radius: 4px 0px 0px 4px;
  }
  .btn:last-child{
    border-radius: 0px 4px 4px 0px;
    border-right: 1px solid #BABABA;
  }
  .btn.pick{
    color: #80bd01;
    cursor: none;
  }
  .btn.pick:hover{
    background-color: #fff;
  }
  .btn.more{
    cursor: text;
  }

</style>
