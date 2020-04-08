<template>
  <v-container>
    <v-row justify="center">
      <h1 class="font-weight-black">{{ msg }}</h1>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn depressed block x-large color="primary" to="/routines">Routines</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn depressed block x-large color="primary" to="/editroutine">Routine</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn depressed block x-large color="primary" to="/converter">Converter</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
h1 {
  font-size: 20vw;
}
</style>
