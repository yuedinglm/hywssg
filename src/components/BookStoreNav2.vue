<template>
    <div>
        <div class="list_box">
            <div>
                <img src="/static/img/b-nav2-2_03.png">
                <span>听书专区</span>
            </div>  
            <div>
                <img src="/static/img/b-nav2-1_03.png">
                <span>视频专区</span>
            </div>
        </div>
        <div class="list_box">
            <div>
                <img src="/static/img/b-nav-2-3_03.png">
                <span>男生最爱</span>
            </div>
            <div>
                <img src="/static/img/b-nav-2-4_03.png">
                <span>女生最爱</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"BookStoreNav2"
}
</script>

<style scoped>
    .list_box{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .list_box div{
        padding:.28rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .list_box:first-child{
        border-bottom:.03rem solid #f8f8f8;
    }
    .list_box:last-child{
        border-bottom: 0.15rem solid #f8f8f8;
    }
    .list_box img{
        width: .61rem;
        height: .61rem;
        margin-bottom: .26rem;
    }
    
    .list_box span{
        font-size: .24rem;
        line-height:.24rem;
        color: #85848a;
    }
</style>