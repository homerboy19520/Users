<template>
  <div class="footer">
    <PaginationModal></PaginationModal>
  </div>
</template>

<script>
import PaginationModal from "@/components/modals/PaginationModal";
export default {
  name: "FooterApp",
  components: { PaginationModal },
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
}
</style>
