const list =[{
    name : "석이",
    message : "말리지마",
    music : "하루하루 - 빅뱅",
    profile : "./CSS/IMG/seok.png",
    birthday : "19970327",
    background : "./CSS/IMG/cover1.jpg",
    type : "mine"
},
{
    name : "카카오 채널",
    message : "",
    music : "",
    profile : "./CSS/IMG/chanel.png",
    birthday : "",
    type : "channel"
},
{
    name : "김강희",
    message : "고독하구만",
    music : "Ibiza - tyga",
    profile : "",
    birthday : "19970127",
    type : "friends"
},
{
    name : "김효원",
    message : "행복하세요",
    music : "그리워그리워 - 노을",
    profile : "./CSS/IMG/kimhyo.png",
    birthday : "19980223",
    
    type : "friends"
},
{
    name : "권성수",
    message : "헬창의길..",
    music : "we here 2 - 일리네어 레코즈",
    profile : "./CSS/IMG/kwon.png",
    birthday : "19970731",
    
    type : "friends"
},
{
    name : "박도희",
    message : "여행가쟈!",
    music : "안녕나야 - 포맨",
    profile : "./CSS/IMG/parkdo.png",
    birthday : "19970814",
    
    type : "friends"
},
{
    name : "박기중",
    message : "자유롭고 싶다..",
    music : "어쩌라고 - 슈퍼키드",
    profile : "./CSS/IMG/parkki.png",
    birthday : "19970120",
    
    type : "friends"
},
{
    name : "박유진",
    message : "여자친구 사귀고 싶다...",
    music : "대화 - MC스나이퍼",
    profile : "",
    birthday : "19970828",
    
    type : "friends"
},
{
    name : "옥경욱",
    message : "연애하니까 좋더랔ㅋ",
    music : "사랑인걸 - 모세",
    profile : "./CSS/IMG/ok.png",
    birthday : "19971201",
    
    type : "friends"
},
{
    name : "채은지",
    message : "오늘도 킹받는다",
    music : "범퍼카 - 한요한",
    profile : "./CSS/IMG/chea.png",
    birthday : "19971006",
    background : "./CSS/IMG/cover2.png",
    type : "friends"
},
{
    name : "최대혁",
    message : "인생이란.. 무엇인가",
    music : "신촌을못가 - 포스트맨",
    profile : "./CSS/IMG/choi.png",
    birthday : "19970713",
    
    type : "friends"
},
]
 function getlist(){
    for(var i = 0 ; i < list.length; i++){
        setprofile(i);
      }
 }
 function setmodal(index){
    let content = document.querySelector("#modal .content");
    let profileImg = document.querySelector("#modal .profile_img");
    let profileName = document.querySelector("#modal #name");
    let message= document.querySelector("#modal #message");
    let background = list[+index].background || "";
    let profile = list[+index].profile || "";
    content.style.background = background ? `url(${background})` : "";
    profileImg.style.background = profile? `url(${profile})` : "";
    profileName.innerText = list[+index].name;
    message.innerText = list[+index].message;
 }
 
 function clickEvent(){
    let modalEl = document.getElementById("modal");
    // console.log(modalEl);
      let closeBtnEl = document.getElementById("close_btn");
    Array.from(document.getElementsByClassName("button")).forEach((v) => {
        v.addEventListener("click", (e) => {
            setmodal(e.target.getAttribute("data-index"));
            modalEl.style.display = "flex";
        });
      });
      
      closeBtnEl.addEventListener("click", () =>{
        modalEl.style.display = "none";
      });
 }
 function play(){
    getlist();
    clickEvent();
 }

play();
 
  
  function setprofile(index){
    const name = list[index].name;
  const message = list[index].message;
  const profile = list[index].profile;
  const music = list[index].music;
    var groupEl;
         if(list[index].type === "mine"){
            groupEl = document.getElementsByClassName("profile_mine")[0];
         }
         else if(list[index].type === "friends"){
            groupEl = document.getElementsByClassName("group_friends")[0];
         }
         if(groupEl){
            groupEl.innerHTML +=
            `<div class="profile" >
            <input type="button" data-index = "${index}" class="button" value=" " style="background-image:url(
            ${profile ? profile :"./CSS/IMG/default.png"})" >
            <div class="message">
                &nbsp;&nbsp;<b>${name}</b><br>&nbsp;&nbsp;<span>${message}</span>
            </div>
            <div class="music" >
                <span>
                    ${music}
                </span>
            </div>
        </div>
        </div>`;
         }
  }
