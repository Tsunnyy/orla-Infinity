const mobileNavContent = ` <nav
  id="mobileNav"
  class="lg:hidden h-[100vh] w-[100vw] bg-black bg-opacity-60 backdrop-blur-[18px] flex flex-col items-start justify-center pl-[50px] fixed z-50 -left-[100vw] transition-all ease-in-out duration-[1100ms]"
>
  <img
    src="/assets/img/xmark-white.svg"
    alt=""
    id="xmarkMobileNav"
    class="absolute top-4 right-4 w-10 h-10 stroke-[1px] cursor-pointer stroke-white"
  />
  <ul
    class="flex flex-col gap-6 font-radikalLight text-white text-lg uppercase"
    id="mobileNavList"
  >
    <li><a href="./gallery.html">Gallery</a></li>
  </ul>
  <ul
    class="font-radikalLight text-white text-[12px] uppercase mt-[50px] gap-6 flex flex-col"
  >
    <li onclick="openForm('contact')">Contact Us</li>
    <li><a href="./location.html">Location</a></li>
  </ul>
</nav>`;

class MobileNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = mobileNavContent;

    // Get all anchor elements inside the navbarList
    const links1 = this.querySelectorAll("#mobileNavList li a");

    // Get the current URL path
    const currentPath1 = window.location.pathname.replace("/", "");
    console.log(currentPath1);

    // Loop through the anchor elements and compare the href attribute with the current URL path
    links1.forEach((link) => {
      const href = link.getAttribute("href");
      console.log(href);
      if (currentPath1.length > 1 && href === currentPath1) {
        link.parentNode.classList.add("text-opacity-100", "text-white");
      }
    });
  }
}

customElements.define("mobile-nav-component", MobileNav);
