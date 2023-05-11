import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Answers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;}
@Component({
  selector: 'app-personaltytest',
  templateUrl: './personaltytest.component.html',
  styleUrls: ['./personaltytest.component.css']
})
export class PersonaltytestComponent {
  mbtiForm: FormGroup;

  constructor(private formBuilder: FormBuilder ) {
    this.mbtiForm = this.formBuilder.group({
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: '',
      // add more properties for additional questions as needed
    });
  }

  calculateMBTI() {
    // retrieve user's selected answers
    const answers: Answers = {
      q1: this.mbtiForm.value.q1,
      q2: this.mbtiForm.value.q2,
      q3: this.mbtiForm.value.q3,
      q4: this.mbtiForm.value.q4,
      q5: this.mbtiForm.value.q5,
      q6: this.mbtiForm.value.q6,
      q7: this.mbtiForm.value.q7,
      q8: this.mbtiForm.value.q8,
      q9: this.mbtiForm.value.q9,
      q10: this.mbtiForm.value.q10
    };
  
    // calculate MBTI personality type based on selected answers
    let type = '';
    if (answers.q1 === 'E') {
      type += 'E';
    } else if (answers.q1 === 'I') {
      type += 'I';
    }
    if (answers.q2 === 'S') {
      type += 'S';
    } else if (answers.q2 === 'N') {
      type += 'N';
    }
    if (answers.q3 === 'T') {
      type += 'T';
    } else if (answers.q3 === 'F') {
      type += 'F';
    }
    if (answers.q4 === 'J') {
      type += 'J';
    } else if (answers.q4 === 'P') {
      type += 'P';
    }
    if (answers.q5 === 'E') {
      type += 'E';
    } else if (answers.q5 === 'I') {
      type += 'I';
    }
    if (answers.q6 === 'S') {
      type += 'S';
    } else if (answers.q6 === 'N') {
      type += 'N';
    }
    if (answers.q7 === 'T') {
      type += 'T';
    } else if (answers.q7 === 'F') {
      type += 'F';
    }
    if (answers.q8 === 'T') {
      type += 'T';
    } else if (answers.q8 === 'F') {
      type += 'F';
    }
    if (answers.q9 === 'J') {
      type += 'J';
    } else if (answers.q9 === 'P') {
      type += 'P';
    }
    if (answers.q10 === 'E') {
      type += 'E';
    } else if (answers.q10 === 'I') {
      type += 'I';
    }
  
    // display the MBTI personality type to the user
    alert(`Your MBTI personality type is: ${type.slice(0, 4)}`);
  }
}
