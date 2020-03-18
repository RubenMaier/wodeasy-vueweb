<template>
  <div class="menu">
    <h1>{{ msg }}</h1>
    <div id="nav">
      <router-link to="/routine">Routine</router-link>
      <router-link to="/converter">Converter</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0% 10%;

  a {
    width: 100%;
    background-color: #42b983;
    display: flex;
    justify-content: center;
    margin-bottom: 5vh;
    padding: 5% 0%;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 10vw;
  }
}
</style>
