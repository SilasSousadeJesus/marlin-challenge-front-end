import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  post: PostModel = new PostModel();
  id: string | null = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.fetchPost(this.id);
      console.log(this.id);
    } else {
      this.router.navigate(['home']);
    }
  }

  fetchPost(id: any) {
    if (isNaN(id)) {
      this.fetchPostApi(id);
    } else {
      this.fetchPostPlaceHolder(id);
    }
  }
  fetchPostApi(id: string) {
    this.postService.fetchPostApi(id).subscribe(
      (res: PostModel) => {
        this.post = res;
      },
      (err: any) => console.log(err)
    );
  }

  fetchPostPlaceHolder(id: string) {
    this.postService.fetchPostPlaceholder(id).subscribe(
      (res: PostModel) => {
        this.post = res;
      },
      (err: any) => console.log(err)
    );
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }
}
