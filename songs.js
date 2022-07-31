const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "aa4ca6e717mshf1e28b9f8d8f50fp11352ejsn15d92e871308",
    "X-RapidAPI-Host": "spotify-tracks.p.rapidapi.com",
  },
  body: '{"tracks":{"Green day":"Basket Case","Three days grace ":"Animal i have become","Judas priest":"breaking the law","The killers":"Mr brightside","Pantera":"Cemetery Gates","Depeche mode":"Personal Jesus","Iron Maiden":"The Trooper","Slipknot":"Psychosocial","Marilyn Manson":"Sweet Dreams","ZZ Top":"La Grange","Linkin Park":"In The End","Scorpions":"No One Like You"},"n":20}',
};
const BasicApi = "https://spotify-tracks.p.rapidapi.com/";
async function getDataApi() {
  return await fetch(BasicApi, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

let musicAlbumCover = [
  "/Img/songscover/0.jpg",
  "/Img/songscover/1.jfif",
  "/Img/songscover/2.jpg",
  "/Img/songscover/3.jfif",
  "/Img/songscover/4.jpg",
  "/Img/songscover/5.jpg",
  "/Img/songscover/6.jpg",
  "/Img/songscover/7.jpg",
  "/Img/songscover/8.jfif",
  "/Img/songscover/9.jpg",
  "/Img/songscover/10.jfif",
  "/Img/songscover/11.jpg",
  "/Img/songscover/12.jpg",
  "/Img/songscover/13.jpg",
  "/Img/songscover/14.jpg",
  "/Img/songscover/15.jpg",
  "/Img/songscover/16.jpg",
  "/Img/songscover/17.jpg",
  "/Img/songscover/18.jpg",
  "/Img/songscover/19.jpg",
];
let playlistarr = [
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6UhLHlFHzSMWwo50SpUbaL?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4rdE7Rtddm0BXwj6RBFSxL?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1rfIwutDvxeABnFh2BaOQF?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3Q8etdkCj96NSKsFT8F3O8?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4OjKHySJHstsImlUW3qfml?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
];
let counter = 0;
let newcounter =0;
function printData() {
  document.getElementById(
    "main"
  ).innerHTML = `<h1 id="homepagetitle">Music List</h1> <div id="gifload" class="container d-flex justify-content-center"><img src="gif/disk1.gif"></div>`;
  setTimeout(() => {
    getDataApi().then((res) => {
      res.forEach((item) => {
        document.getElementById(
          "main"
        ).innerHTML += `<div class="card mb-3 w-100">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${
            musicAlbumCover[counter++]
          }" class="img-fluid rounded-start w-25">
        </div>
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title">${item[1]}</h5>
            <p class="card-text">${item[0]}</p>
            <p class="card-text"></small>${playlistarr[newcounter++]}</p>
          </div>
        </div>
      </div>
    </div>`;
      });
    });
    document.getElementById("gifload").remove();
  }, 850);
}
