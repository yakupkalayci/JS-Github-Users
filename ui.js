class UI {
    constructor() {
        this.profileDiv = document.querySelector("#profile");
        this.repoDiv = document.querySelector("#repos");
        this.lastSearchesList = document.querySelector("#last-users");
        this.usernameInput = document.querySelector("#username");
    }

    addProfileInfostoUI(userInfos) {
        this.profileDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4">
                        <img src="${userInfos.avatar_url}">
                        <hr>
                        <p><strong>${userInfos.login}</strong></p>
                        <hr>
                        <p>${userInfos.bio}</p>
                    </div>
                    <div class="col-sm-8">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-primary">Follower
                                <span class="badge badge-light ml-2">${userInfos.followers}</span>
                            </button>
                            <button type="button" class="btn btn-secondary">Following
                                <span class="badge badge-light ml-2">${userInfos.following}</span>
                            </button>
                            <button type="button" class="btn btn-danger">Repos
                                <span class="badge badge-light ml-2">${userInfos.public_repos}</span>
                            </button>
                        </div>
                        <hr>
                        <ul class="list-group">
                            <li class="list-group-item border-zero">
                                <img src="images/company.png" width="30px">
                                <span class="ml-2">${userInfos.company}</span>
                            </li>
                            <li class="list-group-item border-zero">
                                <img src="images/location.png" width="30px">
                                <span class="ml-2">${userInfos.location}</span>
                            </li>
                            <li class="list-group-item border-zero">
                                <img src="images/mail.png" width="30px">
                                <span class="ml-2">${userInfos.email}</span>
                            </li>
                          </ul>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    clearInput() {
        this.usernameInput.value = "";
    }

    addRepoInfostoUI(repoInfos) {
        this.repoDiv.innerHTML = "";

        repoInfos.forEach(repo => {
            this.repoDiv.innerHTML += `
            <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                    <a href="${repoInfos.html_url}" target="_blank" id="repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Starlar <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>
        
                    <button class="btn btn-info">
                        Forklar <span class="badge badge-light" id="repoFork">${repo.forks_count}</span>
                    </button>
        
                </div>
            </div> 
    
        </div> 
            `  
        })
    }

    addUsersFromStorage(storage) {
        this.lastSearchesList.innerHTML = "";

        if(storage) {
            storage.forEach(user => {
                this.lastSearchesList.innerHTML += `
                <a href="${user.url}">
                <li class="list-group-item">${user.username}</li></a>
                `
            })
        } else console.log("hello")
    }

    clearLastSearches() {
        this.lastSearchesList.innerHTML = "";
    }
}