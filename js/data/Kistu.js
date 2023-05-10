//TODO: fix API
class Kistu {
    static search(keyword, limit){
        let endpoint = 'https://kitsu.io/api/edge/anime?filter[text]=naruto'
        let params = {

        }
        let config = {
            params: params,
        }

        return axios.get(endpoint);
    }
}