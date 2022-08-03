const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "aa4ca6e717mshf1e28b9f8d8f50fp11352ejsn15d92e871308",
    "X-RapidAPI-Host": "genius.p.rapidapi.com",
  },
};
async function getDataApi2() {
  return await fetch(
    "https://genius.p.rapidapi.com/artists/16775/songs",
    options2
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
getDataApi2();

function printLyricsData() {
  document.getElementById(
    "main"
  ).innerHTML = `<h1 id="homepagetitle">Music Lyrics</h1> <div id="gifload" class="container d-flex justify-content-center"><img src="gif/disk1.gif"></div>`;
  document.getElementById('main').innerHTML = `<h1 id="homepagetitle">Music Lyrics</h1><div class="container"><div id="main_row" class="row justify-content-center"></div></div>`
  setTimeout(() => {
    getDataApi2().then((res) => {
      res.response.songs.forEach((item) => {
        document.getElementById("main_row").innerHTML += `
          <div class="d-flex flex-wrap col-md-3 col-sm-12 g-2">
            <div class="card">
            <img src=${item.header_image_thumbnail_url}>
              <div class="card-body">
              <h3>Singer:${item.artist_names}</h3>
                <h5 class="card-title">Song:${item.full_title}</h5>
                <br>
                <h5>Click here if you want to see the</h5>
                <h4><a href=${item.relationships_index_url} target="blank">Lyrics</a></h4>
              </div>
            </div>
      `;
      });
    });
    document.getElementById("gifload").remove();
  }, 850);
}
