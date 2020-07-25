<template>
  <div class="purse-container">
    <div class="card">
        <div class="left">
            <img src="../../img/iconlist/1.png" alt="">
            <span>会员卡</span> 
        </div>
        <span class="right">></span>
    </div>
   <div class="solid"></div>
    <div class="card">
        <div class="left">
            <img src="../../img/iconlist/2.png" alt="">
            <span>交通卡</span> 
        </div>
        <span class="right">></span>
    </div>
    <div class="card card-center">
        <div class="left">
            <img src="../../img/iconlist/3.png" alt="">
            <span>礼品卡</span> 
        </div>
        <span class="right">></span>
    </div>
   <div class="solid"></div>
    <div class="card">
        <div class="left ticket">
            <img src="../../img/iconlist/4.png" alt="">
            <span>票证</span> 
        </div>
        <span class="right">></span>
    </div>


    <div class="used">
        <p>最近使用</p>
        
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.purse-container {
    background-color: rgb(236, 236, 236);
    height: 400px;
}
.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    .left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90px;
        img {
            width: 24px;
        }
    }
    .right  {
        opacity: .4;
    }
}
.solid {
    width: 86%;
    height: 1px;
    background-color: rgb(97, 97, 97);
    position: absolute;
    right: 0;
    opacity: .2;
    
}

.card-center {
    margin-top: 10px;
}
.ticket {
    span {
        margin-right: 16px;
    }
}
.used {
    padding: 16px;
    p {
        font-size: 14px;
        margin-top: 6px;
    }
}
</style>