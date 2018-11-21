import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post:Object;
  constructor(private route: ActivatedRoute, private data: PostService) { 
    //console.log(this.route.params.BehaviorSubject)
    this.route.params.subscribe( params => this.post = params.id );
 }

  ngOnInit() {
    this.data.getPost(this.post).subscribe(
      data => this.post = data 
    );
  }

}
