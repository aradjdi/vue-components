import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Carousel from './src/Carousel';

const CustomElement = wrap(Vue, Carousel);

window.customElements.define('st-carousel', CustomElement);
