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
      street: ['',Validators.required], //required는 필수 입력. 1자라도 입력되어야 함
      city: [''],
      state: [''],
      zipcode: ['']
    }),
    aliases: this.fb.array([ // 폼 배열로 선언
      this.fb.control('') // 동적으로 추가되기 전까지는 폼 컨트롤 1개로 구성
    ])
  }); 

  get aliases() { 
    return this.profileForm.get('aliases') as FormArray;
    // 폼 컨트롤을 참조하기 위해 get() 메소드를 사용하면 AbstactControl 타입으로 폼 컨트롤을 받는다.
    // 공통메소드를 사용한다면 이대로 활용. FormArray에 해당되는 메소드를 사용하려면 타입 캐스팅 필수.
  }
  constructor(private fb: FormBuilder) { } //fb 가지고 오기

  updateProfile() {
    this.profileForm.patchValue({ // 완전 값을 바꿔버림. 여기에서 안주는 필드는 초기값으로 돌아가는 듯.
      firstName: 'aeri',
      address: {
        street: '123 wall street'
      }
    })
  };

  addAlias() {
    this.aliases.push(this.fb.control('')); //배열의 새로운 form 생성
  }

  onSubmit() {
    //EventEmitter로 폼 내용 보내기
    console.warn(this.profileForm.value)
  }
}
