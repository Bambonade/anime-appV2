function User(firebaseUser){
    let u = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
    }

    if(firebaseUser){
        u.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
        u.email = firebaseUser.email ? firebaseUser.email : '';
        u.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
        u.uid = firebaseUser.uid ? firebaseUser.uid : '';
    }

    return u;
}