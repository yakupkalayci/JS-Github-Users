class Github {
    constructor() {

        this.url = "https://api.github.com/users/";

    }

    async getUserInfos(username) {

        const endpoint = this.url + username;

        let userResponse = await fetch(endpoint);
        let repoResponse = await fetch(endpoint+"/repos");

        let userData = await userResponse.json();
        let repoData = await repoResponse.json();
        
        return {
            userInfos : userData,
            repoInfos : repoData
        }
    }
}