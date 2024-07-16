// let a=10
// let b=15
// let c=12

// let answer=Math.floor((a+b+c)/2)
// console.log(answer)

// let a=1993
// if(a%100==0&&a%400==0){
//     console.log("Kabisa yil")
// }else if (a%100==0&&a%400!=0){
//     console.log("Kabisa yil emas")
// }else if (a%100!=0&&a%400==0){
//     console.log("Kabisa yil emas")
// }
// let parol, chekparol = 1111, balans = 5000000;

// console.log("Parolni kirgizing: ");
// parol = parseInt(prompt());

// if (parol === chekparol) {
//   console.log("~~~~~~");
//   console.log("             MENU               ");
//   console.log("~~~~~~~~");
//   console.log("1.Karta malumotlari\b2.SMS xabarnoma\n3.Balans\n4.Balnsni toldirish\n5.Naqd pul yechish\n6.Parolni ozgartirish");
//   console.log("~~~~~~");

//   let selection = prompt("Operatsiyani kirgizing: ");

//   switch (selection) {
//     case 1:
//       console.log("Karta egasi:Muxiddinov Daler");
//       console.log("Karta registratsiya qilingan sana:32.13.2025");
//       console.log("Karta raqami: 8600 0541 2341 9548");
//       console.log("Muddati:13/24");
//       break;
//     case 2:
//       let tel = parseInt(prompt("Qaysi telefon raqamga kartani boglamoqchisiz\n"));
//       console.log("SMS tastiqlandi!");
//       break;
//     case 3:
//       console.log("Sizning balansingiz:" + balans);
//       break;
//     case 4:
//       let tol = parseInt(prompt("Pul kirgizing"));
//       console.log("Balans muvvafaqiyatli toldi:" + (balans + tol));
//       break;
//     case 5:
//       let yech = parseInt(prompt("Necha pul yecmoqchisiz?"));
//       if (yech < 5000000) {
//         let f = Math.floor(yech / 100);
//         console.log("Yechilmoqda...");
//         console.log("Yecildi:" + (yech + f));
//         console.log("Qoldi pul:" + (balans - (yech + f)));
//       } else {
//         console.log("Xato!Yetarlicha pul yoq!");
//       }

//       break;
//     case 6:
//       console.log("Eski parolni kirgizing:");
//       parol = parseInt(prompt());
//       if (parol === chekparol) {
//         let yparol = parseInt(prompt("Yangi parol kirgizing :"));
//         console.log("Parol muvvafaqiyatli ozgartirildi.");
//       } else {
//         console.log("Xato!");
//       }
//       break;
//   }
// } else {
//   console.log("Xato!Notogri parol");
// }

// let a=prompt("Yoshingizni kirgizing",[0])
// if(a>=18){
//   alert("Siz plastik olishingiz mumkin")
// }else {
//   alert("Siz plastik olishingiz mumkin emas")
// }

// const checkA=a>=18? "Siz plastik olishingiz mumkin":"Siz plastik olishingiz mumkin emas"
// alert(checkA)



// let a=+prompt("Son1 kirgizing:")
// let b=+prompt("Son2 kirgizing:")
// let math=prompt("Matematik operatsiya kirgizing:\n+\n-\n*\n/\n%")

// switch(math){
//     case "+":
//     alert(a + b);
//     break;
//     case "-":
//     alert(a - b);
//     break;
//     case "*":
//     alert(a * b);
//     break;
//     case "/":
//     alert(Math.trunc(a / b));
//     break;
//     case "%":
//     alert(a % b);
//     break;
    
