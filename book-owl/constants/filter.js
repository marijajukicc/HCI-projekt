const price = {
    title: "price",
    items: ["< $10", "$10 - $15", "$15 - $20", "$20 <"],
};

const categories = {
    title:"category",
    items: [
        "All books",
        "Teen and YA",
        "Fantasy",
        "Sports and Hobbies",
        "Music",
        "Health and Wellbeing",
        "Fiction",
        "Philosophy and Religion",
        "Social Science",
        "Literature and Poetry",
        "Art and Design",
        "Travel"
    ],
}

export const filter = {
    price: price,
    categories: categories,
};
  
export const sortingOptions = [
{ id: "new", title: "Newest books" },
{ id: "high", title: "Price High to Low" },
{ id: "low", title: "Price Low to High" },
{ id: "az", title: "A-Z" },
{ id: "za", title: "Z-A" },
];