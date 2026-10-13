export class Reservation {
  constructor(
    public id: number,
    public activityType: 'HIKING' |'RUNNING' |'CYCLING' |'THREKKING' ,
    public participantName: string,
    public participants: number,
    public weatherTemperature: number,
    public reservedAt:number
  ){

  }
}
