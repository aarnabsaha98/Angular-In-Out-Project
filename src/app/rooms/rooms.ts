export interface Rooms {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}


export interface RoomList {
    roomNumber: number;
    roomType: string;
    price: number;
    amrenities : string;
    checkInTime:Date;
    checkOutTime:Date;
}