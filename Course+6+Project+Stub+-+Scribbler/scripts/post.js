var numberOfClicks=0;

function postLiked(){
    document.getElementById("likeBlog").innerHTML = "Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('commentCount').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}



function addComment() {
    var comment= document.getElementById('commentContent').value;

    var node = document.createElement("div");
    node.innerHTML ="<br>"
    node.style.backgroundColor="#fff";
    node.style.margin="10px 10px 10px 10px";
    node.style.padding="0 20px 20px 10px";
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);
    if (comment===""){
        alert("Please add a comment");
    }
    else{
        var latestComment = document.getElementById("commentBox");
        latestComment.insertBefore(node, latestComment.childNodes[0]); 
    }       
}

function editPost(){
    document.getElementById('postBody').contentEditable='true';
    document.getElementById('postTitleHeader').contentEditable='true';
    document.getElementById('postBody').style.border="2px solid pink";
    document.getElementById('postTitleHeader').style.border="2px solid pink";
    document.getElementById('editPost').innerHTML="Save <i class='fa fa-save'></i>";
    document.getElementById('editPost').addEventListener("click", saveChanges);
}


function saveChanges(){
    document.getElementById('postBody').contentEditable='false';
    document.getElementById('postTitleHeader').contentEditable='false';
    document.getElementById('postBody').style.border="none";
    document.getElementById('postTitleHeader').style.border="none"; 
    document.getElementById('editPost').innerHTML="Edit <i class='fa fa-edit'></i>"; 
    document.getElementById('editPost').addEventListener("click", editPost);
}
    
    
