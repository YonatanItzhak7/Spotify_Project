window.onload = () => {
  document.getElementById(
    "main"
  ).innerHTML = `<div class="container d-flex justify-content-center"><img src="gif/disk1.gif"></div>`;
  setTimeout(() => {
    clickLogain();
  }, 850);

};

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mySidebar").style.position = "absolute";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  // document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function clickLogain() {
  document.getElementById("menubtn").style.display ="none"
  document.getElementById("weather").style.display ="none"
  document.getElementById("main").innerHTML = `
  <section class="vh-100 gradient-custom">
  <div id="logindiv" class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-2 text-center">
          <h1><i onclick="clickClose()" class="bi bi-x-octagon-fill d-flex justify-content-end"></i></h1>
            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your Username and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="text" id="textusername" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Username</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <button class="btn btn-outline-light btn-lg px-5" onclick="userLogin()"">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
}
function userLogin(){
  let userName = document.getElementById('textusername').value
  clickClose()
  document.getElementById("useronline").innerHTML = `
<div class="btn-group">
  <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Hi! ${userName}
  </button>
  <ul class="dropdown-menu">
    <li><a onclick="logout()" bg-danger class="dropdown-item">Logout <i class="bi bi-emoji-smile-upside-down-fill"></i></a></li>
  </ul>
