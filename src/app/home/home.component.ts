import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  imageUrl:string="/assets/img/female.png";
  post:Object;
  user:Object;
  category:Object;
  constructor(private data:PostService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data=>this.post=data
    );
    this.data.getUsers().subscribe(
      data=>this.user=data
    );
    this.data.getCategory().subscribe(
      data=>this.category=data
    );
  }

}
