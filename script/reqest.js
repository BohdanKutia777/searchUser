import { render } from "./render.js";
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

export const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json());
}
export const renderUserData = userData => {
    const { avatar_url, name, location, repos_url } = userData;
    render(avatar_url);
    userNameElem.textContent = name;
    userLocationElem.textContent = location ? `from ${location}` : '';


    
}

export const fetchRepositories = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Failed to load data');
    });