</div>`
printHomeData()
}
function logout(){
  window.location.reload();
  document.getElementById("useronline").innerHTML = ''
}
function clickClose() {
  document.getElementById("main").innerHTML = 
  `
  <div class="alert alert-danger" role="alert">
  <h2 class="alert-heading">Warning!</h2>
  <h4>only registered users can access the app!</h4>
  <h5>Please register or connect to the app</h5>
  <button type="button" class="btn btn-dark" onclick="warningButton()">Go Back!</button>
  </div>
  `
}
function warningButton(){
  document.getElementById(
    "main"
  ).innerHTML = `<div class="container d-flex justify-content-center"><img src="gif/disk1.gif"></div>`;
  setTimeout(()=>{
    clickLogain()
  },850)
}

function printHomeData() {
  document.getElementById('main').innerHTML = `<div id="gifload" class="container d-flex justify-content-center"><img src="gif/disk1.gif"></div>`
  setTimeout(()=>{
    document.getElementById("weather").style.display ="block"
  document.getElementById("menubtn").style.display ="block"
  document.getElementById(
    "main"
  ).innerHTML = `<div class="d-flex justify-content-center">
        <div class="d-flex justify-content-around fs-1 align-items-center w-75" id="playbanner">
          <div class="w-sm-25" style="width:10%">
            <img id="playingphoto" src="https://ssl.ulximg.com/image/330x330/cover/1632492854_97cff3b459422293a86e0f45f443192f.jpg/2e7c85b1cf493b890c4034fd6568e0ea/1632492854_e0c46a8292cb8a80e716793256c03aaa.jpg" class="img-fluid"/>
          </div>
            <div onclick="clickback()"><i class="bi bi-skip-start-btn-fill"></i></div>
            <div><i class="bi bi-play-btn-fill"></i></div>
            <div onclick="clicknext()"><i class="bi bi-skip-end-btn-fill"></i></div>
        </div>
      </div>
      <h2 id="homepagetitle" id="changetitle">Good Afternoon</h2>
      <div class="container">
        <div id="mainrow" class="row">
          <div class="col-4 d-flex justify-content-center" onclick="dataPopUp(0)">
            <div class="card mb-3 w-80">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://ssla.ulximg.com/image/547x547/cover/1658671626_7e9e55a31d0804f532eb31c0d95e0cfe.jpg/7640883164c58996ec045c5649292bb0/1658671626_164d866159f6dffb3e81be73e7b94f23.jpg"
                    class="img-fluid rounded-start"
                  />
                </div>
                <div class="col-md-8 d-flex justify-content-center align-items-center">
                  <h6 class="card-title text-center">As@#$#^ GFDVFDG@V#$V $!#$vian Dol</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center" onclick="dataPopUp(1)">
            <div class="card mb-3 w-80">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://ssla.ulximg.com/image/547x547/cover/1658467684_f356a4a403c581e49f6fbefcad1cd4c4.jpg/badedcb595164f1b9b5adc3a20766c43/1658467684_b857f34e9e8995b3d7ddd05a5666f2e7.jpg"
                    class="img-fluid rounded-start"
                  />
                </div>
                <div class="col-md-8 d-flex justify-content-center align-items-center">
                  <h6 class="card-title text-center">DaniLeigh</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center">
            <div class="card mb-3 w-80">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://ssld.ulximg.com/image/547x547/cover/1658464763_078c771cbf1e553492a53d8f941b6865.jpg/397f01b60fed5064452de5b8a3acdeca/1658464763_4af77886dfa1fdfa62fe679ca66abb0d.jpg"
                    class="img-fluid rounded-start"
                  />
                </div>
                <div class="col-md- d-flex justify-content-center align-items-center">
                  <h6 class="card-title text-center">Mozzy</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center" onclick="dataPopUp(3)">
            <div class="card mb-3 w-80">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://ssli.ulximg.com/image/547x547/cover/1658497028_9e6ddcb3fbcf163a57e1d9a2b00c3688.jpg/be5f6cc47bf333b3b6604badb31a8dbb/1658497028_f874c4b14fed4973fdf9c2a59c56049e.jpg"
                    class="img-fluid rounded-start"
                  />
                </div>
                <div class="col-md-8 d-flex justify-content-center align-items-center">
                  <h6 class="card-title text-center">Nardo Wick</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center" onclick="dataPopUp(4)">
            <div class="card mb-3 w-80">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://ssl.ulximg.com/image/547x547/cover/1658462978_cb5f02c39e0809e47eb7788ddf850eb5.jpg/5546c6d7ad5fe3216f8df7361d1d4010/1658462978_3a3f53b9f4bf2e9fb3efa119535a39a7.jpg"
                    class="img-fluid rounded-start"
                  />
                </div>
                <div class="col-md-8 d-flex justify-content-center justify-content-center align-items-center">
                  <h6 class="card-title d-flex text-center">Joey Bada$$</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center" onclick="dataPopUp(5)">
            <div class="card mb-3 w-80">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://ssle.ulximg.com/image/547x547/cover/1657254220_e493dd619cc503eed5f272663efeeb0b.jpg/c4a02fc46046e4559ebec6c788e8f2d7/1657254220_1f350e7a1378b8c5c5c1a7b22bf82c2e.jpg"
                    class="img-fluid rounded-start"
                  />
                </div>
                <div class="col-md-8 d-flex justify-content-center align-items-center">
                  <h6 class="card-title text-center jus">Chris Brown</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 id="homepagetitle">Yourtop mixtape</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-12 g-5" onclick="dataPopUp(6)">
            <div class="card w-80">
              <img src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/travis-scott-album-cover-2016_omwibv/travis-scott-album-cover-2016"
              class="card-img-top" alt="...">
              <div class="card-body">
                <h4 class="card-title">Hiphop Mix</h4>
                <h6 class="card-text">YG,Travis Scott,Young Thug and more...</h6>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 g-5" onclick="dataPopUp(7)">
            <div class="card w-80">
              <img src="https://media.pitchfork.com/photos/5fa6fce323b17a901fd1ec65/1:1/w_600/Wizkid.jpg"
              class="card-img-top" alt="...">              <div class="card-body">
                <h4 class="card-title">Afrobeat Mix</h4>
                <h6 class="card-text">Wiz kid,Ruger, Burna boy and more...</h6>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 g-5" onclick="dataPopUp(8)">
            <div class="card w-80">
              <img src="https://i.ebayimg.com/images/g/fTMAAOSwWJlfKYCh/s-l400.jpg"
              class="card-img-top" alt="...">              <div class="card-body">
                <h4 class="card-title">Rap Mix</h4>
                <h6 class="card-text">Eminem,2Pac,Big notorious and more...</h6>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 g-5" onclick="dataPopUp(9)">
            <div class="card w-80">
              <img src="https://i.scdn.co/image/ab67616d00001e02c3b8934ffe9065c45b9914ab"
              class="card-img-top" alt="...">              <div class="card-body">
                <h4 class="card-title">Dancehall Mix</h4>
                <h6 class="card-text">Popcaan,vybz kartel,spice and more...</h6>
              </div>
            </div>
          </div>
      </div>
      </div>
      <h2 id="homepagetitle">Albums</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-12 g-5" onclick="dataPopUp(10)">
            <div class="card w-80">
              <img src="https://upload.wikimedia.org/wikipedia/en/3/33/Chris_Brown_-_Breezy.png"
              class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Breezy</h5>
                <p class="card-text">2022 • Album</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 g-5" onclick="dataPopUp(11)">
            <div class="card w-80">
              <img src="https://upload.wikimedia.org/wikipedia/he/1/1f/Chris_Brown_-_Indigo.png"
              class="card-img-top" alt="...">              <div class="card-body">
                <h5 class="card-title">Indigo</h5>
                <p class="card-text">2019 • Album</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 g-5" onclick="dataPopUp(12)">
            <div class="card w-80">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Royalty_Chris_Brown.jpg"
              class="card-img-top" alt="...">              <div class="card-body">
                <h5 class="card-title">Royalty</h5>
                <p class="card-text">2015 • Album</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 g-5" onclick="dataPopUp(13)">
            <div class="card w-80">
              <img src="https://upload.wikimedia.org/wikipedia/en/c/ce/Chris_brown.jpg"
              class="card-img-top" alt="...">              <<<<div class="card-body">
                <h5 class="card-title">Chris Brown</h5>
                <p class="card-text">2005 • Album</p>
              </div>
            </div>
          </div>
      </div>
      `;
    },850)
}


// printRndDate();
// function changeTitle(){
//   let title = document.getElementById('changetitle').value
//   let newDate = Date()
//   let dateMin = newDate.getMinutes();
//   let dateHours = newDate.getHours();
//   if(dateHours>4){
//     title.innerHTML = "Good Morning"
//   }
//   else{
//     "Bye Bye"
//   }
//   console.log(newDate.getMinutes())
// }
// changeTitle()

let popUpArray = [
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/26kJC1nv4s6lOAjNiRILoT?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/78JORPgpM9FU2gMHtbthaq?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6URnbR6SZsQmhopg3x68ea?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/47Thm1tltjJVofuRumhfmi?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/261LWEVYViMXijB95mAty3?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/79WcTJuCulopfqul1awYJk?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5TZkls9cEOzWDR6qCxwDot?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7IfWkPjxjtGpHKzvbZd8YV?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/61XfJpLK4KVFFBsjkbzNlW?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1AKuDAKQOUSbQ8KKJkrlMi?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/31U6s6obQrBLTqyvqfqzlM?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1BfLzaTFI5qKsAAk0Ae6aV?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0VWmEVuQ8tA5iA3cCTrgxa?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/49gaz5rhWWgqCw61M9700v?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
]

function dataPopUp(id){
  document.getElementById("overlay").style.display="block";
  document.getElementById("overlay").innerHTML = `
  <div class="h-100 w-100 d-flex justify-content-center align-items-center">
  <div>
  ${popUpArray[id]}
  <button onclick="closePopUp()">Close</button>
