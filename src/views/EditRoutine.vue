<template>
  <v-container fluid class="pt-0 pb-0">
    <v-row>
      <v-col>
        <BackButtom />
      </v-col>
      <v-col>
        <h1 class="font-weight-black">Rutine X</h1>
      </v-col>
    </v-row>
    <v-card outlined min-height="75vh" style="border-color: white">
      <v-card outlined class="pa-1" style="max-height: 75vh; overflow: auto">
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
      </v-card>
      <NewItemButtom />
    </v-card>
  </v-container>
</template>

<script>
import BackButtom from "@/components/Buttons/Back.vue";
import Works from "@/components/EditRoutine/Works.vue";
import NewItemButtom from "@/components/Buttons/NewItem.vue";

export default {
  name: "EditRoutine",
  components: {
    BackButtom,
    NewItemButtom,
    Works
  }
};
</script>