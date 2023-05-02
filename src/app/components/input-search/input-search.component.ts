import { Component, Input } from '@angular/core';
import { faCoffee, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
})
export class InputSearchComponent {
  @Input() placeholder = '';
  @Input() title = '';

  lupa = faMagnifyingGlass;
}
