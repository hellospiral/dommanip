$(document).ready(function() {
    $('#blanks form').submit(function(event) {
       // var person1Input = $("input#person1").val();
    //     var person2Input = $("input#person2").val();
    //     var animalInput = $("input#animal").val();
    //     var exclamationInput = $("input#exclamation").val();
    //     var verbInput = $("input#verb").val();
    //     var nounInput = $("input#noun").val();
    //
    //     $('.person1').text(person1Input);
    //     $('.person2').text(person2Input);
    //     $('.animal').text(animalInput);
    //     $('.exclamation').text(exclamationInput);
    //     $('.verb').text(verbInput);
    //     $('.noun').text(nounInput);
    //
    //     $('#story').show();

      //creating an array of variables
      var labelsArray = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      for (var index = 0; index <= 5; index += 1){
        console.log(labelsArray[index] + " current item");
        alert(index * 11);
        $("body").append("<p>" + (99 - index) + "bottles of beer on the wall</p>");
      }

      //getting a value from the user and assigning it as a variable

      // inputs = $("input#" + label).val();
        //filling in the span labels
        //}

      //labelsArray.forEach(getValue(label));

//       var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
//
//       blanks.forEach(function(blank) {
//         var userInput = $("input#" + blank).val();
//         $("." + blank).text(userInput);
//       });
//
 //$("#story").show();
//
       //event.preventDefault();
 });
});