// }
// let a;
// a = parseInt(prompt("Enter a number: "));
// if(a>0&&a<100){
// switch(Math.floor(a/10)){
//     case 1:
//     console.log("on");
//     break;
//     case 2:
//     console.log("yigirma");
//     break;
//     case 3:
//     console.log("ottiz");
//     break;
//     case 4:
//     console.log("qirq");
//     break;
//     case 5:
//     console.log("ellik");
//     break;
//     case 6:
//     console.log("oltmish");
//     break;
//     case 7:
//     console.log("yettmish");
//     break;
//     case 8:
//     console.log("sakson");
//     break;
//     case 9:
//     console.log("toqson");
//     break;
//     default:
//     console.log("Xato");
//     break;
//    } switch(a%10){
//     case 1:
//     console.log("bir");
//     break;
//     case 2:
//     console.log("ikki");
//     break;
//     case 3:
//     console.log("uch");
//     break;
//     case 4:
//     console.log("tort");
//     break;
//     case 5:
//     console.log("besh");
//     break;
//     case 6:
//     console.log("olti");
//     break;
//     case 7:
//     console.log("yetti");
//     break;
//     case 8:
//     console.log("sakkiz");
//     break;
//     case 9:
//     console.log("to`qiz");
//     break;
//     default:
//     console.log("Xato");
//     break;
// }
// console.log(a/10+a%10)
// }else{

//   console.log("Xato!Nima balo chumisan!?")
// }
// let a
// if(a%1000<500&&a%1000>=0){
//   console.log((a/1000)*1000)
// }else if(a%1000>500){
//   console.log((a/1000)*1000+1000)
// }
// let b=0;
// for(let a=1;a<=10;a++){`
//   b=b+a
  

// }
// console.log(b)
//let a=101;
// for(let b=0;b<=49;b++){
//   a=a-2
//   console.log(a)  
// } 
// let b=+prompt();

// let c=1;
// // for(let a=1;a<=b;a++){
// //   c=c*a;
// // }
// // console.log(c);
// let b=+prompt();
// let c=0;
// let s=0; 
// let d=b%10;
// for(let a=1;a<=d;a++){
//   c=b%10;
//   s=s+c;
//   b=b/10;
// }
// console.log(c);
 


// function sayHello(a){
//     if(a>=18){
//         return true
//     }else{
//         return confirm("ruxsat bormi")
//     }
// }
// alert(sayHello(+prompt("birinchi son")))


// alert("Hello World)


// let a="What is going on"
// console.log(a.charAt(5))





// let a="not candy"
// let b=a.startsWith("not")
// if(b===true){
//     console.log(a)
// }else{
//     console.log("not "+a)
// }

// let str="kitten"
// let n=1
//     let b=str.slice(0,n)
//     let c=str.slice(n)
//     console.log()
// console.log(b)





































// let ar = ["mantn" , true, 12, function () {alert ("hello world")} ]
// console.log(ar)

// console.log(ar [0])


// let ar2 = [1, 2, 3, 4, 5, 6, 7]

// let str = "string"

// console.log(str.length)
// console.log(ar2)

// ar.push("hello world")

// console.log(ar2)

// let fruit = ["apple", "bear", "cls"]
// fruit.pop()
// console.log(fruit)


// fruit.unshift("orange", "pineapple" , "mevalar ro'yxati")
// console.log(fruit)

// fruit.shift()
// console.log(fruit)

// fruit.splice(1, 3, "mevalar ro'yxati")
// console.log(fruit)


// console.log(fruit.indexOf ("mevalar ro'yxati") )
// console.log(fruit.lastIndexOf("apple"))
// console.log(fruit.includes("bearrr"))
// for(let i = 0; i < fruit.length -1; i++){
//     console.log(fruit[i])
// }

// let num = [1, 2, 3, 4, 5, 6, 7]
// for(let i = 0; i < num.length -1; i++){
// num[i] = num [1] + 5 
// }

// for(const value of num){
//     console.log(value)
// }
// for(const index in fruit){
// console.log(fruit[index])
// }
// console.log(num)






//  function call (){
//     console.log("hello world")

// }
// function me (callme){
//     console.log("mevalar ro'yxati")
//     callme()
// }

// calc(x,y,operation)

// calc(12,3,add)
















// function mainFunction(callback) {
//     console.log("Pe");
//     setTimeout(function() {
//       callback("Op");
//     }, 1000);
//   }
  
//   function callbackFunction(result) {
//     console.log("Result: " + result);
//   }
  
//   mainFunction(callbackFunction);














// let ism = {
//     age:14,
//     isMarried:false,
//     name:"Daler"
// }
// console.log(ism,age)
// console.log(ism["name3"])




