import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Restaurant } from './models/Restaurant';
import { Client } from './models/Client';
import { Authenticate } from './models/POSGC/authenticate';
import { AuthenticateResponse } from './models/POSGC/authenticateResponse';
import { Zone } from './models/POSGC/zone';
import { Table } from './models/POSGC/table';
@Injectable({
  providedIn: 'root'
})
export class HostManagerService {
  
  private url: string;
  private urlPOSGC: string;
  private urlSMS: string;
  private brandName: string;
  private credentials: Authenticate;
  private smsCredentials: Authenticate;
  private smsRemit: string;
  constructor(private http: HttpClient) 
  {
        this.url = environment.URL_HostManagerService + 'api/Login';
        // this.urlPOSGC = environment.URL_POSGCService;
        // this.urlSMS = environment.URL_SMS;
        // this.brandName = environment.Brand;
        // this.credentials = environment.Credentials;
        // this.smsCredentials = environment.SMS_Credentials;
        // this.smsRemit = environment.SMS_Remit;
        var login = 
      {
          "dominio": "1",
          "Usuario": "2",
          "Clave": "3"
      };

  }
// panaderias-restaurantes  -----------------------------------------------------------------
  public getRestaurants(){
    const url = this.url+'/get-restaurant';
    return this.http.get(url);
  }

  public getRestaurantsName(){
    const url = this.url + '/get-restaurants-name';
    return this.http.get(url);
  }


  public createRestaurant(restaurantDto: Restaurant){
    const url = this.url + '/post-tienda';
    return this.http.post(url, restaurantDto );
  }


  public deleteRestaurant(id: number){
    const url = this.url + '/delete-restaurant?restaurantId='+id;
    return this.http.delete(url);
  }


  public updateRestaurant(restaurantDto: Restaurant){
    const url = this.url + '/update-restaurant';
    return this.http.put(url, restaurantDto);
  }

  public getRestaurantById(id:number){
    const url = this.url + '/get-restaurant-by-id/'+ id;
    return this.http.get(url);
  }
 //sesiones
  public getUserByName(name: string){
    const url = this.url + '/get-user-by-name/'+ name;
    return this.http.get(url);
  }

  public getLoginValidation(user: string, passWord: string){
    const url = `${this.url}/login/${user}?passWord=${passWord}`;
    return this.http.get(url);
  }
 
  public logoutSession(user: string){
     const url = this.url + '/delete-session/'+ user;
     return this.http.delete(url);
  }
 
  public getActualSession(user: string){
   const url = this.url + '/get-session/'+user;
   return this.http.get(url);
  }

   //clientes

  public getClientes(){
     const url = this.url + '/get-client';
     return this.http.get(url);
   }
 
  public getClientsFiltered(filter: string){
    const url = this.url + '/get-client-filtered/'+ filter;
    return this.http.get(url);
  }

  public getClients(){
    const url = this.url+'/get-client';
    return this.http.get(url);
  }

  public createClient(clientDto: Client){
    const url = this.url + '/create-client';
    return this.http.post(url, clientDto );
  }

  public deleteClient(id: number){
    const url = this.url + '/delete-client?clientId='+id;
    return this.http.delete(url);
  }

  public updateClient(clientDto: Client){
    const url = this.url + '/update-client';
    return this.http.put(url, clientDto);
  }

  public getClientById(id:number){
    const url = this.url + '/get-client-by-id/'+ id;
    return this.http.get(url);
  }

}