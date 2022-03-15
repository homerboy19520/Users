import axios from "axios";

export default {
  state: {
    inputValue: "",
    request: [],
    formatData: [],
    isSearch: false,
    isSortDate: null,
    isSortRating: null,
    isShow: false,
    deleteIndex: null,
    pageNumber: 0,
    size: 5,

    switch: [
      { content: "Дата регистрации", modifier: "switch" },
      { content: "Рейтинг", modifier: "switch" },
    ],
  },
  getters: {
    list(state, getters) {
      return getters.paginatedData;
    },

    showLeftPagination(state) {
      return state.pageNumber === 0;
    },

    showRightPagination(state, getters) {
      return state.pageNumber >= getters.pageCount - 1;
    },

    isDeleteModalShow(state) {
      return state.isShow;
    },
    isModalShow(state) {
      return Boolean(state.inputValue) === true;
    },

    switch(state) {
      return state.switch;
    },

    value(state) {
      return state.inputValue;
    },

    filtration(state) {
      return state.formatData.filter((item) => {
        return (
          item.email.toLowerCase().indexOf(state.inputValue.toLowerCase()) !==
            -1 ||
          item.username
            .toLowerCase()
            .indexOf(state.inputValue.toLowerCase()) !== -1
        );
      });
    },

    pageCount(state) {
      let l = state.formatData.length,
        s = state.size;
      return Math.ceil(l / s);
    },

    paginatedData(state) {
      const start = state.pageNumber * state.size,
        end = start + state.size;
      return state.formatData.slice(start, end);
    },
  },

  mutations: {
    updateData(state, response) {
      state.request = response.data;
    },
    deletedData(state, data) {
      state[data.name].splice(data.index, 1);
    },

    formatDate(state, data) {
      state[data.name].sort((a, b) => {
        return state.isSortDate
          ? Date.parse(b[data.link]) - Date.parse(a[data.link])
          : Date.parse(a[data.link]) - Date.parse(b[data.link]);
      });
    },
    formatRating(state, data) {
      console.log("work");
      state[data.name].sort((a, b) => {
        return state.isSortRating
          ? b[data.link] - a[data.link]
          : a[data.link] - b[data.link];
      });
    },

    addActiveStyle(state, index) {
      state.switch.forEach((item) => {
        item.modifier = "switch";
      });
      state.switch[index].modifier = "switch active";
    },

    clearInput(state) {
      state.inputValue = "";
    },

    setValue(state, value) {
      state.inputValue = value;
    },
    setDelete(state, value) {
      state.isDeleteShow = value;
    },
    setFormatData(state, value) {
      state.formatData = value;
    },
    setIsSearch(state, value) {
      state.isSearch = value;
    },
    setSortData(state) {
      state.isSortRating = null;
      state.isSortDate = !state.isSortDate;
    },
    setSortRating(state) {
      state.isSortDate = null;
      state.isSortRating = !state.isSortRating;
    },
    setModal(state, value) {
      state.isShow = value;
    },
    setDeleteIndex(state, index) {
      state.deleteIndex = index;
    },

    resetSort(state) {
      state.switch.forEach((item) => {
        item.modifier = "switch";
      });
    },
    resetFormatData(state) {
      console.log("преписал");
      state.formatData = JSON.parse(JSON.stringify(state.request));
    },

    nextPage(state) {
      state.pageNumber++;
    },
    prevPage(state) {
      state.pageNumber--;
    },
  },
  actions: {
    search({ commit, getters, state }) {
      commit("resetFormatData");
      commit("setFormatData", getters.filtration);

      if (state.isSortDate === false || state.isSortDate) {
        state.isSortRating = null;
        commit("formatDate", {
          name: "formatData",
          link: "registration_date",
        });
      } else if (state.isSortRating === false || state.isSortRating) {
        state.isSortDate = null;
        commit("formatRating", {
          name: "formatData",
          link: "rating",
        });
      }

      commit("setIsSearch", true);
      commit("setDelete", true);
    },

    sortDate({ commit }) {
      commit("setSortData");
      commit("formatDate", {
        name: "formatData",
        link: "registration_date",
      });
    },

    sortRating({ commit }) {
      commit("setSortRating");

      commit("formatRating", {
        name: "formatData",
        link: "rating",
      });
    },

    deleteUser({ state, commit }) {
      commit("deletedData", {
        name: "formatData",
        index: state.deleteIndex,
      });
      commit("deletedData", {
        name: "request",
        index: state.deleteIndex,
      });
      commit("setModal", false);
      commit("setDeleteIndex", null);
    },

    resetSearch({ commit }) {
      commit("clearInput");
      commit("resetSort");
      commit("setIsSearch", false);
      commit("resetFormatData");
    },

    openDeleteModal({ commit }, index) {
      commit("setModal", true);
      commit("setDeleteIndex", index);
      console.log(index);
    },

    async fetchUser(ctx) {
      const response = await axios.get(
        "https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users"
      );
      ctx.commit("updateData", response);
      ctx.commit("resetFormatData");
    },
  },
};
