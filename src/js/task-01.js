const numbersOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numbersOfCategories.length}`);

numbersOfCategories.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
