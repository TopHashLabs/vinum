<script setup lang="ts">
import { Sort } from '@/types'
const counter = ref<number>(0)
const loading = ref<boolean>(false)

const sortes = reactive<Sort[]>([
  {
    img: 'rose',
    amount: 0
  },
  {
    img: 'blue',
    amount: 0
  },
  {
    img: 'red',
    amount: 0
  }
])
let currentSort = ref<Sort>(sortes[0])

function selectSort(sort: Sort): void {
  currentSort.value = sort
  counter.value = sort.amount
}

watch(counter, () => {
  sortes.forEach((s) => {
    if (s.img === currentSort.value.img) {
      s.amount = counter.value
    }
  })
})
</script>

<template>
  <div>
    <section
      class="flex flex-row mobile:relative mobile:flex-col mobile:mt-4 mt-20 col-span-4"
    >
      <div class="flex flex-col basis-1/2 mt-4">
        <div class="flex flex-col space-y-4">
          <h1 class="text-7xl mobile:text-5xl text-left">
            Welc<span
              class="inline-block border-[7px] mobile:border-[5px] border-white rounded-full w-[98px] h-[40px] mobile:w-[68px] mobile:h-[27px]"
            ></span
            >me to the future
          </h1>
          <p class="text-3xl mobile:text-xl">
            where the <span class="italic mr-0.5">f</span>rontier between
            <span class="text-[#537FFF] italic">real-world & metaverse</span>
            assets <span class="italic mr-0.5">d</span>isappears.
          </p>
        </div>
        <SocialList class="mt-20 mobile:hidden" />
      </div>
      <div class="basis-1/3 mobile:mt-8 flex flex-col">
        <Bottle :name="currentSort.img" />
        <p class="text-white/50 text-center mobile:text-left">0/1000 Minted</p>
      </div>
      <div
        class="basis-1/4 mt-4 flex flex-col justify-center mobile:space-y-4 space-y-4"
      >
        <div class="flex justify-between items-center">
          <div class="flex space-x-2 items-center">
            <img src="@/assets/images/eth.svg" alt="" />
            <span>0.065 ETH</span>
          </div>
          <p class="font-semibold text-xl">
            <span class="italic">M</span>erlot
          </p>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex space-x-3 items-center">
            <BaseDiagram :currentValue="55" />
            <p class="italic">red / semidry</p>
          </div>
          <p class="text-white/50 italic">2022</p>
        </div>
        <div class="space-y-4 pt-10 mobile:pt-0 mobile:space-y-6">
          <Counter v-model="counter" />
          <SortSelect
            class="mobile:absolute mobile:top-[40%] mobile:right-0 mobile:h-[177px]"
            @select="selectSort"
            :options="sortes"
          />
          <Web3Button :options="sortes"></Web3Button>
        </div>
      </div>
    </section>
    <div class="w-full h-0.5 bg-[#333333] mt-[140px] mb-[110px] mobile:mt-[76px] mobile:mb-[28px]"></div>
    <SocialList class="hidden mobile:flex mobile:justify-center mobile:mb-28" />
    <section
      id="about"
      class="flex flex-col max-w-[851px] mx-auto mobile:mx-0 space-y-4 items-center mobile:items-start"
    >
      <div
        class="mb-2 text-sm font-grotesk py-0.5 px-2.5 bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60] rounded-md text-center"
      >
        Mission
      </div>
      <h1 class="text-4xl font-semibold italic">Why are we here?</h1>
      <p class="text-base text-white/50 text-center mobile:text-left">
        We are solving the interoperability between the metaverse and a real
        world, where NFTs will represent tickets or proof-of-ownership for
        assets in both worlds. By pioneering the movement of real business to
        the metaverse, we want to achieve a new way of representing a real-world
        brand with a real life product, in the new digital world.
      </p>
    </section>
    <div class="w-full h-0.5 bg-[#333333] mt-[112px] mb-[82px] mobile:hidden block"></div>
    <Slider />
    <section
      id="concept"
      class="flex mobile:flex-col space-x-[140px] mobile:space-x-0 mobile:space-y-[115px] mt-56 mobile:mt-24 items-start"
    >
      <div
        class="basis-1/2 flex flex-col max-w-[851px] mx-auto mobile:mx-0 space-y-4 items-start"
      >
        <div
          class="mb-2 text-sm font-grotesk py-0.5 px-2.5 bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60] rounded-md text-center"
        >
          Concept
        </div>
        <h1 class="text-4xl font-semibold">
          What’s<span
            class="inline-block border-4 border-white rounded-full w-[51px] h-[23px]"
          ></span
          >ur vision?
        </h1>
        <p class="text-base text-white/50 text-left">
          We want to launch an NFT collection that will serve as proof of
          ownership of an exclusive and limited edition real asset that gets
          more valuable as time goes, as well as digital asset deployed in the
          metaverse.
        </p>
      </div>
      <div
        class="basis-1/2 flex flex-col max-w-[851px] mx-auto mobile:mx-0 space-y-4 items-start"
      >
        <div
          class="mb-2 text-sm font-grotesk py-0.5 px-2.5 bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60] rounded-md text-center"
        >
          Wine
        </div>
        <h1 class="text-4xl font-semibold">
          What’s<span
            class="inline-block border-4 border-white rounded-full w-[51px] h-[23px]"
          ></span
          >ur passion?
        </h1>
        <p class="text-base text-white/50 text-left">
          We have been involved in the wine industry for years, and built a rich
          expertise in the process of wine production. Besides that, during
          2021, we couldn’t stay on the side-line, and kept learning about
          blockchain, NFTs, and Web3. Realizing the potential of the use case,
          and the potential of the market, we have decided to combine them, and
          start building Vinum Web3.
        </p>
      </div>
    </section>
    <div
      id="roadmap"
      class="w-full h-0.5 bg-[#333333] mobile:mt-[100px] mobile:mb-[114px] mt-[110px] mb-[90px]"
    ></div>
    <section>
      <h1
        class="text-4xl font-semibold text-center mb-[130px] mobile:mb-[80px]"
      >
        R<span
          class="inline-block border-4 border-white rounded-full w-[58px] h-[23px]"
        ></span
        >admap
      </h1>
      <div
        class="flex mobile:flex-col mobile:space-x-0 mobile:items-center mobile:space-y-4 space-x-[30px] justify-start"
      >
        <div
          class="bg-white text-black font-grotesk font-medium w-[300px] h-[58px] flex items-center rounded-[10px] justify-center mobile:w-full"
        >
          Q1``22
        </div>
        <ul class="text-white">
          <li>Concept was born</li>
          <li>NFT design project</li>
          <li>Web development</li>
        </ul>
      </div>
      <div class="flex flex-col mx-36 -mt-3.5 mobile:mx-5 mobile:-mt-[88px]">
        <div
          class="self-start border-b-[0.5px] border-l border-[#333333] rounded-bl-2xl w-[98%] h-[58px] mobile:h-[110px]"
        ></div>
        <div
          class="self-end border-r border-t-[0.5px] border-[#333333] rounded-tr-2xl w-[98%] h-[58px]"
        ></div>
      </div>
      <div
        class="flex space-x-[30px] justify-end mobile:flex-col-reverse mobile:space-x-0 mobile:items-center"
      >
        <ul class="text-white text-right mobile:text-center mobile:my-4">
          <li>Mint</li>
          <li>DAO creation</li>
          <li>NFT staking</li>
          <li>Real-life storage creation commencement</li>
          <li class="text-[#5A81F1]">TBA</li>
        </ul>
        <div
          class="bg-[#222222] text-white font-grotesk font-medium w-[300px] h-[58px] flex items-center rounded-[10px] justify-center mobile:w-full"
        >
          Q2``22
        </div>
      </div>
      <div class="flex flex-col mx-36 mobile:mx-4 mobile:-mt-[152px] -mt-16">
        <div
          class="self-end border-b-[0.5px] border-r border-[#333333] rounded-br-2xl w-[98%] h-[105px] mobile:h-[145px]"
        ></div>
        <div
          class="self-start border-l border-t-[0.5px] border-[#333333] rounded-tl-2xl w-[98%] h-[58px]"
        ></div>
      </div>
      <div
        class="flex mobile:flex-col mobile:space-x-0 mobile:space-y-4 space-x-[30px] justify-start mobile:items-center"
      >
        <div
          class="bg-[#222222] text-white font-grotesk font-medium w-[300px] h-[58px] flex items-center rounded-[10px] justify-center mobile:w-full"
        >
          Q3``22
        </div>
        <ul class="text-white mobile:text-center mobile:w-[90%] mobile:mx-auto">
          <li>Winemaking phase starts</li>
          <li>Wine follow up phases and finalization, including design</li>
          <li>Real-life storage completion</li>
          <li>Connecting NFT staking with real life storage</li>
        </ul>
      </div>
      <div class="flex flex-col mx-36 mobile:mx-5 mobile:-mt-[124px]">
        <div
          class="self-start -mt-[37px] border-b-[0.5px] border-l border-[#333333] rounded-bl-2xl w-[98%] h-[85px] mobile:h-44"
        ></div>
        <div
          class="self-end border-r border-t-[0.5px] border-[#333333] rounded-tr-2xl w-[98%] h-[58px]"
        ></div>
      </div>
      <div
        class="flex mobile:flex-col-reverse mobile:items-center mobile:space-x-0 space-x-[30px] justify-end"
      >
        <ul class="text-white text-right mobile:text-center mobile:my-4">
          <li>DAO proposals initiation</li>
          <li>Next year harvest season planning</li>
          <li>Metaverse shop development proposals initiation</li>
          <li class="text-[#5A81F1]">TBA</li>
        </ul>
        <div
          class="bg-[#222222] text-white font-grotesk font-medium w-[300px] h-[58px] flex items-center rounded-[10px] justify-center mobile:w-full"
        >
          Q4``22
        </div>
      </div>
      <div class="flex flex-col mx-36 mobile:mx-5 -mt-10 mobile:-mt-[152px]">
        <div
          class="self-end border-b-[0.5px] border-r border-[#333333] rounded-br-2xl w-[98%] h-[85px] mobile:h-[145px]"
        ></div>
        <div
          class="self-start border-l border-t-[0.5px] border-[#333333] rounded-tl-2xl w-[98%] h-[58px]"
        ></div>
      </div>
      <div
        class="flex mobile:flex-col mobile:space-x-0 mobile:space-y-4 mobile:items-center space-x-[30px] justify-start"
      >
        <div
          class="bg-[#222222] text-white font-grotesk font-medium w-[300px] h-[58px] flex items-center rounded-[10px] justify-center mobile:w-full"
        >
          Q1``23
        </div>
        <ul class="text-white mobile:text-center">
          <li>NFT mint - funding round (new year cycle)</li>
          <li>Wine production phase restarts</li>
        </ul>
      </div>
    </section>
    <div
      class="w-full h-0.5 bg-[#333333] mobile:mt-[100px] mobile:mb-[114px] mt-[174px] mb-[90px] mobile:hidden"
    ></div>
    <section
      id="genesis"
      class="bg-[#EFEFEF] mobile:mt-[100px] mobile:mb-[90px] rounded-[20px] w-full flex justify-between mobile:flex-col relative"
    >
      <div class="p-14 mobile:py-7 mobile:-mb-44 mobile:px-3">
        <h1 class="text-black text-4xl font-medium mb-9 mobile:max-w-[245px]">
          <span class="italic mr-0.5">G</span>enesis
          <span class="italic">NFT</span> c<span
            class="inline-block border-4 border-black rounded-full w-[51px] h-[23px]"
          ></span
          >llection
        </h1>
        <ul
          class="flex flex-wrap mobile:flex-nowrap mobile:flex-col gap-[26px] max-w-[920px] mobile:max-w-full"
        >
          <li
            class="bg-white font-grotesk mobile:text-center text-xl text-black font-medium px-6 py-4 rounded-[10px]"
          >
            Harvest year 2022
          </li>
          <li
            class="bg-white font-grotesk mobile:text-center text-xl text-black font-medium px-6 py-4 rounded-[10px]"
          >
            Total supply 10,000
          </li>
          <li
            class="relative font-grotesk bg-[#101010] mobile:text-center text-xl text-white font-medium px-6 py-4 rounded-[10px]"
          >
            10 wine types
            <div
              class="absolute transform rotate-[3.68deg] -top-3 -right-7 mobile:right-1/3 text-sm py-0.5 px-2.5 bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60] rounded-md text-center"
            >
              1000 editions each
            </div>
          </li>
          <li
            class="bg-white font-grotesk mobile:text-center text-xl text-black font-medium px-6 py-4 rounded-[10px]"
          >
            Embeded DAO voting rights
          </li>
          <li
            class="bg-white font-grotesk mobile:text-center text-xl text-black font-medium px-6 py-4 rounded-[10px]"
          >
            Mint details - TBA
          </li>
          <li
            class="bg-white font-grotesk mobile:text-center text-xl text-black font-medium px-6 py-4 rounded-[10px]"
          >
            1 NFT = 1 Exclusive Bottle
          </li>
        </ul>
      </div>
      <img
        class="absolute mobile:hidden right-0 bottom-0 rounded-br-[20px]"
        src="@/assets/images/wine-mockup.png"
        alt=""
      />
      <img
        class="hidden mobile:block rounded-br-[20px]"
        src="@/assets/images/wine-mockup-mobile.png"
        alt=""
      />
    </section>
    <section
      id="holder"
      class="mobile:mt-[90px] mt-[115px]"
    >
      <h1
        class="text-4xl font-semibold text-center mb-[130px] mobile:mb-[80px]"
      >
        NFT h<span
          class="inline-block border-4 border-white rounded-full w-[58px] h-[23px]"
        ></span
        >lder
      </h1>
      <div
        class="flex mobile:flex-col space-x-[15px] justify-between mobile:mx-4 mobile:space-x-0 mobile:space-y-[80px]"
      >
        <div class="basis-1/4 flex flex-col items-start mobile:items-center">
          <img src="@/assets/images/ownership.svg" alt="" />
          <h2 class="mt-[18px] mb-[8px] text-2xl font-medium font-grotesk">
            Ownership
          </h2>
          <p class="text-white/50 text-base mobile:text-center">
            Proof of ownership for digital and real-life exclusive and asset
            that is limited in production
          </p>
        </div>
        <div class="basis-1/4 flex flex-col items-start mobile:items-center">
          <img src="@/assets/images/stacking.svg" alt="" />
          <h2 class="mt-[18px] mb-[8px] text-2xl font-medium font-grotesk">
            NFT Staking
          </h2>
          <p class="text-white/50 text-base mobile:text-center">
            Wine storage, which increases the wine value and gives the owner a
            special discount for the upcoming year harvest mints if held over
            specific time period
          </p>
        </div>
        <div class="basis-1/4 flex flex-col items-start mobile:items-center">
          <img src="@/assets/images/burn.svg" alt="" />
          <h2 class="mt-[18px] mb-[8px] text-2xl font-medium font-grotesk">
            NFT Burn
          </h2>
          <p class="text-white/50 text-base mobile:text-center">
            The owner is delivered his unique and exclusive wine bottle right to
            his door
          </p>
        </div>
        <div class="basis-1/4 flex flex-col items-start mobile:items-center">
          <img src="@/assets/images/dao.svg" alt="" />
          <h2 class="mt-[18px] mb-[8px] text-2xl font-medium font-grotesk">
            NFT = DAO voting right
          </h2>
          <p class="text-white/50 text-base mobile:text-center">
            Future vital decisions will be taken by the DAO and future proposal
            will be considered by them.
          </p>
        </div>
      </div>
    </section>
    <div
      class="w-full h-0.5 bg-[#333333] mobile:mt-[146px] mobile:mb-[68px] mt-[170px] mb-[70px]"
    ></div>
    <section>
      <img
        class="mobile:h-[280px] mx-auto"
        src="@/assets/images/tba.svg"
        alt=""
      />
    </section>
    <div
      id="hiring"
      class="w-full h-0.5 bg-[#333333] mobile:mt-[60px] mobile:mb-[110px] mt-[90px] mb-[130px]"
    ></div>
    <section>
      <h1 class="text-4xl mb-[48px] font-semibold mobile:text-center">
        We are expanding!
      </h1>
      <div class="flex mobile:flex-col items-start mobile:items-stretch">
        <div
          class="flex mobile:flex-col space-x-[30px] mobile:space-y-[45px] mobile:space-x-0 basis-1/2 mobile:basis-full"
        >
          <div class="text-center w-full">
            <div
              class="mb-3 py-4 bg-white rounded-[10px] text-xl font-medium font-grotesk text-black"
            >
              Community manager
            </div>
            <div class="text-white/50">Twitter</div>
          </div>
          <div class="text-center w-full">
            <div
              class="mb-3 py-4 bg-white rounded-[10px] text-xl font-medium font-grotesk text-black"
            >
              Marketing manager
            </div>
            <div class="text-white/50">Twitter</div>
          </div>
        </div>
        <div
          class="mobile:pt-[70px] flex flex-col space-y-8 basis-1/3 mobile:basis-full mx-auto text-white/50 text-base font-normal"
        >
          <p>
            We are happy to work with people that are willing to share our
            vision and are part of the decentralized movement.
          </p>
          <p>
            Do not hesitate to mail us at
            <a
              href="mailto:vinumw3@gmail.com"
              class="text-white italic underline"
              >vinumw3@gmail.com</a
            >
            with a simplified resume, a short description of yourself, and
            indicate the position you want to apply for.
          </p>
        </div>
      </div>
    </section>
    <div
      class="w-full h-0.5 bg-[#333333] mobile:mt-[160px] mobile:mb-[80px] mt-[130px] mb-[100px]"
      id="team"
    ></div>
    <section class="flex flex-col max-w-[850px] mx-auto items-center">
      <div
        class="text-sm font-grotesk py-0.5 px-2.5 bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60] rounded-md text-center"
      >
        Vinum
      </div>
      <h1 class="text-4xl font-semibold mt-5 mb-[60px]">
        <span class="italic">T</span>eam
      </h1>
      <div
        class="flex mobile:flex-col mobile:space-y-[64px] justify-between items-center w-full"
      >
        <div class="flex flex-col items-center space-y-8">
          <img src="@/assets/images/team/kim.svg" alt="" />
          <div class="text-center flex flex-col items-center space-y-2">
            <h1 class="text-lg font-semibold">Jaden Kim</h1>
            <p class="text-base font-normal text-white/50">Designer</p>
            <div class="flex items-center space-x-2">
              <img src="@/assets/images/social/white/twitter.svg" alt="" />
              <a class="">@kim_j</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center space-y-8">
          <img src="@/assets/images/team/kim.svg" alt="" />
          <div class="text-center flex flex-col items-center space-y-2">
            <h1 class="text-lg font-semibold">Jaden Kim</h1>
            <p class="text-base font-normal text-white/50">Designer</p>
            <div class="flex items-center space-x-2">
              <img src="@/assets/images/social/white/twitter.svg" alt="" />
              <a>@kim_j</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center space-y-8">
          <img src="@/assets/images/team/kim.svg" alt="" />
          <div class="text-center flex flex-col items-center space-y-2">
            <h1 class="text-lg font-semibold">Jaden Kim</h1>
            <p class="text-base font-normal text-white/50">Designer</p>
            <div class="flex items-center space-x-2">
              <img src="@/assets/images/social/white/twitter.svg" alt="" />
              <a>@kim_j</a>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-white/50 mb-[164px] mt-[86px]">
        We are a small team of seven open-minded friends that has overall
        expertise in design, wine business, financial industry, WEB3
        development. We do share the common belief in the bright future of WEB3,
        and the deployment & transition of conventional businesses onto the
        decentralized world.
      </p>
    </section>
  </div>
</template>
