<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Tabs :data-source="recordTypeList" :value.sync="record.type" />
      <div class="notes">
        <FormItem
          fieldName="备注"
          placeholder="在这里输入备注"
          :value.sync="record.notes"
        />
      </div>
      <div class="createdAt">
        <FormItem
          type="date"
          fieldName="日期"
          placeholder="在这里输入日期"
          :value.sync="record.createdAt"
        />
      </div>
      <Tags @update:value="record.tags = $event" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tabs from "@/components/Tabs.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";
import { RecordItem } from "@/custom";

@Component({
  components: { Tabs, Tags, NumberPad, FormItem },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createdAt: new Date().toISOString(),
  };

  recordTypeList = recordTypeList;

  created() {
    this.$store.commit("fetchRecords");
    console.log(this.recordList);
    
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return alert("请至少选择一个标签");
    }

    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      alert("已保存");
      this.record.notes = "";
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>