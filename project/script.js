var tm =gsap.timeline();
gsap.set(".a",{opacity:0,y:20});
gsap.set(".b",{opacity:0,scale:.5})
tm.to(".a",{
    opacity:1,
    y:0,
    duration:1,
    ease:Expo.easeout,
    stagger:.5
})
tm.to(".b",{
    opacity:1,
    scale:1,
    duration:1,
    ease:Expo.easeout
    })

document.querySelector("#text2 button").addEventListener("click",function(){
    document.querySelector("#fs").style.opacity =1;
    document.querySelector("#landing").style.overflow = "initial";
    document.querySelector("#first").style.opacity =0;
    document.querySelector("#fs").style.pointerEvents ="initial";
  

})
document.querySelector("#login-btn button").addEventListener("click",function(){
    document.querySelector("#login-form").innerHTML =` <div class="container">
    <div id="limg">
        <img src="./3d boy.png" alt="">
    </div>
    <div class="drop">
        <div class="content">
            <h2>Login</h2>
            <form >
                <div class="inputbox">
                    <input type="text" placeholder="Username">
                </div>
                <div class="inputbox">
                    <input type="password" placeholder="password">
                </div>
              <div class="inputbox">
              <a id='enter' href='../sarthak bhaiya/index.html'>Login</a>
             </div>
            </form>
        </div>
    </div>
</div>
<a href="#" class="btns" >Forget <br> password</a>
<a href="#" class="btns signup" >Sign up</a>`
document.querySelector("#login-form>img").style.opacity=0;
})
