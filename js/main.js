function _class(name){
    return document.getElementsByClassName(name);
}
  
let tabPanes = _class("tab")[0].getElementsByTagName("button");
console.table(tabPanes.length);

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
        _class("tab")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");
        
        _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        _class("tab-content")[0].getElementsByClassName("content")[i].classList.add("active");
      
    });
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark-mode');
    document.querySelectorAll('.inverted').forEach((result) => {
        result.classList.toggle('invert');
    })
});