/* Read api info */

window.addEventListener('load',() =>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            alert("The longitude is " + long + " and the latitude is " + lat +".")
        });

    } /* else{} Use later */
});
