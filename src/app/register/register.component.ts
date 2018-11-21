import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { Post } from './../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  imageUrl:string="/assets/img/placeholder.png";
  fileToUpload:File=null;
  posts:Post[];
  constructor(private data:PostService,private router: Router) { }

  ngOnInit() {
    this.data.getPosts()
  }
  handleFileUpload(file:FileList){
    this.fileToUpload=file.item(0);
    var reader=new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  onSubmitForm(post:Post)
  {
    this.data.insertPost(post)
     .subscribe(resNewVideo =>{
       this.posts.push(post);
      }); 
      this.router.navigateByUrl("/home");
  }

}
