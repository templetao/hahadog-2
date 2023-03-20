<template>
  <Layout>
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags" :key="tag.id"
                   :to=" `/labels/edit/${tag.id}` ">
        <span>{{ tag.name }}</span>
        <icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <!--      <Button/>-->
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import store from '@/store/index';
import TagHelper from '@/mixins/TagHelper';
import {mixins} from 'vue-class-component';

@Component({
  components: {Button},
  // mixins: [TagHelper],
  computed: {
    tags() {
      return store.state.tagList;
    }
  },
})
export default class Labels extends mixins(TagHelper) {
  created() {
    store.commit('fetchTags');
  }

  // createTag() {
  //   const name = window.prompt('请输入标签名');
  //   if (!name) { return window.alert('标签名不能为空'); }
  //   store.commit('createTag', name);
  // }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 10px;

    svg {
      width: 20px;
      height: 20px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
