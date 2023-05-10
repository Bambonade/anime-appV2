app.component('ShowDetails', {
    props:{
        item: Object,
    },
    template:`
        <div class="book-details container-fluid">
            <div class="row">
                <div class="text-center col-preview col-sm-4">
                    <img :src="item.thumbnail" :alt="item.volumeInfo.titles.en" class="img-fluid w-100"> 
                    <a  v-if="item.accessInfo.webReaderLink" 
                        :href="item.accessInfo.webReaderLink"
                        rel="noopener" target="_blank" 
                        class="btn m-2 btn-primary">Preview</a>
                </div>
                <div class="text-left col-details col-sm-8">
                    <dl>
                        <template v-if="item.volumeInfo.titles.en">
                            <dt>{{item.volumeInfo.titles.en > 1 ? 'Title' : 'Title'}}</dt>
                            <dd>{{item.volumeInfo.titles.en.join(',')}}</dd>
                        </template>
                        
<!--                        <template v-if="item.volumeInfo.categories">-->
<!--                            <dt>{{item.volumeInfo.categories.length > 1 ? 'Categories' : 'Category'}}</dt>-->
<!--                            <dd>{{item.volumeInfo.categories.join(',')}}</dd>-->
<!--                        </template>-->
<!--                        -->
<!--                        <template v-if="item.volumeInfo.publisher">-->
<!--                            <dt>Publisher</dt>-->
<!--                            <dd>{{item.volumeInfo.publisher}}</dd>-->
<!--                        </template>-->
<!--                        -->
<!--                        <template v-if="item.volumeInfo.pageCount">-->
<!--                            <dt>Pages</dt>-->
<!--                            <dd>{{item.volumeInfo.pageCount}}</dd>-->
<!--                        </template>-->
<!--                        -->
<!--                        <template v-if="item.volumeInfo.description">-->
<!--                            <dt>Description</dt>-->
<!--                            <dd>{{item.volumeInfo.description}}</dd>-->
<!--                        </template>                                    -->
                    </dl>
                </div>
            </div>
        </div>
    `
});
