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
  
  // Output event to notify parent when search button is clicked
  searchChange = output<SearchCriteria>();

  // Called when user clicks the Search button
  onSearch() {
    // Only emit if form is valid
    if (this.searchForm.valid) {
      this.searchChange.emit({
        keyword: this.searchForm.value.keyword || '',
        category: this.searchForm.value.category || ''
      });
    }
  }

  // Called when user clicks the Clear button
  onClear() {
    this.searchForm.reset();
    this.searchChange.emit({
      keyword: '',
      category: ''
    });
  }
}
