const reposList = document.querySelector('.repo-list');

export const clearList = () => {
    reposList.innerHTML = '';
};



export const renderRepositories = (repositoriesData) => {
    const listElem = repositoriesData
    .map(({name}) => {
        const listIteam = document.createElement('li');
        listIteam.classList.add('repo-list__item');
        listIteam.textContent = name;
        return listIteam
    });
    clearList();
    reposList.append(...listElem);
};