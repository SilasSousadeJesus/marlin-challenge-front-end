import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css'],
})
export class PostCreationComponent implements OnInit {
  formPost: FormGroup = new FormGroup({
    UserId: new FormControl(2),
    Title: new FormControl('', [Validators.required]),
    Body: new FormControl('', [Validators.required, Validators.maxLength(500)]),
  });

  constructor(private postService: PostsService, private router: Router) {}

  ngOnInit(): void {}

  get Title() {
    return this.formPost.get('Title')!;
  }

  get Body() {
    return this.formPost.get('Body')!;
  }

  submit() {
    if (this.formPost.invalid) {
      return;
    }
    this.postService.createPost(this.formPost.value).subscribe(
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
