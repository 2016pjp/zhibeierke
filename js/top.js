<script>
			var time=null;
			var time1=null;
			var gotop;
			var topSearch=document.getElementById('hidetop');
//			window.onscroll=function(){
//				gotop=document.documentElement.scrollTop||
//				document.body.scrollTop;
//				if(gotop>=200){
//					box.style.display="block";
//					move(0);
//				}
//				else{
//					box.style.display="none";
//					move(-80);
//				}
//			}
			function move(topm){
				var t=0;
				var maxt=80;
				var start=topSearch.offsetTop;
				var end=topm;
				var change=end-start;
				clearInterval(time1);
				time1=setInterval(function(){
					t++;
					if(t>=maxt){
						clearInterval(time1);
					}
					hidetop.style.top=Tween.Linear(t,start,change,maxt)+"px";

				},10)

			} 

		</script>