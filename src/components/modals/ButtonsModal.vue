<template>
  <div class="buttons-modal">
    <Paragraph size="10" weight="medium" color="str-grey"
      >Сортировка:</Paragraph
    >
    <Button
      @unbutton="unButton(index)"
      :modifier="item.modifier"
      v-for="(item, index) in switchData"
      :key="index"
      ><Paragraph size="10" weight="medium" color="str-grey">{{
        item.content
      }}</Paragraph></Button
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
  gap: 8px;
  margin-bottom: 15px;
}
</style>
