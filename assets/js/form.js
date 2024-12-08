const formContent = `
<div
id="brochureForm"
class="z-[70] fixed bg-white w-[100vw] lg:w-[605px] top-0 -right-[100%] bottom-0 transition-all ease-in-out duration-[1100ms]"
>
<img
  src="/assets/img/xmark.svg"
  alt=""
  id="xmark"
  class="absolute top-4 right-4 w-8 h-8 stroke-[1px] cursor-pointer"
/>

<div class="px-8 mt-16 h-[90vh] pb-[90px] overflow-y-auto">
  <h1
    class="font-radikalLight font-semibold text-center text-[20px] lg:text-[26px] uppercase"
    id="formTitle"
  ></h1>
  <h2
    class="font-radikalLight text-center text-[14px] lg:text-[22px] uppercase mt-[26px]"
  >
    <span class="font-radikalLight font-semibold"
      >PRICES STARTING FROM</span
    >
  </h2>
  <h2
    class="font-radikalLight text-center text-[14px] lg:text-[20px] uppercase mt-2"
    onclick="showCountryCode()"
  >
    AED 66M | USD 18M | EUR 16.6M | GBP 14M
  </h2>
  <form
    action="POST"
    class="flex flex-col mt-5 lg:px-5 gap-y-3 font-radikalLight"
  >
    <div class="grid grid-cols-2 gap-2 w-full">
      <input
        type="text"
        placeholder="*First Name"
        class="inputItem text-xs"
        id="first_name"
        required
      />
      <input
        type="text"
        placeholder="*Last Name"
        class="inputItem text-xs"
        id="last_name"
        required
      />
    </div>
    <input
      type="email"
      placeholder="*Your Email"
      class="inputItem text-xs"
      id="email"
      required
    />
    <div class="flex gap-2 w-full relative">
      <input
        type="hidden"
        class="inputItem text-xs !ml-[50px]"
        name="country_code"
        id="dialCode"
        required
      />
      <input type="text" class="hidden" id="ccode" />
      <input
        type="number"
        id="phone"
        placeholder="Your Phone No"
        class="inputItem text-xs flex-grow ml-[120px]"
        required
      />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
      <select
        autocomplete="off"
        class="inputItem text-xs"
        name="prefered_lang"
        id="prefered_lang"
        required
      >
        <option class="hidden" value="" disabled selected>
          Preferred Language
        </option>
        <option value="English">English</option>
        <option value="Arabic">Arabic</option>
        <option value="French">French</option>
        <option value="Russian">Russian</option>
      </select>
      <select
        autocomplete="off"
        class="inputItem text-xs"
        name="nationality"
        id="nationality"
        required
      >
        <option class="hidden" value="" disabled selected>
          Nationality
        </option>
        <option class="form-select-option" value="Afghan">Afghan</option>
        <option class="form-select-option" value="Albanian">
          Albanian
        </option>
        <option class="form-select-option" value="Algerian">
          Algerian
        </option>
        <option class="form-select-option" value="American">
          American
        </option>
        <option class="form-select-option" value="Andorran">
          Andorran
        </option>
        <option class="form-select-option" value="Angolan">
          Angolan
        </option>
        <option class="form-select-option" value="Antiguans">
          Antiguans
        </option>
        <option class="form-select-option" value="Argentinean">
          Argentinean
        </option>
        <option class="form-select-option" value="Armenian">
          Armenian
        </option>
        <option class="form-select-option" value="Australian">
          Australian
        </option>
        <option class="form-select-option" value="Austrian">
          Austrian
        </option>
        <option class="form-select-option" value="Azerbaijani">
          Azerbaijani
        </option>
        <option class="form-select-option" value="Bahamian">
          Bahamian
        </option>
        <option class="form-select-option" value="Bahraini">
          Bahraini
        </option>
        <option class="form-select-option" value="Bangladeshi">
          Bangladeshi
        </option>
        <option class="form-select-option" value="Barbadian">
          Barbadian
        </option>
        <option class="form-select-option" value="Barbudans">
          Barbudans
        </option>
        <option class="form-select-option" value="Batswana">
          Batswana
        </option>
        <option class="form-select-option" value="Belarusian">
          Belarusian
        </option>
        <option class="form-select-option" value="Belgian">
          Belgian
        </option>
        <option class="form-select-option" value="Belizean">
          Belizean
        </option>
        <option class="form-select-option" value="Beninese">
          Beninese
        </option>
        <option class="form-select-option" value="Bhutanese">
          Bhutanese
        </option>
        <option class="form-select-option" value="Bolivian">
          Bolivian
        </option>
        <option class="form-select-option" value="Bosnian">
          Bosnian
        </option>
        <option class="form-select-option" value="Brazilian">
          Brazilian
        </option>
        <option class="form-select-option" value="British">
          British
        </option>
        <option class="form-select-option" value="Bruneian">
          Bruneian
        </option>
        <option class="form-select-option" value="Bulgarian">
          Bulgarian
        </option>
        <option class="form-select-option" value="Burkinabe">
          Burkinabe
        </option>
        <option class="form-select-option" value="Burmese">
          Burmese
        </option>
        <option class="form-select-option" value="Burundian">
          Burundian
        </option>
        <option class="form-select-option" value="Cambodian">
          Cambodian
        </option>
        <option class="form-select-option" value="Cameroonian">
          Cameroonian
        </option>
        <option class="form-select-option" value="Canadian">
          Canadian
        </option>
        <option class="form-select-option" value="Cape Verdean">
          Cape Verdean
        </option>
        <option class="form-select-option" value="Central African">
          Central African
        </option>
        <option class="form-select-option" value="Chadian">
          Chadian
        </option>
        <option class="form-select-option" value="Chilean">
          Chilean
        </option>
        <option class="form-select-option" value="Chinese">
          Chinese
        </option>
        <option class="form-select-option" value="Colombian">
          Colombian
        </option>
        <option class="form-select-option" value="Comoran">
          Comoran
        </option>
        <option class="form-select-option" value="Congolese">
          Congolese
        </option>
        <option class="form-select-option" value="Costa Rican">
          Costa Rican
        </option>
        <option class="form-select-option" value="Croatian">
          Croatian
        </option>
        <option class="form-select-option" value="Cuban">Cuban</option>
        <option class="form-select-option" value="Cypriot">
          Cypriot
        </option>
        <option class="form-select-option" value="Czech">Czech</option>
        <option class="form-select-option" value="Danish">Danish</option>
        <option class="form-select-option" value="Djibouti">
          Djibouti
        </option>
        <option class="form-select-option" value="Dominican">
          Dominican
        </option>
        <option class="form-select-option" value="Dutch">Dutch</option>
        <option class="form-select-option" value="East Timorese">
          East Timorese
        </option>
        <option class="form-select-option" value="Ecuadorean">
          Ecuadorean
        </option>
        <option class="form-select-option" value="Egyptian">
          Egyptian
        </option>
        <option class="form-select-option" value="Emirati">
          Emirati
        </option>
        <option class="form-select-option" value="Equatorial Guinean">
          Equatorial Guinean
        </option>
        <option class="form-select-option" value="Eritrean">
          Eritrean
        </option>
        <option class="form-select-option" value="Estonian">
          Estonian
        </option>
        <option class="form-select-option" value="Ethiopian">
          Ethiopian
        </option>
        <option class="form-select-option" value="Fijian">Fijian</option>
        <option class="form-select-option" value="Filipino">
          Filipino
        </option>
        <option class="form-select-option" value="Finnish">
          Finnish
        </option>
        <option class="form-select-option" value="French">French</option>
        <option class="form-select-option" value="Gabonese">
          Gabonese
        </option>
        <option class="form-select-option" value="Gambian">
          Gambian
        </option>
        <option class="form-select-option" value="Georgian">
          Georgian
        </option>
        <option class="form-select-option" value="German">German</option>
        <option class="form-select-option" value="Ghanaian">
          Ghanaian
        </option>
        <option class="form-select-option" value="Greek">Greek</option>
        <option class="form-select-option" value="Grenadian">
          Grenadian
        </option>
        <option class="form-select-option" value="Guatemalan">
          Guatemalan
        </option>
        <option class="form-select-option" value="Guinea-Bissauan">
          Guinea-Bissauan
        </option>
        <option class="form-select-option" value="Guinean">
          Guinean
        </option>
        <option class="form-select-option" value="Guyanese">
          Guyanese
        </option>
        <option class="form-select-option" value="Haitian">
          Haitian
        </option>
        <option class="form-select-option" value="Herzegovinian">
          Herzegovinian
        </option>
        <option class="form-select-option" value="Honduran">
          Honduran
        </option>
        <option class="form-select-option" value="Hungarian">
          Hungarian
        </option>
        <option class="form-select-option" value="Icelander">
          Icelander
        </option>
        <option class="form-select-option" value="I-Kiribati">
          I-Kiribati
        </option>
        <option class="form-select-option" value="Indian">Indian</option>
        <option class="form-select-option" value="Indonesian">
          Indonesian
        </option>
        <option class="form-select-option" value="Iranian">
          Iranian
        </option>
        <option class="form-select-option" value="Iraqi">Iraqi</option>
        <option class="form-select-option" value="Irish">Irish</option>
        <option class="form-select-option" value="Israeli">
          Israeli
        </option>
        <option class="form-select-option" value="Italian">
          Italian
        </option>
        <option class="form-select-option" value="Ivorian">
          Ivorian
        </option>
        <option class="form-select-option" value="Jamaican">
          Jamaican
        </option>
        <option class="form-select-option" value="Japanese">
          Japanese
        </option>
        <option class="form-select-option" value="Jordanian">
          Jordanian
        </option>
        <option class="form-select-option" value="Kazakhstani">
          Kazakhstani
        </option>
        <option class="form-select-option" value="Kenyan">Kenyan</option>
        <option class="form-select-option" value="Kittian and Nevisian">
          Kittian and Nevisian
        </option>
        <option class="form-select-option" value="Kuwaiti">
          Kuwaiti
        </option>
        <option class="form-select-option" value="Kyrgyz">Kyrgyz</option>
        <option class="form-select-option" value="Laotian">
          Laotian
        </option>
        <option class="form-select-option" value="Latvian">
          Latvian
        </option>
        <option class="form-select-option" value="Lebanese">
          Lebanese
        </option>
        <option class="form-select-option" value="Liberian">
          Liberian
        </option>
        <option class="form-select-option" value="Libyan">Libyan</option>
        <option class="form-select-option" value="Liechtensteiner">
          Liechtensteiner
        </option>
        <option class="form-select-option" value="Lithuanian">
          Lithuanian
        </option>
        <option class="form-select-option" value="Luxembourger">
          Luxembourger
        </option>
        <option class="form-select-option" value="Macedonian">
          Macedonian
        </option>
        <option class="form-select-option" value="Malagasy">
          Malagasy
        </option>
        <option class="form-select-option" value="Malawian">
          Malawian
        </option>
        <option class="form-select-option" value="Malaysian">
          Malaysian
        </option>
        <option class="form-select-option" value="Maldivian">
          Maldivian
        </option>
        <option class="form-select-option" value="Malian">Malian</option>
        <option class="form-select-option" value="Maltese">
          Maltese
        </option>
        <option class="form-select-option" value="Marshallese">
          Marshallese
        </option>
        <option class="form-select-option" value="Mauritanian">
          Mauritanian
        </option>
        <option class="form-select-option" value="Mauritian">
          Mauritian
        </option>
        <option class="form-select-option" value="Mexican">
          Mexican
        </option>
        <option class="form-select-option" value="Micronesian">
          Micronesian
        </option>
        <option class="form-select-option" value="Moldovan">
          Moldovan
        </option>
        <option class="form-select-option" value="Monacan">
          Monacan
        </option>
        <option class="form-select-option" value="Mongolian">
          Mongolian
        </option>
        <option class="form-select-option" value="Moroccan">
          Moroccan
        </option>
        <option class="form-select-option" value="Mosotho">
          Mosotho
        </option>
        <option class="form-select-option" value="Motswana">
          Motswana
        </option>
        <option class="form-select-option" value="Mozambican">
          Mozambican
        </option>
        <option class="form-select-option" value="Namibian">
          Namibian
        </option>
        <option class="form-select-option" value="Nauruan">
          Nauruan
        </option>
        <option class="form-select-option" value="Nepalese">
          Nepalese
        </option>
        <option class="form-select-option" value="New Zealander">
          New Zealander
        </option>
        <option class="form-select-option" value="Nicaraguan">
          Nicaraguan
        </option>
        <option class="form-select-option" value="Nigerian">
          Nigerian
        </option>
        <option class="form-select-option" value="Nigerien">
          Nigerien
        </option>
        <option class="form-select-option" value="Ni-Vanuatu">
          Ni-Vanuatu
        </option>
        <option class="form-select-option" value="Northern Irish">
          Northern Irish
        </option>
        <option class="form-select-option" value="North Korean">
          North Korean
        </option>
        <option class="form-select-option" value="Norwegian">
          Norwegian
        </option>
        <option class="form-select-option" value="Omani">Omani</option>
        <option class="form-select-option" value="Pakistani">
          Pakistani
        </option>
        <option class="form-select-option" value="Palauan">
          Palauan
        </option>
        <option class="form-select-option" value="Panamanian">
          Panamanian
        </option>
        <option class="form-select-option" value="Papua New Guinean">
          Papua New Guinean
        </option>
        <option class="form-select-option" value="Paraguayan">
          Paraguayan
        </option>
        <option class="form-select-option" value="Peruvian">
          Peruvian
        </option>
        <option class="form-select-option" value="Polish">Polish</option>
        <option class="form-select-option" value="Portuguese">
          Portuguese
        </option>
        <option class="form-select-option" value="Qatari">Qatari</option>
        <option class="form-select-option" value="Romanian">
          Romanian
        </option>
        <option class="form-select-option" value="Russian">
          Russian
        </option>
        <option class="form-select-option" value="Rwandan">
          Rwandan
        </option>
        <option class="form-select-option" value="Saint Lucian">
          Saint Lucian
        </option>
        <option class="form-select-option" value="Salvadoran">
          Salvadoran
        </option>
        <option class="form-select-option" value="Samoan">Samoan</option>
        <option class="form-select-option" value="San Marinese">
          San Marinese
        </option>
        <option class="form-select-option" value="Sao Tomean">
          Sao Tomean
        </option>
        <option class="form-select-option" value="Saudi">Saudi</option>
        <option class="form-select-option" value="Scottish">
          Scottish
        </option>
        <option class="form-select-option" value="Senegalese">
          Senegalese
        </option>
        <option class="form-select-option" value="Serbian">
          Serbian
        </option>
        <option class="form-select-option" value="Seychellois">
          Seychellois
        </option>
        <option class="form-select-option" value="Sierra Leonean">
          Sierra Leonean
        </option>
        <option class="form-select-option" value="Singaporean">
          Singaporean
        </option>
        <option class="form-select-option" value="Slovakian">
          Slovakian
        </option>
        <option class="form-select-option" value="Slovenian">
          Slovenian
        </option>
        <option class="form-select-option" value="Solomon Islander">
          Solomon Islander
        </option>
        <option class="form-select-option" value="Somali">Somali</option>
        <option class="form-select-option" value="South African">
          South African
        </option>
        <option class="form-select-option" value="South Korean">
          South Korean
        </option>
        <option class="form-select-option" value="Spanish">
          Spanish
        </option>
        <option class="form-select-option" value="Sri Lankan">
          Sri Lankan
        </option>
        <option class="form-select-option" value="Sudanese">
          Sudanese
        </option>
        <option class="form-select-option" value="Surinamer">
          Surinamer
        </option>
        <option class="form-select-option" value="Swazi">Swazi</option>
        <option class="form-select-option" value="Swedish">
          Swedish
        </option>
        <option class="form-select-option" value="Swiss">Swiss</option>
        <option class="form-select-option" value="Syrian">Syrian</option>
        <option class="form-select-option" value="Taiwanese">
          Taiwanese
        </option>
        <option class="form-select-option" value="Tajik">Tajik</option>
        <option class="form-select-option" value="Tanzanian">
          Tanzanian
        </option>
        <option class="form-select-option" value="Thai">Thai</option>
        <option class="form-select-option" value="Togolese">
          Togolese
        </option>
        <option class="form-select-option" value="Tongan">Tongan</option>
        <option
          class="form-select-option"
          value="Trinidadian or Tobagonian"
        >
          Trinidadian or Tobagonian
        </option>
        <option class="form-select-option" value="Tunisian">
          Tunisian
        </option>
        <option class="form-select-option" value="Turkish">
          Turkish
        </option>
        <option class="form-select-option" value="Tuvaluan">
          Tuvaluan
        </option>
        <option class="form-select-option" value="Ugandan">
          Ugandan
        </option>
        <option class="form-select-option" value="Ukrainian">
          Ukrainian
        </option>
        <option class="form-select-option" value="Uruguayan">
          Uruguayan
        </option>
        <option class="form-select-option" value="Uzbekistani">
          Uzbekistani
        </option>
        <option class="form-select-option" value="Venezuelan">
          Venezuelan
        </option>
        <option class="form-select-option" value="Vietnamese">
          Vietnamese
        </option>
        <option class="form-select-option" value="Welsh">Welsh</option>
        <option class="form-select-option" value="Yemenite">
          Yemenite
        </option>
        <option class="form-select-option" value="Zambian">
          Zambian
        </option>
        <option class="form-select-option" value="Zimbabwean">
          Zimbabwean
        </option>
      </select>
    </div>
    <!-- <select
      autocomplete="off"
      class="inputItem text-xs"
      name="budget"
      id="budget"
      required
    >
      <option class="hidden" value="" disabled selected>Budget</option>
      <option value="Below 60M">Below 60M</option>
      <option value="Above 60M">Above 60M</option>
    </select> -->
    <select
      autocomplete="off"
      class="inputItem text-xs"
      id="preferred_method"
      required
    >
      <option class="hidden" value="" disabled selected>
        Preferred method of contact
      </option>
      <option value="phone">Phone</option>
      <option value="email">Email</option>
      <option value="whatsapp">Whatsapp</option>
    </select>
    <div class="flex justify-center mt-2">
      <button type="submit" class="ctaButton w-[180px] h-[30px]">
        Submit
      </button>
    </div>
  </form>
</div>
</div>`;

class FormComp extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = formContent;
  }
}

customElements.define("form-component", FormComp);
