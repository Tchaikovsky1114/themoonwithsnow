// object 타입에는 interface 라는 키워드를 사용할 수 있다.
// interface는 extends로 확장이 가능하다.

interface ISquare {
    color: string;
    width: number;
    height: number;
}

interface ITriangle extends ISquare{
    border:string;
}

const square:ISquare = {
    color: 'red',
    width: 100,
    height: 100,
}

const triangle:ITriangle = {
    color: 'blue',
    width: 90,
    height: 120,
    border: '1px'
}

// type Alias도 extends와 유사한 기능이 있다.  & (intersection type)

// 1.
type studentInfo = {
    name: string
    age : number
    graduated: boolean
}
type studentPhone = {
    phone: number
    ECN: number
}

const student:studentInfo&studentPhone = {
    name: 'kimmyungseong',
    age: 30,
    graduated: true,
    phone: +'01033334444',
    ECN: +'024273952'
}

//2.
type Animal = {
    petname: string;
    age: number;
}

type Master ={
    master: string;
}&Animal

const toto:Master ={
    petname: 'toto',
    age:10,
    master:'myungseong'
}

type RegisterDate = {
    date:number
}&Master



const nero:RegisterDate ={
    petname: 'nero',
    age: 3,
    master: 'myungseong',
    date: 20220310
}


// type과 interface의 차이점
// interface는 중복선언이 가능하다. 중복 선언 된 인터페이스에 지정한 타입을 지켜야 한다. (추가 개념)
// 식별자의 중복 선언이 가능하지만 프로퍼티의 중복 선언은 불가능하다.
// 외부 라이브러리 사용시 타입 추가 하는게 용이하다. 다른사람이 자주 쓸 것 같다면 interface를 사용해야 한다.
// type은 식별자 중복 선언이 불가능하다. (error)
// type은 프로퍼티의 중복 선언이 가능하지만, 두개의 타입이 다르다면 never 타입이 error massege로 출력된다.
// type some = {
//     name: string
// };
// type another ={
//     name:number
// }&some
// //Type 'string' is not assignable to type 'never'
// const person:another = {name: 'hihihi'}


//destructuring
// 가져올 프로퍼티키를 왼쪽에, 사용할 변수명을 오른쪽으로 기입한다.
//  const {title : movie , rate: movieRate}:{title:string,rate:number} = {title:'batman', rate:8.64};
//  console.log(movie); // batman
//  console.log(movieRate); // 8.64


 // 식별자 이름을 가져올 객체의 프로퍼티 키와 같게 만들면 단축하여 사용이 가능하다 
// const {title , rate}:{title:string,rate:number} = {title:'batman', rate:8.64};

// console.log(title); //batman
// console.log(rate);  // 8.64

//type 지정을 interface로 작성해놓으면 보다 가독성이 높아진다.
// 함수 파라미터에 destructuring이 가능하다.
// 인자로 객체를 받아 파라미터에 destructuring을 사용하여 쉽게 할당할 수 있다..
interface IMovie {
    title: string;
    rate:number;
    overview:string;
    isShowing?: true
}
const lastMovie:IMovie = {
    title: 'batman',
    rate: 8.64,
    overview: 'bat man here'
}
function callMovie({title,rate}:IMovie){
    console.log(title,rate)
}
callMovie(lastMovie)



// 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈

// //정답 1.
// function returnMaxValue(...numberChunks:number[]){
//     return console.log(parseInt([...numberChunks].sort((a,b) => a - b).reverse().slice(0,1).join()));
// }
// returnMaxValue(1,3,27,5,6,7,13,33,4,656,14452)
//정답 2.

// function returnMaxValue2(...numberChunks:number[]){
//     let result = 0;
//     [...numberChunks].forEach(int => {
//         if(result < int){
//             result = int;
//         }
//     })
//     return result;
// }
// console.log(returnMaxValue2(4,5,6,7,1113,45,4232,153))




