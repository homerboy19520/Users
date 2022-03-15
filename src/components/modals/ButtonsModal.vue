<template>
  <div class="buttons-modal">
    <Paragraph
      class="buttons-modal__text"
      size="10"
      weight="medium"
      color="str-grey"
      >Сортировка:</Paragraph
    >
    <Button
      @unbutton="unButton(index)"
      :modifier="item.modifier"
      v-for="(item, index) in switchData"
      :key="index"
      ><Paragraph
        class="buttons-modal__buttons"
        size="10"
        weight="medium"
        color="str-grey"
        >{{ item.content }}</Paragraph
      ></Button
    >
  </div>
</template>

<script>
import Button from "@/components/ui/Button.vue";
import Paragraph from "@/components/ui/Paragraph.vue";
import { mapActions, mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "ButtonsModal",
  components: {
    Paragraph,
    Button,
  },

  methods: {
    ...mapMutations(["addActiveStyle"]),
    ...mapActions(["sortDate", "sortRating"]),
    unButton(index) {
      this.addActiveStyle(index);
      if (index === 0) {
        this.sortDate();
      } else if (index === 1) {
        this.sortRating();
      }
    },
  },

  computed: { ...mapGetters({ switchData: "switch" }) },
};
</script>

<style lang="scss" scoped>
.buttons-modal {
  background-color: transparent;
  display: flex;
  margin-bottom: 15px;

  & button:nth-last-child(n + 1) {
    margin-right: 8px;
  }
  &__text {
    margin-right: 8px;
  }

  @media (max-width: 700px) {
    margin-bottom: 30px;
    &__text,
    &__buttons {
      font-size: 13px;
      line-height: 20px;
      padding: 10px;
    }
  }
}
</style>
