class Movie {
    static type = 'Movie';

    get type(){
        return Movie.type;
    }

    //TODO: place API data here
    id = '';
    volumeInfo = {
        titles: {
            en: '',
            en_jp: '',
            ja_jp: '',
        },
        averageRating: 0,
        popularityRank: 0,
        ratingRank: 0,
        status: '',
        posterImage:{
            tiny: '',
            small: '',
            medium: '',
            large: '',
            original: '',
        },
        coverImage:{
            tiny: '',
            small: '',
            large: '',
            original: '',
        },
        episodeCount: 0,
        episodeLength: 0,
        showType: {
            ONA: '',
            OVA: '',
            TV: '',
            movie: '',
            music: '',
            special: '',
        },
    }

    get thumbnail(){
        //TODO: API data for images
        return this.volumeInfo.coverImage?.tiny?.replace('&edge=curl', '');
    }
}