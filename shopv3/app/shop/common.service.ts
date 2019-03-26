import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  getCategories():any{
   const url:string = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/categories.json';
   let promise = fetch(url);
   return promise;
  }
  getSubCategory():any{
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/subcategory.json';
    return fetch(url);
  }

  getItems():any{
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/items.json';
    return fetch(url);
  }

  constructor() { }
}
