import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  title = 'Prova';
  @ViewChild('fileInput') inputEl!: ElementRef;

  ngOnInit(): void {
  }

  save(){
      let  imageData = new FormData();
      let  postData = new FormData();
      let inputEl: HTMLInputElement = this.inputEl.nativeElement;
      console.log(inputEl.files)


      if(inputEl?.files){
        console.log(inputEl.files[0]);
        imageData.append('title','immagine')
        imageData.append('status','publish')
        imageData.append('file', inputEl.files[0]);
        imageData.append('mime_type', inputEl.files[0].type);
        imageData.append('source_url', inputEl.files[0].name);
      }

      this.http.post('http://wp-api.test/wp-json/wp/v2/media',imageData)
      .subscribe((res:any) =>{

        postData.append('title',this.title)
        postData.append('status','publish')
        postData.append('content','')
        postData.append('featured_media',res.id)
        this.http.post('http://wp-api.test/wp-json/wp/v2/posts',postData)
        .subscribe((postRes:any) =>{
          console.log(postRes)
        })

      })


  }

}
