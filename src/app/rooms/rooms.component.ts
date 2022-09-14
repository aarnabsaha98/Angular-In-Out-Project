import { Component, OnInit } from '@angular/core';
import { withEnabledBlockingInitialNavigation } from '@angular/router';
import { Rooms , RoomList } from './rooms';

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


  roomList: RoomList[]= [
    
  ]


  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
