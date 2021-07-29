<template>
  <div>
    <label class="notes">
      <span class="name">{{this.fieldName}}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = "";

@Prop({required:true}) fieldName!:string;
@Prop() placeholder?: string

  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background-color: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  > .name {
    margin-right: 16px;
  }
  input {
    border: none;
    background-color: transparent;
    height: 64px;
    flex-grow: 1;
    padding-right: 16px;
  }
}
</style>