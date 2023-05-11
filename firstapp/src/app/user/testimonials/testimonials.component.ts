import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackService } from 'src/app/service/feedback.service';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  feedbacks:any
  
  constructor(private fs:FeedbackService, public dialog: MatDialog) {
    this.fs.getFeedbacks().subscribe(
      {
        next : (data:any)=> this.feedbacks =data
      }
    )
  }

  openDialog() {
    this.dialog.open(FeedbackFormComponent);
  }
}
