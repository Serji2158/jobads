// import Geocode from "react-geocode";
// import s from '../styles/Jobcard.module.css'

// Geocode.setApiKey("AIzaSyDW2nEkofzTvFs2bAeU45B3fF4Mp0_YUmo"); 
// Geocode.setLocationType("ROOFTOP");
// Geocode.setLanguage("en");


// const LocationArea = ({ locationData }) => {
  
//   const latitude = `${locationData.lat}`;
//   const longitude = `${locationData.long}`

//   //  console.log(latitude);
//   //  console.log(longitude);

//   Geocode.fromLatLng("48.8583701", "2.2922926").then((response) => {
     
//     const address = response.results[0].formatted_address;
//     let city, country;
//     for (let i = 0; i < response.results[0].address_components.length; i++) {
//       for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
//         switch (response.results[0].address_components[i].types[j]) {
//           case "locality":
//             city = response.results[0].address_components[i].long_name;
//             break;
//           case "country":
//             country = response.results[0].address_components[i].long_name;
//             break;
//         }
//       }
//     }
//     console.log(city);  
//     console.log(country); 
//     },
//       (error) => {
//         console.error(error);
//       }
//     );
  
//     return (
//       <>
//       <p className={s.city}>{}</p>        
//       </>
//     )
//   }


// export default LocationArea;