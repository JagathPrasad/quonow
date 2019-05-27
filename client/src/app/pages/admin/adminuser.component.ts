import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { nvD3 } from '../commonModels/ng2-nvd3';
@Component({
    selector: 'adminuser',
    templateUrl: '../admin/admin.user.html',
    providers: [AdminService],


})

export class AdminUserComponent implements OnInit {
    public userDetails: any;
    public reviewDetails: any;
    public countDetails: any = {};
    options;
    public data;
    public databar;
    chartType;
    constructor(private service: AdminService) {

       

        this.data = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14,
                    10,
                    5
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB",
                    "#ff0000",
                    "#00ffff"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Corporate",
                "Wedding",
                "College",
                "Brand",
                "Commercial",
                "Launch",
                "Artist"
            ]
        }

        this.databar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Total Sales',
                    backgroundColor: '#FF6384',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 75, 60, 80, 81, 56, 75, 60]
                }
                // ,
                // {
                //     label: 'My Second dataset',
                //     backgroundColor: '#9CCC65',
                //     borderColor: '#7CB342',
                //     data: [28, 48, 40, 19, 86, 27, 90]
                // }
            ]
        }
    }


    ngOnInit() {
        this.GetUserDetails();
        this.GetReviewsList();
        this.GetCountDetails();
    }
    GetUserDetails(): void {
        debugger;
        this.service.GetUserDetails().subscribe(x => {
            this.userDetails = x;

        });

    }

    GetReviewsList(): void {
        this.service.GetReviewsList().subscribe(x => {
            this.reviewDetails = x;
        });

    }

    ApproveReview(Id: any, IsDelete: any): void {
        this.service.ApproveReview(Id, IsDelete).subscribe(x => {
            this.GetReviewsList();
        })
    }

    GetCountDetails(): void {
        this.service.GetCountDetails().subscribe(x => {
            this.countDetails.user = x.user;
            this.countDetails.tickets = x.tickets;
            this.countDetails.events = x.events;
            console.log(this.countDetails.user);
        });
    }

    sinAndCos() {
        var sin = [], sin2 = [],
            cos = [];

        //Data is represented as an array of {x,y} pairs.
        for (var i = 0; i < 100; i++) {
            sin.push({ x: i, y: Math.sin(i / 10) });
            sin2.push({ x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5 });
            cos.push({ x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10 });
        }

        //Line chart data should be sent as an array of series objects.
        return [
            {
                values: sin,      //values - represents the array of {x,y} data points
                key: 'Sine Wave', //key  - the name of the series.
                color: '#ff7f0e'  //color - optional: choose your own line color.
            },
            {
                values: cos,
                key: 'Cosine Wave',
                color: '#2ca02c'
            },
            {
                values: sin2,
                key: 'Another sine wave',
                color: '#7777ff',
                area: true      //area - set to true if you want this line to turn into a filled area chart.
            }
        ];
    }

}


