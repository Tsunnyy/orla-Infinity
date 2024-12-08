const stickyFooterContent = ` <div
  id="footer"
  class="stickyFooter fixed -bottom-[50px] left-0 flex justify-between items-center h-[40px] px-5 lg:px-28 bg-white w-full z-[999] drop-shadow-2xl"
>
  <div class="hidden lg:flex justify-between lg:w-full">
    <div class="flex items-center gap-14">
      <img
        src="/assets/img/Omniyat-logo_Black.png"
        alt=""
        class="h-[10px] lg:h-[15px]"
      />
    </div>
  </div>
  <button
    onclick="openForm('brochure')"
    class="lg:hidden font-radikalLight text-[10px] lg:text-xs w-[130px] h-[30px] text-white bg-[#9A9A9A] hover:bg-[#231F20] uppercase"
  >
    DOWNLOAD brochure
  </button>
  <div class="flex items-center gap-4 lg:gap-3">
    <div class="hidden lg:flex gap-1 gap-y-2 buttonClass">
      <button
        onclick="openForm('privateMeeting')"
        class="font-radikalLight text-[8px] lg:text-[10px] tracking-wider w-[150px] h-[30px] text-white bg-[#9A9A9A] hover:bg-[#231F20] uppercase"
      >
        Register interest
      </button>

      <button
        onclick="openForm('brochure')"
        class="font-radikalLight text-[8px] lg:text-[10px] tracking-wider w-[150px] h-[30px] text-white bg-[#9A9A9A] hover:bg-[#231F20] uppercase"
      >
        DOWNLOAD brochure
      </button>
    </div>

    <div class="flex items-center gap-3 lg:gap-8">
      <a
        href="https://api.whatsapp.com/send?phone=971544886666&text=Hello,%20I%20am%20interested%20in%20the%20Orla Infinity, Dorchester Collection, Dubai"
      >
        <div class="flex flex-row gap-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01" />
          </svg>
          <span class="uppercase text-[11px]">Whatsapp</span>
        </div>
      </a>
      <a href="tel:+971 54 488 6666">
        <div class="flex flex-row items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0" />
        </svg>
          <span class="uppercase text-[11px]">Call</span>
        </div>
      </a>
    </div>
  </div>
</div>`;

class StickyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = stickyFooterContent;
  }
}

customElements.define("sticky-footer-component", StickyFooter);
