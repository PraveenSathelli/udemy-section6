import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

   ref = inject(DestroyRef);

  constructor() {

    effect(() => {
      console.log(this.currentStatus());
    });


   const intval = setInterval(() => {

      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      }
      else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      }
      else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.ref.onDestroy(() => {
      clearInterval(intval);
    })
  }

  ngOnInit()
  {
    console.log("asdasdasd")
  }
}
