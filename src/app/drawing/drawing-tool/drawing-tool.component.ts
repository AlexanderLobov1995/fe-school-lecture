import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-drawing-tool',
  templateUrl: './drawing-tool.component.html',
  styleUrls: ['./drawing-tool.component.scss']
})
export class DrawingToolComponent {
  @Output() selectColor = new EventEmitter();
  handleClick(color: string): void {
    this.selectColor.emit(color);
  }
}
