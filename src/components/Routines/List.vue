<template>
  <v-card outlined class="mb-1 mt-0 pa-1 pt-0" style="background: #F5F5F5; border-color: white">
    <v-card-title class="pb-0 pt-0">
      <v-row>
        <v-col cols="5">Rutina X</v-col>
        <v-col align="right">
          <DeleteItemButtom xsmall />
          <EditItemButtom xsmall to="Rutine" />
          <v-btn fab outlined x-small color="gray" class="ml-1">
            <v-icon>mdi-play</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <Description />
  </v-card>
</template>

<script>
import EditItemButtom from "@/components/Buttons/EditItem.vue";
import DeleteItemButtom from "@/components/Buttons/DeleteItem.vue";
import Description from "@/components/Routines/Description.vue";

export default {
  name: "List",
  components: {
    EditItemButtom,
    DeleteItemButtom,
    Description
  }
};
</script>