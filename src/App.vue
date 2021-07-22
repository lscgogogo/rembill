<template>
  <div id="app">
    <router-view/>
    <hr/>
    <router-link to="/money">记账</router-link>
    |
    <router-link to="/labels">标签</router-link>
    |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<style lang="scss">

</style>
