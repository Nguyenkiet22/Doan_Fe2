emailjs.init("DyucYtdIKVlIxSKpv"); // thay bằng public key thật

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm("service_5b961md", "template_rxe5ba4", this)
    .then(function () {
      document.getElementById("successPopup").classList.add("show");
      document.getElementById("contactForm").reset();
    }, function (error) {
      alert("Gửi thất bại vui lòng xem lại thông tin");
    });
});

function closePopup() {
  document.getElementById("successPopup").classList.remove("show");
}