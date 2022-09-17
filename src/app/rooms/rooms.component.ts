import { Component, OnInit } from '@angular/core';
import { withEnabledBlockingInitialNavigation } from '@angular/router';
import { Rooms, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'ABc Hotel';
  umberOFRooms = 10;
  hideRooms = false;

  rooms: Rooms = {
    totalRooms: 25,
    availableRooms: 6,
    bookedRooms: 10
  }


  roomList: RoomList[] = [
    {
      roomNumber: 102,
      roomType: 'Delux Room',
      price: 2300,
      amrenities: 'Air Condition , Free WiFi, Bluetooth',
      checkInTime: new Date('11-Nov-2022'),
      checkOutTime: new Date('12-Nov-2022'),
    },
    {
      roomNumber: 202,
      roomType: 'Delux Pro Room',
      price: 3000,  
      amrenities: 'Air Condition, Free WiFi, Bluetooth',
      checkInTime: new Date('23-Nov-2022'),
      checkOutTime: new Date('24-Nov-2022')
    },
    {
      roomNumber: 201,
      roomType: 'Delux Standalone Room',
      price: 3000,  
      amrenities: 'Air Condition, Free WiFi, Bluetooth',
      checkInTime: new Date('23-Nov-2022'),
      checkOutTime: new Date('24-Nov-2022')
    },
    {
      roomNumber: 103,
      roomType: 'Delux  Room',
      price: 3000,  
      amrenities: 'Air Condition, Free WiFi, Bluetooth',
      checkInTime: new Date('23-Nov-2022'),
      checkOutTime: new Date('24-Nov-2022')
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
