class Storage {

    addUser(userName, url) {
        let users;

        let user = {
            username : userName,
            url : url,
        }

        if(localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
        } else {
            users = [];
        }

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));
    }

    getStorage() {

        let users;

        if(localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
        } else {
            users = [];
        }

        return users;
    }

    clear() {
        localStorage.clear();
    }
}
