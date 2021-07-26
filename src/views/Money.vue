<template>
  <div>
    <Layout class-prefix="layout" >
      <NumberPad />
      <Types />
      <Notes />
      <Tags :data-source.sync = 'tags' />
    </Layout>
  </div>
</template>

<script >
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";

export default {
  components: { Types, Tags, NumberPad, Notes },
  name: "Money",
  data(){
    return{
      tags:['衣','食','住','行']
    }
  }
};
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>