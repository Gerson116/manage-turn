import { Component, OnInit } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-turn',
  standalone: true,
  imports: [IconsModule, RouterModule],
  templateUrl: './add-turn.component.html',
  styleUrl: './add-turn.component.css',
})
export class AddTurnComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
