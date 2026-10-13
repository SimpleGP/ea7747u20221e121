export interface ReservationResponse {
   id: number;
   activityType: 'HIKING' |'RUNNING' |'CYCLING' |'THREKKING' ;
   participantName: string;
   participants: number;
   weatherTemperature: number;
   reservedAt:number;
}
export type reservationResponse = ReservationResponse[];
