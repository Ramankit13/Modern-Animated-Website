//Smooth Scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// For animation in navbar
gsap.from(".nlink", {
    y: 10,
    stagger: .05,
    duration: 2,
    ease: "expo",
    opacity: 0,
});

//Animation in home

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
    opacity: 0,
});

gsap.from(".anim2", {
    y: 40,
    stagger: .3,
    duration: 1.5,
    ease: Power4,
    opacity: 0,
});

//Animation for the images

Shery.imageEffect("#imagenpara img", {
    style: 3,
    config: {"uFrequencyX":{"value":15.7,"range":[0,100]},"uFrequencyY":{"value":7.44,"range":[0,100]},"uFrequencyZ":{"value":24.79,"range":[0,100]},"geoVertex":{"range":[1,64],"value":4.12},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999750347043},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});

Shery.imageEffect(".animimg img", {
    style: 5,
    config: {"a":{"value":0.74,"range":[0,30]},"b":{"value":-0.55,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5652142897335719},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});

Shery.imageEffect("#bimg", {
    style:1,
    config: {"a":{"value":0,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.954973796766613},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":24}},"discard_threshold":{"value":0.62,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":14.05,"range":[0,100]}},
    gooey:true,
})

//Animation for the video

document.querySelector("#fbtn button")
    .addEventListener("mouseover", function(){
        gsap.to("#future video", {
            opacity: 1,
            duration: 1.3,
            ease: Power4,
        })
    })
document.querySelector("#fbtn button")
    .addEventListener("mouseleave", function(){
        gsap.to("#future video", {
            opacity: 0,
            duration: 1.3,
            ease: Power4,
        })
    })
