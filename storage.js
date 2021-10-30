class Storage {

    addUser(userName, url) {
        let users;

        let newUser = {
            username : userName,
            url : url,
        }

        if(localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
        } else {
            users = [];
        }

        let flag = false;

        if(users.length > 0) {
            users.forEach((user) => {
                if(user.username == newUser.username) {
                    flag = true;
                }
            })
        }

        if(!flag) {
            users.push(newUser);

            localStorage.setItem("users", JSON.stringify(users));   
        }
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
