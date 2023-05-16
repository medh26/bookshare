import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';

@Component({
  selector: 'eg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() size: string = '';
  @Input() status: string = '';
  @Input() presence: string = '';
  @Input() src: string = '';
  @Input() labels: boolean = false;
  @Input() text: string | undefined;
  @Input() supportingText: string | undefined;

  private src$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}


  ngOnInit(): void {}

  ngOnChanges(): void {
    this.src$ = new BehaviorSubject(this.src);
    this.src$.next(this.src);
  }
}
