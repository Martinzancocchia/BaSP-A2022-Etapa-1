// Modal Functions
// shows modal with error messages or success message
function showModal(title, data, success) {
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const modal = document.getElementById("myModal");

  modalTitle.innerHTML = title;

  //TODO: keep data logic out of this file
  if (success !== null) {
    if (success) {
      modal.classList.add("success");
      modalText.innerHTML = `<div>${data.msg}</div>`;
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          modalText.innerHTML += `<div>- ${key}: ${value}</div>`;
        }
      }
    } else {
      modal.classList.add("no-success");
      if (data.errors) {
        modalText.innerHTML = data.errors
          .map((error) => `<div>- ${error.msg}</div>`)
          .join("");
      } else if (data.msg) {
        modalText.innerHTML = `<div>${data.msg}</div>`;
      } else {
        modalText.innerHTML = `<div>Server connection error, check fetch url</div>`;
      }
    }
  } else console.log("Error in showModal(): success is required");
  modal.style.display = "flex";
}
// close modal style changes
function closeModal() {
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const modal = document.getElementById("myModal");

  modalTitle.innerHTML = "";
  modalText.innerHTML = "";
  modal.classList.remove("success");
  modal.classList.remove("no-success");
  modal.style.display = "none";
}
