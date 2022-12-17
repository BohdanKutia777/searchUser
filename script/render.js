const imgUser = document.querySelector('.user__avatar');
const defoltImg = 'https://avatars3.githubusercontent.com/u10001';


export const render = (userAvatar) => {
    if(userAvatar) {
        imgUser.src = userAvatar;
    } else {
        imgUser.src = defoltImg;
    }
};
