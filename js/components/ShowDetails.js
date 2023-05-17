app.component('ShowDetails', {
    props:{
        item: Object,
    },
    template:`
        <div class="show-details container-fluid">
            <div class="row">
                <div class="text-center col-preview col-sm-4">
                    <img :src="item.thumbnail" :alt="item.attributes.titles.en_jp" class="img-fluid w-100"> 
                </div>
                <div class="text-left col-details col-sm-8">
                    <dl>
                        <template v-if="item.attributes.description">
                            <dt>Description</dt>
                            <dd>{{item.attributes.description}}</dd>
                        </template>
                        <template v-if="item.attributes.episodeCount">
                            <dt>Episode Count</dt>
                            <dd>{{item.attributes.episodeCount}}</dd>
                        </template>
                        <template v-if="item.attributes.startDate">
                            <dt>Start Date</dt>
                            <dd>{{item.attributes.startDate}}</dd>
                        </template>
                        <template v-if="item.attributes.status">
                            <dt>Status</dt>
                            <dd>{{item.attributes.status}}</dd>
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
