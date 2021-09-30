import { Component, OnInit, Input } from '@angular/core';
import { ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  listItems = ITEMS;
  @Input() items: Item[] = [];
  @Input() childCurrentItems: Item[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
