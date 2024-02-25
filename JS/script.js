let cities = ["اربد","عمان","العقبه","عجلون","البلقاء","الكرك","المفرق","الطفيلة","الزرقاء","جرش","معان","مادبا"]
cities.forEach((city)=> {
    let option = `<option>${city}</option>`;
    document.getElementById('cities-select').innerHTML += option;
})
let  selectedCity = document.getElementById('cities-select');
selectedCity.addEventListener( 'change',()=> {
    if( selectedCity.value === "اربد"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Irbid");
    }
    if( selectedCity.value === "عمان"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Amman")
    }
    if( selectedCity.value === "العقبه"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Aqaba");
    }
    if( selectedCity.value === "عجلون"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Ajloun");
    }
    if( selectedCity.value === "البلقاء"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Balqa");
    }
    if( selectedCity.value === "الكرك"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Karak");
    }
    if( selectedCity.value === "المفرق"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Mafraq");
    }
    if( selectedCity.value === "الطفيلة"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Tafilah");
    }
    if( selectedCity.value === "الزرقاء"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Zarqa");
    }
    if( selectedCity.value === "جرش"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Jerash");
    }
    if( selectedCity.value === "معان"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Ma'an");
    }
    if( selectedCity.value === "مادبا"){
      document.getElementById('city-name').innerHTML = selectedCity.value;
      getParametar("Madaba");
    }
})

function getParametar(city) {
      let param = {
          country: "JO",
          city: city
          // city:"Aqaba"
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: param
      })
      .then(function (response) {
        let timings = response.data.data.timings;
        showTime("time-fajr",timings.Fajr) 
        showTime("time-sunrise",timings.Sunrise) 
        showTime("time-dhuhr",timings.Dhuhr) 
        showTime("time-asr",timings.Asr) 
        showTime("time-maghrib",timings.Maghrib) 
        showTime("time-isha",timings.Isha) 

        let date = response.data.data.date.readable;
        let day = response.data.data.date.hijri.weekday.ar;

        document.getElementById("date-day").innerHTML = date + " " + day;
        // console.log(day);
      })
      .catch(function (error) {
          console.log(error);
  });
}

getParametar("Irbid")


  function  showTime(id,time) {
    document.getElementById(id).innerHTML = time;
  }