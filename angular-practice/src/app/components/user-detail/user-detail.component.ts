import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  currentUser: User = new User();

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    //returns observable 
    this.route.params.subscribe(param=>{
      this.currentUser.userId = param['userId'];
      console.log(this.currentUser.userId);
      //this.postService.getPosts(this.currentPost.id);
      this.getPost(this.currentUser.userId);
    });
  }

  getPost(idParam: number) {
    this.userService.getUserById(idParam)
    .then((response)=>{
      this.currentUser = response;
      console.log(this.currentUser);
    })
    .catch((e)=>{
      console.log(e);
    });
  }

}
