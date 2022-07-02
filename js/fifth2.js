var tmp=0,
    done=0,
	score=0,
    ar_positions=new Array(16),
    ids_positions=new Array(16);//array of positions
	isMoved = false;
function rnd(){
	var num=Math.floor(Math.random()*16);
	return num;
}
function redraw(){
	for (m=0; m<ar_positions.length; m++){
	  if (ar_positions[m]!==0){
		  ids_positions[m].innerHTML=ar_positions[m];
		  }
      else {
		  ids_positions[m].innerHTML="";
        }
    }
	document.getElementById("score").innerHTML="Your score : "+score;
	console.log(ar_positions);
}	
function move_up(pos){
	if (pos>3&&ar_positions[pos-4]===0){
		let tmp_midle;
		tmp_midle=ar_positions[pos];
		ar_positions[pos]=ar_positions[pos-4];
		ar_positions[pos-4]=tmp_midle;
		isMoved=true;
		score++;
	}
	return;
}
function move_down(pos){
	if (pos<12&&ar_positions[pos+4]===0){
		let tmp_midle;
		tmp_midle=ar_positions[pos];
		ar_positions[pos]=ar_positions[pos+4];
		ar_positions[pos+4]=tmp_midle;
		isMoved=true;
		score++;
	}
	return;
}
function move_left(pos){
	if ((pos!==0||4||8||12)&&(ar_positions[pos-1]===0)){
		let tmp_midle;
		tmp_midle=ar_positions[pos];
		ar_positions[pos]=ar_positions[pos-1];
		ar_positions[pos-1]=tmp_midle;
		isMoved=true;
		score++;
	}
	return;
}
function move_right(pos){
	if ((pos!==3||7||11||15)&&(ar_positions[pos+1]===0)){
		let tmp_midle;
		tmp_midle=ar_positions[pos];
		ar_positions[pos]=ar_positions[pos+1];
		ar_positions[pos+1]=tmp_midle;
		isMoved=true;
		score++;
	}
	return;
}

function fnc_open_modal() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        //modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
		document.getElementById("modal_score").innerHTML="Score : "+score;
    };
	
function check(){
	var chk_pos=0;
	for (n=0; n<ar_positions.length; n++){
	  if (ar_positions[n]===(n+1)){
		 chk_pos++;
		}
    }
	if (chk_pos===15){fnc_open_modal();}
}

function move_on_click(){
	var id = event.target.id,
	id_cut=id.replace('pos',''),
	val=parseInt(id_cut,10);

	move_up(val);
	move_down(val);
	move_left(val);
	move_right(val);
	redraw();
	if (isMoved===true){check();};
	console.log(isMoved)
	console.log(score);
	}

function restart(){
  ar_positions.fill("a");
  for (var i=0; i<ar_positions.length; i++){
	tmp=rnd();
	if (ar_positions.indexOf(+tmp)!==-1){
		do {
			tmp=rnd();
		} while(ar_positions.indexOf(+tmp)!==-1);
		ar_positions[i]=tmp;
		}
	else {
		ar_positions[i]=tmp;
		}
	ids_positions[i]=document.getElementById("pos"+i);
	if (ar_positions[i]!==0){ids_positions[i].innerHTML=ar_positions[i];};
  }
  redraw();
}

window.onload=restart();

for (var i=0; i<ar_positions.length; i++){
	ids_positions[i]=document.getElementById("pos"+i);
    ids_positions[i].addEventListener("click", move_on_click);
}

var id_btn=document.getElementById("btn_redraw");
id_btn.addEventListener("click", restart);

/* var btn=document.getElementById("playground");
console.log(score);
console.log(done);
if (done===15){
	btn.style.backgroundColor="lightgreen";
	} */
	
	
//modal 	
let open_modal = document.querySelectorAll(".js_open_modal");
let close_modal = document.getElementById("modal_close");
let modal = document.getElementById("modal");
let body = document.getElementsByTagName("body")[0];

open_modal.forEach(function(item){
	item.addEventListener('click', () =>  fnc_open_modal());
}
)
close_modal.onclick = function() { // клик на закрытие
    //modal.classList.add('bounceOutDown'); // добавляем эффект закрытия<!--bounceOutDown класс из библиотеки(анимация закрытия)-->
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 100);
};	

var try_again=document.getElementById("modal_restart");
try_again.onclick= function(){
	restart();
	window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 100);
}
/* элегантно и красиво случайно сортирует массив!!!!
function myFunction() {
  points.sort(function(a, b){return 0.5 - Math.random()});
  document.getElementById("demo").innerHTML = points;
} */
/* метод Fisher Yates!!!!
 const points = [40, 100, 1, 5, 25, 10];
for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
} */
