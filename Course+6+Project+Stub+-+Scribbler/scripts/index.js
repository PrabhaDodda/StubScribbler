function listAllPosts(){
location.href = "./html/postslist.html";
}

function showUpcreatePost(){
  var createpostmodal = document.getElementById("create-post-modal");
  createpostmodal.style.display = "flex";
}

function closeCreatePostModal(){
  var createpostmodal = document.getElementById("create-post-modal");
  createpostmodal.style.display = "none";
}