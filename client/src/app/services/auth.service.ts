import {Injectable, EventEmitter} from '@angular/core';
import { DatabaseService } from 'app/services/database.service';

@Injectable()
export class AuthService {

    loggedIn: EventEmitter<boolean> = new EventEmitter();
    loggedOut: EventEmitter<boolean> = new EventEmitter();

    accountType = 0;
    shelter;

    constructor(
        private database: DatabaseService
    ) {
        this.shelter = this.database.getShelters()[0];
    }


    logIn() {
        localStorage.setItem('user_logged_in', 'yes');
        this.loggedIn.emit(true);
    }

    logOut() {
        localStorage.removeItem('user_logged_in');
        this.loggedOut.emit(true);
    }

    isLoggedIn() {
        return !!(localStorage.getItem('user_logged_in'));
    }

    // This is a hacky way of mimicking server actually fetching account type
    getType() {
        return this.accountType;
    }

    setType(usertype) {
        this.accountType = usertype;
    }

    // This is a hacky way of mimicking server actually fetching shelter data
    getShelter() {
        return this.shelter;
    }

    setShelter(shelter) {
        this.shelter = shelter;
    }

}
