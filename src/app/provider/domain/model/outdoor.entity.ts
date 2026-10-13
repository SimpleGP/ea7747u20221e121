export class Outdoor {
  constructor(
  public id: number,
  public name: string,
  public activityType: 'HIKING' |'RUNNING' |'CYCLING' |'THREKKING' ,
  public capacity: number,
  public latitude: number,
  public longitude: number,
){

}
}
