class ShowCollectionFactory{
    static createFromMyAnimeListAPI(volumes){
        const collection = new ShowCollection();

        volumes.forEach(item => {
            let newItem = false;
            // TODO: fix API data info
            switch(item.volumeInfo.printType.toLowerCase()){
                case 'show':
                    newItem = Object.assign(new Show(), item);
                    break;
                case 'movie':
                    newItem = Object.assign(new Movie(), item);
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
}