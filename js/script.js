// Add custom JavaScript here

function userSroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
    } else {
      navbar.classList.remove("bg-dark");
    }
  });
}

document.addEventListener("DOMContentLoaded", userSroll);

// Get the video modal
var videoModal = document.getElementById("videoModal");
// Set the video URL when the modal is shown
videoModal.addEventListener("show.bs.modal", function (event) {
  var button = event.relatedTarget;
  var videoUrl = button.getAttribute("data-bs-video");
  var videoFrame = videoModal.querySelector("#videoFrame");
  videoFrame.src = videoUrl;
});
// Clear the video URL when the modal is hidden
videoModal.addEventListener("hidden.bs.modal", function () {
  var videoFrame = videoModal.querySelector("#videoFrame");
  videoFrame.src = "";
});

// AI Chart
function toggleChatWindow() {
  var chatWindow = document.getElementById("chatWindow");
  if (chatWindow.style.display === "block") {
    chatWindow.style.display = "none";
  } else {
    chatWindow.style.display = "block";
  }
}
function closeChatWindow() {
  document.getElementById("chatWindow").style.display = "none";
}
function sendMessage() {
  var inputField = document.getElementById("chatInput");
  var message = inputField.value;
  if (message.trim() !== "") {
    var chatBody = document.querySelector(".chat-body");
    var newMessage = document.createElement("p");
    newMessage.textContent = "You: " + message;
    chatBody.appendChild(newMessage);
    inputField.value = "";
    // Clear the input field
    // Scroll to the bottom of the chat body
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

document.getElementById("nextToUpload").addEventListener("click", function () {
  document.getElementById("personalInfoForm").style.display = "none";
  document.getElementById("uploadCourseSection").style.display = "block";
});

function filterCourses(category) {
  const courses = document.querySelectorAll('.course-card');
  const links = document.querySelectorAll('.category-links a');

  courses.forEach(course => {
      if (category === 'all') {
          course.style.display = 'block';
      } else if (course.classList.contains(category)) {
          course.style.display = 'block';
      } else {
          course.style.display = 'none';
      }
  });

  links.forEach(link => {
      if (link.innerHTML.toLowerCase().includes(category) || (category === 'all' && link.innerHTML === 'Show All')) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
}

// Set 'Show All' as default
document.addEventListener('DOMContentLoaded', () => {
  filterCourses('all');
});

function filterCourses(category) {
  const courses = document.querySelectorAll('.course-card');
  const links = document.querySelectorAll('.category-links a');

  let visibleCount = 0;
  courses.forEach(course => {
      if (category === 'all') {
          if (visibleCount < 4) {
              course.style.display = 'block';
              visibleCount++;
          } else {
              course.style.display = 'none';
          }
      } else if (course.classList.contains(category)) {
          course.style.display = 'block';
      } else {
          course.style.display = 'none';
      }
  });

  links.forEach(link => {
      if (link.innerHTML.toLowerCase().includes(category) || (category === 'all' && link.innerHTML === 'Show All')) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });

  if (category === 'all') {
      document.querySelector('.text-center .btn').style.display = 'block';
  } else {
      document.querySelector('.text-center .btn').style.display = 'none';
  }
}

function showMoreCourses() {
  const courses = document.querySelectorAll('.course-card');
  let visibleCount = 0;
  courses.forEach(course => {
      if (course.style.display === 'block') {
          visibleCount++;
      }
  });

  courses.forEach((course, index) => {
      if (index >= visibleCount && index < visibleCount + 4) {
          course.style.display = 'block';
      }
  });

  if (visibleCount + 4 >= courses.length) {
      document.querySelector('.text-center .btn').style.display = 'none';
  }
}

// Set 'Show All' as default
document.addEventListener('DOMContentLoaded', () => {
  filterCourses('all');
});

function toggleChatWindow() {
  var chatWindow = document.getElementById("chatWindow");
  if (chatWindow.style.display === "block") {
      chatWindow.style.display = "none";
  } else {
      chatWindow.style.display = "block";
  }
}

function closeChatWindow() {
  document.getElementById("chatWindow").style.display = "none";
}

function sendMessage() {
  var inputField = document.getElementById("chatInput");
  var message = inputField.value;
  if (message.trim() !== "") {
      var chatBody = document.querySelector(".chat-body");
      var newMessage = document.createElement("p");
      newMessage.textContent = "You: " + message;
      chatBody.appendChild(newMessage);
      inputField.value = "";
      // Clear the input field
      // Scroll to the bottom of the chat body
      chatBody.scrollTop = chatBody.scrollHeight;
  }
}
