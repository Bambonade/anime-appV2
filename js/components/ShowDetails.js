app.component('ShowDetails', {
    props:{
        item: Object,
    },
    template:`
        <div class="show-details container-fluid">
            <div class="row">
                <div class="text-center col-preview col-sm-4">
                    <img :src="item.thumbnail" :alt="item.attributes.titles.en" class="img-fluid w-100"> 
                </div>
                <div class="text-left col-details col-sm-8">
                    <dl>
                        <template v-if="item.attributes.titles.en">
                            <dt>{{item.attributes.titles.en > 1 ? 'Title' : 'Title'}}</dt>
                            <dd>{{item.attributes.titles.en.join(',')}}</dd>
                        </template>
                        <template v-if="item.attributes.ratingRank">
                            <dt>Rating Rank</dt>
                            <dd>{{item.attributes.ratingRank}}</dd>
                        </template>
                        
                        <template v-if="item.attributes.averageRating">
                            <dt>Average Rating</dt>
                            <dd>{{item.attributes.averageRating}}</dd>
                        </template>
                    </dl>
                </div>
            </div>
        </div>
    `
});
