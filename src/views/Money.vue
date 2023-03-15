<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <tags :data-source.sync="tags"/>
  </Layout>

</template>

<script>
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'

export default {
  name: 'Money',
  components: {Tags, Notes, Types, NumberPad},
  data() {
    return {
      tags: ['游戏', '吃饭', '买衣服', '出行']
    }
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
