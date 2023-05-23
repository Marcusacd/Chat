import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): Boolean {
    if (this.storage){
      this.storage.setItem(key, value);
      return true;
    }else {
      return false;
    }
  }

  get(key: string): any {
    if (this.storage){
      return this.storage.getItem(key);
      
    }else {
      return null;
    }
  }

  remove(key: string): Boolean {
    if (this.storage){
      this.storage.removeItem(key);
      return true;
    }else {
      return false;
    } 
  }

  clear(): Boolean {
    if (this.storage){
      this.storage.clear();
      return true;
    }else {
      return false;
    } 
  }
}
