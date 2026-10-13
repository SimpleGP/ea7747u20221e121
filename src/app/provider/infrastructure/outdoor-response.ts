export interface OutdoorResponse {

   id: number;
   name: string;
   activityType: 'HIKING' |'RUNNING' |'CYCLING' |'THREKKING' ;
   capacity: number;
   latitude: number;
   longitude: number;


}
export type outdoorResponse = OutdoorResponse[];
