<template>
    <div class="title">
        <ul class="titleList">
            <li >图片</li>
            <li class="artcil">文章</li>
            <li >视频</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.title{
   width:334px;
   height: 60px;
   margin-top:76px;
   margin-left:21px;
   /* background-color: pink; */
   .titleList{
        width:100%;
        height: 100%;
        /* opacity: 0.5; */
        border: 1px solid #A2A2A2;
        border-radius: 3px;
        box-sizing: border-box
        li{
           width:33.3%;
           height: 100%;
           line-height:60px;
           text-align: center;
           font-size: 20px;
           color: #3D3D3D;
           float: left;
           
       }
       .artcil{
           background: #FDD003;
       }
   }
}
</style>

