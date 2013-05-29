$("document").ready(function(){
  $("#hide").click(function(){
      $(this).hide();
  });
  $("div#sortable").accordion({
    collapsible:true
  });
});


//learned about API calls... this examle =
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
    search();
}
function search() {
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: "minecraft"
    });
    request.execute(onSearchResponse);
}
function onSearchResponse(response) {
    showResponse(response);
}

//soundcloud API

<script src="//connect.soundcloud.com/sdk.js"></script>

  SC.initialize({
    client_id: 'af74921a176ba7c41d3e7b07f55b663c'
    redirect_uri: "https://soundcloud.com/connect?state=SoundCloud_Dialog_62975&client_id=609ae0b573913db156968e0ec38c1e26&redirect_uri=http%3A%2F%2Fdevelopers.soundcloud.com%2Fcallback.html&response_type=code_and_token&scope=non-expiring&display=popup"
  });
  SC.connect(function() {
    SC.get('/me', function(me) { 
      alert('Hello, ' + me.username); 
  });
  SC.get("/tracks/293",function(track){
      SC.oEmbed(track.permalink_url, document.getElementById('player'));
  });