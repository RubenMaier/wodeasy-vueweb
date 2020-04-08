<template>
  <v-card outlined class="mb-1 pa-1 pt-0">
    <v-card-text class="pa-0 pl-5">
      <v-row>4 ROUNDS - TC 3'</v-row>
    </v-card-text>
    <Block />
  </v-card>
</template>

<script>
import Block from "@/components/Routines/Block.vue";

export default {
  name: "Description",
  components: {
    Block
  }
};
</script>