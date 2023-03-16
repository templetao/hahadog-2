<template>
  <Layout class-prefix="layout">
    {{ recordList }}
    <NumberPad @update:value="onUpdateAmmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';

window.localStorage.setItem('version', '0.0.1');

type Record = {
  tags: string[],
  notes: string,
  type: string,
  amount: number, // 数据类型
  createdAt: Date | undefined // 类 / 构造函数
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})

export default class Money extends Vue {
  tags = ['游戏', '吃饭', '买衣服', '出行'];
  recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  record: { amount: number; notes: string; type: string; tags: string[] } = {
    tags: [], notes: '', type: '-', amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChanged() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
