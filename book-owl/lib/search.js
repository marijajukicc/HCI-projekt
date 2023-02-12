export const searchProducts = (query, array) => {
    return array.filter(
        (el) => el.title.toLowerCase().includes(query) || el.author.toLowerCase().includes(query)
      )
};