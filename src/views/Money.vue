<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>

    <Tags />
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index';

@Component({
  components: {Tags, FormItem, Types, NumberPad},
})

export default class Money extends Vue {
  record: { amount: number; notes: string; type: string; tags: string[] } = {
    tags: [], notes: '', type: '-', amount: 0,
  };

  get recordList() {
    return store.state.recordList;
  }

  created() {
    store.commit('fetchRecords')
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    store.commit('createRecord', this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
