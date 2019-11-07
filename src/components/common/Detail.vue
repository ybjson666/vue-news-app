<template>
  <div class="deatil-wrapper">
      <h2 class="title">{{detailInfo.title}}</h2>
      <p class="author" v-if="detailInfo.author">{{detailInfo.author}}</p>
      <p class="date">日期：{{moment(detailInfo.createTime).format("YYYY-MM-DD")}}</p>
      <div class="detail-contents">
          <p class="detail-pic"><img :src="detailInfo.pic" alt=""></p>
          <p class="detail-info">{{detailInfo.contents}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name:'detail',
  props:{
      detailInfo:Object
  }
}
</script>
<style lang="scss" scoped>
.deatil-wrapper{
    min-height: 100%;
    padding: .5rem;
    padding-top: 1rem;
    box-sizing: border-box;
    .title{
        text-align: center;
        color: #000;
        font-weight: normal;
        font-size: .8rem;
        margin-bottom: .3rem;
    }
    .author{
        text-align: center;
        margin-bottom: .3rem;
    }
    .date{
        text-align: center;
    }
    .detail-contents{
        margin-top: 2rem;
    }
    .detail-pic{
        text-align: center;
        margin-bottom: .5rem;
        img{
            border-radius: 4px;
        }
    }
    .detail-info{
        text-align: justify;
        line-height: 1rem;
        text-indent: 2em;
    }
}
</style>