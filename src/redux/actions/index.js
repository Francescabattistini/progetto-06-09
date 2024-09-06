export const QUERY = "QUERY";
export const SELECTED = "SELECTED";
export const LIKE = "LIKE";
export const DISLIKE = "DISLIKE";

export const queryAction = data => ({ type: QUERY, payload: data });
export const selectAction = data => ({ type: SELECTED, payload: data });
export const likeAction = data => ({ type: LIKE, payload: data });
export const dislikeAction = data => ({ type: DISLIKE, payload: data });
