import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../admin/admin.service';
import { eventTypeModel, eventModel, ProductTypeModel } from '../commonModels/eventTypeModel';
declare var swal: any;











@Component({
    selector: 'adminadd',
    templateUrl: '../admin/admin.add.html',
    providers: [AdminService]

})

export class AdminAddComponent {

    constructor() {

    }


}






/////////////////////

@Component({
    selector: 'adminevent',
    templateUrl: '../admin/admin.addevent.html',
    providers: [AdminService]

})

export class AdminEventComponent {

    public event = {};
    public EventTypes: any;

    constructor(private service: AdminService) {
        this.BindEventTypes();


    }

    BindEventTypes(): any {
        this.service.GetEventTypes().subscribe(x => {
            this.EventTypes = x;
        })

        return this.EventTypes;
    }


    SaveEvent(event: eventModel, file): void {
        let fileList: FileList = file;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            this.service.AddEvent(event).subscribe(x => {
                if (x != null && x != '') {
                    this.service.PostUploadFormDate(formData, x).subscribe(x => {
                        swal("Good job!", "You Saved Successfully!", "success");
                        event.Id = "";
                        event.EventName = '';
                        event.EventTypeId = '';
                    });
                }

            });

            // this.service.AddEventType(event).subscribe(x => {
            //     if (x != null && x != '') {
            //         this.service.PostUploadFormDate(formData, x).subscribe(x => {
            //             swal("Good job!", "You Saved Successfully!", "success");
            //         });
            //     }
            // });
        }



    }
}










//////////////////////////


@Component({
    selector: 'admineventtype',
    templateUrl: '../admin/admin.addeventtype.html'

})

export class AdminEventTypeComponent {
    public eventType = {};
    public Type: string;
    public Image: string;
    public str: string;


    constructor(private service: AdminService) { }


    SaveType(event: eventTypeModel, file2): void {
        let fileList: FileList = file2;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            this.service.AddEventType(event).subscribe(x => {
                if (x != null && x != '') {
                    this.service.PostUploadFormDate(formData, x).subscribe(x => {
                        swal("Good job!", "You Saved Successfully!", "success");
                    });
                }

            });
        }

    }


}







//////////////////////////////


@Component({
    selector: 'adminproducttype',
    templateUrl: '../admin/admin.add.producttype.html',
    providers: [AdminService]

})

export class AdminProductTypeComponent {

    public product = {};
    public EventTypesList: any;
    public EventsList: any;
    public g: any;
    constructor(private service: AdminService) {
        this.BindEventTypes();
    }


    BindEventTypes(): any {
        this.service.GetEventTypes().subscribe(x => {
            this.EventTypesList = x;
        })

        return this.EventTypesList;
    }


    BindEvents(eventTypeId: any): any {
        console.log('eventid', eventTypeId);
        this.service.GetEvents(eventTypeId).subscribe(x => {
            this.EventsList = x;

        });
        return this.EventsList;

    }

    SaveProductType(producttype: ProductTypeModel, file): void {
        let fileList: FileList = file;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            this.service.AddProductType(producttype).subscribe(x => {
                if (x != null && x != '') {
                    this.service.PostUploadFormDate(formData, x).subscribe(x => {
                        swal("Good job!", "You Saved Successfully!", "success");
                    });
                }

            });
        }


        //debugger;
        // this.service.AddProductType(producttype).subscribe(x => {
        //     // sessionStorage.removeItem('imagebinary');
        // });
        // return true;

    }


    file: File;
    onChange(event: EventTarget) {
        debugger;
        let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
        let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
        let files: FileList = target.files;
        let binarystring: any;
        debugger;
        this.file = files[0];
        console.log(this.file);
        debugger;
        var fileReader = new FileReader();
        fileReader.onload = function (readerEvt) {
            var binaryString = fileReader.result;
            var binarystring = btoa(binaryString);
            sessionStorage.setItem('imagebinary', binaryString);
        };
        let x = fileReader.readAsBinaryString(this.file);
    }

}