class ShowCollectionFactory{
    static createFromKitsu(volumes){
        const collection = new ShowCollection();

        volumes.forEach(item => {
            let newItem = false;
            switch(item.attributes.showType.toLowerCase()){
                case 'tv':
                    newItem = Object.assign(new Show(), item);
                    break;
                case 'movie':
                    newItem = Object.assign(new Movie(), item);
                    break;
                case 'special':
                    newItem = Object.assign(new Show(), item);
                    break;
                case 'music':
                    break;
                case 'ONA':
                    newItem = Object.assign(new Show(), item);
                    break;
                case 'OVA':
                    newItem = Object.assign(new Show(), item);
                    break;
                default:
                    console.warn('Found something other than a show or movie');
            }
            if(newItem){
                collection.add(newItem)
            }
        })
        return collection;
    }

    static createFromLocalStorage(items) {
        return this.createFromKitsu(items);
    }
}