let myName;
let formName;
let num_of_cards;
let new_arr_card=[];

let this_card1="";
let this_card2="";

let my_card1_id;
let my_card2_id;

let my_timer;
let timer;

let temp;

let flag=false;

let count=0;
let countClick=0;
let point=document.querySelector("#mark");

let icon;

const arrCard=[

    {
        name_img: "1",
        id:1,
    },
    {
        name_img: "2",
        id:2,
    },
    {
        name_img: "3",
        id:3,
    },
    {
        name_img: "4",
        id:4,
    },
    {
        name_img: "5",
        id:5,
    },  
    {
        name_img: "6",
        id:6,
    },  
    {
        name_img: "7",
        id:7,
    },
    {
        name_img: "8",
        id:8,
    },
    {
        name_img: "9",
        id:9,
    },
    {
        name_img: "10",
        id:10,
    },
    {
        name_img: "11",
        id:11,
    },  
    {
        name_img: "12",
        id:12,
    },
    {
        name_img: "13",
        id:13,
    },
    {
        name_img: "14",
        id:14,
    },
    {
        name_img: "15",
        id:15,
    },
    {
        name_img: "16",
        id:16,
    },
    {
        name_img: "17",
        id:17,
    },  
    {
        name_img: "18",
        id:18,
    },  
    {
        name_img: "19",
        id:19,
    },  
    {
        name_img: "20",
        id:20,
    },      
   ]

   switch(document.querySelector("body").id){
    case "form":
        main_form();
        break;
    case "game":
        main_game();
        break;
}
console.log(num_of_cards+"בדיקת מספר הכרטיסים")
// switch(num_of_cards){
//     case "10":
//         document.querySelector("#board").classList.add("a");
//         break;
//     case "15":
//         document.querySelector("#board").classList.add("b");
//         break;
//         case "20":
//             document.querySelector("#board").classList.add("c");
//             break;
// }

//-------דף התחלת המשחק--------

main_form();

function main_form()
{   
    //הצגת שמות אפשריים ממערך המשתמשים

   const str_data=localStorage.getItem("arr");
    if(str_data){
        arr_names=JSON.parse(str_data);
    }
    document.querySelector("input").onkeyup=found;
    function found(){
        let val=document.querySelector("input").value;
        document.querySelector("div").innerHTML="";
        let newarr= arr_names.filter((arri)=>{
        if(arri.indexOf(val)!=-1)
        return true;
        return false;
       })
       for(item of newarr){
       document.querySelector("div").innerHTML+=`<p>${item}</p>`;
       }
    }

}
{
document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formName = document.getElementById("name").value;
    const num_of_cards = document.querySelector("#myDropdown").value;
    const cardType = document.querySelector("#DropdownCardType").value;
    
    localStorage.setItem('formName', formName);
    localStorage.setItem('num_of_cards', num_of_cards);
    localStorage.setItem('cardType', cardType);
    
    if(formName){
    window.location.href = 'game/game.html';
    }
    else {alert("לא הוכנס שם שחקן")}
});
}

//---------------game------------

function main_game(){
  let cardType;  
num_of_cards=localStorage.getItem("num_of_cards",num_of_cards);
cardType=localStorage.getItem('cardType', cardType);
myName=localStorage.getItem('formName', formName);


document.querySelector("#myName").innerHTML+=(`hello ${myName}`);


//--------function--------------
copy();
shuffle_cards_arr();
print_cards(new_arr_card); 
start(); 

function copy(){
    console.log("copy");
    for(let j=0;j<2;j++){
        for(let i=0;i<num_of_cards;i++){
            new_arr_card.push(arrCard[i]);
        }
    }
    console.log(new_arr_card);
}
// ערבוב הכרטיסים
function shuffle_cards_arr() {
    console.log("shuffle_cards_arr");
    let currentIndex = new_arr_card.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [new_arr_card[currentIndex],new_arr_card[randomIndex]] = [
            new_arr_card[randomIndex], new_arr_card[currentIndex]];
    }
} 
// הדפסת מערך הכרטיסים
 
