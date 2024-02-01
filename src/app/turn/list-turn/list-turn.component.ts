import { Component, ElementRef, OnInit } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { TurnMaintenanceComponent } from '../turn-maintenance/turn-maintenance.component';

@Component({
  selector: 'app-list-turn',
  standalone: true,
  imports: [IconsModule, TurnMaintenanceComponent],
  templateUrl: './list-turn.component.html',
  styleUrl: './list-turn.component.css',
})
export class ListTurnComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}
}
