var coll = document.getElementsByClassName("collapsible");
var i;
/*These variables and the code bellow allows the collapsible to function by activating different classes based of whether the collapsible is activated or not.*/
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
