class ShowCollection {
    _arr;

    constructor(arr) {
        if (!Array.isArray(arr)){
            arr = [];
        }

        this._arr = arr;
    }

    add(show){
        return this._arr.push(show);
    }

    remove(show){
        return this._arr.splice(this._findItem(show), 1);
    }

    contains(show){
        return this._findItem(show) >= 0;
    }

    get count(){
        return this._arr.length;
    }

    get items(){
        return [...this._arr]
    }

    _findItem(show){
        return this._arr.findIndex(function(item){
            return item.id === show.id;
        })
    }



}