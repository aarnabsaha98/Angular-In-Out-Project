export interface Rooms {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}


export interface RoomList {
    roomType: string;
    price: number;
    amrenities : string;
    checkInTime:Date;
    checkOutTime:Date;
}