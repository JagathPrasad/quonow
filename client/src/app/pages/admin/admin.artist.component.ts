import { Component } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
    selector: 'admin-artist'
    , templateUrl: './admin.artist.html'
    , providers: [AdminService]
})

export class AdminArtistComponent {
    public Artist: any;

    constructor(private service: AdminService) {

    }

    public SaveArtist(artist: any): any {
        this.service.SaveArtist(artist).subscribe(x => {
            console.log(x);
        });
    }
}