import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  private searchUsersEndPoint = "https://api.github.com/search/users?q=";
  private getUserDetailsEndPoint = "https://api.github.com/users/";

  constructor(private http: HttpClient) { }

  getUsersByLocationAndLanguage(location:string, language:string){
    let url : string = "";
    if(location && !language){
      url = `${this.searchUsersEndPoint}location:${location}`;
    }else if (!location && language) {
      url = `${this.searchUsersEndPoint}language:${language}`;
    }else {
      url = `${this.searchUsersEndPoint}location:${location}+language:${language}`;
    }

    return this.http.get(url);

  }


}
