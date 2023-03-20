import Vue from 'vue';
import store from '@/store/index';
import {Component} from 'vue-property-decorator';

@Component
export default class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) { return window.alert('标签名不能为空'); }
    store.commit('createTag', name);
  }
}