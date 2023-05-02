import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent {
  post: PostModel = new PostModel();
  id!: string | null;

  formPost: FormGroup = new FormGroup({
    userId: new FormControl(this.post.userId),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get title() {
    return this.formPost.get('title')!;
  }

  get body() {
    return this.formPost.get('body')!;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.fetchPost(this.id);
    } else {
      this.router.navigate(['home']);
    }
  }

  fetchPost(Id: string) {
    this.postService.fetchPostApi(Id).subscribe(
      (res: PostModel) => {
        this.post = res;
        this.formPost.get('title')?.setValue(this.post.title);
        this.formPost.get('userId')?.setValue(this.post.userId);
        this.formPost.get('body')?.setValue(this.post.body);
      },
      (err: any) => console.log(err)
    );
  }

  submit() {
    if (this.formPost.invalid) {
      return;
    }

    this.postService.editPost(this.formPost.value, this.post.id).subscribe(
      (res) => {
        this.router.navigate(['home']);
      },
      (err: any) => console.log(err)
    );
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }
}
