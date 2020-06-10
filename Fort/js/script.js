	var chets = 1;
	
	var elem = document.getElementById("Progress");
	var width  = document.getElementById("Progress").offsetWidth;
	var bar = document.getElementById("Bar");
	var prog = width / 4;

	var elemMob = document.getElementById("ProgressMob");
	var widthMob  = document.getElementById("ProgressMob").offsetWidth;
	var barMob = document.getElementById("BarMob");
	var progMob = widthMob / 4;

	var blockOne = document.getElementById("changQuestOne");
	var blockTwo = document.getElementById("changQuestTwo");
	var blockThree = document.getElementById("changQuestThree");
	var blockFour = document.getElementById("changQuestFour");
	var textOne = document.getElementById("changTextOne");
	var textTwo = document.getElementById("changTextTwo");
	var textThree = document.getElementById("changTextThree");
	var textFour = document.getElementById("changTextFour");
	var end = document.getElementById("EndQuest");
  	var	support = document.getElementById("support");
  	var progress = document.getElementById("Progress");
function style(){
	var chet = 1;
	if(chet==1){
		if(screen.width <= 1199){
			barMob.style.width = progMob +'px';
		}else{
			bar.style.width = prog +'px';
		}
	}
}
window.onload = style();  
function Move() {
		if(chets < 5){
			chets++;
			if(screen.width <= 1199){
				ProverkaMob();
			}else{
				Proverka();
			}
			if(chets <= 4){
				if(screen.width <= 1199){
					barMob.style.width = chets * progMob + 'px';	
					document.getElementById("labelMob").innerHTML = "Вопрос " + chets + " из 4";
				}else{
					bar.style.width = chets * prog + 'px';	
					document.getElementById("label").innerHTML = "Вопрос " + chets + " из 4";	
				}
			}
		}
}
function Back(){
	if(chets > 1){
		chets--;
		if(screen.width<=1199){
			ProverkaMob();
		}else{
		Proverka();
		}
		if(screen.width <= 1199){
			barMob.style.width = chets * progMob + 'px';	
			document.getElementById("labelMob").innerHTML ="Вопрос " + chets + " из 4";
		}else{
			bar.style.width = chets * prog + 'px';	
			document.getElementById("label").innerHTML ="Вопрос " + chets + " из 4";
		}
		
	}
}

function SelectCity() {
	var index = document.getElementById('SelectCity').selectedIndex;
	var sel = document.getElementById('SelectCity');
	/*alert(sel[index].text);*/
}
function Clear(){
	chets = 1;
	document.getElementById("label").innerHTML = "Вопрос " + chets + " из 4";
	style();
	if(screen.width<=1199){
		ProverkaMob();
	}else{
		Proverka();
	}
}
function Proverka(){
	if(chets==1){
		blockOne.style.display = "block";
		textOne.style.display = "block";
		blockTwo.style.display = "none";
		textTwo.style.display = "none";
		end.style.display = "none";
		support.style.display = "block";
		progress.style.display = "block";
	}if(chets==2){
		blockOne.style.display = "none";
		textOne.style.display = "none";
		blockTwo.style.display = "block";
		textTwo.style.display = "block";
		blockThree.style.display = "none";
		textThree.style.display = "none";
		end.style.display = "none";
	}if(chets==3){
		blockTwo.style.display = "none";
		textTwo.style.display = "none";
		blockThree.style.display = "block";
		textThree.style.display = "block";
		blockFour.style.display = "none";
		textFour.style.display = "none";
		end.style.display = "none";
	}if(chets==4){
		blockThree.style.display = "none";
		textThree.style.display = "none";
		blockFour.style.display = "block";
		textFour.style.display = "block";
		end.style.display = "none";
	}
	if(chets==5){
		blockFour.style.display = "none";
		textFour.style.display = "none";
		support.style.display = "none";
		progress.style.display = "none";
		end.style.display = "block";
	}

}
function ProverkaMob(){
	if(chets==1){
		document.getElementById("MobtextOne").style.display =  "block";
		document.getElementById("MobOtvOne").style.display =  "block";
		document.getElementById("MobQuestOne").style.display =  "block";
		document.getElementById("MobtextTwo").style.display =  "none";
		document.getElementById("MobOtvTwo").style.display =  "none";
		document.getElementById("MobQuestTwo").style.display =  "none";
	}
	if(chets==2){
		document.getElementById("MobtextOne").style.display =  "none";
		document.getElementById("MobOtvOne").style.display =  "none";
		document.getElementById("MobQuestOne").style.display =  "none";
		document.getElementById("MobtextTwo").style.display =  "block";
		document.getElementById("MobOtvTwo").style.display =  "block";
		document.getElementById("MobQuestTwo").style.display =  "block";
		document.getElementById("MobtextThree").style.display =  "none";
		document.getElementById("MobOtvThree").style.display =  "none";
		document.getElementById("MobQuestThree").style.display =  "none";

	}
	if(chets==3){
		document.getElementById("MobtextTwo").style.display =  "none";
		document.getElementById("MobOtvTwo").style.display =  "none";
		document.getElementById("MobQuestTwo").style.display =  "none";
		document.getElementById("MobtextThree").style.display =  "block";
		document.getElementById("MobOtvThree").style.display =  "block";
		document.getElementById("MobQuestThree").style.display =  "block";
		document.getElementById("MobtextFour").style.display =  "none";
		document.getElementById("MobOtvFour").style.display =  "none";
		document.getElementById("MobQuestFour").style.display =  "none";
	}
	if(chets==4){
		document.getElementById("MobtextThree").style.display =  "none";
		document.getElementById("MobOtvThree").style.display =  "none";
		document.getElementById("MobQuestThree").style.display =  "none";
		document.getElementById("MobtextFour").style.display =  "block";
		document.getElementById("MobOtvFour").style.display =  "block";
		document.getElementById("MobQuestFour").style.display =  "block";
	}if(chets==5){
		document.getElementById("MobtextFour").style.display =  "none";
		document.getElementById("MobOtvFour").style.display =  "none";
		document.getElementById("MobQuestFour").style.display =  "none";
		document.getElementById("ProgressMob").style.display =  "none";
		document.getElementById("sup_name").style.display =  "none";
		document.getElementById("sup_foot").style.display =  "none";
		document.getElementById("Qnone").style.display ="none";
		document.getElementById("EndQuestMob").style.display ="block";
	}
}