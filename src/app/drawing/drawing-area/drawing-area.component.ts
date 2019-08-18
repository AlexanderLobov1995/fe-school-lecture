import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-drawing-area',
  templateUrl: './drawing-area.component.html',
  styleUrls: ['./drawing-area.component.scss']
})
export class DrawingAreaComponent {
  @Input() color = 'black';
}
