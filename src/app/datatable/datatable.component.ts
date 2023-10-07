import { Component, OnInit } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  listOfItems: Data[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.listOfItems = this.dataService.getAllData();
  }

}
