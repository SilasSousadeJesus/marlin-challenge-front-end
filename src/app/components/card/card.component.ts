import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() post!: PostModel;
  @Input() img? = '';
  @Input() link!: boolean;
  edit = faPenToSquare;
  del = faTrash;

  constructor(
    private postService: PostsService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {}

  deletePost(id: number | string) {
    this.postService.delPost(id).subscribe(
      (res) => {
        location.reload();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }
}
