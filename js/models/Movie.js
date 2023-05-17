class Movie {
    static modelName = 'Movie';

    get modelName(){
        return Movie.modelName;
    }

    id = '';
    attributes = {
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
        description: '',
    }

    get thumbnail(){
        return this.attributes.posterImage.large.replace('&edge=curl', '');
    }
}