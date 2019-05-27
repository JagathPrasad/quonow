import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from '../products/products.routing';
import {ProductsComponent} from '../products/products.component';
import {ProductTypes} from '../products/producttypes.component';


@NgModule({

imports:[CommonModule,routing],
declarations:[ProductsComponent,ProductTypes]

})

export class ProductsModule{

    constructor(){}
}