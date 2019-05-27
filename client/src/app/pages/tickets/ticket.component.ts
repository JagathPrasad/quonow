import { JWTService } from './../auth/jwt.service';
import { buyModel } from './../commonModels/buyModel';
import { serviceModel } from './../commonModels/serviceModel';
import { TicketService } from './ticket.service';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
declare var swal: any;


@Component({
    selector: 'tickets',
    templateUrl: '../tickets/ticket.html',
    providers: [TicketService]
})

export class TicketComponent {
    public pubId: any;
    public pubDetails: any;
    public imageUrl = new serviceModel();
    public counT: any = {};
    @Input() buyTickets: boolean = false;
    constructor(private router: Router, private activeateRoute: ActivatedRoute, private service: TicketService, private sanitizer: DomSanitizer, private jwt: JWTService) {
        this.pubId = this.activeateRoute.snapshot.params['pubId'];

        this.BindPubDetails(this.pubId);
    }


    CalculatePrice(value: any, type: string): void {

        if (value === undefined) {

        } else if (value == null || value == "") {

        } else {
            this.buyTickets = true;
            alert(1);
            // if (type == 'single') {
            //     this.pubDetails.stagshow = this.pubDetails.stag;
            //     this.pubDetails.stagshow = this.pubDetails.stagshow * value;
            // } else if (type == 'couple') {
            //     this.pubDetails.coupleshow = this.pubDetails.couple;
            //     this.pubDetails.coupleshow = this.pubDetails.coupleshow * value;

            // }
        }

    }
    BuyTickets(pubId: any, counT: any): void {
        console.log('counT', counT);
        debugger;
        this.jwt.SetDynamic('single', counT.single);
        this.jwt.SetDynamic('couple', counT.couple);
        this.router.navigate(['/ticket/' + pubId + '/buy'])
    }

    BindPubDetails(pubId: any): void {

        this.service.GetPubDetails(pubId).subscribe(x => {
            this.pubDetails = x;
            this.pubDetails.url = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl.imageUrl + pubId + '.jpg)');
            console.log('pubDetails.url', this.pubDetails.url);
            // for (let i = 0; this.pubDetails > i; i++) {
            //     this.pubDetails[i].url = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl.imageUrl + this.pubDetails[i].Id + '.jpg)');
            // }
        });
    }
}


@Component({
    selector: 'payment',
    templateUrl: '../tickets/ticketbuy.html',
    providers: [TicketService]
})

export class TickeBuyComponent {
    public payment: any = {};
    public pubId: any;
    public loading = false;
    private tokenService = new serviceModel();
    constructor(private service: TicketService, private activate: ActivatedRoute, private router: Router, private jwt: JWTService) {
        this.pubId = this.activate.snapshot.params['pubId'];

    }


    Purchase(payment: buyModel): void {
        this.loading = true;
        payment.userToken = this.tokenService.authorization;
        payment.pubId = this.pubId;
        payment.couple = this.jwt.GetDynamic('couple');
        payment.single = this.jwt.GetDynamic('single');
        debugger;
        console.log(payment);
        this.service.TicketPayment(payment).subscribe(x => {
            this.loading = false;
            if (x) {
                swal("Good job!", "Your Payment Done Successfully!", "success");
                this.router.navigate(['/user']);
            } else {
                swal("Sorry!", "Your Payment went wrong!", "error");
                //this.router.navigate(['/user']);
            }
        });
    }
}
