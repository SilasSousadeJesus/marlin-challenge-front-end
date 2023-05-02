import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent {
  @Input() post!: PostModel;
  @Input() img? = '';
  @Input() link!: boolean;
  edit = faPenToSquare;
  del = faTrash;

  constructor(
    private postService: PostsService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['home']);
  }
}
