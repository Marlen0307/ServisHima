function init(){
    var blloku = document.getElementById("blloku");
    var nav = document.getElementById("navigim");
    var navLinks  = nav.querySelectorAll(".nav-links li");
    var title = document.getElementById("titull");
    // shfaq navbarin kur klikohet divi bllok.
    blloku.addEventListener("click", function(){
        nav.classList.toggle("nav-active");//toggle kontrollon nese klasa eshte ne classList. Nqs jo e vendos, ne te kundert e heq nga classlist
        // Animimi i linkeve te navbar
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/7 + 0.5}s`;//kam perdorur simbolin ngjitur me nr 1 per kete string ngaqe ka jquery
            }
            
        });
        blloku.classList.toggle("toggle");
        title.classList.toggle("zhdukTitullin");

    })
    
}
 var app = ()=>{
     init();
 }
 
app();
function initMap(){ //Vendos harten dhe shenjuesin per pozicionin ekzakt
    var map = new google.maps.Map(document.getElementById("map"), {zoom: 10,
        center: {lat: 41.324848,
            lng: 19.827909}});
    var marker = new google.maps.Marker({map: map,
    position: {lat: 41.324848,
        lng: 19.827909},
        title: "Elektroshtëpiake Shpëtim Hima",
        clickable: false});
}
