class UI {
    constructor() {
        this.profileDiv = document.querySelector("#profile");
        this.repoDiv = document.querySelector("#repos");
        this.lastSearchesDiv = document.querySelector("#lastSearch");
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
}