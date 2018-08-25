import { Component, OnInit } from '@angular/core';
import { SearchUsersService } from '../services/search-users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  location : string = "";
  language : string = "";

  results : Array<Object> = [];//this will hold the data coking from service
  selected : boolean = false; // Flag to check if a user is clicked or not
  selectedUser : any;
  error_text : string = "";

  constructor(private searchUsersService : SearchUsersService) { }

  ngOnInit() {
  }

  search(location, language){
    if(location || language){
      this.location = location;
      this.language = language;
      this.searchUsersService.getUsersByLocationAndLanguage(this.location, this.language)
        .subscribe(
          (data) => {this.results = data['items'];
          console.log('results' + JSON.stringify(this.results));
        },
          error => {
            this.results = [];
            this.error_text = "Sorry! No users found. Try again";
            console.error(error);
          }
        );
    }
  }

}
