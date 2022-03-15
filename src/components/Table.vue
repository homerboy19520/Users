<template>
  <div>
    <table class="table">
      <thead class="table__row">
        <td>
          <Paragraph size="10" weight="medium" color="str-grey"
            >Имя пользователя</Paragraph
          >
        </td>
        <td>
          <Paragraph size="10" weight="medium" color="str-grey"
            >E-mail</Paragraph
          >
        </td>
        <td>
          <Paragraph size="10" weight="medium" color="str-grey"
            >Дата регистрации</Paragraph
          >
        </td>
        <td>
          <Paragraph size="10" weight="medium" color="str-grey"
            >Рейтинг</Paragraph
          >
        </td>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td data-label="Имя пользователя">
            <Paragraph
              class="table__text"
              size="12"
              weight="bold"
              color="blue"
              >{{ item.username }}</Paragraph
            >
          </td>
          <td data-label="E-mail">
            <Paragraph
              class="table__text"
              size="12"
              weight="medium"
              color="brown"
            >
              {{ item.email }}
            </Paragraph>
          </td>
          <td data-label="Дата регистрации">
            <Paragraph
              class="table__text"
              size="12"
              weight="medium"
              color="brown"
              >{{ formatDate(item.registration_date) }}
            </Paragraph>
          </td>
          <td data-label="Рейтинг">
            <Paragraph
              class="table__text"
              size="12"
              weight="medium"
              color="brown"
            >
              {{ item.rating }}</Paragraph
            >
          </td>
          <td>
            <Button @unbutton="onClick(index)" modifier="delete"
              ><svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.63499 2.66666L14.3132 13.3333"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3.63499 13.3333L14.3132 2.66665"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                /></svg
            ></Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Button from "@/components/ui/Button.vue";
import Paragraph from "@/components/ui/Paragraph.vue";

export default {
  name: "TableApp",
  props: {
    data: {
      type: Array,
    },
  },
  components: {
    Button,
    Paragraph,
  },

  methods: {
    onClick(index) {
      this.$emit("onButton", index);
    },
    formatDate(value) {
      let date = new Date(value).toLocaleDateString();
      let format = date.split("");
      format.splice(format.length - 4, 2);
      return format.join("");
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  background-color: #fff;
  border-radius: 7px;
  width: 100%;
  padding: 0 16px 0 16px;
  border-spacing: 0;

  @media (max-width: 700px) {
    background-color: transparent;
    padding: 0;

    &__text {
      font-size: 13px;
      line-height: 17px;
    }
  }

  @media (max-width: 500px) {
    &__text {
      font-size: 12px;
      line-height: 16px;
    }
  }

  & tbody tr,
  & thead {
    position: relative;
    padding: 0;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--color-grey);
    }
    @media (max-width: 700px) {
      &::after {
        display: none;
      }
    }
  }

  & thead {
    & p {
      padding: 16px 0 22px 0;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }

  & td {
    width: 28%;
    padding: 0;
    @media (max-width: 700px) {
      width: 100%;
      text-align: right;
      padding: 25px;
      border-bottom: 1px solid var(--color-grey);
      display: flex;
      justify-content: space-between;
      align-items: center;
      &::before {
        content: attr(data-label);
        font-family: var(--font-inter);
        float: left;
        font-size: 17px;
        font-weight: 600;
        line-height: 13px;
        color: var(--color-black);

        @media (max-width: 500px) {
          font-size: 12px;
          line-height: 16px;
        }
      }

      &:nth-last-child(-n + 1) {
        border-color: transparent;
      }
    }

    & p {
      width: 80%;
      overflow: auto;
      padding-bottom: 6px;
      @media (max-width: 700px) {
        width: fit-content;
        padding: 0;
      }
    }
  }

  & tr {
    @media (max-width: 700px) {
      display: block;
      margin-bottom: 30px;
      height: auto;
      background-color: var(--color-white);
      border-radius: 10px;
      box-shadow: 0 18px 15px rgb(148 148 148 / 15%);
    }
  }
}
</style>