//  object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 자료 : { user : 'kim', comment : [3,5,4], admin : false } 
// (조건1)  destructuring 문법 사용
// (조건2) 함수실행시 입력한 파라미터의 value들을 콘솔창에 출력.

interface IUser {
    user: string;
    comment: number[];
    admin: boolean
}
const user:IUser = { user : 'kim', comment : [3,5,4], admin : false }

function extractUserInfo({user,comment,admin}:IUser){
    console.log(user,comment,admin)
}
extractUserInfo(user)

// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( [40, 'wine', false] )
// (조건1) 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.

type myArrayType = (number|string|boolean)[]
const myArray = [40,'wine',false]
function extractArray([a,b,c]:myArrayType){
    console.log(a,b,c);
}
extractArray(myArray)
//tip : array desctructuring은 변수의 자유로운 작명이 가능하다.



// null & undefined의 타입체크를 간결하게 하는 방법.
// Narrowing을 하기 위한 조건을 if문으로 하나씩 비교하다보면 코드가 길어질 수 있다.
// 이런 상황일 때, 조금 더 간결한 코드를 사용하기 위해 논리연산자(&&)를 사용한다.
// 논리연산자는 조건문이 모두 참이면 true, 아니면 false로 평가해달라는 연산자이다.
// falsy값은 false로 평가되는 점, falsy값 외에는 모두 true로 평가된다는 점을 이용하여 조건문에 자료형을 입력한다.
// falsy값이란 NaN , undefined, Null, 0 , "" 같은 값들을 의미한다.
// if문의 조건문에 변수를 입력한다고 하였을 때, 변수에 바인딩 된 값이 falsy 값이라면 if문을 실행하지 않을 것이다.
// 그렇기에 아래 함수의 if문 조건에 있는 변수 a가 falsy값이면 if문이 실행되지 않을것이다.
// 변수가 string 값이면 if문이 실행된다. (falsy값을 제외한 나머지 값은 true이다.)
// a가 falsy값이 아니라는 것과 typeof a === 'string'인 조건을 모두 만족해야 한다. 즉 string 값이어야 true로 평가된다.

function myFunc(a:string|undefined){
    if( a && typeof a === 'string'){
        console.log('hihihi');
    }
}


//typeof로 Narrowing이 불가능 한 경우도 있다.


// 아래와 같이 Type이 부정확할때 typeof를 사용할 수 없다.
// in 키워드로 object narrowing을 사용한다.
type Fish = {swim:string}
type Bird = {fly:string}
function isWhat(animal:Fish|Bird){
    if('swim' in animal){
    }
    if('fly' in animal){
    }
}
// instanceof 연산자로 object narrowing 가능


//literal type을 만들어 narrowing이 편리해진다.
// Object 안에 유니크한 자료를 넣어두면 구분이 편리해진다.
type Car = {
    wheel: '4개',
    color: string
}
type Bike = {
    wheel: '2개'
    color: string; 
}
function isWhat2(vahicle:Car|Bike){
    if('4개' in vahicle){
    }
    if(vahicle.wheel === '4개'){
    }
}

//never type . function return 값에 붙일 수 있는 never type
// 함수의 return값이 없어야한다.
// 함수의 실행이 끝나지 않아야 한다. (endpoint)가 없어야 한다.
// 거의 사용하지 않으며 대부분 void로 대체로 가능하다.
// never 타입이 등장하는 경우
//1.narrowing이 잘못되었을 때.
//2. 어떤 함수표현식은 return 타입이 자동으로 never로 지정되낟.
function myFunc2():never{
    throw new Error()
}
function myFunc3():never{
    while(true){       
    }
}

// 타입 스크립트를 사용하면 객체지향언어같은 문법도 제공한다.
// public private protected static 키워드를 유용하게 사용할 수 있다.


// private가 붙으면 인스턴스의 프로퍼티 어트리뷰트 writable이 false가 된다.
// class 외부에서 변경하게 하는 방법. prototype function을 사용하여 변경.
class User {
    userName;
    private familyName: string = 'kim';
    constructor(name:string){
        this.userName = this.familyName + name;
    }
    //prototype function
    changeName(){
        this.familyName = 'park';
    }
}



