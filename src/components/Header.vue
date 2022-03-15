<template>
  <div class="header">
    <Paragraph class="header__title" size="24" weight="bold" color="black"
      >Список пользователей</Paragraph
    >
    <InputModal></InputModal>
  </div>
</template>

<script>
import Paragraph from "@/components/ui/Paragraph";
import InputModal from "@/components/modals/InputModal";
export default {
  name: "HeaderApp",
  components: {
    InputModal,
    Paragraph,
  },
};
</script>

<style lang="scss">
.header {
  background-color: transparent;
  margin-bottom: 72px;
  &__title {
    margin-bottom: 20px;
  }
}
</style>
