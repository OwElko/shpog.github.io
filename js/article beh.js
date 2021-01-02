document.querySelector('header').innerHTML = `
<h1><a href="index.html">TheShaman</a></h1>
<nav>
    <a href="index.html#">Home</a>
    <!--<a href="index.html#games" id="gamesattach">Games</a>-->
    <a href="index.html#articles">Articles</a>
    <a href="index.html#contact">Contact</a>
</nav>
`
document.querySelector('footer').innerHTML = `
<div><h1>TheShaman</h1> ${(new Date).getFullYear()}</div>
`
function resize() {
    document.querySelector('#banner').style.height = window.innerHeight + "px"
    document.querySelector('#banner>div').style.top = ((document.querySelector('#banner').offsetHeight - document.querySelector('#banner>div').offsetHeight) / 2) - 50 + "px"
    for (let e of [...document.querySelectorAll('article iframe')]) {
        e.style.height = e.offsetWidth*0.5725+"px"
    }
}
resize()
window.onresize = resize