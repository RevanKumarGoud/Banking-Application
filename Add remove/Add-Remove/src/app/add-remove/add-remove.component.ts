import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.scss']
})
export class ADDREMOVEComponent implements OnInit {

  public userForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.userForm = this._fb.group({
      address: this._fb.array([this.addAddressGroup()])
    });
  }

  //Append Fields Set
  private addAddressGroup(): FormGroup {
    return this._fb.group({
      street: [],
      city: [],
      state: []
    });
  }

  //Add Fields
  addAddress(): void {

    this.addressArray.push(this.addAddressGroup());

  }
 
  //Remove Fields
  removeAddress(index: number): void {
    this.addressArray.removeAt(index);
  }


  //Fields Array
  get addressArray(): FormArray {
    return <FormArray>this.userForm.get('address');
  }

  ngOnInit(): void {
  }

}
