import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { routing } from '../search/search.routing';
import { SliderModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, routing, SliderModule, FormsModule]
})

export class SearchModule {

    constructor() {

    }
}