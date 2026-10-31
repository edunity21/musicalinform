const acts = [["08:00 AM", "시작되는 우리의 스토리", "지후의 방 · 등교 버스 정류장", "하루가 열린다. 알람, 늦잠, 서툰 꿈이 적힌 메모지, 그리고 등굣길에서 만나는 친구.", "아침의 소음 속에서 우리가 몰래 품고 있는 것은 무엇인가?", "중3의 아침", "K-Pop Musical / 밝고 힘찬 J-Rock", "지후 · 민서 · 앙상블"], ["10:30 AM", "교실, 꿈과 현실 사이", "교실", "성적표 앞에서 마음이 무너진다. 서로 다른 무게의 걱정이 부딪치고, 조심스레 이해가 시작된다.", "숫자로 매겨지지 않는 것을 우리는 어떻게 지킬 수 있을까?", "칠판 위의 걱정들", "Dramatic Musical Ballad", "유나 · 지후 · 민서"], ["12:40 PM", "우리들의 해방구, 점심시간", "운동장 · 급식실", "종이 울리자 세상이 뒤집힌다. 뛰고, 먹고, 웃는 45분 동안만은 모두가 주인공이다.", "별것 아닌 순간이 특별해지는 마법은 어디에서 오는가?", "3소박의 열기", "Funk Pop / Brass Ensemble", "민서 · 유나 · 지후 · 앙상블"], ["02:20 PM", "음악실, 나(ME)를 찾는 시간", "음악실", "점수가 없는 수업이 시작된다. 평범한 하루가 노래가 될 수 있다는 것을 처음 알게 된다.", "평가받지 않는 창작 앞에서 우리는 무엇을 쓰게 되는가?", "나를 위한 에세이", "Acoustic Pop Ballad / Lo-fi", "선생님 · 지후 · 민서 · 유나"], ["06:00 PM", "고민하는 노을녘", "노을이 드리운 하교길", "검색창 앞에서 각자의 두려움이 드러난다. 다른 길을 가는데 같은 자리에 서 있음을 알게 된다.", "아직 정답을 모른다는 것을 우리는 서로에게 어떻게 말할 수 있을까?", "고등학교 검색창", "Emotional Rock Ballad", "민서 · 지후 · 유나"], ["축제의 밤", "영원히 빛날 우리들의 페이지", "졸업 전 마지막 학교 축제 무대", "무대가 끝나고 숨을 몰아쉰다. 지나온 시간이 헛되지 않았음을 서로에게 증명한다.", "오늘의 우리는 먼 훗날의 우리에게 무엇을 남기는가?", "피날레 — 우리의 3학년이 빛나게", "Grand Finale / Broadway Anthem", "유나 · 지후 · 민서 · 선생님 · 앙상블"]];
const tabs = [...document.querySelectorAll('[data-act]')];
const panel = document.getElementById('act-panel');
function select(i) {
 const a=acts[i];
 tabs.forEach((t,n)=>{t.setAttribute('aria-selected',String(n===i));t.tabIndex=n===i?0:-1;});
 panel.setAttribute('aria-labelledby','tab-'+i);
 panel.innerHTML=`<div class="act-art"><span>SCENE</span><strong>0${i+1}</strong><p>${a[0]}<br>${a[2]}</p></div><div class="act-copy"><p class="eyebrow">${i+1}모둠 / 제${i+1}막</p><h3>${a[1]}</h3><p>${a[3]}</p><blockquote>${a[4]}</blockquote><div class="song">♪ ${a[5]}<small>${a[6]}</small></div><p class="cast-note">등장인물 / ${a[7]}</p></div>`;
}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>select(i));t.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%6;if(e.key==='ArrowLeft')n=(i+5)%6;if(e.key==='Home')n=0;if(e.key==='End')n=5;if(n!==undefined){e.preventDefault();select(n);tabs[n].focus();}})});
select(0);
