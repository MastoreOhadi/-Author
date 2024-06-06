
import {Observable, of} from "rxjs";
import {SearchResult} from "../entities/SearchResult";

export interface ApiService<T> {

  fetchData(page: number, pageSize: number,searchText: string,sort:string): Observable<SearchResult<T>>;


}
