import { Injectable } from '@angular/core';
import { Data } from './data.model';


@Injectable({providedIn: 'root'})
export class DataService {

  listOfItems: Data[] = [
    new Data(
      18273,
      'Air Jordan XXXVIII PF',
      'Jordan',
      'Red & Black',
      2200,
      'available',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/99d0eb30-f290-4b37-a124-51ccd23c6d1c/air-jordan-xxxviii-pf-basketball-shoes-tTRwfF.png'
    ),
    new Data(
      31645,
      'Nike Airmax 1',
      'Nike',
      'Blue & White',
      7895,
      'out-of-stock',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7065c34-5e45-45ac-9ca6-a9eba20581ca/air-max-1-shoes-ZtQfN3.png'
    ),
    new Data(
      18273,
      'Run Falcon 3.0',
      'Adidas',
      'Black, Orange, & Blue',
      3500,
      'available',
      'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a03b7f0e2e3340ba92bab898d338b35f_9366/runfalcon-3.0-shoes.jpg'
    ),
  ];

  getAllData(){
    return this.listOfItems;
  }
  deleteData(index: number){
    this.listOfItems.splice(index, 1);
  }
  addItem(data: Data){
    this.listOfItems.push(data);
  }
  updateData(index: number, data: Data){
    this.listOfItems[index] = data;
  }
  getDatum(index: number){
    return this.listOfItems[index];
  }

}