// public이 붙으면 모든 인스턴스가 사용할 수 있지만 default이기에 별 의미는 없다.
// constructor 매개변수에 public을 사용하여, this.를 생략하고 생성할 수 있게 한다.
class Person {
    constructor(public name:string, public age:number,public address:string){
    }
}
const kimgane = new Person('kim',30,'seoul')

// private에 확장성을 제공한 protected

class Square {
    protected x = 10;
    y
    constructor(height:number){
        this.y = height; 
    }
    doThis(){
        return this.x * this.y;
    }
}

class Triangle extends Square{
// Square의 x가 private으로 선언되었다면 Triangle은 사용할 수 없으나,
// protected로 선언되었다면 Square의 x를 사용할 수 있다
} 
const samgakhyung = new Triangle(100);
console.log(samgakhyung.doThis()) // 1000


class Anchester {
    // static을 붙이면 자식에게 물려주지 않는 정적 프로퍼티/메서드로 변환된다.
    // extends는 가능하다.
    // private static, public static과 같이 사용할 수 있다.
    static x = 10;
    y = 20;
}

const sons = new Anchester();

console.log(sons);

class Music {
    //classic부분만 변경하고 싶을 때
    static skill = 'classic';
    //this를 사용하지 않고 class명을 붙여서 사용.
    intro = Music.skill+'expert';
}

let player1 = new Music(); // classic expert

Music.skill = 'jazz'

let player2 = new Music(); // jazz expert


class Username {
    private static x = 10;
    public static y = 20;
    protected z = 30;
  }
//private은 인스턴스가 사용할 수는 있으나, 변경,삭제등이 불가능한 readonly와 같은 요소가 된다.
// 또한 클래스를 통하더라도 class 외부에서 접근이 불가능하다.
//static은 정적 메서드/프로퍼티로 만들어준다. 다만 클래스명을 통해 class 외부에서 접근이 가능하다.
//private static로 선언하면 인스턴스가 해당 프로퍼티를 받을 수 없고, class 외부에서도 변경도 불가능하다.  
//public static은 class를 통해 외부에서 접근이 가능하지만, 인스턴스에게 해당 프로퍼티를 전달하지 않는다.
// protected는 class 외부에서 접근이 불가능하지만 , 인스턴스를 자식 요소에게 전달한다.
// 인스턴스가 전달받은 protected 요소는 인스턴스를 통해서는 변경할 수 없다.
  const myUser = new Username()

  
  
//   숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
// Users.addOne(3) //이렇게 하면 x가 3 더해져야함
// Users.addOne(4) //이렇게 하면 x가 4 더해져야함
// Users.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
// 저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 
// 그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
// (조건) private static x = 10; 이 코드 수정금지 

class Users {
  private static x = 10;
  public static y = 20;
  static addOne(int:number){Users.x += int}
  static printX(){console.log(Users.x)}
}


class Squares{
    
    constructor(public width: number,public height:number,public color:string, public borderRadius:number ){

    }
    draw(){
        const snowCanvas = document.querySelector('#snow-canvas')
        let a = Math.random() * 20;
        let square = `<div class="snow-flower" style="position:relative;
        top:${a * 10}px;
        left:${a * 18}px;
        width:${this.width}px;
        height:${this.height}px;
        background:${this.color};
        border-radius:${this.borderRadius}px;"
        ></div>`
        if(snowCanvas !== null){
        snowCanvas.insertAdjacentHTML( 'afterbegin', square);
    }
    }
}
  

let circle = new Squares(10,10,'aliceblue',5)

circle.draw()
circle.draw()
circle.draw()
circle.draw()
circle.draw()
circle.draw()
circle.draw()
circle.draw()
circle.draw()
circle.draw()
circle.draw()
circle.draw()
circle.draw()

