function overImage(value) {
  let temp = document.getElementById(value);
  if (value == "news") {
    document.getElementById("news").src = "images/news2.gif";
    document.getElementById("result").src = "images/cnnlogo.gif";
  } else if (value == "weather") {
    document.getElementById("weather").src = "images/weather2.gif";
    document.getElementById("result").src = "images/weathernetwork.gif";
  } else if (value == "sports") {
    document.getElementById("sports").src = "images/sports2.gif";
    document.getElementById("result").src = "images/shaq.gif";
  }
}

function outImage(value) {
  let temp = document.getElementById(value);
  if (value == "news") {
    document.getElementById("news").src = "images/news1.gif";
    document.getElementById("result").src = "images/bg.gif";
  } else if (value == "weather") {
    document.getElementById("weather").src = "images/weather1.gif";
    document.getElementById("result").src = "images/bg.gif";
  } else if (value == "sports") {
    document.getElementById("sports").src = "images/sports1.gif";
    document.getElementById("result").src = "images/bg.gif";
  }
}
