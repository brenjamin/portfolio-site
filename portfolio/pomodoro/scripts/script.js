function Timer() {
    this.sessionActive = true;
    this.breakActive = false;
    this.session = 25;
    this.break = 5;
    this.time = 25;
    this.sessionSeconds = 1500;
    this.breakSeconds = 300;
    this.running = false;
    this.ended = false;
    
    
    
  //   var sessionInt = setInterval(function() {sessionCountdown() }, 1000);
    
  //   var breakInt = setInterval(function() {
  //     breakCountdown()}, 1000);
  
    this.updateDisplay = function(id) {
      var element = "#" + id;
  
      if (id === "break") {
        $(element).html(this.break);
      } else if (id === "session") {
        $(element).html(this.session);
      } else {
        $(element).html(this.time);
      }
    };
  
    this.decrease = function(value) {
      if (value === "session") {
        this.session -= 1;
        this.time -= 1;
        this.sessionSeconds = this.session * 60;
      } else if (value === "break") {
        this.break -= 1;
        this.breakSeconds = this.break * 60;
      }
    };
  
    this.increase = function(value) {
      if (value === "session") {
        this.session += 1;
        this.time += 1;
        this.sessionSeconds = this.session * 60;
      } else if (value === "break") {
        this.break += 1;
        this.breakSeconds = this.break * 60;
      }
    };
  
    this.convertTime = function(time) {
      var hours = Math.floor(time / 60 / 60);
      var minutes = Math.floor(time / 60) - hours * 60;
      var seconds = time - minutes * 60 - hours * 3600;
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (hours) {
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        return hours + ":" + minutes + ":" + seconds;
      } else {
        return minutes + ":" + seconds;
      }
    };
  
    this.sessionCountdown = function() {
      
      var total = this.session * 60;
      var property = this.getLinearGradient(total);
      
      $("#circle").css("background-image", property);
      var countdown = this.convertTime(this.sessionSeconds);
      $("#time").html(countdown);
      this.sessionSeconds -= 1;
      
      if (this.sessionSeconds < 0) {
        this.playBell();
        this.startBreak();
      }
      
      
      
    }
    
    this.breakCountdown = function() {
      var countdown = this.convertTime(this.breakSeconds);
      var total = this.break*60;
      $("#time").html(countdown);
      var property = this.getLinearGradient(total);
      $("#circle").css("background-image", property);
      this.breakSeconds -= 1;
      
      if (this.breakSeconds < 0) {
        this.end();
      }
    }
    
    this.startBreak = function() {
      var self = this;
      clearInterval(sessionInt);
      this.running = true;
      this.breakActive = true;
      this.sessionActive = false;
      $("#type").html("Break");
      $("#circle").css("background-color", "#B8D372");
    
    breakInt = setInterval(function() {
      self.breakCountdown();
      
    }, 1000);
    }
    
    this.startSession = function() {
      $("#resetButton").fadeOut();
      this.sessionActive = true;
      this.running = true;
      var self = this;
      sessionInt = setInterval(function() {
        self.sessionCountdown();
      }, 1000);
    }
    
    this.pause = function() {
      this.clearIntervals();
      this.running = false;
      $("#resetButton").fadeIn();
    }
    
    this.reset = function() {
      this.clearIntervals();
      this.sessionActive = true;
      this.breakActive = false;
      this.session = 25;
      this.break = 5;
      this.time = 25;
      this.sessionSeconds = 1500;
      this.breakSeconds = 300;
      this.running = false;
      $("#type").html("Session");
      $("#time").removeClass("blinky");
      this.updateDisplay("break");
      this.updateDisplay("time");
      this.updateDisplay("session");
      this.ended = false;
      $("#circle").css("background-color", "#FF6347");
      $("#circle").css("background-image", "none");
    }
    
    this.end = function() {
      this.clearIntervals();
      $("#type").html("Time's Up!");
      $("#resetButton").fadeIn();
      $("#time").addClass("blinky");
      this.ended = true;
      this.playBell();
      
    }
    
    this.clearIntervals = function() {
      if (this.sessionActive) {
        clearInterval(sessionInt);
      }
      
      else if (this.breakActive) {
        clearInterval(breakInt);
        
      }
    }
    
    this.getLinearGradient = function(total) {
      
      
      
      if (this.sessionActive) {
        var percent = (this.sessionSeconds/total).toFixed(4);
        var color1 = "#FF6347";
        var color2 = "#B8D372"
      }
      else {
        
        var percent = (this.breakSeconds/total).toFixed(4);
        var color1 = "#B8D372";
        var color2 = "#FF6347"
      }
      
      if (percent >= 0.5) {
        var deg = (360 * percent) - 90;
        
        
        return "linear-gradient(" + deg + "deg, transparent 50%," + color1 + " 50%), linear-gradient(90deg, " + color2 +" 50%, transparent 50%)";
        
        
        
      }
      
      else {
        var deg = 90 + (360 * percent);
        
        return "linear-gradient(" + deg + "deg, transparent 50%," + color2 + " 50%), linear-gradient(90deg, " + color2 +" 50%, transparent 50%)";
      }
      
      
    }
    
    this.playBell = function(){
      $("#bell").get(0).play();
    }
  }
  
  $("#decrease-break").on("click", function() {
    if (!timer.running && timer.break > 1) {
      timer.decrease("break");
      timer.updateDisplay("break");
    }
  });
  
  $("#increase-break").on("click", function() {
    if (!timer.running) {
      timer.increase("break");
      timer.updateDisplay("break");
    }
  });
  
  $("#decrease-session").on("click", function() {
    if (!timer.running && timer.session > 1 && timer.sessionActive) {
      timer.decrease("session");
      timer.updateDisplay("session");
      timer.updateDisplay("time");
    }
  });
  
  $("#increase-session").on("click", function() {
    if (!timer.running && timer.sessionActive) {
      timer.increase("session");
      timer.updateDisplay("session");
      timer.updateDisplay("time");
    }
  });
  
  $("#circle").on("click", function() {
    if (timer.sessionActive && !timer.running) {
      timer.startSession();
    }
    
    else if (timer.breakActive && !timer.running) {
      timer.startBreak();
    }
    
    else {
      
      if (!timer.ended) {
        timer.pause();
      }
    }
  });
  
  $("#resetButton").on("click", function() {
    timer.reset();
  });
  
  var timer = new Timer();
  
  //#2D93AD
  