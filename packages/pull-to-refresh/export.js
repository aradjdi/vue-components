import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import PullToRefresh from './src/PullToRefresh';

const CustomElement = wrap(Vue, PullToRefresh);

window.customElements.define('st-pull-to-refresh', CustomElement);
