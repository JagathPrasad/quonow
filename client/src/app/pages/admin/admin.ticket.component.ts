import { pubModel } from './../commonModels/pubModel';
import { Component } from '@angular/core';
import { AdminService } from '../admin/admin.service';

declare var swal: any;

@Component({
    selector: 'ticketing',
    templateUrl: '../admin/admin.ticket.html',
    providers: [AdminService]
})
export class AdminTicketingComponent {
    public ticketDetails: any;
    public ticketBoughtDetails: any;
    public isAdd: boolean = false;
    public pub: any = {};
    public date1: Date;
    constructor(private service: AdminService) {
        this.GetTicketDetails();
        this.GetBoughtTicketDetails();
    }


    GetTicketDetails(): void {
        this.service.GetTicketDetails().subscribe(x => {
            this.ticketDetails = x;
        });
    }

    GetBoughtTicketDetails(): void {
        this.service.GetBoughtTicketDetails().subscribe(x => {
            this.ticketBoughtDetails = x;
        });
    }

    AddPubDetails(pub: pubModel, file): void {
        debugger;
        let fileList: FileList = file;
        console.log(pub);
        // if (fileList.length > 0) {
        //     let file: File = fileList[0];
        //     let formData: FormData = new FormData();
        //     formData.append('uploadFile', file, file.name);
        //     this.service.AddPubDetails(pub).subscribe(x => {
        //         if (x != null && x != '') {
        //             this.service.PostUploadFormDate(formData, x).subscribe(x => {
        //                 swal("Success!", "Pub Details Saved Successfully!", "success");
        //                 this.pub = {};
        //                 this.GetTicketDetails();
        //             });
        //         }

        //     });

        // }
        // this.service.AddPubDetails(pub).subscribe(x => {
        //     if (x) {
        //         this.pub = {};
        //         this.GetTicketDetails();
        //     }
        // });
    }

    SavePub(): void {
        if (this.isAdd) {
            this.isAdd = false;
        } else {
            this.isAdd = true;
        }

    }

    ApprovePub(): void {
        swal({
            title: 'Are you sure?',
            text: "Are you sure want to approve this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approve it!'
        }).then(function () {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
        });
    }

    RejectPub(): void {
        swal({
            title: 'Are you sure?',
            text: "Are you sure want to reject this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reject it!'
        }).then(function () {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
        });
    }

}

