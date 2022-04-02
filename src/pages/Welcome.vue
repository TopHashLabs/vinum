<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const mission = gsap.timeline({
    scrollTrigger: {
      trigger: '#mission',
      start: 'center bottom'
    }
  })
  const concept = gsap.timeline({
    scrollTrigger: {
      trigger: '#concept',
      start: 'center bottom'
    }
  })
  const wine = gsap.timeline({
    scrollTrigger: {
      trigger: '#wine',
      start: 'center bottom'
    }
  })

  mission.from('#mission', { x: '100%', duration: 1, opacity: 0 })
  concept.from('#concept', { x: '-100%', duration: 1, opacity: 0 })
  wine.from('#wine', { x: '100%', duration: 1, opacity: 0 })
  const roadmap1 = gsap.timeline({
    scrollTrigger: {
      trigger: '#roadmap_section1',
      start: 'center center'
    }
  })
  const roadmap2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#roadmap_section2',
      start: 'center center'
    }
  })
  const roadmap3 = gsap.timeline({
    scrollTrigger: {
      trigger: '#roadmap_section3',
      start: 'center center'
    }
  })
  const roadmap4 = gsap.timeline({
    scrollTrigger: {
      trigger: '#roadmap_section4',
      start: 'center center'
    }
  })
  const roadmap5 = gsap.timeline({
    scrollTrigger: {
      trigger: '#roadmap_section5',
      start: 'center center'
    }
  })

  roadmap1.from('#roadmap_section1', { y: '32%', duration: 0.88, opacity: 0 })
  roadmap2.from('#roadmap_section2', { y: '32%', duration: 0.88, opacity: 0 })
  roadmap3.from('#roadmap_section3', { y: '32%', duration: 0.88, opacity: 0 })
  roadmap4.from('#roadmap_section4', { y: '32%', duration: 0.88, opacity: 0 })
  roadmap5.from('#roadmap_section5', { y: '32%', duration: 0.88, opacity: 0 })
})
</script>

