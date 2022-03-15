<template>
  <div class="delete-modal">
    <div class="delete-modal__content">
      <Paragraph
        class="delete-modal__title"
        size="12"
        weight="regular"
        color="str-black"
        >Вы уверены, что хотите удалить пользователя?</Paragraph
      >
      <div class="delete-modal__wrapper">
        <Button @unbutton="deleteData" modifier="primary">Да</Button>
        <Button @unbutton="closeModal" modifier="primary">Нет</Button>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/ui/Button.vue";
import Paragraph from "@/components/ui/Paragraph.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "DeleteModal",
  components: {
    Button,
    Paragraph,
  },

  methods: {
    ...mapActions(["deleteUser"]),
    ...mapMutations(["setModal"]),
    deleteData() {
      this.deleteUser();
    },

    closeModal() {
      this.setModal(false);
    },
  },
};
</script>

<style lang="scss">
.delete-modal {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--color-grey);
    filter: blur(4px);
  }

  &__content {
    z-index: 1;
    text-align: center;
    padding: 36px 36px 32px 36px;
    border-radius: 8px;
    background-color: var(--color-white);
    width: 100%;
    max-width: 353px;
    & p {
      user-select: none;
    }
  }
  &__title {
    margin-bottom: 24px;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
