<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input  type="text"
              v-model='value'
              placeholder="在这里输入备注" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Prop,Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue{
  value = ''
}
</script>

<style lang="scss" scoped>
.notes{
  font-size: 14px;
  background-color: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  >.name{
    margin-right: 16px;
  }
  input{
    border: none;
    background-color: transparent;
    height: 64px;
    flex-grow: 1;
    padding-right: 16px;
  }

}
</style>