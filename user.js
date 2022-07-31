  const options2 = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'aa4ca6e717mshf1e28b9f8d8f50fp11352ejsn15d92e871308',
          'X-RapidAPI-Host': 'genius.p.rapidapi.com'
      }
  };
  async function getDataApi2(){
  return await fetch('https://genius.p.rapidapi.com/artists/16775/songs', options2)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
   getDataApi2()


// function printToScreenData(){
//     getDataApi2().then((res)=>{
//         for (let key in res) {
//             console.log(`${key} : ${res[key]}`)
//                 }
//     })
// }

// const albumArr = await getDataApi(BasicApi).then((response) => response);
// // let div = document.getElementById("div_id");
// albumArr.forEach((item) => {
//   mainrow.innerHTML +=
//   `
//   <div class="col-4 d-flex justify-content-center">
//         <div class="card mb-3 w-80">
//           <div class="row ">
//             <div class="col-md-4">
//               <img
//                 src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/qesxqaglbzlkizk3w6vf/top-youngboy"
//                 class="img-fluid rounded-start"
//               />
//             </div>
//             <div class="col-md-8 d-flex align-items-center">
//               <h6 class="card-title text-center">${item[0]}</h6>
//             </div>
//           </div>
//         </div>
//       </div>

//   `
//   });
// }
// printData();