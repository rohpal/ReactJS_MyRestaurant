
export const getMenu = () => (dispatch, {getFirebase, getFirestore}) => {
    dispatch({
        type: "GET_MENU",
    });
}