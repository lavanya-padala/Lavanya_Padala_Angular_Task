import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-submitted-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submitted-info.component.html',
  styleUrl: './submitted-info.component.css'
})
export class SubmittedInfoComponent implements OnInit{
  data: any;

  constructor(private router: Router) { debugger;}

  ngOnInit(): void {
    debugger;
    if (typeof window !== 'undefined' && typeof history !== 'undefined') {
      this.data = history.state?.data; 
      if (!this.data) {
        console.error('No data found in state');
      }
    } 
    
  }
}
