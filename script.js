const canvas=document.querySelector(".canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const context = canvas.getContext("2d");
const frameCount=251;

const currentFrame =(index)=>`./blender/${(index + 1).toString()}.jpg`;

const images=[];
let ball={frame:0};
for(let i=0;i<frameCount;i++){
    const img=new Image();
    img.src=currentFrame(i);
    images.push(img);
}

gsap.to(ball,{
    frame:frameCount-1,
    snap:"frame",
    ease:"none",
    scrollTrigger:{
       scrub:true,
       pin:'canvas',
        end:"500%",
    },
    onUpdate:render,
});

gsap.fromTo(".top",{opacity:1},{opacity:0,scrollTrigger:{
    scrub:true,
    start:'0%',
    end:'20%',
}})
gsap.fromTo(".left2",{opacity:0},{opacity:1,scrollTrigger:{
    scrub:true,
    start:'15%',
    end:'20%'
}})
gsap.fromTo(".sright",{opacity:0},{opacity:1,scrollTrigger:{
    scrub:true,
    start:'20%',
    end:'25%'
}})
gsap.fromTo(".second",{opacity:1},{opacity:0,scrollTrigger:{
    scrub:true,
    start:'30%',
    end:'40%'
}})
gsap.fromTo(".experience , .projects",{opacity:0},{opacity:1,scrollTrigger:{
    scrub:true,
    start:'35%',
    end:'50%'
}})
gsap.fromTo(".ex , .pgs",{opacity:0},{opacity:1,scrollTrigger:{
    scrub:true,
    start:'40%',
    end:'50%'
}})
gsap.fromTo(".third",{opacity:1},{opacity:0,scrollTrigger:{
    scrub:true,
    start:'55%',
    end:'60%'
}})
gsap.fromTo(".contact,.sm",{opacity:0},{opacity:1,scrollTrigger:{
    scrub:true,
    start:'60%',
    end:'65%'
}})
gsap.fromTo(".fourth",{opacity:1},{opacity:0,scrollTrigger:{
    scrub:true,
    start:'70%',
    end:'75%'
}})
gsap.fromTo(".last",{opacity:0},{opacity:1,scrollTrigger:{
    scrub:true,
    start:'75%',
    end:'77%'
}})


images[0].onload=render;

function render(){
    context.canvas.width=images[0].width;
    context.canvas.height=images[0].height;
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(images[ball.frame],0,0);
}

