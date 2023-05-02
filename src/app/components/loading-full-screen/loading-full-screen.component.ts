import { Component, Input } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading-full-screen',
  templateUrl: './loading-full-screen.component.html',
  styleUrls: ['./loading-full-screen.component.css']
})
export class LoadingFullScreenComponent {
  @Input() show? = true;

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
  }
}
