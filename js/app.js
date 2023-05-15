const app = Vue.createApp({
    // data: all the data for the app
    data() {
        return {
            searching: true,
            searchTerm: 'Naruto',
            searchResults: new ShowCollection(),
            currentCollection: new ShowCollection(),
            bookmarks: new ShowCollection(),
            favorites: new ShowCollection(),
            shows: 'home',
            localBookmarks: 'anime-app-bookmarks',
            localFavorites: 'anime-app-favorites',
        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        // change "page" by setting books array
        display(shows) {
            this.shows = shows;

            switch (this.shows) {
                case 'home':
                    this.currentCollection = this.searchResults;
                    break;
                case 'bookmarks':
                    this.currentCollection = this.bookmarks;
                    break;
                case 'favorites':
                    this.currentCollection = this.favorites;
                    break;
            }
        },

        // LOAD SHOWS
        searchShows() {
            // prepare and perform search
            if (this.searchTerm) {
                // clear results
                this.searchResults = new ShowCollection();

                // display message
                this.searching = true;

                Kistu
                    .search(this.searchTerm)
                    .then(response => {
                        console.log('api response', response);

                        if (response.data.data.length > 0) {
                            this.searchResults = ShowCollectionFactory.createFromKitsu(response.data.data);
                        }

                        console.log(this.searchResults);
                    })
                    .catch(error => {
                        console.log('AJAX SEARCH ERROR!', error);
                        // TODO: let the user know
                    })
                    .finally(() => {
                        // remove the loading screen
                        this.searching = false;

                        // redirect to store page
                        this.display('store')
                    })
            }
        },
    },

    // computed: values that are updated and cached if dependencies change
    computed: {},

    //mounted:  called after the instance has been mounted,
    mounted: function () {
        // perform default search
        this.searchShows();
    },

    // watch: calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        bookmarks: {
            handler: function (newCollection) {
                // store in local storage for later
                localStorage.setItem(this.localBookmarks, JSON.stringify(newCollection.items));
            },
            deep: true,
        },
        favorites: {
            handler: function (newCollection) {
                // store in local storage for later
                localStorage.setItem(this.localFavorites, JSON.stringify(newCollection.items));
            },
            deep: true,
        }
    }
});
