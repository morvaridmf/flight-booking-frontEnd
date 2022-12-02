export interface IFlight {
  flight_id: string;
  depatureDestination: string;
  arrivalDestination: string;
  itineraries: IItinerariesEntity[];
}
export interface IItinerariesEntity {
  depatureAt: string;
  arriveAt: string;
  avaliableSeats: number;
  id: number;
  prices: IPricesEntity[];
}
export interface IPricesEntity {
  currency: string;
  adult: number;
  child: number;
}



export interface INewFlight {
  flight_id: string;
  trip: string;
  depatureDestination: string;
  arrivalDestination: string;
  itineraries: INewItinerariesEntity;
}
export interface INewItinerariesEntity {
  depatureAt: string;
  arriveAt: string;
  passengerAdult: number;
  passengerChild: number
}


export interface IPassengerInfo {
  firstName: string;
  lastName: string;
  title: string;
  birthDate: string;
  phoneNumber: number;
  email: string
}

export interface ISearch {
  depatureAt: string;
  arriveAt: string;
  avaliableSeats: number;
  id: number;
  prices: any[]
}

export interface ICombinedInfo {
  firstName: string;
  lastName: string;
  title: string;
  birthDate: string;
  phoneNumber: number;
  email: string;
  depatureAt: string;
  arriveAt: string;
  avaliableSeats: number;
  depatureDestination: string;
  arrivalDestination: string

}
