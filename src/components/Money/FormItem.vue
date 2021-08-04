<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <input @input="onValueChanged($event.target.value)" type="text" :value="value" :placeholder="placeholder" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {


 @Prop({default: ''}) readonly value!: string;

@Prop({required:true}) fieldName!:string;
@Prop() placeholder?: string


onValueChanged(value: string) {
      this.$emit('update:value', value);
    }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  > .name {
    margin-right: 16px;
  }
  input {
    border: none;
    background-color: transparent;
    height: 40px;
    flex-grow: 1;
    padding-right: 16px;
  }
}
</style>