<template>
  <div class="table-modal">
    <ButtonsModal></ButtonsModal>
    <Table :data="list" @onButton="onClick"></Table>
  </div>
</template>
<script>
import Table from "@/components/Table.vue";
import ButtonsModal from "@/components/modals/ButtonsModal";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TableModal",
  components: {
    ButtonsModal,
    Table,
  },

  methods: {
    ...mapActions(["fetchUser", "openDeleteModal"]),
    onClick(index) {
      this.openDeleteModal(index);
    },
  },
  computed: mapGetters({ list: "list" }),

  async mounted() {
    await this.fetchUser();
  },
};
</script>
