import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { JWTService } from '../auth/jwt.service';
import { Router } from '@angular/router';
import { serviceModel } from '../commonModels/serviceModel';

@Component(
    {
        selector:'artist'
        ,templateUrl:'./artist.html'
        ,encapsulation: ViewEncapsulation.None,
        providers: [DashboardService, JWTService]
    }
)

export class ArtistComponent{
    public ProductList: any;
    public imageUrl = new serviceModel();
    constructor(private elem: ElementRef, private service: DashboardService, private sanitizer: DomSanitizer, private jwt: JWTService, private router: Router) {
      this.GetProductTypes();
    }
  
  
    GetProductTypes(): any {
      this.service.GetProductTypes().subscribe(x => {
        this.ProductList = x;
        for (let i = 0; i < this.ProductList.length; i++) {
          this.ProductList[i].url = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl.imageUrl + this.ProductList[i].Id + '.jpg)');
        }
      });
    }
  
  
    sanitize(url: string) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }
  
    MakeFavourite(): void {
      if (this.jwt.isAuthorized) {
  
      } else {
        this.router.navigate(['/login']);
      }
    }
}