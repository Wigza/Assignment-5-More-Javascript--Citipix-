$(document).ready(start);

function start() {
  $("#submit-form").submit(handleForm);
}

function handleForm(event) {
  event.preventDefault();
  var userinput = $("#city-type").val();

    if(isNewYork(userinput)) {
      $('body').attr('class', 'nyc')
    } else if(isSanFran(userinput)){
      $('body').attr('class', 'sf')
    } else if(isLosAngles(userinput)){
      $('body').attr('class', 'la')
    } else if(isAustin(userinput)){
      $('body').attr('class', 'austin')
    } else if(isSydney(userinput)){
      $('body').attr('class', 'sydney')
    }
    else {
      alert("Sorry it seems the city youre searching for isnt in our database.");
    }
}

function isSydney(name) {
  var result = (name == 'Sydney' || name =='SYD');
  return result;
}

function isAustin(name) {
  var result = (name == 'Austin' || name =='ATX');
  return result;
}

function isLosAngles(name) {
  var result = (name == 'LA' || name =='Los Angeles' || name == 'LAX');
  return result;
}

function isSanFran(name) {
  var result = (name == 'San Francisco' || name =='SF' || name == 'Bay Area');
  return result;
}

function isNewYork(name) {
  var result = (name == 'NYC' || name =='New York' || name == 'New York City');
  return result;
}


function overrideLinks(event) {
  console.log(event)
  event.preventDefault()
}
