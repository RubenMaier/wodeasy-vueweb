<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn fab outlined :small="small" :x-small="xsmall" color="green" v-on="on" class="ml-1">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>¿Está seguro que desea editar?</v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = true">SI</v-btn>
        <v-btn color="primary" text @click="dialog = false">NO</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditItem",
  props: {
    small: Boolean,
    xsmall: Boolean
  },
  data() {
    return {
      dialog: false
    };
  },
  components: {}
};
</script>