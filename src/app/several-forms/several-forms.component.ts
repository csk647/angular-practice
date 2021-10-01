// 앵귤러 공식 방법
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-several-forms',
  templateUrl: './several-forms.component.html',
  styleUrls: ['./several-forms.component.css']
})

export class SeveralFormsComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zipcode: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  }); 

  get aliases() { 
    return this.profileForm.get('aliases') as FormArray;
  }
  constructor(private fb: FormBuilder) { } //fb 가지고 오기

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'aeri',
      address: {
        street: '123 wall street'
      }
    })
  };

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    //EventEmitter로 폼 내용 보내기
    console.warn(this.profileForm.value)
  }
}


//블로그 방법

// import { Component } from '@angular/core';
// import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms'; 
// //1, FormGroup, Validators, FormBuilder를 import. Validators는 사용하지 않거나 
// //template에서 validation을 처리한다면 호출하지 않아도 된다.

// @Component({
//   selector: 'app-several-forms',
//   templateUrl: './several-forms.component.html',
//   styleUrls: ['./several-forms.component.css']
// })
// export class SeveralFormsComponent {
//   profileForm: FormGroup;
//   //template에서 작성한 FormGroup명을 변수로 선언한다.

//   constructor(private fb: FormBuilder) { // FormBuilder를 DI로 가지고 온다
//     this.profileForm = this.fb.group({ //onInit이나 constructor에 formgroup을 정의한다.
//       item: ['', [Validators.required]]
//     })
//     //이 때, 사용되는 모든 form의 formControlName을 입력한다.
//     //''부분은 초기값이 있으면 입력하고 없으면 비워둔다.
//     //Validation은 배열 형태로 구성하되 없으면 빈 배열로 두어도 된다.

//     this.profileForm.valueChanges.subscribe(observer => {
//       console.log(this.profileForm.valid)
//     }) // valueChanges 이 부분은 form값을 subscribe하여 값 변화를 실시간으로 체크하는 부분.
//   }

//   submit(e: Event) {
//     const { item } = this.profileForm.controls;
//     console.log(item.value)
//   } // form에 입력 이후 validation체크나 데이터를 가공하는 등의 처리를 한다.
//   ngOnInit(): void {
//   }

// }
