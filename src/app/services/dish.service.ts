import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: number): Dish {
    // the filter returns an array, that is why [0] is used
    return DISHES.filter((dish) => (dish.id == id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => (dish.featured))[0];
  }

}
