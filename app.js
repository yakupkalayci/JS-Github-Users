const userNameElement = document.querySelector("#username");
const form = document.querySelector("#githubForm");

addEventListeners();

const gitbub = new Github();

function addEventListeners() {
    form.addEventListener("submit", getUser);
}


function getUser(e) {
    let username = userNameElement.value;

    gitbub.getUserInfos(username)
    .then(response => console.log(response))
    .catch(err => console.log(err));

    e.preventDefault();
}