const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.querySelectorAll("[required]").forEach((field) => {
  field.addEventListener("invalid", () => {
    field.setCustomValidity(field.dataset.requiredMessage || "请填写此项。");
  });

  field.addEventListener("input", () => {
    field.setCustomValidity("");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const company = String(formData.get("company") || "").trim();

  contactForm.reset();
  formMessage.textContent = `${name}，已记录你的预约意向。请添加微信 kezhui，并备注“企业AI调研 + ${company}”，方便尽快对接。`;
  formMessage.className = "form-message success";
});
