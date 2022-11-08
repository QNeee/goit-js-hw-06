
const categoriesRef = document.querySelector("#categories");
const categoryRef = categoriesRef.querySelectorAll(".item");
console.log(`Number of categories: ${categoryRef.length}`);

categoryRef.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
