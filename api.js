const BASE_URL = 'https://api.thecatapi.com/v1';

export async function fetchCatImage() {
    try {
        const response = await fetch(`${BASE_URL}/images/search`);
        const data = await response.json();
        return data[0].url; 
    } catch (error) {
        console.error('Error fetching cat image:', error);
        throw error;
    }
}

export async function fetchCatFact() {
    try {
        const response = await fetch('https://meowfacts.herokuapp.com/');
        const data = await response.json();
        return data.data[0]; 
    } catch (error) {
        console.error('Error fetching cat fact:', error);
        throw error;
    }
}
