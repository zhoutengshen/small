<template>
  <Swiper :options="options" ref="mySwiper" @someSwiperEvent="callback">
    <SwiperSlide v-for="(item,index) in urls" :key="index">
      <img :src="item.url" :alt="item.alt" class="img" />
    </SwiperSlide>
    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "mall-swiper",
  props: {
    options: {
      default() {
        return {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: true,
          observer: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        };
      },
      type: Object
    },
    imgUrls: {
      required: true,
      type: Array
    }
  },
  data() {
    const imgUrls = this.imgUrls;
    return {
      urls: [...imgUrls]
    };
  },
  components: {
    Swiper: swiper,
    SwiperSlide: swiperSlide
  },
  methods: {
    callback() {}
  },
  computed: {
    _swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {},
  watch: {
    imgUrls(imgUrls) {
      this.urls = [...imgUrls];
    }
  }
};
</script>
<style lang="less" scoped>
.img {
  width: 100vw;
  max-height: 16rem;
}
</style>
