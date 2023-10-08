import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Data } from '../data.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent implements OnInit {

  form!: FormGroup;
  index: number = 0;
  editMode = false;
  constructor(private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let uuid = uuidv4();
    let name = '';
    let brand = '';
    let color = '';
    let price = NaN;
    let status = '';
    let imgPath = '';

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);
        this.index = params['index'];

        const data = this.dataService.getDatum(this.index);
        uuid = uuidv4();
        name = data.name;
        brand = data.brand;
        color = data.color;
        price = data.price;
        status = data.status;
        imgPath = data.imgPath;
        this.editMode = true;
      }
    }
    );
    this.form = new FormGroup({
      uuid: new FormControl(uuid, [Validators.required]),
      name: new FormControl(name, [Validators.required]),
      brand: new FormControl(brand, [Validators.required]),
      color: new FormControl(color, [Validators.required]),
      price: new FormControl(price, [Validators.required]),
      status: new FormControl(status, [Validators.required]),
      imgPath: new FormControl(imgPath, [Validators.required]),
    });
  }
  onSubmit() {
    const uuid = this.form.value.uuid;
    const name = this.form.value.name;
    const brand = this.form.value.brand;
    const color = this.form.value.color;
    const price = this.form.value.price;
    const status = this.form.value.status;
    const imgPath = this.form.value.imgPath;

    const data: Data = new Data(
      uuid, name, brand, color, price, status, imgPath
    );

    if (this.editMode) {
      this.dataService.updateData(this.index, data)
    }
    else {
      this.dataService.addItem(data);
    }
    //navigate ti post-list
    this.router.navigate(["/datatable"])


  }
}

