$(document).ready(function() {

    // sample API response of online streamers
    var sampleResponse = [{
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    }, {
      "mature": false,
      "status": "Kespa Cup EU Seed Qualifier",
      "broadcaster_language": "fr",
      "display_name": "OgamingSC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 71852806,
      "name": "ogamingsc2",
      "created_at": "2014-09-24T15:06:58Z",
      "updated_at": "2016-09-17T06:02:59Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-channel_offline_image-1570cf4930177aa3-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_banner-d418aed2c0ef7d35-480.jpeg",
      "profile_banner_background_color": null,
      "partner": true,
      "url": "https://www.twitch.tv/ogamingsc2",
      "views": 20070855,
      "followers": 39837,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/ogamingsc2",
        "follows": "https://api.twitch.tv/kraken/channels/ogamingsc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/ogamingsc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/ogamingsc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/ogamingsc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/ogamingsc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/ogamingsc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/ogamingsc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/ogamingsc2/videos"
      }
    }, {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    }, {
      "mature": false,
      "status": "Building a new hackintosh for #programming and gaming and having a few beers! Lets do this! #pcbuilding ",
      "broadcaster_language": "en",
      "display_name": "noobs2ninjas",
      "game": "Creative",
      "language": "en",
      "_id": 82534701,
      "name": "noobs2ninjas",
      "created_at": "2015-02-13T08:13:10Z",
      "updated_at": "2016-09-16T18:00:54Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-channel_offline_image-7f974925e9dc942c-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_banner-0a065656911e6d4d-480.jpeg",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/noobs2ninjas",
      "views": 47990,
      "followers": 832,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/noobs2ninjas",
        "follows": "https://api.twitch.tv/kraken/channels/noobs2ninjas/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/noobs2ninjas/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/noobs2ninjas/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/noobs2ninjas",
        "subscriptions": "https://api.twitch.tv/kraken/channels/noobs2ninjas/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/noobs2ninjas/editors",
        "teams": "https://api.twitch.tv/kraken/channels/noobs2ninjas/teams",
        "videos": "https://api.twitch.tv/kraken/channels/noobs2ninjas/videos"
      }
    }]
  
    // initialize streamers array - array of all streamer objects
    var streamers = [];
    //sample array of all twitch streamers
    var allTwitchStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    //get array of online streamers
    var onlineStreamers = getOnlineStreamers(sampleResponse);
    // get array of offline streamers by finding diff array between all streamers and online streamers
    var offlineStreamers = arr_diff(allTwitchStreamers, onlineStreamers);
    // build array of streamer objects
    buildStreamersArray();
    // add all streamers to appropriate divs
    addStreamers(streamers);
  
    function buildStreamersArray() {
      for (var i = 0; i < sampleResponse.length; i++) {
        var streamerObj = new Streamer(sampleResponse[i]);
        streamers.push(streamerObj);
      }
      for (var i = 0; i < offlineStreamers.length; i++) {
        var streamerObj = new Streamer({
          "display_name": offlineStreamers[i]
        });
        streamers.push(streamerObj);
      }
    }
  
    function addStreamers(streamersArray) {
      for (var i = 0; i < streamersArray.length; i++) {
        streamersArray[i].addToDiv("#" + streamersArray[i].class + "Users");
        streamersArray[i].addToDiv("#allUsers");
      }
    }
  
    // streamer object function
    function Streamer(streamerObj) {
      this.name = streamerObj.display_name;
      this.status = streamerObj.status || "Currently offline.";
      this.logo = streamerObj.logo || "https://unhostedcse.github.io/images/offline.jpg";
      this.url = streamerObj.url || "https://www.twitch.tv/" + this.name;
      this.class = streamerObj.hasOwnProperty("status") ? "online" : "offline";
      var self = this;
  
      this.addToDiv = function(divId) {
        var divContent = "<div class='streamerBlock " + this.class + "'><a href='" + this.url + " 'target='_blank'><img src='" + this.logo + "'></img><h1>    " + this.name + "</h1></a><h2>" + this.status + "</h2></div>";
        $(divId).append(divContent);
      }
    }
  
    function getOnlineStreamers(streamerObject) {
      var onlineStreamers = []
      for (var i = 0; i < streamerObject.length; i++) {
        onlineStreamers.push(streamerObject[i].display_name);
      }
      return onlineStreamers;
    }
  
    // get the difference between two arrays
    function arr_diff(a1, a2) {
  
      var a = [],
        diff = [];
  
      for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
      }
  
      for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
          delete a[a2[i]];
        } else {
          a[a2[i]] = true;
        }
      }
  
      for (var k in a) {
        diff.push(k);
      }
  
      return diff;
    };
  
    // event handlers
  
    $("#buttons").on("click", ".btn", function() {
      $("#searchResults").addClass("hidden");
      $(getActiveDiv()).addClass('hidden');
      $(".active").removeClass("active");
      var id = "#" + this.id + "Users";
      $(id).removeClass('hidden')
      $(this).addClass("active");
    });
  
    $("#searchBar").on("keyup", ".search", function() {
      if ($(".search").val()) {
        var matches = getMatches($(".search").val());
        displayHits(matches);
        
      }
      
      if (!$(".search").val()) {
        $("#searchResults").addClass("hidden");
        $(getActiveDiv()).removeClass("hidden");
        
      }
    });
    
    function getMatches(input) {
      var matchingArray = [];
      for (var i = 0; i < streamers.length; i++) {
        if (streamers[i].name.toLowerCase().startsWith(input.toLowerCase())) {
        matchingArray.push(streamers[i]);
        }
      }
      return matchingArray;
    }
    
    function displayHits(matches) {
      $("#searchResults").empty();
      $(getActiveDiv()).addClass("hidden");
      
      if (matches.length > 0) {
        for (var i = 0; i < matches.length; i++) {
          matches[i].addToDiv("#searchResults");
        }
      }
      else {
        $("#searchResults").append("<p class='streamerBlock text-center'>No results to display.</p>");
      }
      $("#searchResults").removeClass("hidden");
    }
  });
  
  function getActiveDiv() {
    return ("#" + $(".active").attr("id") + "Users");
  }