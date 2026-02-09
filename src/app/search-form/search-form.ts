import { Component, output } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.html',
  styleUrl: './search-form.css',
})
export class SearchForm {
  // Reactive form control for category dropdown
  categoryControl = new FormControl('');
  
  // Output event to notify parent when category changes
  categoryChange = output<string>();

  constructor() {
    // Subscribe to form control changes and emit to parent
    this.categoryControl.valueChanges.subscribe(value => {
      this.categoryChange.emit(value || '');
    });
  }
}
