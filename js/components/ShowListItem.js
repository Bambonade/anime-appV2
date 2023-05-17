app.component('ShowListItem', {
    props: {
        favorites: {modelType: ShowCollection, required: true},
        bookmarks: {modelType: ShowCollection, required: true},
        item: {modelType: Object, required: true},
    },

    data: function () {
        return {
            showDetails: false,
        };
    },

    computed: {
        thumbnail() {
            return this.item.attributes.posterImage.large.replace('&edge=curl', '');
        },
        favorite() {
            return this.favorites.contains(this.item);
        },
        bookmarked() {
            return this.bookmarks.contains(this.item);
        },
        detailsComponent(){
            if(this.item.attributes.showType === 'TV' || this.item.attributes.showType === 'ONA' || this.item.attributes.showType === 'OVA' || this.item.attributes.showType === 'Special'){
                console.log(this.item.attributes.showType + 'SHOW');
                return 'ShowDetails';
            }
            return this.item.attributes.showType + 'Details';
        }
    },

    methods: {
        displayDetails() {
            this.showDetails = true;
        },

        addFavorite() {
            this.favorites.add(this.item);
        },
        removeFavorite() {
            this.favorites.remove(this.item);
        },

        addBookmark() {
            this.bookmarks.add(this.item);
        },
        removeBookmark() {
            this.bookmarks.remove(this.item);
        },
    },

    template: `
        <div class="shelf col-sm-4 col-md-3 col-lg-2 col-6">
            
            <!-- SHOW THUMBNAIL -->
            <div class="show">
                <img :src="thumbnail" :alt="item.attributes.titles.en" @click="displayDetails" class="thumbnail">
                <div role="toolbar" class="btn-toolbar">
                    <div role="group" class="btn-group">
                        <button @click="displayDetails" title="More Info" type="button" class="btn btn-secondary"><i class="fas fa-info-circle"></i></button> 
                        
                        <button v-if="bookmarked" title="Remove Bookmark" @click="removeBookmark" type="button" class="btn btn-secondary"><i class="fas fa-bookmark"></i></button> 
                        <button v-else @click="addBookmark" title="Add Bookmark" type="button" class="btn btn-secondary"><i class="far fa-bookmark"></i></button> 
                        
                        <button v-if="favorite" @click="removeFavorite" title="Remove Favorite" type="button" class="btn btn-secondary"><i class="fas fa-heart"></i></button>
                        <button v-else @click="addFavorite" title="Add Favorite" type="button" class="btn btn-secondary"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
            
            <bs-modal v-model="showDetails" :title="item.attributes.titles.en_jp" hide-footer>
                <component :is="detailsComponent" :item="item"></component>
            </bs-modal>
        </div>
    `,
});
