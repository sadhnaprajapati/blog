import { Injectable } from '@angular/core';
import { Post} from './post';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _getUrl="/api/post";
  private _postUrl="/api/send";
  private _getUsersUrl="/api/users";
  private _getCategory="/api/category";
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  getPosts(){
    return this.http.get(this._getUrl);
  }
  /****************** a single user by their id *********/
  getPost(postId){
    return this.http.get(this._getUrl+"/"+postId)
  }

  insertPost(post:Post){
      return this.http.post(this._postUrl,JSON.stringify(post),this.httpOptions)
  }

  getUsers(){
    return this.http.get(this._getUsersUrl);
  }

  getCategory(){
    return this.http.get(this._getCategory);
  }
}
