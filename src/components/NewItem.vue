<template>
  <a class="circle">
    <div class="circle-content">{{ msg }}</div>
  </a>
</template>

<script>
export default {
  name: "NewItem",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.circle {
  margin: 0;
  padding: 0;
  background: #42b983;
  height: 20vw;
  width: 20vw;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 3vw;
  bottom: 3vw;
  z-index: 2;
}

.circle-content {
  display: flex;
  justify-content: center;
  color: white;
  font-size: 20vw;
}
</style>
