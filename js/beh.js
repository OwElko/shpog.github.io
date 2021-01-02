document.querySelector('header').innerHTML=`
<h1><a href="index.html">TheShaman</a></h1>
<nav>
    <a href="index.html#">Home</a>
    <!--<a href="index.html#games" id="gamesattach">Games</a>-->
    <a href="index.html#articles">Articles</a>
    <a href="index.html#contact">Contact</a>
</nav>
`
document.querySelector('footer').innerHTML=`
<div><h1>TheShaman</h1> ${(new Date).getFullYear()}</div>
`
/*function showMiliseconds(){
    document.querySelector('footer').innerHTML=`
<div><h1>TheShaman</h1> ${Date.now()}</div>
`
    setInterval(showMiliseconds,10)
}
showMiliseconds()*/

//alert(document.querySelector('footer').offsetHeight)

function resize(){
    document.querySelector('#place4ad').style.height = (2*window.innerHeight/3+15)+"px"
    document.querySelector('#hello').style.height = window.innerHeight+"px"

    document.querySelector('#hello>div').style.top = ((document.querySelector('#hello').offsetHeight-document.querySelector('#hello>div').offsetHeight-50)/2)+"px"



    document.querySelector('#games').style.height = window.innerHeight+"px"

    document.querySelector('#games>div').style.top = ((document.querySelector('#games').offsetHeight-document.querySelector('#games>div').offsetHeight-50)/2)+"px"
    /*if(document.querySelector('#articles').offsetHeight<window.innerHeight){
        document.querySelector('#articles').style.height = window.innerHeight+"px"
    }*/

    document.querySelector('#articles-banner').style.height = window.innerHeight+"px"
    document.querySelector('#articles-banner > div').style.top = (window.innerHeight/6-25)+"px"
    
    for(let e of [...document.querySelectorAll('#articles article')/*,document.querySelector('#contact'),document.querySelector('footer')*/]){
        e.style.top=(-2*window.innerHeight/3-15)+"px"
    }
    for(let e of [document.querySelector('#contact')/*,document.querySelector('footer')*/]){
        e.style.top=(-0.68*window.innerHeight)+"px"
    }

    document.querySelector('#contact').style.height = (window.innerHeight/2)+"px"
    document.querySelector('#contact>div').style.top = ((document.querySelector('#contact').offsetHeight-document.querySelector('#contact>div').offsetHeight)/2)+"px"

}
resize()
window.onresize=resize