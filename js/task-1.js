let categoriesItem = document.querySelectorAll('.item');
let categories = document.querySelector('#categories');
categories.classList.add('category');
console.log(`Total categories: ${categoriesItem.length}`);

categoriesItem.forEach(category => {
    let catName = category.querySelector('h2').textContent;
    let catItemTotal = category.querySelectorAll('li').length;
    console.log(`Category: ${catName}`);
    console.log(`Elements: ${catItemTotal}`);
})