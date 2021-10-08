// 앵귤러 공식 방법
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { interval } from 'rxjs';
import { debounceTime, distinctUntilChanged, debounce, skip, delay } from 'rxjs/operators';

@Component({
  selector: 'app-several-forms',
  templateUrl: './several-forms.component.html',
  styleUrls: ['./several-forms.component.css']
})

export class SeveralFormsComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],// 값을 채우면 placeholder가 아니라 기본값
    lastName: [''],
    email:['',Validators.email],
    address: this.fb.group({
      street: [''], //required는 필수 입력. 1자라도 입력되어야 함
      city: [''],
      state: [''],
      zipcode: [''],
      // isHere : [true], // 체크박스일 경우 true false 기본값
      // Validators.requiredTrue 는 return 값이 true여야만 해.
    }),
    aliases: this.fb.array([ // 폼 배열로 선언
      this.fb.control('') // 동적으로 추가되기 전까지는 폼 컨트롤 1개로 구성
    ])
  }); 

  hover:boolean = false;

  get aliases() { 
    return this.profileForm.get('aliases') as FormArray;
    // 폼 컨트롤을 참조하기 위해 get() 메소드를 사용하면 AbstactControl 타입으로 폼 컨트롤을 받는다.
    // 공통메소드를 사용한다면 이대로 활용. FormArray에 해당되는 메소드를 사용하려면 타입 캐스팅 필수.
  }
  constructor(private fb: FormBuilder) { } //fb 가지고 오기

  updateProfile() {
    // console.log('touched',this.profileForm.touched)
    // console.log('untouched', this.profileForm.untouched)
    // console.log('dirty', this.profileForm.dirty)
    // console.log('pristine', this.profileForm.pristine)
    this.profileForm.patchValue({ // 완전 값을 바꿔버림. 여기에서 안주는 필드는 초기값으로 돌아가는 듯.
      firstName: 'aeri',
      lastName: 'lee',
      address: {
        street: '123 wall street'
      }
    })

    // this.profileForm.get('firstName')?.setValue('aeri')
  };

  onChange(e:Event){
  //  console.log(e)
  //  this.profileForm.get('firstName')?.valueChanges.subscribe(value => console.log(value))


  // debounceTime 사용
  this.profileForm.get('firstName')?.valueChanges.pipe(
    // debounceTime(1000),
    // distinctUntilChanged(),
    delay(2000)
  ).subscribe(value => console.log(value))

  // debounce 사용
  // this.profileForm.get('firstName')?.valueChanges.pipe(
  //   debounce(()=> interval(1000))
  // ).subscribe(value => console.log(value))

  // email onChange
  // this.profileForm.get('email')?.valueChanges.subscribe(value => value)
  // console.log('email - untouched',this.profileForm.get('email')?.untouched)
  // console.log('email - valid',this.profileForm.get('email')?.valid)
  }

  addAlias() {
    this.aliases.push(this.fb.control('')); //배열의 새로운 form 생성
  }

  onSubmit() {
    //EventEmitter로 폼 내용 보내기
    const { firstName, lastName } = this.profileForm.controls;
    console.log('비구조화 firstName : ', firstName.value,'비구조화 lastName : ', lastName.value)
    console.warn(this.profileForm.value)
  }
}

// 10/7 오전 스터디 < form group >
//this.formGroup.get('name')?.value;
//this.formGroup.get('name')?.setValue('default')
//touched, unTouched, dirty 등 
//touched 은행권 보험내용 꼭 한번 읽어야 하는데 그때 사용. 키를 하나라도 눌러봤니 dirty. markAsDirty 
//pristine은 dirty의 반대
//markAllAsTouched 전체 체크박스 선택?
//초기화를 누르면 touched, unTouched 도 초기화를 시켜줄 수 있다.
//value Changes 에러가 있어?
 //patchValue는 dirty가 false여도 사용할 수 있다.
//this.formGroup.valid 
//form group 과 form control은 기능이 비슷하다.

//valueChanges는 옵저버블이라 subscribe 걸어줘야해
//formGroup || get('name').valueChanges.subscribe(value => console.log(value)) 

// form 개발할 때 고민되는 점
// input 하나하나 대응하면 부하가 드니까 pipe로 debounce 기능을 만든다.
// rxjs/operator 에 debounceTime이 있다.
// get.valueChanges.pipe(
//   debounceTime(500), //
//   distinctUntilChanged() // 값이 변할 때까지 무시해라
// )

//Validators.min(ENV.age.max)
//다시확인password equalTo('password') 이런식으로 validator 커스텀
// const { name } = this.formGroup.controls;
// component => get('name').valueChanges.subscribe(value => console.log(value)) 에서 5글자이상 못쓰는거 막으면 썼다가 사라지고 썼다가 사라지는데, 
//html 단에서 하면 바로 막을 수 있어.
