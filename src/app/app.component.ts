import { Component, OnInit } from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isAuth = false;

    appareils: any[];

    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
            }, 2000
        );
    });

/*    appareilOne = 'Machine à laver';
    appareilTwo = 'Frigo';
    appareilThree = 'Ordinateur';*/

/*    appareils = [
        {
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            name: 'Frigo',
            status: 'allumé'
        },
        {
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];*/

    constructor(private appareilService: AppareilService) {
        setTimeout(
            () => {
                this.isAuth = true;
            }, 4000
        );
    }

    ngOnInit() {
        this.appareils = this.appareilService.appareils;
    }

/*    onAllumer() {
        this.appareilService.switchOnAll();
    }

    onEteindre() {
        if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
            this.appareilService.switchOffAll();
        } else {
            return null;
        }
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
    }

    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';

    }*/

}
