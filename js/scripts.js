$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputUser = $("input:radio[name=animal]:checked").val();
    if (inputUser === "dog") {
      $("#output-dog").show();
      $("#output-cat").hide();
      $("#output-lion").hide();
    } else if (inputUser === "cat") {
      $("#output-cat").show();
      $("#output-dog").hide();
      $("#output-lion").hide()
    } else {
      $("#output-lion").show();
      $("#output-dog").hide();
      $("#output-cat").hide()
    }
  });
});
