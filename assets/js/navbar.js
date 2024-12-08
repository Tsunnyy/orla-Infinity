const headerContent = ` <nav
  id="navbar"
  class="h-[60px] lg:h-[94px] bg-black bg-opacity-40 backdrop-blur-[18px] flex items-center justify-center w-full fixed top-0 left-0 z-50"
>
  <a href="./index.html"
    ><img
      src="/assets/img/orla_logo_white.svg"
      alt=""
      class="h-[40px] lg:hidden pl-5"
  /></a>
  <ul
    class="hidden lg:flex items-center gap-[100px] font-radikalThin text-white text-opacity-50 text-[16px]"
    id="navbarList"
  >
    <li><a href="./gallery.html">Gallery</a></li>
    <li><a href="./partners.html">Partners</a></li>
    <li>
      <a href="./index.html"
        ><img src="/assets/img/orla_logo_white.svg" alt="" class="h-[65px]"
      /></a>
    </li>
    <li><a href="./amenities.html">Amenities</a></li>
    <li><a href="./services.html">Services</a></li>
  </ul>
  <div class="absolute top-1/2 -translate-y-1/2 right-[10px] lg:right-[22px]">
    <button
      onclick="openForm('privateMeeting')"
      class="text-xs lg:text-sm w-[110px] lg:w-[150px] h-[30px] lg:h-[40px] border border-white text-white"
    >
      ENQUIRE NOW
    </button>
  </div>

  <div
    class="lg:hidden absolute top-[50%] -translate-y-[50%] left-4"
    id="mobileNavToggle"
  >
    <img src="/assets/img/menu.svg" alt="" class="w-8 h-8" />
  </div>
</nav>`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = headerContent;

    // Get all anchor elements inside the navbarList
    const links = this.querySelectorAll("#navbarList li a");

    // Get the current URL path
    const currentPath = window.location.pathname.replace("/", "");
    console.log(currentPath);

    // Loop through the anchor elements and compare the href attribute with the current URL path
    links.forEach((link) => {
      const href = link.getAttribute("href");
      console.log(href);
      if (currentPath.length > 1 && href.includes(currentPath)) {
        link.parentNode.classList.add("text-opacity-100", "text-white");
      }
    });

    // if (currentPath == "") {
    //   links[0].parentNode.classList.add("text-opacity-100", "text-white");
    // }
  }
}

customElements.define("navbar-component", Header);
