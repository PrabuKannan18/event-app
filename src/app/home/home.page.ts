import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonHeader,IonicSlides,IonRow,IonCol,IonFabButton,IonBadge, IonToolbar, IonTitle, IonContent,IonIcon,IonLabel,IonText,IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {arrowForwardOutline, locateOutline, locationOutline, notificationsOutline, optionsOutline} from 'ionicons/icons';
import { Category } from '../interfaces/category.interface';
import { events } from '../data/events';
import { Event } from '../interfaces/event.interface';
import { categories } from '../data/categories';
import { RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule,IonHeader,IonRow,IonCol,IonFabButton,IonBadge, IonToolbar, IonTitle, IonContent,IonIcon,IonItem,IonLabel,IonText,RouterLink,DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePage {

  swiperModules=[IonicSlides];
  upcomingEvents: Event[]=[];
  currentEvents: Event[]=[];
  categories:Category[]=[]

  constructor() {
    addIcons({locateOutline,notificationsOutline,optionsOutline,locationOutline,arrowForwardOutline});
  }

  ngOnInit(): void {
    this.currentEvents = [...events];
    console.log('current', this.currentEvents);
    this.upcomingEvents = events.sort((a, b) => {
      const idA = parseInt(a.id, 10);
      const idB = parseInt(b.id, 10);
      return idB - idA; 
    });
    console.log(this.upcomingEvents);
    this.categories = [...categories];
    console.log(this.categories);
  }
}
