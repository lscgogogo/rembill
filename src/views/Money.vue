<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <Notes @update:value="onUpdateNotes" />
      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import {Component,Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';


const recordList:RecordItem[] = recordListModel.fetch();

type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number // 数据类型 object | string
  createdAt?: Date  // 类 / 构造函数
}
@Component({
  components: { Types, Tags, NumberPad, Notes },
})


export default class Money extends Vue{
  tags=['衣','食','住','行'];
  recordList:RecordItem[] =recordList;
  record:RecordItem = {
    tags:[],notes:'',type:'-',amount:0
  };

  onUpdateNotes(value:string){
    this.record.notes = value;
  }
  onUpdateTags(value:string[]){
    this.record.tags = value;
  }
  saveRecord(){
    const record2:RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
    onRecordListChange(){
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    }
  
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>