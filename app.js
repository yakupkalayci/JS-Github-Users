const userNameElement = document.querySelector("#username");
const form = document.querySelector("#githubForm");
const clearLasSearchBtn = document.querySelector("#clear-last-users"); 

const gitbub = new Github();
const ui = new UI();
const storage = new Storage();

addEventListeners();


function addEventListeners() {
    document.addEventListener("DOMContentLoaded", ui.addUsersFromStorage(storage.getStorage()));
    form.addEventListener("submit", getUser);
    clearLasSearchBtn.addEventListener("click", clearLastSearches)
}


function getUser(e) {
    let username = userNameElement.value;

    gitbub.getUserInfos(username)
    .then(userData => {
        ui.addProfileInfostoUI(userData.userInfos);
        ui.addRepoInfostoUI(userData.repoInfos);
        storage.addUser(userData.userInfos.login, userData.userInfos.url);
        ui.addUsersFromStorage(storage.getStorage());
    })
    .catch(err => console.log(err));

    ui.clearInput();

    e.preventDefault();
}

function clearLastSearches() {
    ui.clearLastSearches();
    storage.clear();
}