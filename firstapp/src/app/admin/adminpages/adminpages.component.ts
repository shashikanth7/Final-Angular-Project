import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { FeedbackService } from 'src/app/service/feedback.service';
@Component({
  selector: 'app-adminpages',
  templateUrl: './adminpages.component.html',
  styleUrls: ['./adminpages.component.css']
})
export class AdminpagesComponent {
  feedbackForm: any;
  

  constructor(private fb: FormBuilder, private fs: AdminService) {
    this.feedbackForm = this.fb.group({
      image: ["", [Validators.required, Validators.minLength(3)]],
     
      message: ["", Validators.required]
    });
  }

  saveFeedback() {
    // Extract the file name from the image file path
    const fullPath = this.feedbackForm.value.image;
    const fileName = fullPath.substring(fullPath.lastIndexOf("\\") + 1);

    // Create a feedback object with the form values
    const feedback = {
      id: Math.round(Math.random() * 10000),
      image: fileName,
      type: this.feedbackForm.value.type,
      message: this.feedbackForm.value.message
    };

    // Send the feedback object to the server
    this.fs.postFeedback7(feedback).subscribe({
      next: () => {
        alert("Your feedback has been saved!");
        location.reload();
      },
      error: () =>
        alert("An error occurred while saving your feedback.")
    });
  }
}


  
  

