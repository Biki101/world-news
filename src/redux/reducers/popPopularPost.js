const initialState = {
  popularNews: [],
};

const popPopularPost = (state = initialState, action) => {
  switch (action.type) {
    case "POPULATE":
      return {
        ...state,
        popularNews: action.payload,
      };
    default:
      return state;
  }
};

export default popPopularPost;
