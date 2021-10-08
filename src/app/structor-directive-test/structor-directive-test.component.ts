import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structor-directive-test',
  templateUrl: './structor-directive-test.component.html',
  styleUrls: ['./structor-directive-test.component.css']
})
export class StructorDirectiveTestComponent implements OnInit {
  // heroes = heroes;
  // hero: Hero | null = this.heroes[0];
  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  // trackById(index: number, hero: Hero): number { return hero.id; }
  constructor() { }

  ngOnInit(): void {
  }

}
