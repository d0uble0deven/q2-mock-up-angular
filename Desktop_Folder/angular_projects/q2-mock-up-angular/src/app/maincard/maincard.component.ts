import { USER } from '../User';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.css']
})
export class MaincardComponent implements OnInit {

  users: USER[]

  term: string

  searchResults: any

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  // take term and send filter users for term, return results

  searchUsers() {
    // setTimeout(function(){yourFunction()},10000);
    return this.searchResults = this.users.filter(item => {

      return item.name.includes(this.term)


    })

  }


  // get input text value and search it in jsonPlaceholder users
  // return response in card below

  getUsers() {
    this.usersService.getJSON().subscribe(data => this.users = data)
    // .subscribe((data: Config) => this.config = {
    //   heroesUrl: data['heroesUrl'],
    //     textfile: data['textfile']
    // });

  }

}
