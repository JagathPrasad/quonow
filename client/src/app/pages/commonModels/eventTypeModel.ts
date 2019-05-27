export class eventTypeModel {

    public Type: string;
    //public form = new FormData();

}


export class eventModel {

    public Id: string;
    public EventName: string;
    public EventTypeId: string;
}


export class ProductTypeModel {

    public Id: string;
    public Type: string;
    public EventId: string;
    public image: string;

}


export class ProductModel {

    public Id: string;
    public ProductName: string;
    public ProductTypeId: string;
    public Price: number;
    public VendorId: string;

    //  public EventTypeId:string;

}