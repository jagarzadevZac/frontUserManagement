import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  url = 'https://managementuserapi.herokuapp.com/user';
  constructor(private http: Http) { }

  /* public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista');
  } */


  getUser(){
    return this.http.get(this.url+'/list');
  }

  getOneByid(id:number){
    return this.http.get(this.url+'/detail/'+id);
  }

  addUser(user:user){
    return this.http.post(this.url+'/create',user);
  }

  deleteUser(id:number){
    return this.http.delete(this.url+'/delete/'+id);
  }

  modifiedUser(id:number,user:user){
    return this.http.put(this.url+'/update/'+id,user);
  }

}


export interface user{
  id?:number;
  firstName?:String;
  lastName?:String;
  email?:String;
}
