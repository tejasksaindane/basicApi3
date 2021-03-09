const user = document.querySelector("#user");
const userBtn = document.querySelector("#userBtn");
const userImage = document.querySelector("#headImage");

const generateUser = () => {
  fetch("https://api.randomuser.me/")
    .then((res) => {
      //console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data.results[0]);
      userImage.setAttribute("src", data.results[0].picture.medium);
      mrs.innerHTML = data.results[0].name.title;
      firstName.innerHTML = data.results[0].name.first;
      lastName.innerHTML = data.results[0].name.last;

      //TODO img.innerHTML = data.results[0].picture.large

      //Address***************************************************************
      streetNo.innerHTML = data.results[0].location.street.number;
      streetName.innerHTML = data.results[0].location.street.name;
      city.innerHTML = data.results[0].location.city;
      state.innerHTML = data.results[0].location.state;
      country.innerHTML = data.results[0].location.country;
      postcode.innerHTML = data.results[0].location.postcode;
      //**********************************************************************

      //Email*****************************************************************
      email.innerHTML = data.results[0].email;
      phone.innerHTML = data.results[0].phone;
      gender.innerHTML = data.results[0].gender;
    })
    .catch((err) => {
      console.log(err);
    });
};

userBtn.addEventListener("click", generateUser);
generateUser();
