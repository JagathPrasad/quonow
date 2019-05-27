import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search/search.service';

@Component({
    selector: 'search',
    templateUrl: '../search/search.html',
    styleUrls: ['../search/search.css']
    , providers: [SearchService]
})

export class SearchComponent {
    public productList: any;
    rangeValues: number[] = [20, 80];
    constructor(private Arouter: ActivatedRoute, private service: SearchService, private router: Router) {
        this.Search();
    }
    Search(): void {
        this.service.AdvanceSearch(this.Arouter.snapshot.params['searchtext']).subscribe(x => {
            this.productList = x;
        })
    }

    MakePayment(Id: any): void {
        this.router.navigate(['/view', Id]);
    }
}