</div>
  </div>
  `
}

function closePopUp(){
  document.getElementById("overlay").style.display="none"
}


let myImgArr = [
  "https://ssl.ulximg.com/image/330x330/cover/1632492854_97cff3b459422293a86e0f45f443192f.jpg/2e7c85b1cf493b890c4034fd6568e0ea/1632492854_e0c46a8292cb8a80e716793256c03aaa.jpg",
  "https://upload.wikimedia.org/wikipedia/en/a/a4/Royalty_Chris_Brown.jpg",
  "https://upload.wikimedia.org/wikipedia/en/c/ce/Chris_brown.jpg",
  "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/travis-scott-album-cover-2016_omwibv/travis-scott-album-cover-2016",
  "https://media.pitchfork.com/photos/5fa6fce323b17a901fd1ec65/1:1/w_600/Wizkid.jpg",
  "https://i.ebayimg.com/images/g/fTMAAOSwWJlfKYCh/s-l400.jpg",
  "https://i.scdn.co/image/ab67616d00001e02c3b8934ffe9065c45b9914ab",
  "https://upload.wikimedia.org/wikipedia/en/3/33/Chris_Brown_-_Breezy.png",
  "https://upload.wikimedia.org/wikipedia/he/1/1f/Chris_Brown_-_Indigo.png",
];
let counter2 = 0;
function clickback() {
  let getImg = document.getElementById("playingphoto");
  counter--;
  if (counter2 < 0) counter = myImgArr.length - 1;
  getImg.src = myImgArr[counter];
}

function clicknext() {
  let getImg = document.getElementById("playingphoto");
  counter++;
  if (counter > myImgArr.length) counter = 0;
  getImg.src = myImgArr[counter];
}