// let gm={
//     carname:"Malibu",
//     year:2015,
//     poz:1,
//     color:"black",
//     bormi:false
// }
// if(gm.bormi){
//     gm.narx=4500
// }else{
//     gm.narx="not purchased"
//     gm.color="not purchased"
// }
// console.log(gm.carname,gm["color"],(gm.bormi?"yes":"no"))




// let a=5
// let b=a
// b=4
// console.log(a,b)
// let gm={
//     carname:"Malibu",
//     year:2015,
//     poz:1,
//     color:"black",
// }
// let gm2={...gm}
// //let gm2=Object.assing({},gm)
// gm2.carname="Cobalt"
// gm2.color="white"
// console.log(gm)
// console.log(gm2)





// let info={
//     street:"Yoshlik",
//     city:"Angor",
//     zipcode:122000
// }
// const idk =(date)=>{
// for(let wtf in date){
//     console.log(wtf+":"+date[wtf])
// }
// }
// idk(info)



// let library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];


//     for (let book of library) {
//         console.log(` ${book.title},${book.author},${book.readingStatus ? true : false}`);
//     }




// let product = {
//     name: 'Sample Product',
//     price: 100
// };


//     if (product.price > 100) {
//         product.price1 = product.price * 0.90; 
//     } else {
//         product.price2 = product.price * 0.93; 
//     }
    



// console.log(`Old price: ${product.price}`);

// let discountedProduct = product;

// console.log(`New price after discount: ${discountedProduct.price}`);





// let a=Math.random()*11;
// a=parseInt(a);
// let b=9.1;
// b=Math.ceil(b);
// console.log(b);
// let c=9.1;
// c=Math.floor(c);
// console.log(c);
// let d=9.1;
// d=Math.round(d);
// console.log(d);


// let a=Math.random()*11;
// a=parseInt(a);
// console.log(a);
// let b=Math.random()*11;
// b=parseInt(b);
// console.log(b);
// let c=Math.min(a,b);
// console.log(c);
// let d=Math.max(a,b);
// console.log(d);
// let e=Math




// let a=Math.random()*11;
// a=parseInt(a);
// console.log(a);
// let b=Math.random()*11;
// b=parseInt(b)
// console.log(b);
// let c=Math.random()*11;
// c=parseInt(c)
// console.log(c);
// let d=Math.max(a,b,(c))
// console.log(d);








// let array=[];
// for(let i=0;i<10;i++){
//     let a=Math.random()*11;
//     a=parseInt(a);
//     array.push(a);
//     }
//     console.log(array);











// while(true){
//     let a = Math.random() * 11; 
//         a = parseInt(a); 
//     let b = prompt("1dan 10gacha son kiriting"); 
//         b = parseInt(b); 
//     if(a == b) {
//         alert("Tabriklayman! Siz sonni to'g'ri taxmin qildingiz!"); 
//     } else {
//      alert("Afsuski, siz sonni noto'g'ri taxmin qildingiz."); 
//     }
// }









// let user = {
//     name: "John",
//     age: 30,
//     lastName: "Smith",
//     child: {
//         name: "Alice",
//         age: 5,
//         lastName: "Taylor",
//         child: {
//             name: "Bob",
//             age: 2,
//             lastName: "Gomes"
//         }
//     }
// }

// function collectAges(obj) {
//     let ages = [];
//     let current = obj;

//     while (current) {
//         if (current.age !== undefined) {
//             ages.push(current.age)
//         }
//         current = current.child; 
//     }
//     return ages;
// }
// let agesArray = collectAges(user);
// console.log(agesArray); 



// function collectAges(obj, ages = []) {
//     if (obj.age !== undefined) { 
//         ages.push(obj.age); 
//     }
//     if (obj.child) { 
//         collectAges(obj.child, ages); 
//     }
//     return ages;
// }


// let agesArray = collectAges(user);


// console.log(agesArray); 




    


























