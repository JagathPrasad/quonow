import { Injectable } from '@angular/core';

@Injectable()
export class JWTService {

    constructor() {

    }

    SetDynamic(obj: string, value: string): void {
        sessionStorage.setItem(obj, value);
    }
    GetDynamic(obj: string): string {
        return sessionStorage.getItem(obj);
    }
    getToken(): string {
        
        return sessionStorage.getItem('Token');
    }

    setToken(token: string) {
        sessionStorage.setItem('Token', token);
    }

    deleteToken(): boolean {
        
        let x = sessionStorage.removeItem('Token');
        if (sessionStorage.removeItem('Token')) {
            return true;
        }
    }

    getuserType(): string {

        return sessionStorage.getItem('userType');
    }

    setuserType(userType: string) {
        sessionStorage.setItem('userType', userType);
    }

    deleteuserType(): boolean {
        if (sessionStorage.removeItem('userType')) {
            return true;
        }
    }
    get authorizationHasBeenChecked() {
        return sessionStorage.getItem('Token') !== null;
    }

    get isAuthorized() {
        return this.authorizationHasBeenChecked && sessionStorage.getItem('Token') != '';
    }

    get role() {
        return JSON.parse(sessionStorage.getItem('Token'));
    }

}
