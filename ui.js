export function populateCategories(dropdown, categories) {
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        dropdown.appendChild(option);
    });
}

export function displayCatImage(container, imageUrl) {
    container.innerHTML = `<img src="${imageUrl}" alt="A cute cat" />`;
}
