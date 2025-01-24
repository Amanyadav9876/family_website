var a=document.querySelector(".centrepart1 button");
var b=document.querySelector(".centrepart2 p");
var c=document.querySelector("#papa");
var d=document.querySelector("#chacha");
var e=document.querySelector("#bhaiya");
var f=document.querySelector("#me");
var tl=gsap.timeline()

tl.from("nav h1",{
    y:-30,
    opacity:0,
    duration:2
})
tl.from("nav h4,nav button",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:1,
    stagger:0.2
})
tl.from(".centrepart1 h1",{
    x:-500,
    opacity:0,
    duration:1,


})
tl.from(".centrepart1 p,.centrepart1 button",{
    y:-500,
    opacity:0,
    duration:1,
    

})
var tim=gsap.timeline()
tim.from(".centrepart2 h3",{
    x:200,
    opacity:0,
    duration:3,
    stagger:1

})
tim.pause()
a.addEventListener("click",function(){
    tim.play()
})
var timl=gsap.timeline()
timl.from("#about1",{
    x:-400,
    duration:1,
    delay:1

})
var x=gsap.timeline()
x.from("#about2",{
    y:-400,
    opacity:0,
    duration:1,
    delay:1

})
var z=gsap.timeline()
z.from("#about3",{
    y:400,
    opacity:0,
    duration:1,
    delay:1

})
var v=gsap.timeline()
v.from("#about4",{
    x:400,
    opacity:0,
    duration:1,
    delay:1

})
timl.pause()
x.pause()
z.pause()
v.pause()
c.addEventListener("click",function(){
    timl.play()
})