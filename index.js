"use strict";
// object 타입에는 interface 라는 키워드를 사용할 수 있다.
// interface는 extends로 확장이 가능하다.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var square = {
    color: 'red',
    width: 100,
    height: 100,
};
var triangle = {
    color: 'blue',
    width: 90,
    height: 120,
    border: '1px'
};
var student = {
    name: 'kimmyungseong',
    age: 30,
    graduated: true,
    phone: +'01033334444',
    ECN: +'024273952'
};
var toto = {
    petname: 'toto',
    age: 10,
    master: 'myungseong'
};
var nero = {
    petname: 'nero',
    age: 3,
    master: 'myungseong',
    date: 20220310
};
var lastMovie = {
    title: 'batman',
    rate: 8.64,
    overview: 'bat man here'
};
function callMovie(_a) {
    var title = _a.title, rate = _a.rate;
    console.log(title, rate);
}
callMovie(lastMovie);
var user = { user: 'kim', comment: [3, 5, 4], admin: false };
function extractUserInfo(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
extractUserInfo(user);
var myArray = [40, 'wine', false];
function extractArray(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
extractArray(myArray);
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
function myFunc(a) {
    if (a && typeof a === 'string') {
        console.log('hihihi');
    }
}
function isWhat(animal) {
    if ('swim' in animal) {
    }
    if ('fly' in animal) {
    }
}
function isWhat2(vahicle) {
    if ('4개' in vahicle) {
    }
    if (vahicle.wheel === '4개') {
    }
}
//never type . function return 값에 붙일 수 있는 never type
// 함수의 return값이 없어야한다.
// 함수의 실행이 끝나지 않아야 한다. (endpoint)가 없어야 한다.
// 거의 사용하지 않으며 대부분 void로 대체로 가능하다.
// never 타입이 등장하는 경우
//1.narrowing이 잘못되었을 때.
//2. 어떤 함수표현식은 return 타입이 자동으로 never로 지정되낟.
function myFunc2() {
    throw new Error();
}
function myFunc3() {
    while (true) {
    }
}
// 타입 스크립트를 사용하면 객체지향언어같은 문법도 제공한다.
// public private protected static 키워드를 유용하게 사용할 수 있다.
// private가 붙으면 인스턴스의 프로퍼티 어트리뷰트 writable이 false가 된다.
// class 외부에서 변경하게 하는 방법. prototype function을 사용하여 변경.
var User = /** @class */ (function () {
    function User(name) {
        this.familyName = 'kim';
        this.userName = this.familyName + name;
    }
    //prototype function
    User.prototype.changeName = function () {
        this.familyName = 'park';
    };
    return User;
}());
// public이 붙으면 모든 인스턴스가 사용할 수 있지만 default이기에 별 의미는 없다.
// constructor 매개변수에 public을 사용하여, this.를 생략하고 생성할 수 있게 한다.
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return Person;
}());
var kimgane = new Person('kim', 30, 'seoul');
// private에 확장성을 제공한 protected
var Square = /** @class */ (function () {
    function Square(height) {
        this.x = 10;
        this.y = height;
    }
    Square.prototype.doThis = function () {
        return this.x * this.y;
    };
    return Square;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Triangle;
}(Square));
var samgakhyung = new Triangle(100);
console.log(samgakhyung.doThis()); // 1000
var Anchester = /** @class */ (function () {
    function Anchester() {
        this.y = 20;
    }
    // static을 붙이면 자식에게 물려주지 않는 정적 프로퍼티/메서드로 변환된다.
    // extends는 가능하다.
    // private static, public static과 같이 사용할 수 있다.
    Anchester.x = 10;
    return Anchester;
}());
var sons = new Anchester();
console.log(sons);
var Music = /** @class */ (function () {
    function Music() {
        //this를 사용하지 않고 class명을 붙여서 사용.
        this.intro = Music.skill + 'expert';
    }
    //classic부분만 변경하고 싶을 때
    Music.skill = 'classic';
    return Music;
}());
var player1 = new Music(); // classic expert
Music.skill = 'jazz';
var player2 = new Music(); // jazz expert
var Username = /** @class */ (function () {
    function Username() {
        this.z = 30;
    }
    Username.x = 10;
    Username.y = 20;
    return Username;
}());
//private은 인스턴스가 사용할 수는 있으나, 변경,삭제등이 불가능한 readonly와 같은 요소가 된다.
// 또한 클래스를 통하더라도 class 외부에서 접근이 불가능하다.
//static은 정적 메서드/프로퍼티로 만들어준다. 다만 클래스명을 통해 class 외부에서 접근이 가능하다.
//private static로 선언하면 인스턴스가 해당 프로퍼티를 받을 수 없고, class 외부에서도 변경도 불가능하다.  
//public static은 class를 통해 외부에서 접근이 가능하지만, 인스턴스에게 해당 프로퍼티를 전달하지 않는다.
// protected는 class 외부에서 접근이 불가능하지만 , 인스턴스를 자식 요소에게 전달한다.
// 인스턴스가 전달받은 protected 요소는 인스턴스를 통해서는 변경할 수 없다.
var myUser = new Username();
//   숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
// Users.addOne(3) //이렇게 하면 x가 3 더해져야함
// Users.addOne(4) //이렇게 하면 x가 4 더해져야함
// Users.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
// 저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 
// 그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
// (조건) private static x = 10; 이 코드 수정금지 
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.addOne = function (int) { Users.x += int; };
    Users.printX = function () { console.log(Users.x); };
    Users.x = 10;
    Users.y = 20;
    return Users;
}());
var Squares = /** @class */ (function () {
    function Squares(width, height, color, borderRadius) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.borderRadius = borderRadius;
    }
    Squares.prototype.draw = function () {
        var snowCanvas = document.querySelector('#snow-canvas');
        var a = Math.random() * 20;
        var square = "<div class=\"snow-flower\" style=\"position:relative;\n        top:".concat(a * 10, "px;\n        left:").concat(a * 18, "px;\n        width:").concat(this.width, "px;\n        height:").concat(this.height, "px;\n        background:").concat(this.color, ";\n        border-radius:").concat(this.borderRadius, "px;\"\n        ></div>");
        if (snowCanvas !== null) {
            snowCanvas.insertAdjacentHTML('afterbegin', square);
        }
    };
    return Squares;
}());
var circle = new Squares(10, 10, 'aliceblue', 5);
circle.draw();
circle.draw();
circle.draw();
circle.draw();
circle.draw();
circle.draw();
circle.draw();
circle.draw();
circle.draw();
circle.draw();
circle.draw();
circle.draw();
circle.draw();
