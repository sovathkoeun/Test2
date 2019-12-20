/*
  *There are 2 functions 
  *The table you can search data by using search input
  *Author: Yong chanthy

*/

// fix scroll page at the top
window.onscroll = function () {scrollFix()};

 var fixHeader = document.getElementById('nav-bar');
 var isSticky = fixHeader.offsetTop;

 function scrollFix(){
  if (window.pageYOffset > isSticky){
    fixHeader.classList.add("fix");
  }
  else{
    fixHeader.classList.remove("fix");
  }
 }
// ============== end ============================

// ===============Search table by using search input type=====================
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        // alert (" Sorry, the data is not exist");
      }
    }       
  }
}