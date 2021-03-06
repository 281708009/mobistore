import {Injectable} from '@angular/core';
import {VARIABLE} from '../utils/variable';
import {PostService} from './post';
import {Product} from '../models/product';

@Injectable()
export class SearchService {
    constructor(private _postService: PostService) { }
    
    _search = '/search/search';
    _history = '/search/getHistory';
    _keywords = '/search/getMatchedKeywords';

    search(keywords) {
        return this._postService.post(this._search, {keywords: keywords, category: VARIABLE.CURRENT_CATEGORY});
    }

    getHistory() {
        return this._postService.post(this._history, {});
    }
    
    getMatchedKeywords(keywords) {
        return this._postService.post(this._keywords, {keywords: keywords, category: VARIABLE.CURRENT_CATEGORY});
    }
}
