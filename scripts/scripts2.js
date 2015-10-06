 $(document).ready(function() {
     $("button#cat_button").click(function() {
        //  $("ul#cat").prepend("<li>Meow!</li>");
         $("ul#dog").prepend("<li>Ruff!</li>");
         $("ul#cat").prepend('<li>Meow!<img src="https://www.petfinder.com/wp-content/uploads/2012/11/99950237-why-cats-meow-632x475.jpg"></li>');
         $("ul#cat").children("li").first().click(function() {
             $(this).remove();

         });
     });

     $("button#dog_button").click(function() {
         $("ul#cat").prepend("<li>Purr...</li>");
         $("ul#dog").prepend("<li>Grrr.....</li>");
         $("ul#dog").before('<img src="http://www.scienceandreligiontoday.com/wp-content/uploads/2010/02/growling_dog.jpg">')
     });
 });
