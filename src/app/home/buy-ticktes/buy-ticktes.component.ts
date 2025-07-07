import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonText, IonButton, IonCardContent, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonLabel, IonList, IonItem, IonNote, IonRadio, IonRadioGroup } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { addOutline, removeOutline, calendarOutline, locationOutline } from 'ionicons/icons';
import { events } from 'src/app/data/events';

@Component({
  selector: 'app-buy-ticktes',
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonNote, IonItem, IonList, IonLabel, IonCardTitle, IonCardHeader, IonCard, IonIcon, IonContent, IonTitle, IonBackButton, IonButtons, IonToolbar, IonCardContent, IonButton, IonHeader, IonText , IonRadio],
  templateUrl: './buy-ticktes.component.html',
  styleUrls: ['./buy-ticktes.component.scss'],
})
export class BuyTicketsComponent implements OnInit {
  quantity: number = 1;
  selectedTicketType: string = 'general';
  seatsAvailable: number = 256;
  event: any;
  ticketPrices = {
    general: 45,
    vip: 85
  };
  serviceFee: number = 5;

  constructor(private route: ActivatedRoute) {
     addIcons({calendarOutline,locationOutline,removeOutline,addOutline});
   }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(`Buying tickets for event with ID: ${id}`);
    if (id) {
      this.getEvent(id);
    }
  }

  getEvent(id: string) {
    this.event = events.find((event) => event.id == id)!;
  }

  increaseQuantity() {
    if (this.quantity < this.seatsAvailable) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  selectTicketType(type: string) {
    this.selectedTicketType = type;
  }

  getSubtotal(): number {
    return this.quantity * this.ticketPrices[this.selectedTicketType as keyof typeof this.ticketPrices];
  }

  getTotal(): number {
    return this.getSubtotal() + this.serviceFee;
  }

  purchaseTickets() {
    console.log(`Purchased ${this.quantity} ${this.selectedTicketType} tickets for $${this.getTotal()}`);
    // Add navigation to confirmation page
  }
}
