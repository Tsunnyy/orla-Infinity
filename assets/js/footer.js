const footerContent = ` <div
  class="bg-[#FEF8F0] text-black pt-10"
  id="deskFoot"
>
  <div
    class="grid grid-cols-7 mb-2 pb-[37px] justify-items-center lg:justify-items-start font-radikalLight"
  >
    <div
      class="col-span-7 lg:col-span-2 lg:pl-16 flex flex-col items-center lg:items-start"
    >
      <img src="/assets/img/logo.svg" alt="" class="w-32 h-32 -mt-5 lg:pl-2" />
      <div class="flex gap-2">
        <a
          href="https://www.facebook.com/OmniyatOfficial"
          target="_blank"
          class="border border-[#333333] rounded-full p-2"
        >
          <img src="/assets/img/social/fb.svg" alt="" class="w-4 h-4" />
        </a>
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Fomniyatofficial%2F"
          target="_blank"
          class="border border-[#333333] rounded-full p-2"
        >
          <img src="/assets/img/social/twitter.svg" alt="" class="w-4 h-4" />
        </a>
        <a
          href="https://www.instagram.com/omniyatofficial/"
          target="_blank"
          class="border border-[#333333] rounded-full p-2"
        >
          <img src="/assets/img/social/insta.svg" alt="" class="w-4 h-4" />
        </a>
        <a href="https://www.linkedin.com/company/omniyat-group/"  target="_blank" class="border border-[#333333] rounded-full p-2">
          <img src="/assets/img/social/linkedin.svg" alt="" class="w-4 h-4" />
        </a>
      </div>
    </div>
    <div
      class="col-span-3 lg:col-span-1 mt-10 lg:mt-0 text-sm ml-[60px] lg:ml-0"
    >
      <p class="text-[#8e8e8e]">Pages</p>
      <ul class="flex flex-col gap-1.5 lg:gap-1 mt-1">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./residencies.html">Residences</a></li>
        <li><a href="./partners.html">Partners</a></li>
        <li><a href="./amenities.html">Amenities</a></li>
        <li><a href="./services.html">Services</a></li>
      </ul>
    </div>
    <div
      class="col-span-3 lg:col-span-1 mt-10 lg:mt-0 text-sm ml-[50px] lg:ml-0"
    >
      <p class="text-[#8e8e8e]">Location</p>
      <ul class="flex flex-col gap-1 mt-1">
        <li><a href="location.html">Palm Jumeirah</a></li>
      </ul>
      <p class="text-[#8e8e8e] mt-2 lg:mt-[20px]">Developer</p>
      <ul class="flex flex-col gap-1 mt-1">
        <li><a href="https://www.omniyat.com/about"  target="_blank">OMNIYAT</a></li>
      </ul>
      <div class="lg:hidden text-sm mt-2">
        <p class="text-[#8e8e8e]">Support</p>
        <ul class="flex flex-col gap-1 mt-1">
          <li class="cursor-pointer" onclick="openForm('contact')">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-3 lg:col-span-1 hidden lg:block text-sm">
      <p class="text-[#8e8e8e]">Support</p>
      <ul class="flex flex-col gap-1 mt-1">
        <li class="cursor-pointer" onclick="openForm('contact')">Contact Us</li>
      </ul>
    </div>
    <div
      class="col-span-7 lg:col-span-2 mt-8 lg:mt-0 pt-2 text-sm flex flex-col items-center lg:items-start"
    >
      <a href="https://www.omniyat.com/"  target="_blank"
        ><img src="/assets/img/omniyat_logo.png" alt="" class="h-[45px]"
      /></a>
      <button class="ctaButton w-[140px] mt-5" onclick="openForm('contact')">
        Contact Us
      </button>
      <p class="mt-4 text-center lg:text-left">
      By signing up, I agree to receive OMNIYAT’s </br> latest news and updates  in accordance </br> with their data protection policy.
      </p>
    </div>
  </div>

  <div class="border-t border-black border-opacity-5 pt-6 pb-8">
    <div
      class="grid grid-cols-7 justify-items-center lg:justify-items-start gap-y-4"
    >
      <div class="lg:pl-16 text-sm col-span-7 lg:col-span-2 font-radikalLight">
        Orla Infinity &copy; 2023
      </div>
      <div class="col-span-7 lg:col-span-3 w-full">
        <ul
          class="flex justify-center lg:justify-start text-sm whitespace-nowrap w-full"
        >
          <li>
            <a href="https://promotion.omniyat.com/orla/privacy-policy"  target="_blank"
              >Privacy Policy</a
            >
          </li>
        </ul>
      </div>
      <div
        class="col-span-7 lg:col-span-2 flex gap-4 text-sm ml-[20px] lg:ml-0"
      >
        <p class="text-[#8e8e8e]">Language</p>
        <select name="" id="languageSelect" class="bg-[#FEF8F0] w-[80px]">
        <option value="en">English</option>
          <option value="gm">German</option>
          <option value="fr">French</option>
          <option value="it">Italian</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </div>
  </div>
</div>`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = footerContent;

    var languageSelect = document.getElementById("languageSelect");
    languageSelect.onchange = function () {
      var selectedLanguage = this.value;
      if (selectedLanguage == "en") {
        window.location.href = "/";
      } else {
        window.location.href = "/" + selectedLanguage;
      }
    };
  }
}

customElements.define("footer-component", Footer);
