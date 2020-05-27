import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/interfaces';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post : Post[] = []

  constructor(private getPost : PostsService) { }

  ngOnInit()
  : void 
  {
    this.getPost.getAllPost().subscribe(data => this.post = data)
  }

  readMore(index){
    console.log('added', this.post[index])
  }

}
