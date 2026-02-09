import { Component, output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

export interface SearchCriteria {
  keyword: string;
  category: string;
}

@Component({
  selector: 'app-search-form',
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.html',
  styleUrl: './search-form.css',
})
export class SearchForm {
  // Form group containing all search controls
  searchForm = new FormGroup({
    // Keyword control with validation rules
    keyword: new FormControl('', [
      Validators.minLength(3),  // Must be at least 3 characters
      Validators.pattern(/^[a-zA-Z0-9\s]*$/)  // Only letters, numbers, and spaces
    ]),
    // Category control (no validation needed)
    category: new FormControl('')
  });
  
  // Output event to notify parent when search criteria changes
  searchChange = output<SearchCriteria>();

  constructor() {
    // Subscribe to form value changes
    this.searchForm.valueChanges.subscribe(value => {
      // Only emit if keyword is valid or empty
      const keyword = this.searchForm.get('keyword');
      if (keyword?.valid || keyword?.value === '') {
        this.searchChange.emit({
          keyword: value.keyword || '',
          category: value.category || ''
        });
      }
    });
  }
}
