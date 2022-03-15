<template>
  <div class="pagination-modal">
    <Button
      :class="{ disabled: showLeftPagination }"
      :is-disabled="showLeftPagination"
      @unbutton="onFirst"
      modifier="pagination"
      ><svg
        data-name="Livello 1"
        id="Livello_1"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0CB4F1"
          d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
        />
        <path
          fill="#0CB4F1"
          d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"
        /></svg
    ></Button>
    <Button
      :class="{ disabled: showRightPagination }"
      :is-disabled="showRightPagination"
      @unbutton="onSecond"
      modifier="pagination"
      ><svg
        data-name="Livello 1"
        id="Livello_1"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0CB4F1"
          d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
        />
        <path
          fill="#0CB4F1"
          d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"
        /></svg
    ></Button>
  </div>
</template>

<script>
import Button from "@/components/ui/Button";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "PaginationModal",
  components: { Button },

  methods: {
    ...mapMutations(["nextPage", "prevPage"]),
    onFirst() {
      this.prevPage();
    },
    onSecond() {
      this.nextPage();
    },
  },

  computed: {
    ...mapGetters(["showLeftPagination", "showRightPagination"]),
  },
};
</script>

<style lang="scss">
.pagination-modal {
  margin: 0 auto;
  width: 400px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 100%;
  }

  & button:last-child {
    transform: rotate(180deg);
  }
}
</style>
