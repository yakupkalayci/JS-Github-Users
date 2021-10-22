const userNameElement = document.querySelector("#username");
const form = document.querySelector("#githubForm");

addEventListeners();

const gitbub = new Github();
const ui = new UI();

function addEventListeners() {
    form.addEventListener("submit", getUser);
}


function getUser(e) {
    let username = userNameElement.value;

    gitbub.getUserInfos(username)
    .then(userData => {
        ui.addProfileInfostoUI(userData.userInfos);
        userData.repoInfos.forEach((repo) => ui.addRepoInfostoUI(repo));
    })
    .catch(err => console.log(err));

    ui.clearInput();

    e.preventDefault();
}