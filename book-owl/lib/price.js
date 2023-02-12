export const priceProducts = (option, array, fields) => {
    switch (option) {
        case "all":
            array = fields;
        break;
        case "< $10":
            array = array.filter((el) => el.price <= 10);
        break;
        case "$10 - $15":
            array = array.filter((el) => el.price > 10 && el.price <= 15);
        break;
        case "$15 - $20":
            array = array.filter((el) => el.price > 15 && el.price <= 20);
        break;
        case "$20 <":
            array = array.filter((el) => el.price > 20);
        break;        
        }
    return array;
};