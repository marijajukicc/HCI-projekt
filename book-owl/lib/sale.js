export const saleProducts = (option, array, fields) => {
    switch (option) {
        case "all":
            array = fields;
        break;
        case "sale":
            array = array.filter((el) => el.sale === true);
        break;
        case "best":
            array = array.filter((el) => el.bestseller === true);
        break;        
        }
    return array;
};