function print_cards(new_arr_card){
    console.log("print_cards")
    for (item of new_arr_card) {
    let element = document.createElement("button");
    element.style.backgroundImage=`url('${cardType}/${item.name_img}.jpg')`;
    element.classList=("card clear0");
    document.querySelector("#board").append(element);
    element.dataset.id=item.id;
 }
 console.log(num_of_cards+"בדיקת מספר הכרטיסים")
switch(num_of_cards){
    case "10":
        document.querySelector("#board").classList.add("a");
        break;
    case "15":
        document.querySelector("#board").classList.add("b");
        break;
    case "20":
            document.querySelector("#board").classList.add("c");
        break;
}

console.log("cardType!!!!!"+cardType)

// switch(cardType){
//     case "cars":
//             icon=`"fa-automobile"`;
//     break;
//     case "chairs":
//             icon=`"fas fa-chair"`;
//     break;
//     case "plants":
//             icon=`"fas fa-tree"`;
//     break;
// }
console.log("icon!!!!!!!!"+icon)

 num_of_cards=0;
}
    //  להתחלת המשחק
    function start(){
        console.log("start");
    let start=document.querySelectorAll(".card");
        start.forEach(card => {
            card.onclick=click_status;
        });
    }
    // בלחיצה על אחד הכרטיסים - בדיקה האם זו לחיצה ראשונה או שניה
    function click_status(){
    console.log("click_status");
   if (flag==false)
   {
    this_card1=this;
    my_card1_id=this.dataset.id;
    console.log("my_card1_id"+my_card1_id);
    class_clear1(this_card1);
    click1();
   }
    else
   {
    this_card2=this;
    my_card2_id=this.dataset.id;
    console.log("my_card2_id"+my_card2_id);
    class_clear1(this_card2);
    click2();
   }
}
// בלחיצה על הכרטיס הראשון
function click1()
{
    console.log("new_arr_card.length "+new_arr_card.length+"count "+count)
    
    console.log("click1")
    off(this_card1);
    not_click();
    flag=!flag;   
  
}

// במקרה שלא נעשתה פעולה לחיצה תוך 3 שניות
function not_click(){
    console.log("not_click")
    my_timer=setTimeout(function(){
        cards_not_pair(this_card1);
        Flag_false();
        removeClickEvent();
    },3000);
}

// בלחיצה על הכרטיס השני
function click2(){
    if (count+1==new_arr_card.length/2)
    {document.querySelector("#end").innerHTML+=`WOW !!!`
    document.querySelector("#end2").innerHTML+=`several attempts:${countClick}`}
else
 console.log("click2");
    off(this_card2);
    clearTimeout(my_timer);
    Flag_false();
    timer=setTimeout(check,1000);
    cancelClickEvent();
    countClick++; 
}
// מניעת אירוע לחיצה
function cancelClickEvent() {
    document.body.style.pointerEvents = "none";
  }

  //הסרת המניעה
function removeClickEvent(){
    document.body.style.pointerEvents = "auto";
}


// בדיקה האם הכרטיסים שוים
function check(){
    console.log ("check");
    if(my_card2_id==my_card1_id)// אם שווים
    {
        cards_pair(this_card1);
        cards_pair(this_card2);
        document.querySelector("#mark").innerHTML+=`<i class="fa fa-connectdevelop"" style="font-size:1.5vw"></=i>`;

        count++;
        console.log(count);
        if(count==num_of_cards/2){
        alert("win!!!!!!");
        }
    }
    else// אם אינם שוים
    {
        cards_not_pair(this_card1);
        cards_not_pair(this_card2);
        
    } 
    console.log("my_card2_id"+this_card2.id)
    console.log("my_card1_id"+this_card1.id)
}
// כאשר הכרטיסים שוים
function cards_pair(temp){
    console.log("card_pair");
    temp.classList.remove("clear1"); 
    temp.classList.add("clear2");   
    removeClickEvent();
 
}
// כאשר הכרטיסים אינם שווים
function cards_not_pair(temp){
    console.log("cards_not_pair")
    temp.classList.remove("clear1"); 
    temp.classList.add("clear0");
    on(this_card1);
   on(this_card2);
   removeClickEvent();

}
function Flag_false(){
    console.log("flag")
    flag=false;
}
// לשים על הכרטיס קלאס clear1 - ללא שקיפות
function class_clear1(temp){
    console.log("class_clear100");
    console.log("i temp: " + temp);

    temp.classList.remove("clear0");
    temp.classList.add("clear1");
}
//לשים על הכרטיס קלאס - clear2 - שקיפות למחצה
function class_clear2(temp){
    console.log("class_clear50")

    temp.classList.remove("clear0");
    temp.classList.add("clear2");
}

 function off(temp){
     temp.disabled=true;
 }

 function on(temp){
     temp.disabled=false;
 }
}

// document.querySelector("#new").onclick=function(){
//     window.location.href = 'form.html';
// }