function initMap() {
    let div = document.createElement('div');
    let home = {lat: 53.914340, lng: 27.580053};
    let SportingClub = {lat: 53.955089, lng: 27.711385};
    let svoiRestaurant = {lat: 53.9007336, lng: 27.5599498};
    let tennisCourts = {lat: 53.8991864, lng: 27.5966316};
    let mcDonalds = {lat: 53.9300917, lng: 27.5775296};
    let galleria = {lat: 53.908603, lng: 27.548782};
    let placeInfo = document.getElementById('marker-info');
    let firstPhoto = document.createElement('img');
    let secondPhoto = document.createElement('img');
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: home});

    let homeMarker = new google.maps.Marker({
        position: home,
        map: map,
        title: 'i am here',
        animation: google.maps.Animation.DROP});

    let sportingMarker = new google.maps.Marker({
        position: SportingClub,
        map: map});

    let svoiMarker = new google.maps.Marker({
        position:svoiRestaurant,
        map: map});

    let courtsMarker = new google.maps.Marker({
        position: tennisCourts,
        map: map});

    let mcMarker = new google.maps.Marker({
        position: mcDonalds,
        map: map});

    let galleriaMarker = new google.maps.Marker({
        position: galleria,
        map: map});
    // Home content

    let  homeContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Home</h1>'+
        '<div id="bodyContent">'+
        '<h3>Krasnaya 22</h3>'+
        '<p>This is where i live.</p>'+
        '<img class="content-picture" src="./images/home/home_picture.jpg">'+
        '</div>'+
        '</div>';

    let homeInfoWindow = new google.maps.InfoWindow({
        content: homeContentString
    });

    homeMarker.addListener('click', function() {
        homeInfoWindow.open(map, homeMarker);
        // let firstPicture = './images/home/home_picture.jpg';
        // let secondPicture = './images/home/dog.jpg';
        // placePhotos(firstPicture,secondPicture);
    });
    // Sporting club content

    let  SportingContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Home</h1>'+
        '<div id="bodyContent">'+
        '<h3>Independence Avenue 193 </h3>'+
        '<p>This is where i eat and play tennis.</p>'+
        '<img class="content-picture" src="./images/sporting/sporting1.jpg">'+
        '</div>'+
        '</div>';


    let sportingInfoWindow = new google.maps.InfoWindow({
        content: SportingContentString
    });

    sportingMarker.addListener('click', function() {
        sportingInfoWindow.open(map, sportingMarker);
    });
    // Svoi restaurant content

    let  svoiContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Home</h1>'+
        '<div id="bodyContent">'+
        '<h3>Independence Avenue 22</h3>'+
        '<p>This is where i eat.</p>'+
        '<img class="content-picture" src="./images/svoi/svoi1.jpg">'+
        '</div>'+
        '</div>';

    let svoiInfoWindow = new google.maps.InfoWindow({
        content: svoiContentString
    });

    svoiMarker.addListener('click', function() {
        svoiInfoWindow.open(map, svoiMarker);
    });
    // Tennis courts content

    let  courtsContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Home</h1>'+
        '<div id="bodyContent">'+
        '<h3>Kozlov Lane 15</h3>'+
        '<p>This is where i play tennis.</p>'+
        '<img class="content-picture" src="./images/courts/courts.jpg">'+
        '</div>'+
        '</div>';

    let courtsInfoWindow = new google.maps.InfoWindow({
        content: courtsContentString
    });

    courtsMarker.addListener('click', function() {
        courtsInfoWindow.open(map, courtsMarker);
    });
    // McDonalds content

    let  mcContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Home</h1>'+
        '<div id="bodyContent">'+
        '<h3>Surganova Street 63</h3>'+
        '<p>This is where i eat and meet with friends.</p>'+
        '<img class="content-picture" src="./images/mc/mc1.jpg">'+
        '</div>'+
        '</div>';

    let mcInfoWindow = new google.maps.InfoWindow({
        content: mcContentString
    });

    mcMarker.addListener('click', function() {
        mcInfoWindow.open(map, mcMarker);
    });
    // Galleria content

    let  galleriaContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Home</h1>'+
        '<div id="bodyContent">'+
        '<h3> Winners Avenue 9</h3>'+
        '<p>This is where i eat.</p>'+
        '<img class="content-picture" src="./images/galleria/galleria1.jpeg">'+
        '</div>'+
        '</div>';

    let galleriaInfoWindow = new google.maps.InfoWindow({
        content: galleriaContentString
    });

    galleriaMarker.addListener('click', function() {
        galleriaInfoWindow.open(map, galleriaMarker);
    });
}

function placePhotos(src1,src2) {
    let placeInfo = document.getElementById('marker-info');
    let firstPhoto = document.createElement('img');
    let secondPhoto = document.createElement('img');
    firstPhoto.className = 'photo-content';
    secondPhoto.className = 'photo-content';
    firstPhoto.src = src1;
    secondPhoto.src = src2;
    placeInfo.appendChild(firstPhoto);
    placeInfo.appendChild(secondPhoto);

}

function placeInfoInput(name,description) {
    let infoWindow = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Home</h1>'+
        '<div id="bodyContent">'+
        '<p>This is where i live.</p>'+
        '<img id="image" src="./images/home/home_picture.jpg">'+
        '</div>'+
        '</div>';
}