<template>
  <div class="w-full h-screen text-[1.5vw]">
    <img
      src="@/assets/images/texture.png"
      alt="background"
      class="w-full absolute top-0 left-0 z-[-5] h-[445%] mobile:object-cover"
    />
    <img
      src="@/assets/images/Web-bottle-blue.png"
      alt="bottle"
      class="w-[96%] absolute top-[-65%] sm right-[-35%] z-[4] mobile:top-[10%] mobile:left-[40%] mobile:transfrom mobile:scale-[2.5]"
    />
    <header class="flex w-full h-[30%] mobile:h-[27%] pl-[2%]">
      <div class="w-[12%] mobile:w-[16%]"></div>

      <div
        class="relative overflow-hidden w-[88%] mobile:w-[84%] border-l-[0.12rem] border-crem "
      >
      <div class="absolute inset-y-0 left-0 right-[10%] bg-header-desktop mobile:bg-header-mobile"></div>
        <img
          class="absolute mobile:left-[140%] mobile:top-0 transform mobile:scale-[4] w-full scale-[1.3] opacity-[92%] left-[10%] -top-[28%] z-[-5]"
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
            class="text-3xl text-[#fff] text-opacity-75 w-[21rem] mobile:w-[16.5rem] mobile:text-2xl"
          >
            not your typical wine
          </div>
        </span>
      </div>

      <div
        class="mobile:h-full mobile:w-[78%] mobile:pl-[8%] flex flex-col justify-center relative w-[76%] h-full border-l-[0.12rem] border-y-[0.12rem] border-crem bg-accent pl-[7%] py-0 pr-0 z-10"
      >
      <img src="@/assets/images//glass.svg" class="mobile:mb-6" width="64" alt="">
        <h1
          class="mobile:hidden text-[#fff] mt-[10%] tracking-[0.05rem] text-[2.3rem] font-bold leading-[2.5rem]"
        >
          <span class="block">Welcome to the future,</span>
          <span class="block">where the frontier between</span>
          <span class="block">real-world and metaverse assets</span> disappears.
        </h1>

        <h2
          class="hidden mobile:inline-block leading-[1.7rem] text-[#fff] tracking-[0.05rem] text-[1.3rem]"
        >
          <span class="block">Welcome</span>
          <span class="block">to the future,</span>
          <span class="block">where the frontier</span>
          <span class="block">between real-world</span>
          <span class="block">and metaverse</span>
          <span class="block">assets</span>
          <span class="block">disappears</span>
        </h2>
        <div class=" mt-16 mobile:mt-6">
          <BaseButton color="white" to="/sale">
            <span class="text-xl text-accent"> Get your bottle </span>
            <BaseIcon class="text-accent" name="chevron-right" />
          </BaseButton>
        </div>
      </div>
    </main>

    <div class="flex h-[35%] mobile:h-[11%] pl-[2%] w-full z-[-55]">
      <div class="h-full w-[12%] mobile:w-[16.8%]"></div>
      <div
        class="h-full w-[88%] border-l-[0.12rem] border-crem pt-[12%] mobile:pt-[-7%]"
      ></div>
    </div>

    <section
      id="mission"
      class="relative z-[5] flex h-[60vh] mobile:h-[45vh] mobile:mt-[17vh] pl-[2%] w-full"
    >
      <span
        class="absolute top-[-18%] left-[14%] mobile:top-[-7.5%] ml-[5%] text-[5rem] text-left font-bold text-[#fff] mobile:text-[1.4rem]"
        >WHY ARE WE HERE?</span
      >
      <div class="h-full w-[12%] mobile:w-[16.9%]"></div>

      <div
        class="relative flex items-center h-full w-[88%] border-l-[0.12rem] border-crem bg-[#fff] px-[6%] py-0"
      >
        <img
          class="w-[7rem] mr-[-2rem] mobile:hidden"
          src="@/assets/images/mission-text.png"
          alt="Mission"
        />

        <span class="pr-[26%] pl-[9%] mobile:pr-0 mobile:pl-[3%]">
          <p
            class="opacity-70 font-normal leading-[1.9rem] mobile:mt-0 mobile:text-[0.8rem] mobile:leading-[1.55rem]"
          >
            We are solving the interoperability between the metaverse and a real world, where NFTs will represent tickets or proof-of-ownership for assets in both worlds.
          </p>
          <p
            class="mt-[2.2rem] opacity-70 font-normal leading-[1.9rem] mobile:mt-0 mobile:text-[0.8rem] mobile:leading-[1.55rem]"
          >
            By pioneering the movement of real business to the metaverse, we want to achieve a new way of representing a real-world brand with a real life product, in the new digital world.
          </p>
        </span>
      </div>
    </section>
    <section
      id="concept"
      class="relative z-[5] flex h-[60vh] mobile:h-[50vh] w-full mt-[20%]"
    >
      <div
        class="relative flex items-center h-full w-[88%] mobile:w-[82%] border-l-[0.12rem] border-crem bg-[#fff] px-[6%]"
      >
        <span
          class="absolute top-[-20.5%] right-0 text-[5.6rem] font-bold text-[#fff] mobile:top-[-7%] mobile:right-[initial] mobile:left-[10%] mobile:text-[1.4rem]"
          >WHAT’S OUR VISION?</span
        >
        <span class="mr-[5%] ml-[23%] mobile:ml-[5%]">
          <p
            class="opacity-70 font-normal leading-[1.9rem] mobile:text-[0.8rem] mobile:leading-[1.55rem]"
          >
            Let us describe to you the first concept of meta wine that our project Vinum is about to bring to life.
          </p>
          <p
            class="mt-[2.2rem] opacity-70 font-normal leading-[1.9rem] mobile:text-[0.8rem] mobile:leading-[1.55rem]"
          >
            We want to launch an NFT collection that will serve as proof of ownership for exclusive, and limited edition real assets that get more valuable with time, as well as digital assets deployed in the metaverse.
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
      id="wine"
      class="relative z-[5] flex h-[60vh] mobile:h-[50vh] pl-[2%] w-full mt-[20%]"
    >
      <div class="h-full w-[12%] mobile:h-[16%]"></div>

      <div
        class="relative flex items-center h-full w-[88%] border-l-[0.12rem] border-crem bg-[#fff] pl-[6%] pt-0"
      >
        <span
          class="absolute top-[-18.5%] left-0 text-[5rem] font-bold text-[#fff] mobile:top-[-7%] mobile:text-[1.4rem]"
          >WHAT IS OUR PASSION?</span
        >
        <img
          class="w-[7rem] mobile:hidden"
          src="@/assets/images/wine-text.png"
          alt="Wine"
        />

        <span class="pr-[18%] pl-[9%] mobile:pr-[4%] mobile:pl-[6%]">
          <p
            class="opacity-70 font-normal leading-[1.9rem] mobile:text-[0.8rem] mobile:leading-[1.55rem]"
          >
            We have been involved in the wine industry for years, and built a rich expertise in the process of wine production. Besides that, during 2021, we couldn’t stay on the side-line, and kept learning about blockchain, NFTs, and Web3.
          </p>
          <p
            class="mt-[2.2rem] opacity-70 font-normal leading-[1.9rem] mobile:text-[0.8rem] mobile:leading-[1.55rem]"
          >
            Realizing the potential of the use case, and the potential of the market, we have decided to combine them, and start building Vinum Web3.
          </p>
        </span>
      </div>
    </section>

    <section
      class="bg-[#fff] mt-[30vh] relative pt-[8%] pb-[7%] pl-[14%] mobile:overflow-hidden"
    >
      <img
        src="@/assets/images/roadmap1.png"
        alt="roadmap title"
        class="w-[27rem] ml-[-2rem] mb-[1rem] mobile:w-[16rem] mobile:mb-0"
      />

      <div
        id="roadmap_section1"
        class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section1"
      >
        <h1 class="text-accent text-5xl  font-extrabold">Q1"22</h1>

        <ul
          class="mt-[1rem] space-y-[0.5rem] list-dash text-[#525252] text-[0.95rem] mobile:text-[0.85rem]"
        >
          <li>Concept is born</li>
          <li>Project design</li>
          <li>Web developement</li>
        </ul>
      </div>

      <div
        id="roadmap_section2"
        class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section2"
      >
    
        <h1 class="text-accent text-5xl  font-extrabold">Q2"22</h1>

        <ul
          class="mt-[1rem] text-[#525252] text-[0.95rem] mobile:text-[0.85rem] list-dash space-y-[0.5rem"
        >
          <li>Mint</li>
          <li>DAO creation</li>
          <li>NFT staking</li>
          <li>Real-life storage creation commencement</li>
        </ul>
      </div>

      <div
        id="roadmap_section3"
        class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section3"
      >

        <h1 class="text-accent text-5xl  font-extrabold">Q3"22</h1>


        <ul
          class="mt-[1rem] text-[#525252] text-[0.95rem] mobile:text-[0.85rem] list-dash space-y-[0.5rem"
        >
          <li>Winemaking phase starts</li>
          <li>Wine follow up phases and finalization, including design</li>
          <li>Real-life storage completion</li>
          <li>Connecting NFT staking with real life storage</li>
        </ul>
      </div>

      <div
        id="roadmap_section4"
        class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section4"
      >

        <h1 class="text-accent text-5xl  font-extrabold">Q4"22</h1>


        <ul
          class="mt-[1rem] text-[#525252] text-[0.95rem] mobile:text-[0.85rem] list-dash space-y-[0.5rem"
        >
          <li>DAO proposals initiation</li>
          <li>Next year harvest season planning</li>
          <li>Metaverse shop development proposals initiation</li>
        </ul>
      </div>

      <div
        id="roadmap_section5"
        class="mt-[3.8rem] pr-[70%] mobile:pr-[35%] roadmap_section5"
      >

        <h1 class="text-accent text-5xl  font-extrabold">Q1"23</h1>


        <ul
          class="mt-[1rem] text-[#525252] text-[0.95rem] mobile:text-[0.85rem] list-dash space-y-[0.5rem"
        >
          <li>NFT mint - funding round(new year cycle)</li>
          <li>Wine production phase restarts</li>
        </ul>
      </div>

      <img
        src="@/assets/images/roadmap.png"
        alt="leaves"
        class="absolute right-0 top-0 h-full mobile:right-[-5%] mobile:top-[4%] mobile:h-[50%]"
      />
    </section>

    <section
      class="flex flex-col justify-end items-center relative h-[167vh] mobile:h-auto w-full bg-texture z-[-2]"
    >
      <img
        src="@/assets/images/slogan.svg"
        class="w-full h-[82vh] mobile:h-[32vh] mt-[-2.5%] mr-0 z-[-5]"
        alt="not your typical wine"
      />

      <div
        class="flex relative w-[79%] mobile:w-[88%] h-full mobile:h-1/2 bg-accent mb-[8%]"
      >
        <img
          src="@/assets/images/Web-bottle-red.png"
          alt="bottle vinum"
          class="absolute w-3/4 mobile:w-[70%] top-1/4 mobile:top-[8%] transform translate-y-[-55%] ml-[-15%] mobile:ml-[-10%]"
        />

        <div class="flex flex-col justify-center ml-[38%] mobile:ml-[5%]">
          <h2
            class="text-[#fff] text-[5rem] font-bold leading-[5rem] mobile:ml-[38%] mobile:mt-[2rem] mobile:text-[1.8rem] mobile:leading-[2rem]"
          >
            GENESIS COLLECTION <span style="display: block">COLLECTION</span>
          </h2>

          <ul
            class="list-dash text-[#fff] opacity-80 font-light text-[1rem] space-y-[0.5rem] mt-[1.5rem] mobile:p-2 mobile:mt-[3.5rem]"
          >
            <li>Harvest year 2022</li>
            <li>Total supply 10,000</li>
            <li>10 wine types, 1000 editions each</li>
            <li>Public sale details - TBD</li>
            <li class="mobile:mb-[2rem]">
              Genesis collection NFTs have embedded voting rights
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="bg-accent">
      <VideoSlider />
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
          class="flex items-center w-[88%] mobile:w-[96%] h-full bg-[#fff] pr-[5%] pl-[23%] mobile:flex-col mobile:py-[5%] mobile:pl-[15%]"
        >
          <h2 class="hidden mobile:block text-accent font-bold text-[1.7rem]">
            NFT HOLDER
          </h2>

          <ul
            class="flex mobile:block flex-col h-full justify-beetwen py-[18%] mobile:pt-0 pr-[13%] "
          >
            <li
              class="list-dash opacity-[89%] leading-[1.8rem] mobile:text-[0.8rem] mobile:mt-[1.5rem]"
            >
              Proof of ownership for digital and real-life exclusive assets that are limited in production.
            </li>
            <li
              class="list-dash opacity-[89%] leading-[1.8rem] mobile:text-[0.8rem] mt-[1.5rem]"
            >
              NFT Staking = Wine storage, which increases the wine value and gives the owner a special discount for the upcoming year harvest mints if held over a specific time period.
            </li>
            <li
              class="list-dash opacity-[89%] leading-[1.8rem] mobile:text-[0.8rem] mt-[1.5rem]"
            >
              NFT Burn = the owner gets his unique and exclusive wine bottle delivered right to his door.
            </li>
            <li
              class="list-dash opacity-[89%] leading-[1.8rem] mobile:text-[0.8rem] mt-[1.5rem]"
            >
              NFT = DAO voting interest. Future vital decisions and direction of the project will be taken by the DAO.
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
        <h2 class="text-[#fff] text-[3rem] font-bold mobile:text-[1.5rem]">
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
          class="writting-mode-vr text-accent font-bold transform -scale-100 text-[3.3rem] ml-[5%] mobile:hidden"
        >
          TEAM
        </h2>
        <h2 class="hidden mobile:block text-accent font-bold text-[2.1rem]">
            TEAM
          </h2>

        <p
          class="opacity-90 leading-[1.83rem] text-[0.9rem] ml-[5%] mr-[35%] mobile:mr-[15%]"
        >
          We are a small team of seven open-minded friends that has overall expertise in design, wine business, financial industry, WEB3 development. We do share the common belief in the bright future of WEB3, and the deployment & transition of conventional businesses onto the decentralized world.
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
            - Community manager (administrating Twitter, Discord)
          </li>
          <li
            class="mt-[0.3rem] text-accent text-[1rem] mobile:text-[0.8rem] font-bold"
          >
            - Marketing manager (social media manager & ambassador & strategy development)
          </li>
        </ul>

        <p
          class="text-accent opacity-90 leading-[1.8rem] mr-[30%] mt-[3rem] mobile:leading-[1.4rem] mobile:text-[0.8rem] mobile:mr-[10%] mobile:mt-[2rem]"
        >
          <span class="block">
            We are happy to work with people that are willing to share our vision and are part of the decentralized movement.
          </span>
          Do not hesitate to mail us at <span class="font-medium">vinumw3@gmail.com</span> with a simplified resume, a short description of yourself, and indicate the position you want to apply for.
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
