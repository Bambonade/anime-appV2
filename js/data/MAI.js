class MAI {
    static search(keyword, limit){
        let endpoint = 'https://api.myanimelist.net/v2'
        let params = {
            q: keyword,
            filter: 'full',
            maxResults: limit ?? 36,
        }
        let config = {
            params: params,
        }

        return axios.get(endpoint, config);
    }
}