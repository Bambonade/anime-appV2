app.component('UserAuthentication',{
    props:{
        authUser: {required: true},
    },

    methods: {
        login(){
            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth()
                .signInWithPopup(provider)
                .catch(function(error){
                    let errorCode = error.code;
                    let errorMessage = error.message;

                    console.log('Error signing in: ', error);

                    //TODO: let user know
                })
        },

        logout(){
            auth.signOut();
        },
    },
    template:`
    <nav class="navbar navbar-dark bg-secondary fixed-top navbar-expand-md">
        <div class="navbar-brand"><i class="fas fa-tv"></i></i>&nbsp;&nbsp;&nbsp;Show List</div>

        <button type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed" aria-expanded="false"
                aria-controls="nav_collapse" style="overflow-anchor: none;"><span class="navbar-toggler-icon"></span>
        </button>

        <div id="nav_collapse" class="navbar-collapse collapse" style="display: none;">
            <ul class="navbar-nav">
                <li class="nav-item"><a href="#" @click="display('store')" :class="{active: shows == 'home'}"
                                        class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#" @click="display('bookmarks')"
                                        :class="{active: shows == 'bookmarks'}" class="nav-link">Bookmarks</a></li>
                <li class="nav-item"><a href="#" @click="display('favorites')"
                                        :class="{active: shows == 'favorites'}" class="nav-link">Favorites</a></li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="form-inline">
                    <form @submit.prevent="searchShows()" class="form-inline">
                        <input type="text" placeholder="Search"
                               class="mr-sm-2 form-control form-control-sm"
                               v-model="searchTerm">
                        <button type="submit" class="btn my-2 my-sm-0 btn-secondary btn-sm"><i
                                class="fas fa-search"></i></button>
                    </form>
                </li>
            </ul>
        </div>
    </nav>
    `
})

