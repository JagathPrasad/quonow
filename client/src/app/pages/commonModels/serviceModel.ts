export class serviceModel {

    public httpUrl: string = "http://api.wallvesoft.com/api/";
    //public httpUrl: string = "http://api.quonow.com/api/";
    //public httpUrl: string = "http://localhost:1324/api/";
    //'http://localhost:1324/api/';
    // 'http://api.quonow.com/api/';
    public authorization: string = sessionStorage.getItem('Token');

    public imageUrl: string = 'url(http://api.wallvesoft.com/Gallery/';
    //public imageUrl: string = 'url(http://localhost:1324/Gallery/';

    //public imageUrl: string = 'url(http://api.quonow.com/Gallery/';
}   