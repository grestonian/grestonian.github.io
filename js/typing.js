// values to keep track of the number of letters typed, 
// which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Type-writer text content
var textArray = [
  "Computer Science Undergraduate",
  "Web-developer",
  "Software Engineer",
  "Finance Enthusiast",
  "Financial Analyst"
]

// Speed (in milliseconds) of typing.
var speedForward = 100,       //Typing Speed
    speedWait = 1000,         // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 25;      //Backspace Speed

//Run the loop
typeWriter("typewriter", textArray);

function typeWriter(id, ar) {
  var aString = ar[a],
      element = $("#" + id)
      eHeader = element.children("h5");//Header element
      // Determine if animation should be typing or backspacing
      if (!isBackspacing) {
        
        // If full string hasn't yet been typed out, continue typing
        if (i < aString.length) {
            // Type header or subheader depending on whether pipe has been detected
              eHeader.text(eHeader.text() + aString.charAt(i));
            i++;
            setTimeout(function(){ typeWriter(id, ar); }, speedForward);
          
          
        // If full string has been typed, switch to backspace mode.
        } else if (i == aString.length) {
          
          isBackspacing = true;
          setTimeout(function(){ typeWriter(id, ar); }, speedWait);
          
        }
        
      // If backspacing is enabled
      } else {
        
        // If either the header or the paragraph still has text, continue backspacing
        if (eHeader.text().length > 0) {
          
            eHeader.addClass("cursor");
            eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
          setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
        
        // If neither head or paragraph still has text, switch to next quote in array and start typing.
        } else { 
          
          isBackspacing = false;
          i = 0;
          a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
          setTimeout(function(){ typeWriter(id, ar); }, 50);
          
        }
      }
    }
    
    