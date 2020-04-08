<template>
  <v-card outlined class="ma-1 mt-0 pa-1 pt-0" style="background: #F5F5F5; border-color: white">
    <v-card-title class="pb-0 pt-0">
      <v-row>
        <v-col cols="2">
          <v-btn fab outlined small color="gray" cols="1">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
        <v-col align="center">4 ROUNDS - TC 3'</v-col>
        <v-col align="right" sm="5" cols="12">
          <v-btn fab outlined small color="gray">
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
          <v-btn fab outlined small color="gray" class="ml-1">
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
          <EditItemButtom small />
          <DeleteItemButtom small />
        </v-col>
      </v-row>
    </v-card-title>
    <Block />
  </v-card>
</template>

<script>
import Block from "@/components/EditRoutine/Block.vue";
import EditItemButtom from "@/components/Buttons/EditItem.vue";
import DeleteItemButtom from "@/components/Buttons/DeleteItem.vue";

export default {
  name: "Group",
  components: {
    Block,
    EditItemButtom,
    DeleteItemButtom
  }
};
</script>