import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getTags() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  }
  getAllTage():Tag[]{
    return [
      { name: 'All', count:8},
      { name: 'FastFood', count:4},
      { name: 'Pizza', count:1},
      { name: 'Lunch', count:2},
      { name: 'SlowFood', count:1},
    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 10,
        name: 'French Fries',
        favourite: true,
        star: 2,
        tags: ['FastFood'],
        imageUrl: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=600',
        cookTime: '20-30',
        origins: ['England'],
      },
      {
        id: 2,
        price: 10,
        name: 'Dosa',
        favourite: false,
        star: 2,
        tags: ['Lunch'],
        imageUrl: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600',
        cookTime: '10-15',
        origins: ['South-India'],
      },
      {
        id: 3,
        price: 12,
        name: 'Manchurian',
        favourite: true,
        star: 2,
        tags: ['FastFood'],
        imageUrl: 'https://media.istockphoto.com/id/2159018775/photo/vegetable-fried-rice-with-manchurian-gravy.jpg?b=1&s=612x612&w=0&k=20&c=WiE8r5RYCdV3d7Fp-qE7_CNcM537_179592G5xge3-0=',
        cookTime: '20-30',
        origins: ['China'],
      },
      {
        id: 4,
        price: 5,
        name: 'Pasta',
        favourite: false,
        star: 2,
        tags: ['FastFood'],
        imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600',
        cookTime: '5-10',
        origins: ['Zapan'],
      },
      {
        id: 5,
        price: 40,
        name: 'Pizza',
        favourite: true,
        star: 2,
        tags: ['Pizza'],
        imageUrl: 'https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=600',
        cookTime: '15-20',
        origins: ['America'],
      },
      {
        id: 6,
        price: 15,
        name: 'Pav Bhaji',
        favourite: false,
        star: 2,
        tags: ['Lunch'],
        imageUrl: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=600',
        cookTime: '10-20',
        origins: ['india'],
      },
      {
        id: 7,
        price: 4,
        name: 'Samosa',
        favourite: true,
        star: 2,
        tags: ['SlowFood'],
        imageUrl: 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600',
        cookTime: '5-10',
        origins: ['Sri-Lanka'],
      },
      {
        id: 8,
        price: 3,
        name: 'Pani Puri',
        favourite: true,
        star: 2,
        tags: ['FastFood'],
        imageUrl: 'https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?b=1&s=612x612&w=0&k=20&c=hDLQhLfDTPzZmd-sruUJoWvPyxYTtLTpZxDq8UCPY4Y=',
        cookTime: '0-5',
        origins: ['india'],
      },
    ];
  }
}
