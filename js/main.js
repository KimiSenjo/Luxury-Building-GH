// JavaScript code for the Luxury Building Ghana application

$(document).ready(function () {
  // Inquiry form modal functionality
  $("#open-inquiry").on("click", function () {
    $("#inquiry-modal").fadeIn();
  });

  $(".close-modal").on("click", function () {
    $("#inquiry-modal").fadeOut();
  });

  $("#inquiry-form").on("submit", function (e) {
    e.preventDefault();
    // Handle form submission logic here
    alert("Inquiry submitted! We will get back to you soon.");
    $("#inquiry-modal").fadeOut();
    $(this).trigger("reset");
  });

  // Chatbot toggle functionality
  $("#chatbot-toggle").on("click", function () {
    $("#chatbot-container").toggle();
  });

  $("#close-chatbot").on("click", function () {
    $("#chatbot-container").fadeOut();
  });

  $("#send-message").on("click", function () {
    const userInput = $("#user-input").val();
    if (userInput) {
      $("#chatbot-messages").append(`<div class="message user">${userInput}</div>`);
      $("#user-input").val("");
      // Simulate bot response
      setTimeout(function () {
        $("#chatbot-messages").append(`<div class="message bot">You said: ${userInput}</div>`);
      }, 1000);
    }
  });
});