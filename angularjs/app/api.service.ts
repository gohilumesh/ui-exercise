import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  getWidgets() {
    return new Promise(function (resolve) {
      resolve([{
        name:     "Standard widget",
        size:     'medium',
        capacity: 10
      }, {
        name:     "VIP widget",
        size:     "extra-large",
        capacity: 25
      }, {
        name:     "Starter widget",
        size:     'small',
        capacity: 2
      }])
    })
  }
}
