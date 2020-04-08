<template>
  <v-container>
    <Menu msg="WODeasy" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Menu
  }
};
</script>