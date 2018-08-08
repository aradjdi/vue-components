<template>
  <div class="PullToRefresh">
    <div class="PullToRefresh-pulling" v-if="isPulling">
      <slot name="pulling">pulling</slot>
    </div>

    <div class="PullToRefresh-refreshing" v-if="isRefreshing">
      <slot name="refreshing">refresh</slot>
    </div>

    <div class="PullToRefresh-content">
      <slot>Fallback content here</slot>
    </div>
  </div>
</template>

<script>
import PullToRefresh from './pullToRefresh-touch';

export default {
  name: 'PullToRefresh',

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
    this.pullToRefresh = new PullToRefresh();
    this.pullToRefresh.onPullStart = this.onPull.bind(this);
    this.pullToRefresh.onRefreshStart = this.onRefreshStart.bind(this);
    this.pullToRefresh.onRefreshEnd = this.onRefreshEnd.bind(this);
  },
};
</script>

<style scoped>
.PullToRefresh { position: relative; }
.PullToRefresh-pulling { position: absolute; top:0; }
.PullToRefresh-refreshing { position: absolute; top:0; }
.PullToRefresh-content { position: absolute; top:0; }
</style>
