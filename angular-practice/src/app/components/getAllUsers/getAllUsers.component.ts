import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-getAllUsers',
  templateUrl: './getAllUsers.component.html',
  styleUrls: ['./getAllUsers.component.css']
})
export class getAllUsersComponent implements OnInit {

  users: User[] = [];
  showBtns: Boolean[] = [];
  btnFormat: String[] = [];
  addOrRemoveSong: String[] = [];
  fontWeight: String[] = [];
  borderRadius: String = "50px";

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

  getAllUsers() {
    // call service method we created
    // using arrow notation to provide a callback
    this.userService.getUsers().subscribe((allUsers)=>{
      //console.log("allusers: " + allUsers);
      this.users = allUsers
      console.log(this.users);
      for (let u of this.users) {
        this.showBtns[u.userId] = true;
      }
      for (let u of this.users) {
        this.btnFormat[u.userId] = "btn btn-info";
      }
      for (let u of this.users) {
        this.addOrRemoveSong[u.userId] = "+";
      }
      for (let u of this.users) {
        this.fontWeight[u.userId] = "bold";
      }
  
      console.log(this.addOrRemoveSong);
      console.log(this.showBtns);
    });
  }

  addSong(userId: number) {
  
    console.log(this.showBtns);
    /*
    if (this.showBtns[userId] == undefined) {
      this.showBtns[userId] = true;
    }
    */
   

   console.log(this.btnFormat);
   if (this.btnFormat[userId] === "btn btn-danger") {
     this.btnFormat[userId] = "btn btn-info";
   } else {
    this.btnFormat[userId] = "btn btn-danger";
   }
   if (this.addOrRemoveSong[userId] === "+") {
    this.addOrRemoveSong[userId] = "x";
    this.fontWeight[userId] = "normal";
   } else {
     this.addOrRemoveSong[userId] = "+";
     this.fontWeight[userId] = "bold";
   }
   console.log(this.btnFormat);
    this.showBtns[userId] = !this.showBtns[userId];
    console.log(this.showBtns);
  }

}
