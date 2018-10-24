import { Injectable } from '@angular/core';
import  {Observable} from "rxjs";
import { Item } from "../../modelo/Item";
import { AbstractItemsService } from "./abstract-items.service";


@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {

	items: Item[];

	/** Se crea el array de items */
	constructor() {
		super();
		this.items = [
  			new Item("comprar carne"),
  			new Item("comprar verdura"),
  			new Item("comprar carbon"),
        	new Item("comprar bebida"),
        	new Item("comprar pan"),
        	new Item("service")
  		]
	}

	getItems(): Observable<Item[]> {
		return new Observable((obs)=>{
			obs.next(this.items);
			obs.complete();
		});
	}

	remove(item: Item) {
		/** Elimina y devuelve actualizado */
		console.log("mock-items: remove");
		return new Observable((obs)=>{
			this.items = this.items.filter(it => it !== item);
			obs.next(this.items);
			obs.complete();
		});
	}

	addItem(item: Item) {
		/** Elimina y devuelve actualizado */
		console.log("mock-items: add");
		return new Observable((obs)=>{
			this.items.push(item);
			obs.next(this.items);
			obs.complete();
		});
	}

};