// let  num1=+prompt("Введите первое число:")
// let  num2=+prompt("Введите второе число:")
// console.log("Выберите математическую операцию:\n1.+\n2.-\n3.*\n4./\n");
// let operation=prompt("Введите операцию:")
// switch(operation){
//     case "+":
//         console.log("Результат: "+(Number(num1)+Number(num2)));
//     break;
//     case "-":
//         console.log("Результат: "+(Number(num1)-Number(num2)));
//     break;
//     case "*":
//         console.log("Результат: "+(Number(num1)*Number(num2)));
//     break;
//     case "/":
//         if(Number(num2)!=0){
//             console.log("Результат: "+(Number(num1)/Number(num2)));
//             }else{
//                 console.log("Ошибка! Деление на ноль");
//                 }
//     break;
//     default:
//         console.log("Ошибка! Неверная операция");
//         }x   


// let h1=socument.body.children[0]
// h1.style.color="red"
// h1.style.fontSize="30px"
// h1.style.textAlign="center"
// console.log(h1)




// let ul=document.getElementsByTagName("ul")
// console.log(ul);
// let pStroke=document.getElementById("pr")
// console.log(pStroke);
// pStroke.style.color="red"
// pStroke.style.fontSize="30px"
// pStroke.style.textAlign="center"




// let text=document.querySelector("p")
// text.setAttribute("class","pr")
// console.log(text)

// let div = document.createElement('div');    
// div.innerHTML = '<h1>Заголовок</h1><p>Текст</p>';
// document.body.removeChild(text);


// document.body.appendChild(div);

// document.body.replaceChild(text,div)






// let newbox=document.createElement("div")
// newbox.setAttribute("class","box")
// let container=document.querySelector(".container")
// container.appendChild(newbox)
// newbox.style.backgroundColor="blue"
// newbox.style.borderRadius="7px"


// let newbox2=document.createElement("div")
// newbox2.setAttribute("class","box")
// container.appendChild(newbox2)
// newbox2.style.backgroundColor="cyan"
// newbox2.style.borderRadius="50%"
// let input=document.querySelector("input")
// let input_text=document.querySelector(".input_text")
// console.log(input.value);
// input.addEventListener("onclick",function(){
//     input_text.textContent=input.value
// })
// let counter = 0;
// function updateCounter() {
//     document.getElementById("counter").textContent = counter;
// }
// function increment() {
//     counter++;
//     updateCounter();
// }
// function decrement() {
//     counter--;
//     updateCounter();
// }
// function reset() {
//     counter = 0;
//     updateCounter();
// }
// updateCounter();

// if((counter==33)||(counter===66)||(counter===99)){
//     document.getElementById("counter").style.color="red"
// }  

// const arr = [
//     {
//         title: "title", 
//         name: "John",
//         age: 19
//     },
//     {
//         title: "title -2", 
//         name: "Doe",
//         age: 22
//     },
//     {
//         title: "title -3", 
//         name: "Akobir",
//         age: 17
//     },
//     {
//         title: "title -4", 
//         name: "Xurshidbek",
//         age: 35
//     }
// ];


// const filteredArr = arr.filter(person => person.age > 18);


// filteredArr.sort((a, b) => a.age - b.age);

// console.log(filteredArr);


// let modal = document.getElementById("myModal");


// let btn = document.getElementById("openModalBtn");


// let span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
//     modal.style.display = "block";
// }


// span.onclick = function() {
//     modal.style.display = "none";
// }


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }



// let sidebar = document.getElementById("mySidebar");


// let btn = document.getElementById("openSidebarBtn");


// let span = document.getElementsByClassName("closebtn")[0];


// btn.onclick = function() {
//     sidebar.style.width = "250px";
// }

// span.onclick = function() {
//     sidebar.style.width = "0";
// }


// window.onclick = function(event) {
//     if (event.target == sidebar) {
//         sidebar.style.width = "0";
//     }
// }

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const editTools = document.createElement('div');


        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.classList.add('edit');
        editBtn.onclick = function() {
            editTask(li);
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        editTools.appendChild(editBtn);
        editTools.appendChild(deleteBtn);
        li.appendChild(editTools);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

function editTask(taskItem) {
    const newTask = prompt("Edit your task:", taskItem.firstChild.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskItem.firstChild.textContent = newTask;
    }
}
