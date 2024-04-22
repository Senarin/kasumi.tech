function openMailAddr(elem){
 var mailaddr = elem.dataset.name +"@"+ elem.dataset.domain +"."+ elem.dataset.tld;
 window.location.href = "mailto:"+ mailaddr;
 return;
}

function closePopupSection(elem){
 if(window.sessionStorage){sessionStorage.setItem("popup-closed",1);}
 document.getElementById(`${elem}`).style.display = "none";
}

function isPopupClosed(elem){
 if(window.sessionStorage && sessionStorage.getItem("popup-closed")){document.getElementById(`${elem}`).style.display = "none";}
}

function changePic(elem,path){
 elem.setAttribute("src",path);
}

function changeTabHash(h){
 document.querySelector(`input[data-tab-name="${h}"]`).addEventListener("click",() => {window.location.hash = `#${h}`;});
}

function triggerTabHash(){
 var h = window.location.hash.replace("#","");
 document.querySelector(`input[data-tab-name="${h}"]`).checked = true;
 document.addEventListener("hashchange",() => {document.querySelector(`input[data-tab-name="${h}"]`).click();},false);
}