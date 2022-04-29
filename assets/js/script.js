var timeContainer = document.getElementById("time-container");
var currentDay = document.getElementById("currentDay");
var newDate = new Date();

// set current day
currentDay.innerText = `${
  newDate.getMonth() + 1
}/${newDate.getDate()}/${newDate.getFullYear()}`;

// create html elements to hold values
const times = [
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
];

const createScheduler = function () {
  times.map((time) => {
    var timeRow = document.createElement("div");
    timeRow.classList.add("row");
    timeContainer.appendChild(timeRow);

    var timeColumn = document.createElement("div");
    timeColumn.classList.add("hour");
    timeColumn.textContent = `${time}`;
    timeRow.append(timeColumn);

    var textColumn = document.createElement("div");
    textColumn.classList.add("textarea");
    textColumn.id = time;
    textColumn.setAttribute("contentEditable", "true");
    timeRow.append(textColumn);

    var buttonColumn = document.createElement("div");
    buttonColumn.classList.add("saveBtn");
    buttonColumn.textContent = "Save!";
    buttonColumn.addEventListener("click", function (e) {
      saveText(e);
    });
    timeRow.append(buttonColumn);
  });
};

// save to local storage on click
const saveText = function (e) {
  var text = e.target.previousSibling.textContent;
  var time = e.target.previousSibling.previousSibling.textContent;
  localStorage.setItem(time, text);
};

// load from local storage
const loadSavedTasks = function () {
  times.map((time) => {
    var text = localStorage.getItem(time);
    var textArea = document.getElementById(time);
    textArea.textContent = text;
  });
};

// Run functions
createScheduler();
loadSavedTasks();
