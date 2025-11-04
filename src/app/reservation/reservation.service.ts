// import { Injectable } from '@angular/core';
// import { Reservation } from '../models/reservation';

// @Injectable({
//   providedIn: 'root',
// })
// export class ReservationService {
//   private reservations: Reservation[] = [];

//   constructor() {
//     let savedReservations = localStorage.getItem('reservations');
//     this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
//   }

//   getReservations(): Reservation[] {
//     return this.reservations;
//   }

//   getReservation(id: string): Reservation | undefined {
//     return this.reservations.find((res) => res.id === id);
//   }

//   addReservation(reservation: Reservation) {
//     reservation.id = Date.now().toString();
//     this.reservations.push(reservation);
//     // console.log(this.reservations);
//     localStorage.setItem('reservations', JSON.stringify(this.reservations));
//   }

//   deleteReservation(id: string): void {
//     let index = this.reservations.findIndex((res) => res.id === id);
//     this.reservations.splice(index, 1);
//     localStorage.setItem('reservations', JSON.stringify(this.reservations));
//   }

//   updateReservation(id: string, updatedReservation: Reservation) {
//     let index = this.reservations.findIndex((res) => res.id === id);
//     this.reservations[index] = updatedReservation;
//     localStorage.setItem('reservations', JSON.stringify(this.reservations));
//   }
// }

import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000';

  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservation');
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation) {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    // console.log(this.reservations);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
  }

  updateReservation(id: string, updatedReservation: Reservation) {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations[index] = updatedReservation;
  }
}
