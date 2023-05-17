class Kistu {
    static search(keyword, limit){
        let endpoint = 'https://kitsu.io/api/edge/anime'
        let params = {
            'filter[text]':keyword,
            'page[limit]':20,
        }
        let config = {
            params: params,
        }

        return axios.get(endpoint, config);
    }
}