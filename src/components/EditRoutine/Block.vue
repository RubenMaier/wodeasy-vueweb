<template>
  <v-card outlined class="mb-1">
    <v-card-text class="pt-0 pb-0">
      <v-row>
        <v-col>15 reps - abs crunch 90º</v-col>
        <v-col align="right" sm="4" cols="12">
          <v-btn fab outlined x-small color="gray">
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
          <v-btn fab outlined x-small color="gray" class="ml-1">
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
          <v-btn fab outlined x-small color="green" class="ml-1">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn fab outlined x-small color="red" v-on="on" class="ml-1">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Block"
};
</script>