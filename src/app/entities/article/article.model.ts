import {DisplayMember} from "../display-member";

export interface IArticle {
    id: number,
    authorId: number,
    type: ArticleType,
    title: string,
    createdOn: Date,
}

export class Article implements IArticle {
    id: number;
    authorId: number;
    type: ArticleType;
    title: string;
    createdOn: Date;

    constructor(article: Article) {
        // Object.assign(this, props);
        this.id = article.id;
        this.authorId = article.authorId;
        this.type = article.type;
        this.title = article.title;
        this.createdOn = article.createdOn;
    }
}

export enum ArticleType {
    Article = 'ARTICLE',
    Book = 'BOOK'
}
export const DISPLAY_MEMBERS : DisplayMember[]= [
     { id:1, name: 'type', type: 'ArticleType' },
     { id:2, name: 'title', type: 'string' },
     { id:3, name: 'createdOn', type: 'Date' },
]


