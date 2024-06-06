import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article.model';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = ARTICLES;

  constructor() { }

  public getArticlesByAuthor(authorId: number): Observable<Article[]> {
    // Filter articles by authorId if needed. Here we return all articles for simplicity.
    return of(this.articles);
  }

  public getArticlesByAuthorId(authorId: number): Observable<Article[]> {
    return of(this.articles.filter(article => article.authorId === authorId));
  }
}
