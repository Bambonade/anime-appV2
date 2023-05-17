
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
      <button v-if="!authUser" class="btn my-2 my-sm-0 btn-secondary btn-sm" @click="login">Sign in</button>
    `
})

