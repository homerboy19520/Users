<template>
  <div class="search-page">
    <Header></Header>
    <main>
      <UserListModal></UserListModal>
    </main>
    <Footer></Footer>
    <DeleteModal
      v-if="isDeleteModalShow"
      class="search-page__modal"
    ></DeleteModal>
  </div>
</template>
<script>
import UserListModal from "@/components/modals/TableModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeleteModal from "@/components/modals/DeleteModal";
import { mapGetters } from "vuex";
export default {
  name: "SearchPage",
  components: { DeleteModal, UserListModal, Header, Footer },
  computed: {
    ...mapGetters(["isDeleteModalShow"]),
  },
};
</script>

<style lang="scss" scoped>
.search-page {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px 12px 12px 27px;
  min-height: 100vh;
  height: 100%;
  background-color: var(--color-grey);

  @media (max-width: 700px) {
    padding: 20px;
  }

  &__modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
}
</style>
