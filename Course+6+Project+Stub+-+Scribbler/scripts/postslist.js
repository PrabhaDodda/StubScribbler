function deletePost1(){
var modal = document.getElementById('deletepostmodal1');
modal.style.display='block';
}

function deletePost2(){
var modal = document.getElementById('deletepostmodal2');
modal.style.display='block';
}


function deletePost3(){
var modal = document.getElementById('deletepostmodal3');
modal.style.display='block';
}


function deletePost4(){
var modal = document.getElementById('deletepostmodal4');
modal.style.display='block';
}


function deletePost5(){
var modal = document.getElementById('deletepostmodal5');
modal.style.display='block';
}


function closeDeletePostModal1(){
 document.getElementById('deletepostmodal1').style.display='none';
}

function closeDeletePostModal2(){
 document.getElementById('deletepostmodal2').style.display='none';
}

function closeDeletePostModal3(){
 document.getElementById('deletepostmodal3').style.display='none';
}

function closeDeletePostModal4(){
 document.getElementById('deletepostmodal4').style.display='none';
}

function closeDeletePostModal5(){
 document.getElementById('deletepostmodal5').style.display='none';
}


function deleteSpecificPost1(){
document.getElementById('deletepostmodal1').style.display='none';
var del = document.getElementById('postdelete1');
del.remove();
}

function deleteSpecificPost2(){
document.getElementById('deletepostmodal2').style.display='none';
var del = document.getElementById('postdelete2');
del.remove();
}


function deleteSpecificPost3(){
document.getElementById('deletepostmodal3').style.display='none';
var del = document.getElementById('postdelete3');
del.remove();
}


function deleteSpecificPost4(){
document.getElementById('deletepostmodal4').style.display='none';
var del = document.getElementById('postdelete4');
del.remove();
}


function deleteSpecificPost5(){
document.getElementById('deletepostmodal5').style.display='none';
var del = document.getElementById('postdelete5');
del.remove();
}



function postDetails() {
    location.href = "../html/post.html";
}



