import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonText, IonImg, IonicSlides } from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonImg, RouterLink, IonText, IonButton, IonFooter, IonContent, IonTitle, IonToolbar, IonHeader, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePage implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onboardingScreens = [
    { image: '1.jpg' },
    { image: '2.jpg' },
    { image: '3.jpg' }
  ]

  swiperModules = [IonicSlides]
}