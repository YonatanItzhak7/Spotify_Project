const USERS_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users";
async function getUsers() {
  try {
    return await fetch(USERS_API).then((res) => res.json());
  } catch (error) {
    console.log("error");
  } finally {
  }
}

function printReviewData() {
  let counter = 0;
  document.getElementById(
    "main"
  ).innerHTML = `<h1 id="homepagetitle">App Review</h1><br>
  <div class="container"><div id="main_row" class="row row-cols-md-2 row-cols-sm-1 justify-content-center"></div></div>
  <div id="gifload" class="container d-flex justify-content-center"><img src="gif/disk1.gif"></div>`;

  setTimeout(() => {
    getUsers().then((result) => {
      console.log(result);
      result.forEach((item) => {
        document.getElementById("main_row").innerHTML += `
        <div class="card col-md-6 col-sm-12">
           <div class="card-header">
          <img src="https://randomuser.me/api/portraits/med/men/${counter++}.jpg">
          <h6>${item.name.first} ${item.name.last}</h6>
           <div id="star_id"></div>
       </div>
     <div class="card-body">
         <blockquote class="blockquote mb-0">
        <p>Very good app, I use it every day.</p>
        <footer class="blockquote-footer">${item.name.first} ${item.name.last}</footer>
        </blockquote>
     </div>
  </div>
        `;
      });
    });
    document.getElementById("gifload").remove();
  }, 850);
}
