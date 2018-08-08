<template>
  <div class="Carousel">
    <div class="Carousel-pulling" v-if="isPulling">
      <slot name="pulling">pulling</slot>
    </div>

    <div class="Carousel-refreshing" v-if="isRefreshing">
      <slot name="refreshing">refresh</slot>
    </div>

    <div class="Carousel-content">
      <slot>Fallback content here titi</slot>
    </div>
  </div>
</template>

<script>
import Carousel from './carousel-touch';

export default {
  name: 'Carousel',

  data() {
    return {
      isPulling: true,
      isRefreshing: true,
    };
  },

  methods: {
    onPull() {
      this.isRefreshing = false;
      this.isPulling = true;
    },
    onRefreshStart() {
      this.isRefreshing = true;
      this.isPulling = false;
    },
    onRefreshEnd() {
      this.isRefreshing = false;
      this.isPulling = false;
    },
  },

  mounted() {
    this.carousel = new Carousel();
    this.carousel.onPullStart = this.onPull.bind(this);
    this.carousel.onRefreshStart = this.onRefreshStart.bind(this);
    this.carousel.onRefreshEnd = this.onRefreshEnd.bind(this);
  },
};
</script>

<style scoped>
.Carousel { position: relative; }
.Carousel-pulling { position: absolute; top:0; }
.Carousel-refreshing { position: absolute; top:0; }
.Carousel-content { position: absolute; top:0; }
</style>
