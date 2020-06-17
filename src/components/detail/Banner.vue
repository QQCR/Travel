<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{signtName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe635;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgs="gallaryImgs" v-show="showGallery" @close="closeGallery"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import commonGallery from '@/components/common/gallery/Gallery'
import FadeAnimation from '@/components/common/fade/Fade'
export default {
  name: 'DetailBanner',
  components: {
    commonGallery,
    FadeAnimation
  },
  data () {
    return {
      showGallery: false,
    }
  },
  props: {
    signtName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    closeGallery () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner 
    position: relative
    overflow: hidden 
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute 
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: -webkit-linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
        flex: 1
      .banner-number
        padding: 0 .4rem
        line-height: .32rem
        height: .32rem
        border-radius: .2rem
        margin-top: .14rem
        background: rgba(0,0,0,.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>