//TODO: fix API
class MAI {
    static search(keyword, limit){
        let endpoint = 'https://api.myanimelist.net/v2'
        let params = {
            q: keyword,
            client: '8d0bdd07e8b433b4c7370778cbe04eb9',
            clientId: '4c72b769f1c32fe89e9cba03f8a95c22ca6ff66866c1effb6f91e59572c77c31',
            filter: 'full',
            maxResults: limit ?? 36,
        }
        let config = {
            params: params,
        }

        return axios.get(endpoint, config);
    }
}