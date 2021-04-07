import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  noteForm: FormGroup;
  isSubmitted = false;
  noteData = [];
  index: any;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.noteForm = this.fb.group({
      title: [null, [Validators.required]],
      body: [null, Validators.required],
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.noteForm.controls; }

  /**
   * Save note details
   */
  submit() {
    this.isSubmitted = true;
    if (this.noteForm.valid) {
      this.isSubmitted = false;
      if (this.index) {
        this.noteData[this.index] = this.noteForm.value;
      } else {
        this.noteData.push(this.noteForm.value);
      }
      this.index = null;
      this.createForm();
    }
  }


  /**
   * Set data to form for update
   * @param index 
   */
  setForm(index) {
    this.index = index;
    this.noteForm.patchValue(this.noteData[index]);
  }

  /**
   * Delete note from array
   * @param index 
   */
  delete(index) {
    this.noteData.splice(index, 1);
  }

}
