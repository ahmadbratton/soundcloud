/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
const player = document.querySelector(".player");
const track = document.getElementById("track");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const sForm = document.querySelector(".search-form");
let results = document.querySelector(".results");
const songs = document.querySelector(".songs");
let click = document.getElementById("this_one");
const search_bar = document.getElementById("box");
let music_player = document.querySelector(".music-player");
let grab_div = document.querySelectorAll("div");
let users;
let info;
let music;
let artist;
let id;
let relevent;
var fetchReq = {
  method: 'GET',
  mode: 'no-cors',
  cache: 'default'
};

let uri;
let stream_url;
let stream;
let class_name;


click.addEventListener("click", function choice(event) {
  fetch("https://api.soundcloud.com/users?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=" + search_bar.value)
    .then(function (response) {
      // console.log(response);

      response.json().then(function (data) {
        console.log(data);
        users = data;
        get_tracks(users);
        // song_display(music);

      })

    })




});

function get_tracks(object) {
  relevent = object[0];
  id = relevent.id;
  uri = relevent.uri;

  fetch(uri + "/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f")

    .then(function (response) {

      response.json().then(function (data) {
        console.log(uri);
        console.log("Data:", data);
        music = data;
        console.log("music", music);
        song_display(music);

      })
    });

}

// function get_song(stream) {
//    fetch(stream.stream_url+"?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f")
//       .then(function (response) {
//          music_player.src = response.url;

//         });

//       }




function song_display(info) {
  for (var i = 0; i < info.length; i++) {
    let div = document.createElement("div");
    id_name = div.setAttribute("id", "chose_song");
    let image = document.createElement("img");
    let p_tag = document.createElement("p");
    stream = info[i].stream_url;
    div.id = stream;
    image.id = stream;
    p_tag.id = stream;
    console.log(div.id)
    p_tag.textContent = info[i].title;
    image.src = info[i].artwork_url;
    div.appendChild(image);
    div.appendChild(p_tag);
    results.appendChild(div);
    music_player.src = stream + "?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f";
    console.log(div);
  }
  // play_music(info);
}

for (var i = 0; i < grab_div.length; i++) {
  grab_div[i].addEventListener("click", function play_music(event) {
    music_player.src = event.target.id + "?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f";
    console.log(event.target.id);

  })

}

// function play_music(event) {
//   music_player.src =  stream + "?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f";
//   console.log(stream);
// }