<script setup lang="ts">
import VideoSlider from '@/components/VideoSlider.vue'
const currentSlide = ref(0)
const slideClasses = ref('')
function slide(direction: 'left' | 'right'): void {
  if (window.innerWidth > 1025) {
    if (currentSlide.value < 5 && direction === 'right') {
      currentSlide.value += 1
      slideClasses.value = `-${currentSlide.value * 35.2}rem`
    }

    if (currentSlide.value !== 0 && direction === 'left') {
      currentSlide.value -= 1
      slideClasses.value = `-${currentSlide.value * 35.2}rem`
    }
  } else {
    const width = document.documentElement.clientWidth
    const gap = 0.4 * 14
    const width_rem = (width + gap) / 16

    if (currentSlide.value < 9 && direction === 'right') {
      currentSlide.value += 1
      slideClasses.value = `-${currentSlide.value * width_rem}rem`
    }

    if (currentSlide.value !== 0 && direction === 'left') {
      currentSlide.value -= 1
      slideClasses.value = `-${currentSlide.value * width_rem}rem`
    }
  }
}
</script>

<template>
  <div class="w-full h-screen text-[1.5vw]">
    <img
      src="@/assets/images/texture.png"
      alt="background"
      class="w-full absolute top-0 left-0 z-[-5] h-[445%] mobile:object-cover"
    />
    <img
      src="@/assets/images/Web bottle blue.png"
      alt="bottle"
      class="w-[80%] absolute top-[-55%] right-[-35%] z-[4] mobile:hidden block"
    />
    <img
      src="@/assets/images/Web bottle red.png"
      alt="bottle"
      class="hidden mobile:block mobile:w-[200%] absolute -top-1/4 right-[-80%] z-[4]"
    />

    <header class="flex w-full h-[30%] mobile:h-[27%] pl-[2%]">
      <div class="w-[12%] mobile:w-[16%]"></div>

      <div
        class="relative overflow-hidden w-[88%] mobile:w-[84%] border-l-[0.12rem] border-crem bg-header-desktop mobile:bg-header-mobile"
      >
        <img
          class="absolute mobile:left-[-20%] mobile:top-[-30%] mobile:w-[400%] w-full transform scale-110 opacity-[92%] left-0 -top-[30.5%] z-[-5]"
          src="@/assets/images/logo.svg"
          alt="logo"
        />
      </div>
    </header>

    <main class="flex w-full h-[77vh] mobile:h-[456px] pl-[2%]">
      <div
        class="w-[12%] mobile:w-[16%] h-full border-y-[0.12rem] border-crem flex justify-center items-center relative overflow-y-hidden"
      >
        <span
          class="flex absolute transform -rotate-90 bottom-0 animate-running-text"
        >
          <div
            v-for="idx in 3"
            :key="idx"
            class="text-3xl text-[white] text-opacity-75 w-[21rem] mobile:w-[17rem]"
          >
            not your typical wine
          </div>
        </span>
      </div>

      <div
        class="mobile:h-full mobile:w-[78%] mobile:pl-[8%] flex flex-col justify-center relative w-[76%] h-full border-l-[0.12rem] border-y-[0.12rem] border-crem bg-accent pl-[7%] py-0 pr-0 z-10"
      >
        <h1
          class="mobile:hidden text-[#fff] mt-[10%] tracking-[0.05rem] text-[2.3rem] font-bold leading-[2.5rem]"
        >
          <span class="block">Welcome to the future,</span>
          <span class="block">where the frontier between</span>
          <span class="block">real-world and metaverse assets</span> disappears.
        </h1>

        <h2
          class="hidden mobile:inline-block leading-[1.7rem] text-[#fff] tracking-[0.05rem] mb-[25%] text-[1.3rem]"
        >
          <span class="block">welcome</span>
          <span class="block">to the future,</span>
          <span class="block">where the frontier</span>
          <span class="block">between real-world</span>
          <span class="block">and metaverse</span>
          <span class="block">assets</span>
          <span class="block">disappears</span>
        </h2>
      </div>
    </main>

    <div class="flex h-[35%] mobile:h-[11%] pl-[2%] w-full">
      <div class="h-full w-[12%] mobile:w-[16.8%]"></div>
      <div class="h-full w-[88%] border-l-[0.12rem] border-crem"></div>
    </div>

    <div class="overflow-x-hidden">
      <section
        class="relative z-[5] flex h-[60vh] mobile:h-[53vh] mobile:mt-[17vh] pl-[2%] w-full"
      >
        <div class="h-full w-[12%] mobile:w-[16.9%]"></div>

        <div
          class="relative flex items-center h-full w-[88%] border-l-[0.12rem] border-crem bg-[#fff] px-[6%] py-0"
        >
          <span
            class="absolute top-[-24%] left-0 text-[5rem] font-bold text-[#fff] mobile:top[-7%] mobile:text-[1.4rem]"
            >WHY ARE WE HERE?</span
          >
          <img
            class="w-[7rem] mr-[-2rem] mobile:hidden"
            src="@/assets/images/mission-text.png"
            alt="Mission"
          />

          <span class="pr-[26%] pl-[9%] mobile:pr-0 mobile:pl-[3%]">
            <p
              class="opacity-70 font-medium leading-[1.9rem] mobile:mt-0 mobile:text-[0.8rem] mobile:leading-[1.55rem]"
            >
              we are solving the interoperability between the metaverse and
              real-world, where NFTs will represent tickets or
              proof-of-ownership for assets in both worlds
            </p>
            <p
              class="mt-[2.2rem] opacity-70 font-medium leading-[1.9rem] mobile:mt-0 mobile:text-[0.8rem] mobile:leading-[1.55rem]"
            >
              by pioneering the movement of real business to the metaverse. we
              want to achieve a new way of representing a real world brand with
              a real life product, in the new digital world.
            </p>
          </span>
        </div>
      </section>
      <section
        class="relative z-[5] flex h-[60vh] mobile:h-[50vh] w-full mt-[20%]"
      >
        <div
          class="relative flex items-center h-full w-[88%] mobile:w-[82%] border-l-[0.12rem] border-crem bg-[#fff] px-[6%]"
        >
          <span
            class="absolute top-[-26.5%] right-0 text-[5.6rem] font-bold text-[#fff] mobile:top-[-7.3%] mobile:right-[initial] mobile:left-[10%] mobile:text-[1.4rem]"
            >WHAT’S OUR VISION?</span
          >
          <span class="mr-[5%] ml-[23%] mobile:ml-[5%]">
            <p
              class="opacity-70 font-medium leading-[1.9rem] mobile:text-[0.8rem] mobile:leading-[1.55rem]"
            >
              let us describe you the first concept of meta wine that our
              project Vinum is about to bring to life.
            </p>
            <p
              class="mt-[2.2rem] opacity-70 font-medium leading-[1.9rem] mobile:text-[0.8rem] mobile:leading-[1.55rem]"
            >
              we want to launch an NFT collection that will serve as proof of
              ownership of an exclusive and limited edition real asset that gets
              more valuable as time goes, as well as digital asset deployed in
              the metaverse.
            </p>
          </span>

          <img
            class="w-[7rem] mobile:hidden"
            src="@/assets/images/concept-text.png"
            alt="Concept"
          />
        </div>
      </section>

      <section
        class="relative z-[5] flex h-[60vh] mobile:h-[68vh] pl-[2%] w-full mt-[20%]"
      >
        <div class="h-full w-[12%] mobile:h-[16%]"></div>

        <div
          class="relative flex items-center h-full w-[88%] border-l-[0.12rem] border-crem bg-[#fff] pl-[6%] pt-0"
        >
          <span
            class="absolute top-[-23.2%] left-0 text-[5rem] font-bold text-[#fff] mobile:top-[5.5%] mobile:text-[1.4rem]"
            >WHAT IS OUR PASSION?</span
          >
          <img
            class="w-[7rem] mobile:hidden"
            src="@/assets/images/wine-text.png"
            alt="Wine"
          />

          <span class="pr-[18%] pl-[9%] mobile:pr-[4%] mobile:pl-[6%]">
            <p
              class="opacity-70 font-medium leading-[1.9rem] mobile:text-[0.8rem] mobile:leading-[1.55rem]"
            >
              In the long process of wine researching, we have found and decided
              to pick special, and unique place for our wine origination.
            </p>
            <p
              class="mt-[2.2rem] opacity-70 font-medium leading-[1.9rem] mobile:text-[0.8rem] mobile:leading-[1.55rem]"
            >
              As for us the NFT was a discovery, Romanian wine will be the wine
              like no others ever presented to the world. The small country,
              unknown to the most, which has one of the best terrains for wine
              grapes cultivation, simply delighted us with its wine, culture and
              history.
            </p>
          </span>
        </div>
      </section>
    </div>

    <section
      class="bg-[#fff] mt-[30vh] relative pt-[8%] pb-[7%] pl-[14%] mobile:overflow-hidden"
    >
      <img
        src="@/assets/images/roadmap1.png"
        alt="roadmap title"
        class="w-[27rem] ml-[-2rem] mb-[1rem] mobile:w-[16rem] mobile:mb-0"
      />

      <div class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section1">
        <img
          class="w-[14rem] mobile:w-[9rem] ml-[-1rem]"
          src="@/assets/images/q4-21.png"
          alt='Q4"21'
        />

        <ul
          class="mt-[1rem] space-y-[0.5rem] list-dash text-[#525252] text-[0.95rem] mobile:text-[0.85rem]"
        >
          <li>Concept was born</li>
          <li>NFT project design</li>
          <li>Web developement</li>
        </ul>
      </div>

      <div class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section2">
        <img
          class="w-[14rem] mobile:w-[9rem] ml-[-1rem]"
          src="@/assets/images/q1-22.png"
          alt='Q1"22'
        />

        <ul
          class="mt-[1rem] text-[#525252] text-[0.95rem] mobile:text-[0.85rem] list-dash space-y-[0.5rem"
        >
          <li>Mint</li>
          <li>DAO creation</li>
          <li>NFT staking</li>
          <li>
            Wine initial production phase Real-life storage creation
            commencement
          </li>
        </ul>
      </div>

      <div class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section3">
        <img
          class="w-[14rem] mobile:w-[9rem] ml-[-1rem]"
          src="@/assets/images/q2-22.png"
          alt='Q2"22'
        />

        <ul
          class="mt-[1rem] text-[#525252] text-[0.95rem] mobile:text-[0.85rem] list-dash space-y-[0.5rem"
        >
          <li>Wine follow up phases and finalization, including design</li>
          <li>Real-life storage completion</li>
          <li>Connecting NFT staking with real life storage</li>
        </ul>
      </div>

      <div class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section4">
        <img
          class="w-[14rem] mobile:w-[9rem] ml-[-1rem]"
          src="@/assets/images/q3-22.png"
          alt='Q3"22'
        />

        <ul
          class="mt-[1rem] text-[#525252] text-[0.95rem] mobile:text-[0.85rem] list-dash space-y-[0.5rem"
        >
          <li>DAO decision-making begins onwards</li>
          <li>Next year harvest season planning</li>
          <li>Metaverse shop development proposal(s) initiation</li>
        </ul>
      </div>

      <div class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section5">
        <img
          class="w-[14rem] mobile:w-[9rem] ml-[-1rem]"
          src="@/assets/images/q4-22.png"
          alt='Q4"22'
        />

        <ul
          class="mt-[1rem] text-[#525252] text-[0.95rem] mobile:text-[0.85rem] list-dash space-y-[0.5rem"
        >
          <li>NFT mint - funding round</li>
          <li>Production phase restarts as in the previous cycle</li>
        </ul>
      </div>

      <img
        src="@/assets/images/roadmap.png"
        alt="leaves"
        class="absolute right-0 top-0 h-full mobile:right-[-75%] mobile:top-[-10%] mobile:w-[144%]"
      />
    </section>

    <section
      class="flex flex-col justify-end items-center relative h-[167vh] mobile:h-auto w-full bg-texture z-[-2]"
    >
      <img
        src="@/assets/images/slogan.svg"
        class="w-full h-[82vh] mobile:v-[initial] mt-[-2.5%] mr-0 z-[-5]"
        alt="not your typical wine"
      />

      <div
        class="flex relative w-[79%] mobile:w-[88%] h-full mobile:h-1/2 bg-accent mb-[8%]"
      >
        <img
          src="@/assets/images/Web bottle red.png"
          alt="bottle vinum"
          class="absolute w-3/4 mobile:w-[70%] top-1/4 mobile:top-[8%] transform translate-y-[-55%] ml-[-15%] mobile:ml-[-11%]"
        />

        <div class="flex flex-col justify-center ml-[38%] mobile:ml-[5%]">
          <h2
            class="text-[#fff] text-[5rem] font-bold leading-[5rem] mobile:ml-[38%] mobile:mt-[2rem] mobile:text-[1.8rem] mobile:leading-[2rem]"
          >
            GENESIS NFT <span style="display: block">COLLECTION</span>
          </h2>

          <ul
            class="list-dash text-[#fff] opacity-80 font-light text-[1rem] space-y-[0.5rem] mt-[1.5rem]"
          >
            <li>Harvest year 2021</li>
            <li>Total supply 10,000</li>
            <li>10 wine types, 1000 editions each</li>
            <li>Public sale details - TBD</li>
            <li class="mobile:mb-[2rem]">
              The NFTs having voting rights embeded
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="w-full h-[35.5rem] max-h-[35.5rem] mobile:h-auto bg-accent">
      <div
        class="flex w-full h-[35.5rem] max-h-[35.5rem] overflow-x-hidden relative mobile:h-auto transition-all"
      >
        <VideoSlider />
      </div>
    </section>

    <section class="flex flex-col h-[100vh] w-full bg-accent pt-[2.6%] pr-[3%]">
      <div class="w-full flex h-[25%]">
        <div
          class="w-[88%] mobile:w-[98%] border-r-[0.12rem] border-crem"
        ></div>
        <div class="w-[12%]"></div>
      </div>

      <div class="flex w-full h-full">
        <div
          class="flex items-center w-[88%] mobile:w-[96%] h-full bg-[#fff] pr-[5%] pl-[23%] mobile:pt-[5%] mobile:pl-[15%]"
        >
          <h2 class="hidden mobile:block text-accent font-bold text-[1.7rem]">
            NFT HOLDER
          </h2>

          <ul
            class="flex mobile:block flex-col h-full justify-beetwen pt-[9.5%] pr-[13%] pb-[8%]"
          >
            <li
              class="list-dash opacity-[89%] leading-[1.8rem] mobile:text-[0.8rem] mobile:mt-[1.5rem]"
            >
              Proof of ownership for digital and real-life exclusive and asset
              that is limited in production
            </li>
            <li
              class="list-dash opacity-[89%] leading-[1.8rem] mobile:text-[0.8rem] mt-[1.5rem]"
            >
              NFT Staking = Wine storage, which increases the wine value and
              gives the owner a special discount for the upcoming year harvest
              mints if held over specific time period
            </li>
            <li
              class="list-dash opacity-[89%] leading-[1.8rem] mobile:text-[0.8rem] mt-[1.5rem]"
            >
              NFT Burn = the owner is delivered his unique and exclusive wine
              bottle right to his door
            </li>
            <li
              class="list-dash opacity-[89%] leading-[1.8rem] mobile:text-[0.8rem] mt-[1.5rem]"
            >
              NFT = DAO voting interest. Future vital decisions will be taken by
              the DAO and future proposal will be considered by them.
            </li>
          </ul>

          <h2
            class="writting-mode-vr text-accent text-[3.35rem] font-bold mobile:hidden"
          >
            NFT HOLDER
          </h2>
        </div>
        <div
          class="w-[12%] h-[100%] border-y-[0.12rem] border-crem bg-holder transform rotate-180"
        ></div>
      </div>
    </section>

    <section class="flex w-full h-[104vh] bg-accent mobile:h-[60vh]">
      <div
        class="relative w-[15%] h-full bg-holder mobile:hidden mobile:bg-none before:absolute before:w-full before:h-[0.05rem] before:bg-[#fff] before:top-[14%] before:right-[-40%] after:content-[''] after:absolute after:w-full after:h-[14%] after:top-0 after:bg-accent mobile:break-before-all"
      ></div>
      <div
        class="flex flex-col items-center justify-center w-[73%] h-full border-x-[0.12rem] border-crem pt-[7%] mobile:w-full mobile:border-none"
      >
        <h2 class="text-[#fff] text-[3rem] font-bold mobile-[1.5rem]">
          ALLOCATION OF FUNDS
        </h2>

        <img
          class="w-[80%] mt-[1rem] mobile:w-[93%]"
          src="@/assets/images/graf.png"
          alt="allocation of funds"
        />
      </div>

      <div
        class="relative transform rotate-180 w-[15%] h-full bg-holder mobile:hidden mobile:bg-none before:content-[''] before:absolute before:w-full before:h-[0.05rem] before:bg-[#fff] before:top-[14%] before:right-[-40%] after:content-[''] after:absolute after:w-full after:h-[14%] after:top-0 after:bg-accent mobile:break-before-all mobile:break-after-all"
      ></div>
    </section>

    <section class="flex w-full h-[37vh] bg-accent mobile:h-[60vh]">
      <div
        class="relative w-[29.8%] h-full bg-holder border-r-[0.12rem] border-crem after:content-[''] after:absolute after:w-[71%] after:h-[0.05rem] bg-[#fff] after:bottom-0 after:right-0"
      ></div>

      <div
        class="team_main flex items-center bg-[#fff] w-[174%] h-full mobile:flex-col mobile:items-[initial] mobile:justify-center mobile:pl-[4.5%]"
      >
        <h2
          class="writting-mode-vr text-accent font-bold transform -scale-100 text-[3.3rem] ml-[5%] mobile:scale-0 mobile:text-[2.1rem] mobile:ml-[4%]"
        >
          TEAM
        </h2>

        <p
          class="opacity-90 leading-[1.83rem] text-[0.9rem] ml-[5%] mr-[35%] mobile:mr-[15%]"
        >
          We are a small team of seven open-minded friends that has overall
          expertise in wine business, design, and financial industry. We do
          share the common believe in the in bright future of Web3, and the
          deployment & transition of conventional business onto the
          decentralized world.
        </p>
      </div>
    </section>

    <div class="flex w-full h-[14vh] bg-accent">
      <div class="w-[14.65%] border-r-[0.12rem] border-crem"></div>
    </div>

    <div class="flex w-full h-[14vh]">
      <div class="w-[14.65%] border-r-[0.12rem] border-accent"></div>
    </div>

    <section class="flex w-full h-[83vh] pl-[4%] mobile:h-[70vh]">
      <div
        class="w-[12.6%] border-accent border-t-[0.12rem] border-r-[0.12rem] bg-holder mt-[-0.04%]"
      ></div>

      <div
        class="flex flex-col justify-center w-full h-full border-t-[0.12rem] border-accent pl-[7.5%]"
      >
        <h2
          class="text-accent text-[4.5rem] font-bold mobile:mt-0 mobile:text-[1.7rem]"
        >
          WE ARE EXPANDING!
        </h2>

        <ul>
          <li
            class="mt-[0.3rem] text-accent text-[1rem] mobile:text-[0.8rem] font-bold"
          >
            - Web3 developer (Solidity)
          </li>
          <li
            class="mt-[0.3rem] text-accent text-[1rem] mobile:text-[0.8rem] font-bold"
          >
            - Community manager (Twitter & Discord)
          </li>
          <li
            class="mt-[0.3rem] text-accent text-[1rem] mobile:text-[0.8rem] font-bold"
          >
            - Marketing lead (Social media manager & strategy)
          </li>
        </ul>

        <p
          class="text-accent opacity-90 leading-[1.8rem] mr-[30%] mt-[3rem] mobile:leading-[1.4rem] mobile:text-[0.8rem] mobile:mr-[10%] mobile:mt-[2rem]"
        >
          <span class="block"
            >We are happy to work with people that are willing to share our
            vision and are part of the decentralized movement.</span
          >
          Do not hesitate to mail us at vinumw3@gmail.com with a simplified
          resume, a short description of yourself, and indicate the position you
          want to apply for.
        </p>
      </div>
    </section>

    <footer
      class="flex flex-col justify-center items-center w-full bg-accent h-[50vh]"
    >
      <h2 class="text-[#fff] text-[1.8rem]">CONTACT US</h2>
      <h3 class="text-[#fff] text-[1rem] font-medium mt-[0.4rem]">
        vinumw3@gmail.com
      </h3>

      <div class="flex justify-between w-[10rem] mt-[2rem]">
        <img class="w-[1.2rem]" src="@/assets/images/mail.png" alt="mail" />
        <img class="w-[1.2rem]" src="@/assets/images/tw.png" alt="twitter" />
        <img
          class="w-[1.2rem]"
          src="@/assets/images/etherscan.png"
          alt="etherscan"
        />
        <img
          class="w-[1.2rem]"
          src="@/assets/images/opensea.png"
          alt="opensea"
        />
      </div>

      <h4
        class="text-[#fff] opacity-70 text-[1rem] font-extralight mt-[3.7rem]"
      >
        © 2022 BY VINUM WEB3
      </h4>
    </footer>
  </div>
</template>

<style></style>
