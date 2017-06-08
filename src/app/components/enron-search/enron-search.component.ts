import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-enron-search',
  templateUrl: './enron-search.component.html',
  styleUrls: ['./enron-search.component.scss'],
  providers: [FormBuilder]
})
export class EnronSearchComponent implements OnInit {

  private searchService: SearchService;
  private items: Observable<Array<any>>;
  private term = new FormControl();
  private formBuilder: FormBuilder;
  private searchForm: FormGroup;

  constructor(searchService: SearchService, formBuilder: FormBuilder) {
    this.searchService = searchService;
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    // the short way
    this.searchForm = this.formBuilder.group({
      term: [''],
    });

    this.items = (<FormControl>this.searchForm.controls['term'])
      .valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchService.search(term));

    this.items.subscribe(result => console.log(result), error => console.error(error));
  }
}
