import { Component } from '@angular/core';
import { AuthenticateResponse } from 'src/app/models/POSGC/authenticateResponse';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	URL_HostManagerService: 'https://localhost:44337/',

   menu: [{
	name: 'Inicio',
	path: '/home',
	component: 'HomePage',
	icon: 'stats-chart-outline',
},
{
	 name: 'Encargos/Ventas',
	 path: '/warplanning',
	 component: 'WarplanningPage',
	 icon: 'apps-outline'
},{
	name: 'Clientes',
	path: '/client',
	component: 'ClientPage',
	icon: 'people-outline',
},
{
   name: 'Configuraciones',
   children: [
	{
			name: 'Panaderias',
			path: '/restaurant',
			component: 'RestaurantPage',
			icon: 'restaurant-outline',
	        },{
			name: 'Estado Clientes',
			path: '/clientStatus',
			component: 'ClientStatusPage',
			icon: 'people-outline',
			}]
}, {
	name: 'Cerrar sesion',
	path: '/login',
	component: 'LoginPage',
	icon: 'log-out-outline',
}],

	SecondMenu: [{
		name: 'Inicio',
		path: '/home',
		component: 'HomePage',
		icon: 'stats-chart-outline',
	},
	{
		 name: 'Encargos',
		 path: '/warplanning',
		 component: 'WarplanningPage',
		 icon: 'apps-outline'
	},{
		name: 'Direcciones',
		path: '/client',
		component: 'ClientPage',
		icon: 'people-outline',
	},
	{
		name: 'Cerrar sesion',
		path: '/login',
		component: 'LoginPage',
		icon: 'log-out-outline',
	}]
  };
