const author = {
    title: "author",
    items: ["A", "B", "C"],
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
    author: author,
    categories: categories,
};
  
export const sortingOptions = [
{ id: "new", title: "Newest books" },
{ id: "high", title: "Price High to Low" },
{ id: "low", title: "Price Low to High" },
];