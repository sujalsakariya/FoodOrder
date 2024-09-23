import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/tag';
import { FoodService } from '../service/models/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'] // Note the plural form 'styleUrls'
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(foodService:FoodService) {
    this.tags = foodService.getAllTage();
   }

  ngOnInit(): void {
  }
}
