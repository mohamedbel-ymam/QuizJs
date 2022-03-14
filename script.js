var img=document.getElementById('icon');
var frstButton= document.getElementById('button1');
var scndtButton= document.getElementById('button2');
var like= document.getElementById('like');
var dislike= document.getElementById('disLike');
var nmbrLike,nmbrDisLike;

 function getLike() {
    return localStorage.getItem("likes")
      ? Number(localStorage.getItem('likes'))
      : 0 ;
  }
function getDisLike() {
    return localStorage.getItem("disLikes")
    ? Number(localStorage.getItem('disLikes'))
    : 0 ;
}
nmbrLike = getLike();
nmbrDisLike = getDisLike();
like.textContent =nmbrLike;
disLike.textContent = nmbrDisLike;

function addLike(){
    like.textContent = ++nmbrLike;
    localStorage.setItem("likes", nmbrLike.toString());
}
function addDisLike(){
    disLike.textContent = ++nmbrDisLike;
    localStorage.setItem("disLikes", nmbrDisLike.toString());
}

frstButton.addEventListener('click',addLike);
scndtButton.addEventListener('click',addDisLike);
img.addEventListener('dblclick',addLike);
