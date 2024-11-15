import { fetchCategories, fetchCatImage } from './Api.js';
import { populateCategories, displayCatImage } from './UI.js';

document.addEventListener('DOMContentLoaded', async () => {
    const dropdown = document.querySelector('select');
    const button = document.querySelector('#try-me');
    const picDisplay = document.querySelector('#catpic');

    try {
        


        const categories = await fetchCategories();
        populateCategories(dropdown, categories);

      


        button.addEventListener('click', async () => {
            const categoryId = dropdown.value;
            try {
                const imageUrl = await fetchCatImage(categoryId);
                displayCatImage(picDisplay, imageUrl);
            } catch (error) {
                console.error('Error displaying cat image:', error);
            }
        });
        
    } catch (error) {
        console.error('Error loading categories:', error);
    }
});

