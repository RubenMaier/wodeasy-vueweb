<template>
  <div class="home">
    <NewItem msg="+" />
  </div>
</template>

<script>
import NewItem from "@/components/NewItem.vue";

export default {
  name: "Home",
  components: {
    NewItem
  }
};
</script>

<style scoped lang="less"></style>
