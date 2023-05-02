import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostDto } from '../models/postDto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url = environment.baseUrl;
  urlApi = environment.baseUrlApi;

  constructor(private httpClient: HttpClient) {}

  fetchAllPostsPlaceholder(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`${this.url}`);
  }
  fetchPostPlaceholder(id: string): Observable<PostModel> {
    return this.httpClient.get<PostModel>(`${this.url}/${id}`);
  }


  createPost(post: PostDto) {
    return this.httpClient.post<PostDto>(`${this.urlApi}`, post);
  }
  fetchAllPostsApi(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`${this.urlApi}`);
  }
  fetchPostApi(id:string): Observable<PostModel> {
    return this.httpClient.get<PostModel>(`${this.urlApi}/${id}`);
  }
  editPost(post: PostDto, id: number | string) {
    return this.httpClient.put<PostModel>(`${this.urlApi}/${id}`, post);
  }
  delPost(id: number | string) {
    return this.httpClient.delete<PostModel>(`${this.urlApi}/${id}`);
  }
}
