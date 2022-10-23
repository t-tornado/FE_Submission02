export const SearchInterface = {
  setSearchResults: function (data) {
    window.searchResults = data;
  },
  getSearchResults: function () {
    return window.searchResults;
  },
};
