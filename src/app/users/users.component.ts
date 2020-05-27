import { Component, OnInit } from '@angular/core';


import { PostsService } from '../services/posts.service';
import { Post } from '../interfaces/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  post : Post[] = []

  constructor(private getPost : PostsService) { }

  ngOnInit(): void {
    this.getPost.getAllPost().subscribe(data => this.post = data)
  }
}
