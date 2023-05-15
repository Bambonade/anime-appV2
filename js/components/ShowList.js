app.component('ShowList', {
    props: {
        collection: {type: ShowCollection},
        favorites: {type: ShowCollection},
        bookmarks: {type: ShowCollection},
    },

    template: `
        <div class="row">
            <show-list-item v-for="item in collection.items" :key="item.id"
                  :item="item"
                  :favorites="favorites"
                  :bookmarks="bookmarks"></show-list-item>
        </div>
    `
});
