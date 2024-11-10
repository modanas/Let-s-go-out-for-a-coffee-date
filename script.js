var tl = gsap.timeline({
 scrollTrigger : {
  trigger : ".about",
  start : "0% 95%",
  end : "70% 50%",
  scrub : true,
 }
})
tl.to("#can", {
 top : "95%",
 left : "12%",
 rotate : "30deg"
}, "chocolate")

tl.to("#chocolate", {
 top : "160%",
 left : "27%",
}, "chocolate")

tl.to("#chocolate2", {
 top : "160%",
 right : "10%",
 width : "20%",
 rotate : "-15deg",
}, "chocolate")

tl.to("#almond", {
 top : "110%",
 left : "70%",
 rotate : "130deg",
}, "chocolate")

tl.to("#almond2", {
 top : "110%",
 left : "0%",
 rotate : "130deg",
}, "chocolate")

var tl2 = gsap.timeline({
 scrollTrigger : {
  trigger : ".product",
  start : "0% 95%",
  end : "20% 50%",
  scrub : true,
 }
})

tl2.to("#chocolate", {
 width : "28%",
 left : "42%",
 top : "214%",
}, "can")

tl2.to("#can", {
 width : "30%",
 left : "35%",
 top : "218%",
 rotate : "0deg"
}, "can")

tl2.to("#chocolate2", {
 width : "15%",
 left : "35%",
 top : "270%",
 rotate : "0deg"
}, "can")
