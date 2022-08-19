// $(document).ready(alert("hello"));

// UPDATE
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
  });
  
  // DELETE
  $("ul").on("click", "span", function () {
    $(this).parent().remove();
  });
  
  // CREATE
  $("input").keypress(function (event) {
    if (event.which === 13 && $(this).val().trim()) {
      let listItem = $(this).val();
      console.log(listItem)
      $("ul").append(
          `<li>${listItem}<span><i class="fa fa-trash-alt"></i></span></li>`
      )
      $(this).val("")
    }
  });