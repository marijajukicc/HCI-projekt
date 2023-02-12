export const sortProducts = (option, array) => {
    switch (option) {
        case "all":
            array = array;
        break;
        case "new":
           array.sort((a, b) => (b.published > a.published) ? 1 : ((a.published > b.published) ? -1 : 0));
        break;
        case "high":
            array.sort((a, b) => b.price - a.price);
        break;
        case "low":
            array.sort((a, b) => a.price - b.price);
        break;
        case "az":
            array.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
        break;
        case "za":
            array.sort((a, b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0));
        break;
    }
    return array;
};