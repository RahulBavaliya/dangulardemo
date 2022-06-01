import { Component, OnInit } from '@angular/core';
import { GetAPIService } from 'src/app/get-api.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers: any = [];
  constructor(private service: GetAPIService) { }

  ngOnInit(): void {
    this.users();

    
  }

  users(): void {
    this.service
        .users()
        .subscribe((data) => {
          this.allUsers = data;
        });
  }

  

}
