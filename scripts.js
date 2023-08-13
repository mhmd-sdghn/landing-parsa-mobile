function openModal(target) {
  if (target.isTrusted) target = this;

  target.style.position = "fixed";
  target.style.width = "100vw";
  target.style.height = "100vh";
  target.style.backdropFilter = "blur(10px)";
  target.style.zIndex = "1";

  const img = target.children[0];

  img.style.maxWidth = "800px";
  img.style.height = "auto";

  target.onclick = closeModal.bind(target);
}

function closeModal() {
  this.removeAttribute("style");

  const img = this.children[0];

  img.style.maxWidth = "";
  img.style.height = "";

  this.onclick = openModal.bind(this);
}

function scrollPageTo(target) {
  const el = document.querySelector(target);

  el.scrollIntoView({ behavior: "smooth" });
}

function toggleCollapse(collapseId) {
  const content = document.getElementById(collapseId);
  const trriger = content.previousElementSibling;

  if (content.classList.contains("expanded")) {
    content.classList.remove("expanded");
    trriger.classList.remove("expanded");
    content.style.maxHeight = "0px";
  } else {
    content.classList.add("expanded");
    trriger.classList.add("expanded");

    content.style.maxHeight = content.scrollHeight + "px";
  }
}

function handleBgSize() {
  const parsa_image = document.querySelector(".parsa-image");

  const background_height =
    parsa_image.scrollHeight + parsa_image.getBoundingClientRect().top;

  document.body.style.removeProperty("--bg-height");
  document.body.style.setProperty(
    "--bg-height",
    `${Math.round(background_height)}px`
  );
}

window.addEventListener("load", function () {
  handleBgSize();
});

window.addEventListener("resize", function () {
  handleBgSize();
});
