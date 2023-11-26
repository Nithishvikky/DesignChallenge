// json-two.html?f=000000&b=ffffff
export function checkColors(foregroundColor, backgroundColor) {
  var foregroundHex;
  var backgroundHex;
  var colorData;

  if (foregroundColor && backgroundColor) {
    foregroundHex = foregroundColor;
    backgroundHex = backgroundColor;
  }

  // Hex to RGB
  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Get RGBA
  var foregroundR = hexToRgb(foregroundHex).r
  var foregroundG = hexToRgb(foregroundHex).g
  var foregroundB = hexToRgb(foregroundHex).b
  var foregroundColorRgba = ["" + foregroundR + "","" + foregroundG + "","" + foregroundB + "","0"]

  var backgroundR = hexToRgb(backgroundHex).r
  var backgroundG = hexToRgb(backgroundHex).g
  var backgroundB = hexToRgb(backgroundHex).b
  var backgroundColorRgba = ["" + backgroundR + "","" + backgroundG + "","" + backgroundB + "","1"]

  // console.log(foregroundColorRgba);
  //
  // console.log(backgroundR);
  // console.log(backgroundG);
  // console.log(backgroundB);
  // console.log(backgroundColorRgba);

  function luma(rgbaColor) {
    for (var i = 0; i < 3; i++) {
      var rgb = rgbaColor[i];
      rgb /= 255;
      rgb = rgb < .03928 ? rgb / 12.92 : Math.pow((rgb + .055) / 1.055, 2.4);
      rgbaColor[i] = rgb;
    }
    return .2126 * rgbaColor[0] + .7152 * rgbaColor[1] + 0.0722 * rgbaColor[2];
  }

  var foregroundLuma = luma(foregroundColorRgba);
  var backgroundLuma = luma(backgroundColorRgba);

  // console.log(foregroundLuma);
  // console.log(backgroundLuma);

  function checkContrast() {
    foregroundLuma = foregroundLuma + 0.05
    backgroundLuma = backgroundLuma + 0.05

    if (backgroundLuma < foregroundLuma) {
      return foregroundLuma / backgroundLuma;
    } else {
      return backgroundLuma / foregroundLuma;
    }
  }

  var ratio = checkContrast();
  var ratioRounded = ratio.toPrecision(3);

  function checkRating(value) {
    if (ratioRounded > value) {
      return true;
    } else {
      return false;
    }
  }

  var aaHeadline = checkRating(3);
  var aaaHeadline = checkRating(4.5);
  var aaText = checkRating(4.5);
  var aaaText = checkRating(7);
  var aaComponent = checkRating(3);
  var text;
  var headline;
  var component;
  if(aaComponent){
    component="AA";
  }
  else{
    component="Fail";
  }
  if(aaText || aaaText){
    if(aaText){
       text="AA";
    }
    if(aaaText){
       text="AAA";
    }
   }
   else{
   text="Fail";
   }
  if(aaHeadline || aaaHeadline){
    if(aaHeadline){
       headline="AA";
    }
    if(aaaHeadline){
       headline="AAA";
    }
   }
   else{
   headline="Fail";
   }
  var smalltextValue;
  var largetextValue;
  if(text=="AA"){
        smalltextValue = Math.round((ratioRounded/4.5)*100);
        largetextValue = Math.round((ratioRounded/3)*100);
  }
  else if(text=="AAA"){
      smalltextValue = Math.round((ratioRounded/7)*100);
      largetextValue = Math.round((ratioRounded/4.5)*100);
  }
  else{
    smalltextValue=0;
    largetextValue=0;
  }


  console.log("Foreground: " + foregroundHex)
  console.log("Background: " + backgroundHex)
  console.log("Contrast: " + ratio);
  console.log("Rounded Contrast: " + ratioRounded);
  console.log("AA Headline: " + aaHeadline);
  console.log("AAA Headline: " + aaaHeadline);
  console.log("AA Text: " + aaText);
  console.log("AAA Text: " + aaaText);
  console.log("AA Component: " + aaComponent);
  console.log("Foreground Luma: " + foregroundLuma);
  console.log("Background Luma: " + backgroundLuma);

   return colorData = { 
    "foregroundHex":foregroundHex,
    "backgroundHex":backgroundHex,
    "foregroundRgb":foregroundR + ", " + foregroundG + ", " + foregroundB,
    "backgroundRgb":backgroundR + ", " + backgroundG + ", " + backgroundB,
    "contrast":ratioRounded,
    "text":text,
    "headline":headline,
    "component":component,
    "smallText":smalltextValue,
    "largeText":largetextValue,
    "foregroundLuma":foregroundLuma,
    "backgroundLuma":backgroundLuma
  }
};
