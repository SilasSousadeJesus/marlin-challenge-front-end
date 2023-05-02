import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private postService: PostsService, private router: Router) {}

  posts: PostModel[] = [];
  startIndex = 0;
  endIndex = 10;
  itemsPerPage = 10;

  ngOnInit(): void {
    this.fetchPosts();
  }

  ngOnChanges() {}

  fetchPosts() {
    this.postService.fetchAllPostsPlaceholder().subscribe(
      (resPlacheholder: PostModel[]) => {
        this.postService.fetchAllPostsApi().subscribe(
          (resApi: PostModel[]) => {
            if (resApi.length > 0) {
              this.posts = resApi.concat(resPlacheholder);
            } else {
              this.posts = resPlacheholder;
            }
          },
          (err: any) => {
            console.log(err);
            this.postService
              .fetchAllPostsPlaceholder()
              .subscribe((securitAanswers) => {
                this.posts = securitAanswers;
              });
          }
        );
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getArrayLenght(length: number) {
    return new Array(Math.ceil(length / this.itemsPerPage));
  }

  getIndex(pageIndex: number) {
    this.startIndex = pageIndex * this.itemsPerPage;
    this.endIndex = this.startIndex + this.itemsPerPage;
  }

  navigateToCreation() {
    this.router.navigate(['creation']);
  }
}
