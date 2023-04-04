// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var savedSched = {};
  // On click, save user input in local storage. {timeBlock: description}.
  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val().trim();
    savedSched[timeBlock] = description;
    localStorage.setItem("savedSched", JSON.stringify(savedSched))
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //

  // Get user input from local storage and populate timeblocks.
  if (localStorage.getItem("savedSched")) {
    savedSched = JSON.parse(localStorage.getItem("savedSched"));
  }

  for (key in savedSched) {
    $(`#${key}`).children(".description").val(savedSched[key]);
  }

  // Display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM Do"));
});
