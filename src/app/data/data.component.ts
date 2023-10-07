import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() data?: Data;
  @Input() index: number = 0;
  itemAvailability!: true;
  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.data)
    console.log(this.index)
  }
  onDelete() {
    this.dataService.deleteData(this.index);
  }
  onEdit() {
    this.router.navigate(["/data-edit", this.index])
  }
  
}
