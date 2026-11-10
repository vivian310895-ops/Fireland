import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Globe2,
  Menu,
  X,
  Flame,
  ChevronRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import "./styles.css";

/* =========================================================
   FIRELAND — IMAGE HELPER
========================================================= */

const commonsPhoto = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    file
  )}?width=1400`;

/* =========================================================
   MULTILINGUAL CONTENT
========================================================= */

const copy = {
  en: {
    navHome: "HOME",
    navCulture: "CULTURE",
    navHometown: "MY HOMETOWN",
    navAbout: "ABOUT ME",
    heroEyebrow: "THE ARCHIPELAGO OF WONDERS",
    heroTitle: "A LAND OF",
    heroAccent: "ENDLESS",
    heroAccent2: "FIRE.",
    heroDescription:
      "Between volcanoes, tropical forests, and thousands of islands lies a country full of stories waiting to be discovered.",
    explore: "EXPLORE INDONESIA",
    coordinates: "6°10′S 106°49′E",
    mapTitle: "AN ARCHIPELAGO",
    mapSubtitle: "OF DIVERSITY",
    mapDescription:
      "Indonesia is the world's largest archipelagic country, made up of thousands of islands stretching across Southeast Asia.",
    selectIsland: "SELECT AN ISLAND",
    discover: "DISCOVER THE REGION",
    manifestoTitle: "MORE THAN",
    manifestoAccent: "A DESTINATION.",
    manifestoText:
      "Indonesia is a meeting point of cultures, landscapes, traditions, and people. Every island has its own character and every journey tells a different story.",
    cultureEyebrow: "HERITAGE & TRADITION",
    cultureTitle: "CULTURE THAT",
    cultureAccent: "LIVES ON.",
    cultureDescription:
      "From traditional textiles to architecture and dance, Indonesian culture carries generations of stories.",
    hometownEyebrow: "THE CITY I CALL HOME",
    hometownTitle: "WELCOME TO",
    hometownAccent: "JAKARTA.",
    hometownDescription:
      "A lively capital where history, modern life, diverse cultures, and unforgettable food come together.",
    placesTitle: "PLACES TO",
    placesAccent: "EXPLORE.",
    foodTitle: "A TASTE OF",
    foodAccent: "JAKARTA.",
    aboutEyebrow: "THE PERSON BEHIND THE JOURNEY",
    aboutTitle: "A LITTLE",
    aboutAccent: "ABOUT ME.",
    aboutDescription:
      "A student from Indonesia, currently exploring a new chapter of life in Taiwan.",
    profile: "PERSONAL PROFILE",
    name: "NAME",
    nationality: "NATIONALITY",
    hometown: "HOMETOWN",
    university: "UNIVERSITY",
    major: "MAJOR",
    hobby: "HOBBIES",
    footerText: "MADE WITH CURIOSITY, FROM INDONESIA.",
    readMore: "READ MORE",
    close: "CLOSE",
    visit: "VISIT DESTINATION",
    island: "ISLAND",
  },

  id: {
    navHome: "BERANDA",
    navCulture: "BUDAYA",
    navHometown: "KOTA ASAL",
    navAbout: "TENTANG SAYA",
    heroEyebrow: "KEPULAUAN PENUH KEAJAIBAN",
    heroTitle: "NEGERI",
    heroAccent: "PENUH",
    heroAccent2: "API.",
    heroDescription:
      "Di antara gunung berapi, hutan tropis, dan ribuan pulau, terdapat negeri dengan begitu banyak cerita untuk ditemukan.",
    explore: "JELAJAHI INDONESIA",
    coordinates: "6°10′S 106°49′E",
    mapTitle: "KEPULAUAN",
    mapSubtitle: "PENUH KERAGAMAN",
    mapDescription:
      "Indonesia merupakan negara kepulauan terbesar di dunia, terdiri dari ribuan pulau yang membentang di Asia Tenggara.",
    selectIsland: "PILIH PULAU",
    discover: "JELAJAHI WILAYAH",
    manifestoTitle: "LEBIH DARI",
    manifestoAccent: "SEKADAR TEMPAT.",
    manifestoText:
      "Indonesia adalah tempat bertemunya budaya, alam, tradisi, dan masyarakat. Setiap pulau memiliki karakter dan cerita yang berbeda.",
    cultureEyebrow: "WARISAN & TRADISI",
    cultureTitle: "BUDAYA YANG",
    cultureAccent: "TERUS HIDUP.",
    cultureDescription:
      "Dari kain tradisional hingga arsitektur dan tarian, budaya Indonesia menyimpan cerita dari generasi ke generasi.",
    hometownEyebrow: "KOTA TEMPAT SAYA BERASAL",
    hometownTitle: "SELAMAT DATANG DI",
    hometownAccent: "JAKARTA.",
    hometownDescription:
      "Ibu kota yang ramai, tempat sejarah, kehidupan modern, beragam budaya, dan makanan lezat bertemu.",
    placesTitle: "TEMPAT UNTUK",
    placesAccent: "DIJELAJAHI.",
    foodTitle: "CITA RASA",
    foodAccent: "JAKARTA.",
    aboutEyebrow: "ORANG DI BALIK PERJALANAN",
    aboutTitle: "SEDIKIT",
    aboutAccent: "TENTANG SAYA.",
    aboutDescription:
      "Seorang mahasiswa dari Indonesia yang sedang menjalani babak baru kehidupan di Taiwan.",
    profile: "PROFIL PRIBADI",
    name: "NAMA",
    nationality: "KEBANGSAAN",
    hometown: "KOTA ASAL",
    university: "UNIVERSITAS",
    major: "JURUSAN",
    hobby: "HOBI",
    footerText: "DIBUAT DENGAN RASA INGIN TAHU, DARI INDONESIA.",
    readMore: "BACA SELENGKAPNYA",
    close: "TUTUP",
    visit: "KUNJUNGI DESTINASI",
    island: "PULAU",
  },

  zh: {
    navHome: "首頁",
    navCulture: "文化",
    navHometown: "我的家鄉",
    navAbout: "關於我",
    heroEyebrow: "充滿奇觀的群島",
    heroTitle: "一個",
    heroAccent: "充滿",
    heroAccent2: "火焰的國度。",
    heroDescription:
      "在火山、熱帶森林和數千座島嶼之間，有一個充滿故事、等待人們探索的國家。",
    explore: "探索印尼",
    coordinates: "南緯 6°10′ 東經 106°49′",
    mapTitle: "一個群島",
    mapSubtitle: "多元文化的國度",
    mapDescription:
      "印尼是世界上最大的群島國家，由分布在東南亞的數千座島嶼組成。",
    selectIsland: "選擇一座島嶼",
    discover: "探索這個地區",
    manifestoTitle: "不只是",
    manifestoAccent: "一個旅遊目的地。",
    manifestoText:
      "印尼是文化、自然景觀、傳統與人民交會的地方。每座島嶼都有自己的特色，也有不同的故事。",
    cultureEyebrow: "文化遺產與傳統",
    cultureTitle: "持續傳承的",
    cultureAccent: "文化。",
    cultureDescription:
      "從傳統紡織品到建築與舞蹈，印尼文化承載著世世代代的故事。",
    hometownEyebrow: "我成長的城市",
    hometownTitle: "歡迎來到",
    hometownAccent: "雅加達。",
    hometownDescription:
      "這是一座充滿活力的首都，歷史、現代生活、多元文化與美食在這裡相遇。",
    placesTitle: "值得探索的",
    placesAccent: "景點。",
    foodTitle: "品嚐",
    foodAccent: "雅加達。",
    aboutEyebrow: "旅程背後的我",
    aboutTitle: "關於",
    aboutAccent: "我的一點介紹。",
    aboutDescription:
      "一位來自印尼的學生，目前正在台灣展開人生的新篇章。",
    profile: "個人資料",
    name: "姓名",
    nationality: "國籍",
    hometown: "家鄉",
    university: "大學",
    major: "科系",
    hobby: "興趣",
    footerText: "帶著好奇心，來自印尼。",
    readMore: "了解更多",
    close: "關閉",
    visit: "前往景點",
    island: "島嶼",
  },
};

const aboutCopy = {
  en: {
    storyEyebrow: "MY WORLD / MY STORY / 001",
    storyTitle: "MORE THAN",
    storyAccent: "A PLACE TO CALL HOME.",
    storyDescription: "Every place has a story. This is a little part of mine — from the familiar streets of Jakarta to a new beginning in Taiwan.",
    originLabel: "WHERE IT ALL BEGINS",
    originTitle: "JAKARTA, INDONESIA",
    originDescription: "My hometown, my roots, and a place I will always call home.",
    chapterLabel: "A NEW CHAPTER · 2026",
    chapterTitle: "TAICHUNG, TAIWAN",
    chapterDescription: "A new environment and a new experience. I'm gradually learning to adapt to life here.",
    profileLabel: "THE PERSON BEHIND FIRELAND",
    profileMeta: "PROFILE / 002",
    nameLabel: "01 / NAME",
    hometownLabel: "02 / HOMETOWN",
    universityLabel: "03 / UNIVERSITY",
    major: "International Business · Freshman",
    hobbyLabel: "04 / HOBBIES",
    hobby: "Swimming & Basketball",
    hobbyDescription: "My favorite ways to spend time",
    quote: "Different places,",
    quoteAccent: "one story to share.",
    taiwanLabel: "03 / A NEW CHAPTER",
    taiwanTitle: "My Life in Taiwan",
    taiwanDescription: "When I first arrived in Taiwan, everything felt unfamiliar and a little confusing. After almost two months here, I'm slowly getting used to the environment and university life. There's still a lot for me to learn and explore.",
    fromLabel: "FROM INDONESIA",
    growthLabel: "GROWING THROUGH NEW EXPERIENCES",
    introLabel: "MY INTRODUCTION",
    intro: "Hello! My name is Vivian, and I am from Indonesia. I am a freshman majoring in International Business at Tunghai University. My hometown is Jakarta, and I am an only child. I enjoy sports, especially swimming and basketball. I feel relaxed when I swim. I am slowly getting used to life in Taiwan. Jakarta is the capital of Indonesia, with many delicious foods and interesting places. I hope you can visit Indonesia someday!",
    introFooter: "FIRELAND / PERSONAL STORY",
  },

  id: {
    storyEyebrow: "DUNIA SAYA / CERITA SAYA / 001",
    storyTitle: "LEBIH DARI",
    storyAccent: "SEKADAR TEMPAT TINGGAL.",
    storyDescription: "Setiap tempat punya cerita. Ini adalah sebagian kecil dari cerita saya — dari jalanan Jakarta yang akrab hingga awal kehidupan baru di Taiwan.",
    originLabel: "AWAL DARI SEGALANYA",
    originTitle: "JAKARTA, INDONESIA",
    originDescription: "Kota asal, akar kehidupan, dan tempat yang akan selalu saya sebut rumah.",
    chapterLabel: "BABAK BARU · 2026",
    chapterTitle: "TAICHUNG, TAIWAN",
    chapterDescription: "Lingkungan baru dan pengalaman baru. Saya perlahan belajar menyesuaikan diri dengan kehidupan di sini.",
    profileLabel: "SOSOK DI BALIK FIRELAND",
    profileMeta: "PROFIL / 002",
    nameLabel: "01 / NAMA",
    hometownLabel: "02 / KOTA ASAL",
    universityLabel: "03 / UNIVERSITAS",
    major: "Bisnis Internasional · Mahasiswa Tahun Pertama",
    hobbyLabel: "04 / HOBI",
    hobby: "Berenang & Basket",
    hobbyDescription: "Kegiatan favorit saya",
    quote: "Tempat yang berbeda,",
    quoteAccent: "satu cerita untuk dibagikan.",
    taiwanLabel: "03 / BABAK BARU",
    taiwanTitle: "Kehidupan Saya di Taiwan",
    taiwanDescription: "Saat pertama kali datang ke Taiwan, semuanya terasa asing dan sedikit membingungkan. Setelah hampir dua bulan di sini, saya mulai terbiasa dengan lingkungan dan kehidupan kampus. Masih banyak hal yang ingin saya pelajari dan jelajahi.",
    fromLabel: "DARI INDONESIA",
    growthLabel: "BERTUMBUH MELALUI PENGALAMAN BARU",
    introLabel: "PERKENALAN SAYA",
    intro: "Halo! Nama saya Vivian dan saya berasal dari Indonesia. Saya mahasiswa tahun pertama jurusan Bisnis Internasional di Tunghai University. Kota asal saya adalah Jakarta dan saya anak tunggal. Saya suka berolahraga, terutama berenang dan bermain basket. Saya merasa rileks saat berenang. Saya perlahan mulai terbiasa dengan kehidupan di Taiwan. Jakarta adalah ibu kota Indonesia yang memiliki banyak makanan lezat dan tempat menarik. Saya berharap suatu hari nanti kamu bisa berkunjung ke Indonesia!",
    introFooter: "FIRELAND / CERITA PRIBADI",
  },

  zh: {
    storyEyebrow: "我的世界 / 我的故事 / 001",
    storyTitle: "不只是",
    storyAccent: "一個稱作家的地方。",
    storyDescription: "每個地方都有自己的故事。這是我的一小段故事，從熟悉的雅加達街道，到台灣生活的新開始。",
    originLabel: "故事的起點",
    originTitle: "印尼・雅加達",
    originDescription: "我的家鄉、我的根，也是我永遠會稱為家的地方。",
    chapterLabel: "人生新篇章 · 2026",
    chapterTitle: "台灣・台中",
    chapterDescription: "新的環境，新的體驗。我正在慢慢學習適應這裡的生活。",
    profileLabel: "FIRELAND 背後的我",
    profileMeta: "個人資料 / 002",
    nameLabel: "01 / 姓名",
    hometownLabel: "02 / 家鄉",
    universityLabel: "03 / 大學",
    major: "國際企業學系 · 大一新生",
    hobbyLabel: "04 / 興趣",
    hobby: "游泳與籃球",
    hobbyDescription: "我最喜歡的休閒活動",
    quote: "不同的地方，",
    quoteAccent: "分享同一個故事。",
    taiwanLabel: "03 / 人生新篇章",
    taiwanTitle: "我的台灣生活",
    taiwanDescription: "剛來台灣的時候，這裡的一切都很陌生，也讓我有點不知所措。在這裡生活快兩個月後，我開始慢慢習慣這裡的環境和大學生活。還有很多事情等著我去學習和探索。",
    fromLabel: "來自印尼",
    growthLabel: "在新體驗中成長",
    introLabel: "自我介紹",
    intro: "大家好！我叫許菲安，來自印尼。我是東海大學國際企業學系的大一新生。我的家鄉是雅加達，我是獨生女。我喜歡運動，尤其是游泳和打籃球。游泳的時候，我覺得很放鬆。我正在慢慢適應台灣的生活。雅加達是印尼的首都，有很多好吃的食物和有趣的地方。希望有一天你們可以來印尼玩！",
    introFooter: "FIRELAND / 個人故事",
  },
};

/* =========================================================
   ISLAND DATA
========================================================= */

const regions = [
  {
    id: "sumatra",
    en: "Sumatra",
    idName: "Sumatra",
    zh: "蘇門答臘",
    coord: "0°N 102°E",
    image: commonsPhoto("Lake toba(1).jpg"),
    descriptions: {
      en: "Known for its lush rainforests, wildlife, coffee plantations, and Lake Toba — one of the largest volcanic lakes in the world.",
      id: "Terkenal dengan hutan hujan tropis, satwa liar, perkebunan kopi, dan Danau Toba yang merupakan salah satu danau vulkanik terbesar di dunia.",
      zh: "以熱帶雨林、野生動物、咖啡園以及多巴湖聞名。多巴湖是世界上最大的火山湖之一。",
    },
  },
  {
    id: "java",
    en: "Java",
    idName: "Jawa",
    zh: "爪哇",
    coord: "7°S 110°E",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Borobudur_temple_panorama.jpg",
    descriptions: {
      en: "The most populated island of Indonesia, home to Jakarta, Yogyakarta, historic temples, and a rich mix of modern and traditional life.",
      id: "Pulau dengan penduduk terbanyak di Indonesia. Di sini terdapat Jakarta, Yogyakarta, candi bersejarah, serta perpaduan kehidupan modern dan tradisional.",
      zh: "印尼人口最多的島嶼，也是雅加達、日惹和許多歷史古蹟的所在地。",
    },
  },
  {
    id: "kalimantan",
    en: "Kalimantan",
    idName: "Kalimantan",
    zh: "加里曼丹",
    coord: "1°S 114°E",
    image: commonsPhoto(
      "Orang Utan in Tanjung Puting National Park, Kalimantan.jpg"
    ),
    descriptions: {
      en: "A vast island famous for tropical rainforests, orangutans, rivers, and the diverse communities living across the island.",
      id: "Pulau luas yang terkenal dengan hutan hujan tropis, orangutan, sungai, dan masyarakat dengan budaya yang beragam.",
      zh: "以廣大的熱帶雨林、紅毛猩猩、河流以及多元社群而聞名。",
    },
  },
  {
    id: "sulawesi",
    en: "Sulawesi",
    idName: "Sulawesi",
    zh: "蘇拉威西",
    coord: "2°S 121°E",
    image: commonsPhoto("Modern Tongkonan.jpg"),
    descriptions: {
      en: "Recognized by its unusual shape, Sulawesi is known for the Toraja culture, traditional Tongkonan houses, and beautiful marine life.",
      id: "Dikenal karena bentuk pulaunya yang unik, Sulawesi memiliki budaya Toraja, rumah adat Tongkonan, dan kehidupan laut yang indah.",
      zh: "蘇拉威西以獨特的島嶼形狀、托拉查文化、傳統船形屋以及美麗的海洋生態聞名。",
    },
  },
  {
    id: "papua",
    en: "Papua",
    idName: "Papua",
    zh: "巴布亞",
    coord: "4°S 138°E",
    image: commonsPhoto("Raja Ampat.jpg"),
    descriptions: {
      en: "Located in the eastern part of Indonesia, Papua is known for its mountains, rich biodiversity, indigenous cultures, and Raja Ampat's marine beauty.",
      id: "Terletak di bagian timur Indonesia, Papua dikenal dengan pegunungan, keanekaragaman hayati, budaya masyarakat adat, dan keindahan laut Raja Ampat.",
      zh: "位於印尼東部，以山脈、生物多樣性、原住民文化和四王群島的海洋景觀聞名。",
    },
  },
];

/* =========================================================
   CULTURE DATA
========================================================= */

const cultures = [
  {
    id: "batik",
    title: {
      en: "Indonesian Batik",
      id: "Batik Indonesia",
      zh: "印尼蠟染布",
    },
    category: {
      en: "TRADITIONAL TEXTILE",
      id: "KAIN TRADISIONAL",
      zh: "傳統紡織藝術",
    },
    image: commonsPhoto("Batik Motif Pasisiran.jpg"),
    youtubeLink:
      "https://www.youtube.com/results?search_query=Indonesian+batik+making+process",
    description: {
      en: "Batik is a traditional Indonesian textile art made using wax-resist dyeing. Its patterns often carry meanings connected to nature, history, and local identity.",
      id: "Batik adalah seni kain tradisional Indonesia yang dibuat menggunakan teknik perintang warna dengan lilin. Motifnya sering memiliki makna yang berkaitan dengan alam, sejarah, dan identitas daerah.",
      zh: "蠟染是印尼傳統紡織藝術，使用蠟染防染技術製作。圖案通常與自然、歷史和地方特色有關。",
    },
  },
  {
    id: "rumah",
    title: {
      en: "Rumah Gadang",
      id: "Rumah Gadang",
      zh: "米南加保傳統屋",
    },
    category: {
      en: "TRADITIONAL ARCHITECTURE",
      id: "ARSITEKTUR TRADISIONAL",
      zh: "傳統建築",
    },
    image: commonsPhoto("Rumah Gadang.jpg"),
    youtubeLink:
      "https://www.youtube.com/results?search_query=Rumah+Gadang+Minangkabau+traditional+house",
    description: {
      en: "Rumah Gadang is the traditional house of the Minangkabau people in West Sumatra. Its dramatic curved roof resembles buffalo horns and represents a strong cultural identity.",
      id: "Rumah Gadang adalah rumah tradisional masyarakat Minangkabau di Sumatra Barat. Atapnya yang melengkung menyerupai tanduk kerbau dan menjadi simbol identitas budaya.",
      zh: "米南加保傳統屋是西蘇門答臘米南加保族的傳統建築。彎曲的屋頂像水牛角，是當地文化的重要象徵。",
    },
  },
  {
    id: "dance",
    title: {
      en: "Tari Saman",
      id: "Tari Saman",
      zh: "薩滿舞",
    },
    category: {
      en: "TRADITIONAL DANCE",
      id: "TARIAN TRADISIONAL",
      zh: "傳統舞蹈",
    },
    image: commonsPhoto("Tari Saman.jpg"),
    youtubeLink:
      "https://www.youtube.com/results?search_query=Tari+Saman+Aceh+traditional+dance",
    description: {
      en: "Originating from the Gayo people of Aceh, Saman is performed by dancers sitting in rows and moving their hands and bodies in highly synchronized rhythms.",
      id: "Berasal dari masyarakat Gayo di Aceh, Tari Saman dibawakan oleh para penari yang duduk berbaris dan menggerakkan tangan serta tubuh dengan irama yang kompak.",
      zh: "薩滿舞源自亞齊的加約族。舞者整齊排列坐著，以高度同步的手部和身體動作配合節奏表演。",
    },
  },
];

/* =========================================================
   JAKARTA DESTINATIONS
========================================================= */

const jakartaPlaces = [
  {
    id: "monas",
    title: {
      en: "National Monument",
      id: "Monumen Nasional",
      zh: "國家紀念碑",
    },
    subtitle: {
      en: "MONAS",
      id: "MONAS",
      zh: "獨立紀念碑",
    },
    image: commonsPhoto("Jakarta - National Monument.jpg"),
    description: {
      en: "An iconic landmark in central Jakarta, built to commemorate Indonesia's struggle for independence. Its observation deck offers a view of the capital.",
      id: "Ikon Jakarta yang dibangun untuk mengenang perjuangan kemerdekaan Indonesia. Dari bagian puncaknya, pengunjung dapat melihat pemandangan ibu kota.",
      zh: "雅加達市中心的代表性地標，用來紀念印尼的獨立歷史。遊客可以從觀景台欣賞首都景色。",
    },
    link: "https://enjoy.jakarta.go.id/article/monumen-nasional-monas",
  },
  {
    id: "kotatua",
    title: {
      en: "Kota Tua",
      id: "Kota Tua Jakarta",
      zh: "雅加達老城區",
    },
    subtitle: {
      en: "OLD TOWN",
      id: "KAWASAN KOTA TUA",
      zh: "歷史街區",
    },
    image: commonsPhoto("Kota Tua Jakarta.jpg"),
    description: {
      en: "A historic district featuring colonial-era buildings, museums, cafés, and Fatahillah Square. It reflects an important part of Jakarta's past.",
      id: "Kawasan bersejarah dengan bangunan peninggalan kolonial, museum, kafe, dan Lapangan Fatahillah. Tempat ini menyimpan bagian penting dari sejarah Jakarta.",
      zh: "這裡有殖民時期建築、博物館、咖啡館和法塔希拉廣場，呈現雅加達重要的歷史。",
    },
    link: "https://enjoy.jakarta.go.id/article/menelusuri-jendela-masa-lalu-jantungnya-ibu-kota",
  },
  {
    id: "tmii",
    title: {
      en: "Beautiful Indonesia Miniature Park",
      id: "Taman Mini Indonesia Indah",
      zh: "印尼縮影公園",
    },
    subtitle: {
      en: "TMII",
      id: "TMII",
      zh: "印尼文化公園",
    },
    image: commonsPhoto(
      "Indonesia in miniature, Taman Mini Indonesia Indah.jpg"
    ),
    description: {
      en: "A cultural park that introduces Indonesia's provinces through traditional houses, museums, performances, and cultural attractions.",
      id: "Taman budaya yang memperkenalkan berbagai provinsi Indonesia melalui rumah adat, museum, pertunjukan, dan atraksi budaya.",
      zh: "透過傳統房屋、博物館、表演和文化景點，介紹印尼各個省份的文化公園。",
    },
    link: "https://tamanmini.com/taman_jelajah_indonesia/en/",
  },
  {
    id: "seribu",
    title: {
      en: "Thousand Islands",
      id: "Kepulauan Seribu",
      zh: "千島群島",
    },
    subtitle: {
      en: "ISLAND ESCAPE",
      id: "WISATA PULAU",
      zh: "海島之旅",
    },
    image: commonsPhoto(
      "Pulau Yu, Kepulauan Seribu, Provinsi DKI Jakarta.jpg"
    ),
    description: {
      en: "A group of islands north of Jakarta, known for beaches, clear waters, snorkeling, and a quieter escape from the busy city.",
      id: "Gugusan pulau di utara Jakarta yang terkenal dengan pantai, air laut jernih, snorkeling, dan suasana yang lebih tenang dari kota.",
      zh: "位於雅加達北方的群島，以海灘、清澈海水、浮潛和悠閒的島嶼氣氛聞名。",
    },
    link: "https://enjoy.jakarta.go.id/article/category/kepulauan-seribu",
  },
];

/* =========================================================
   JAKARTA FOOD
========================================================= */

const jakartaFood = [
  {
    id: "nasigoreng",
    title: {
      en: "Nasi Goreng",
      id: "Nasi Goreng",
      zh: "印尼炒飯",
    },
    image: commonsPhoto("Nasi-Goreng.jpg"),
    description: {
      en: "Indonesia's famous fried rice, usually cooked with sweet soy sauce, garlic, shallots, and other seasonings. It is often served with egg and crackers.",
      id: "Nasi goreng khas Indonesia biasanya dimasak dengan kecap manis, bawang putih, bawang merah, dan bumbu lainnya. Hidangan ini sering disajikan dengan telur dan kerupuk.",
      zh: "印尼著名炒飯，通常使用甜醬油、蒜頭、紅蔥頭和其他調味料，也常搭配雞蛋和蝦餅。",
    },
  },
  {
    id: "soto",
    title: {
      en: "Soto Betawi",
      id: "Soto Betawi",
      zh: "雅加達椰奶牛肉湯",
    },
    image: commonsPhoto("Soto Betawi Glodok.JPG"),
    description: {
      en: "A traditional Jakarta soup made with beef or offal in a rich broth, often containing coconut milk or milk. It is commonly served with rice and lime.",
      id: "Sup tradisional Jakarta yang berisi daging sapi atau jeroan dengan kuah gurih, biasanya menggunakan santan atau susu. Soto ini sering disajikan dengan nasi dan jeruk limau.",
      zh: "雅加達傳統湯品，使用牛肉或內臟，湯底濃郁，通常加入椰奶或牛奶，搭配白飯和萊姆。",
    },
  },
];

/* =========================================================
   MAP COMPONENT
========================================================= */

function IndonesiaMap({ selected, onSelect }) {
  const markers = [
    { id: "sumatra", x: 16, y: 37, label: "SUMATRA" },
    { id: "java", x: 32, y: 66, label: "JAVA" },
    { id: "kalimantan", x: 42, y: 36, label: "KALIMANTAN" },
    { id: "sulawesi", x: 64, y: 48, label: "SULAWESI" },
    { id: "papua", x: 83, y: 46, label: "PAPUA" },
  ];

  return (
    <div className="indonesia-map">
      <div className="map-grid" />

      <div className="island-shapes">
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          role="img"
          aria-label="Interactive map of Indonesia"
        >
          <defs>
            <linearGradient id="islandFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff8a50" stopOpacity=".38" />
              <stop offset="100%" stopColor="#39c9e8" stopOpacity=".12" />
            </linearGradient>
          </defs>

          <g className="map-islands">
            <path d="M125 175 L155 150 L190 160 L205 185 L190 210 L170 220 L150 205 L130 210 L110 195 Z" />
            <path d="M175 230 L205 220 L220 240 L210 265 L190 280 L175 260 Z" />
            <path d="M255 310 L290 300 L325 310 L355 325 L385 330 L370 345 L330 345 L295 335 L265 330 Z" />
            <path d="M375 165 L410 145 L455 155 L470 180 L450 205 L420 215 L390 200 Z" />
            <path d="M485 245 L510 220 L535 235 L540 260 L520 280 L495 270 Z" />
            <path d="M555 185 L580 165 L600 180 L590 205 L570 215 Z" />
            <path d="M610 235 L635 210 L660 220 L675 250 L655 275 L630 270 Z" />
            <path d="M690 210 L720 190 L750 205 L745 230 L715 240 Z" />
            <path d="M790 220 L830 205 L870 215 L900 240 L875 260 L840 250 L810 265 L785 245 Z" />
            <path d="M830 280 L865 270 L890 285 L875 305 L845 310 Z" />
          </g>

          <g className="map-routes">
            <path d="M110 195 Q260 350 390 330 Q510 290 580 190 Q700 150 850 240" />
            <path d="M160 170 Q300 80 440 170 Q600 280 830 220" />
          </g>

          <g className="map-scan-line">
            <path d="M70 250 H930" />
          </g>
        </svg>
      </div>

      <div className="lava-fissures" />

      {markers.map((marker) => (
        <button
          type="button"
          key={marker.id}
          className={`map-marker ${
            selected === marker.id ? "active" : ""
          }`}
          style={{
            left: `${marker.x}%`,
            top: `${marker.y}%`,
          }}
          onClick={() => onSelect(marker.id)}
          aria-label={`Select ${marker.label}`}
          aria-pressed={selected === marker.id}
        >
          <span className="marker-halo" />
          <span className="marker-dot" />
          <span className="map-coordinate">{marker.label}</span>
        </button>
      ))}
    </div>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  const [lang, setLang] = useState("en");
  const [active, setActive] = useState("home");
  const [selectedRegion, setSelectedRegion] = useState("java");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = copy[lang];
  const a = aboutCopy[lang];

  const getRegionName = (region) => {
    if (lang === "id") return region.idName;
    if (lang === "zh") return region.zh;
    return region.en;
  };

  const getText = (item, key) =>
    item[key]?.[lang] || item[key]?.en || "";

  const goTo = (page) => {
    setActive(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .querySelector(".intro-overlay")
        ?.classList.add("intro-hidden");
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [active, selectedRegion]);

  const currentRegion =
    regions.find((region) => region.id === selectedRegion) || regions[1];

  return (
    <div className="app">
      {/* INTRO */}
      <div className="intro-overlay">
        <div className="intro-orbit" />
        <div className="intro-flare" />
        <div className="intro-title">
          <Flame size={22} />
          FIRELAND
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <button className="brand" onClick={() => goTo("home")}>
          <span className="brand-mark">
            <Flame size={19} />
          </span>
          <span>
            FIRE<span className="brand-dot">LAND.</span>
          </span>
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {[
            ["home", t.navHome],
            ["culture", t.navCulture],
            ["hometown", t.navHometown],
            ["about", t.navAbout],
          ].map(([page, label]) => (
            <button
              key={page}
              className={`nav-link ${
                active === page ? "active" : ""
              }`}
              onClick={() => goTo(page)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="nav-right">
          <div className="language-switch">
            {["en", "id", "zh"].map((language) => (
              <button
                key={language}
                className={`lang ${
                  lang === language ? "active" : ""
                }`}
                onClick={() => setLang(language)}
              >
                {language === "zh" ? "中文" : language.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HOME PAGE */}
      {active === "home" && (
        <main>
          <section className="hero">
            <div className="hero-grain" />
            <div className="hero-glow glow-a" />
            <div className="hero-glow glow-b" />

            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                {t.heroEyebrow}
              </div>

              <h1 className="hero-copy">
                {t.heroTitle}
                <br />
                <span>{t.heroAccent}</span>
                <br />
                {t.heroAccent2}
              </h1>

              <p>{t.heroDescription}</p>

              <button
                className="primary-button"
                onClick={() =>
                  document
                    .getElementById("island-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.explore}
                <ArrowUpRight size={17} />
              </button>

              <div className="hero-meta">
                <span className="status-dot live-dot" />
                <span>{t.coordinates}</span>
              </div>
            </div>

            <div className="hero-map-wrap">
              <IndonesiaMap
                selected={selectedRegion}
                onSelect={setSelectedRegion}
              />
              <div className="hero-map-caption">
                <span>INDONESIA</span>
                <span>17,000+ ISLANDS</span>
              </div>
            </div>

            <div className="scroll-cue">
              <ArrowDown size={15} />
              <span>SCROLL TO EXPLORE</span>
            </div>
            <div className="hero-index">01 / 04</div>
          </section>

          {/* ISLAND SECTION */}
          <section
            className="map-section section-pad"
            id="island-section"
          >
            <div className="section-heading reveal">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                THE INDONESIAN ARCHIPELAGO
              </div>
              <h2>
                {t.mapTitle}
                <br />
                <span>{t.mapSubtitle}</span>
              </h2>
              <p>{t.mapDescription}</p>
            </div>

            <div className="map-panel reveal">
              <div className="panel-top">
                <span>REGIONAL EXPLORER / 001</span>
                <span>INDONESIA — SEA</span>
              </div>

              <div className="regional-map">
                <div className="regional-map-heading">
                  <span>INTERACTIVE ISLAND MAP</span>
                  <span>SELECT A LOCATION</span>
                </div>

                <IndonesiaMap
                  selected={selectedRegion}
                  onSelect={setSelectedRegion}
                />
              </div>

              <div className="region-tabs">
                {regions.map((region, index) => (
                  <button
                    type="button"
                    key={region.id}
                    className={`region-tab ${
                      selectedRegion === region.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedRegion(region.id)}
                  >
                    <span>0{index + 1}</span>
                    {getRegionName(region)}
                    <ChevronRight size={15} />
                  </button>
                ))}
              </div>

              <div className="island-feature">
                <div className="island-feature-image">
                  <img
                    key={currentRegion.id}
                    src={currentRegion.image}
                    alt={getRegionName(currentRegion)}
                    loading="lazy"
                  />
                  <div className="island-feature-overlay" />
                  <div className="island-feature-number">
                    0{regions.findIndex(
                      (region) => region.id === selectedRegion
                    ) + 1}
                    <span> / 05</span>
                  </div>
                  <div className="island-feature-label">
                    <span>{t.island}</span>
                    <h3>{getRegionName(currentRegion)}</h3>
                  </div>
                </div>

                <div className="island-feature-copy">
                  <div className="eyebrow">
                    <span className="eyebrow-line" />
                    {t.discover}
                  </div>

                  <h3>{getRegionName(currentRegion)}</h3>

                  <div className="region-coord">
                    <MapPin size={14} />
                    {currentRegion.coord}
                  </div>

                  <p>{getText(currentRegion, "descriptions")}</p>

                  <div className="island-feature-footer">
                    <span>INDONESIA / REGIONAL ARCHIVE</span>
                    <span>
                      0{regions.findIndex(
                        (region) => region.id === selectedRegion
                      ) + 1}{" "}
                      — 05
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-note">
              FIVE ISLANDS — ENDLESS STORIES
            </div>
          </section>

          {/* MANIFESTO */}
          <section className="manifesto section-pad">
            <div className="manifesto-copy reveal">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                A COUNTRY OF MANY STORIES
              </div>
              <h2>
                {t.manifestoTitle}
                <br />
                <span>{t.manifestoAccent}</span>
              </h2>
              <p>{t.manifestoText}</p>
              <button
                className="text-button"
                onClick={() => goTo("culture")}
              >
                {t.navCulture}
                <ChevronRight size={17} />
              </button>
            </div>

            <div className="manifesto-image reveal">
              <img
                src={commonsPhoto("Raja Ampat.jpg")}
                alt="Raja Ampat Indonesia"
                loading="lazy"
              />
              <div className="image-overlay" />
              <div className="manifesto-stamp">
                <Globe2 size={18} />
                <span>17,000+ ISLANDS</span>
              </div>
              <div className="image-label">
                THE BEAUTY OF INDONESIA
              </div>
            </div>
          </section>
        </main>
      )}

      {/* CULTURE PAGE */}
      {active === "culture" && (
        <main className="inner-page">
          <section className="inner-hero culture-hero">
            <div className="inner-hero-art">
              <div className="art-ring" />
              <div className="art-core">
                <Sparkles size={35} />
              </div>
              <span className="art-label">
                CULTURAL ARCHIVE / ID
              </span>
            </div>

            <div className="hometown-hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                {t.cultureEyebrow}
              </div>
              <h1>
                {t.cultureTitle}
                <br />
                <span>{t.cultureAccent}</span>
              </h1>
              <p>{t.cultureDescription}</p>
            </div>
          </section>

          <section className="content-section section-pad culture-content-section">
            <div className="section-heading reveal">
              <div className="eyebrow">
                CULTURAL COLLECTION / 003
              </div>
              <h2>
                TRADITIONS
                <br />
                <span>OF INDONESIA.</span>
              </h2>
              <p>
                {lang === "id"
                  ? "Kenali beberapa warisan budaya yang menjadi bagian dari identitas Indonesia."
                  : lang === "zh"
                  ? "認識印尼文化中具有代表性的傳統與藝術。"
                  : "Explore traditions that are an important part of Indonesia's identity."}
              </p>
            </div>

            <div className="card-grid">
              {cultures.map((culture, index) => (
                <a
                  className="culture-card culture-video-card reveal"
                  key={culture.id}
                  href={culture.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${getText(
                    culture,
                    "title"
                  )} videos on YouTube`}
                >
                  <div className="culture-card-art">
                    <img
                      src={culture.image}
                      alt={getText(culture, "title")}
                      loading="lazy"
                    />
                    <span className="card-number">
                      0{index + 1}
                    </span>
                    <span className="card-open">
                      <ArrowUpRight size={18} />
                    </span>
                    <span className="culture-watch-label">
                      WATCH ON YOUTUBE
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                  <div className="card-content">
                    <span>{getText(culture, "category")}</span>
                    <h3>{getText(culture, "title")}</h3>
                    <p>{getText(culture, "description")}</p>
                    <div className="text-button">
                      {lang === "id"
                        ? "TONTON VIDEO"
                        : lang === "zh"
                        ? "觀看影片"
                        : "WATCH VIDEO"}
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="note-callout reveal">
              <Flame size={20} />
              <p>
                {lang === "id"
                  ? "Indonesia memiliki ratusan kelompok etnis dan bahasa daerah. Setiap daerah memiliki tradisi yang unik."
                  : lang === "zh"
                  ? "印尼擁有數百個民族和地方語言，每個地區都有獨特的傳統。"
                  : "Indonesia is home to hundreds of ethnic groups and local languages, each with unique traditions."}
              </p>
            </div>
          </section>
        </main>
      )}

      {/* HOMETOWN PAGE */}
      {active === "hometown" && (
        <main className="inner-page hometown-page">
          <section className="hometown-hero">
            <div
              className="hometown-image"
              style={{
                backgroundImage: `url("${commonsPhoto(
                  "Jakarta - National Monument.jpg"
                )}")`,
              }}
            />
            <div className="hometown-hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                {t.hometownEyebrow}
              </div>
              <h1>
                {t.hometownTitle}
                <br />
                <span>{t.hometownAccent}</span>
              </h1>
              <p>{t.hometownDescription}</p>
              <div className="location-tag">
                <MapPin size={15} />
                JAKARTA, INDONESIA
              </div>
            </div>
          </section>

          <section className="content-section section-pad">
            <div className="section-heading reveal">
              <div className="eyebrow">CITY GUIDE / JAKARTA</div>
              <h2>
                {t.placesTitle}
                <br />
                <span>{t.placesAccent}</span>
              </h2>
              <p>
                {lang === "id"
                  ? "Dari monumen nasional hingga kawasan bersejarah, Jakarta memiliki banyak tempat menarik untuk dikunjungi."
                  : lang === "zh"
                  ? "從國家紀念碑到歷史街區，雅加達有許多值得參觀的地方。"
                  : "From national monuments to historic districts, Jakarta has many interesting places to visit."}
              </p>
            </div>

            <div className="place-grid">
              {jakartaPlaces.map((place, index) => (
                <article
                  className="place-card reveal"
                  key={place.id}
                >
                  <a
                    className="place-photo"
                    href={place.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      backgroundImage: `url("${place.image}")`,
                    }}
                    aria-label={`Visit ${getText(
                      place,
                      "title"
                    )}`}
                  >
                    <span className="card-number">
                      0{index + 1}
                    </span>
                    <span className="card-open">
                      <ArrowUpRight size={18} />
                    </span>
                  </a>

                  <div className="place-card-copy">
                    <span>{getText(place, "subtitle")}</span>
                    <h3>{getText(place, "title")}</h3>
                    <p>{getText(place, "description")}</p>
                    <a
                      className="text-button"
                      href={place.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.visit}
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section section-pad food-section">
            <div className="section-heading reveal">
              <div className="eyebrow">LOCAL FOOD / JAKARTA</div>
              <h2>
                {t.foodTitle}
                <br />
                <span>{t.foodAccent}</span>
              </h2>
            </div>

            <div className="place-grid">
              {jakartaFood.map((food, index) => (
                <article
                  className="place-card reveal"
                  key={food.id}
                >
                  <div
                    className="place-photo"
                    style={{
                      backgroundImage: `url("${food.image}")`,
                    }}
                  >
                    <span className="card-number">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="place-card-copy">
                    <span>LOCAL SPECIALTY</span>
                    <h3>{getText(food, "title")}</h3>
                    <p>{getText(food, "description")}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* ABOUT PAGE */}
      {active === "about" && (
        <main className="inner-page about-page">
          <section className="about-hero about-hero-new section-pad">
            <div className="about-left">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                {t.aboutEyebrow}
              </div>

              <div className="about-kicker">
                INDONESIA <span>→</span> TAIWAN / 2026
              </div>

              {lang === "zh"
  ? "你好，我是許菲安"
  : lang === "id"
  ? "HALO, AKU VIVIAN"
  : "HELLO, I'M VIVIAN"}

              <p>
                {lang === "id"
                  ? "Aku berasal dari Indonesia dan sekarang sedang menjalani pengalaman baru sebagai mahasiswa di Taiwan. Melalui FIRELAND, aku ingin memperkenalkan tempat, budaya, dan cerita dari negara asalku."
                  : lang === "zh"
                  ? "我來自印尼，目前在台灣展開新的大學生活。透過 FIRELAND，我想介紹我的家鄉、文化，以及印尼的精彩故事。"
                  : "I'm from Indonesia and currently experiencing a new chapter of life as a university student in Taiwan. Through FIRELAND, I want to share the places, culture, and stories that make my home special."}
              </p>

              <div className="about-tags">
                <span>INDONESIA</span>
                <span>TAIWAN</span>
                <span>INTERNATIONAL BUSINESS</span>
              </div>
            </div>

            <div className="about-visual">
              <div className="about-visual-image">
                <img
                  src={commonsPhoto(
                    "Jakarta - National Monument.jpg"
                  )}
                  alt="Jakarta, Indonesia"
                  loading="lazy"
                />
                <div className="about-visual-overlay" />
              </div>

              <div className="about-visual-caption">
                <span>MY ROOTS</span>
                <strong>JAKARTA, INDONESIA.</strong>
              </div>

              <div className="about-visual-index">
                01 / PERSONAL JOURNEY
              </div>
            </div>
          </section>

          

<section className="about-story section-pad">
  <div className="about-story-heading reveal">
    <div className="eyebrow">{a.storyEyebrow}</div>
    <h2>
      {a.storyTitle}
      <br />
      <span>{a.storyAccent}</span>
    </h2>
    <p>{a.storyDescription}</p>
  </div>

  <div className="about-journey reveal">
    <div className="journey-line"></div>

    <div className="journey-stop">
      <span className="journey-dot"></span>
      <div>
        <small>{a.originLabel}</small>
        <h3>{a.originTitle}</h3>
        <p>{a.originDescription}</p>
      </div>
      <strong>01</strong>
    </div>

    <div className="journey-stop">
      <span className="journey-dot"></span>
      <div>
        <small>{a.chapterLabel}</small>
        <h3>{a.chapterTitle}</h3>
        <p>{a.chapterDescription}</p>
      </div>
      <strong>02</strong>
    </div>
  </div>

  <div className="about-section-label reveal">
    <span>{a.profileLabel}</span>
    <span>{a.profileMeta}</span>
  </div>

  <div className="about-info-grid reveal">
    <div className="about-info-card">
      <span>{a.nameLabel}</span>
      <h3>許菲安</h3>
      <p>Vivian</p>
    </div>

    <div className="about-info-card">
      <span>{a.hometownLabel}</span>
      <h3>Jakarta</h3>
      <p>Indonesia</p>
    </div>

    <div className="about-info-card">
      <span>{a.universityLabel}</span>
      <h3>Tunghai University</h3>
      <p>{a.major}</p>
    </div>

    <div className="about-info-card">
      <span>{a.hobbyLabel}</span>
      <h3>{a.hobby}</h3>
      <p>{a.hobbyDescription}</p>
    </div>
  </div>

  <div className="about-quote reveal">
    <span className="quote-mark">“</span>
    <h3>
      {a.quote}
      <br />
      <span>{a.quoteAccent}</span>
    </h3>
    <p>INDONESIA → TAIWAN · 2026</p>
  </div>

  <div className="about-taiwan reveal">
    <div className="about-taiwan-top">
      <span>{a.taiwanLabel}</span>
      <span>TAICHUNG, TAIWAN</span>
    </div>

    <div className="about-taiwan-content">
      <div>
        <span className="about-taiwan-number">02</span>
        <h3>{a.taiwanTitle}</h3>
      </div>
      <p>{a.taiwanDescription}</p>
    </div>

    <div className="about-taiwan-footer">
      <span>{a.fromLabel}</span>
      <span>{a.growthLabel}</span>
    </div>
  </div>

  <div className="about-mandarin reveal">
    <div className="about-mandarin-title">
      <span>{a.introLabel}</span>
      <span>自我介紹 / 001</span>
    </div>

    <p>{a.intro}</p>

    <div className="about-mandarin-footer">
      <span>{a.introFooter}</span>
      <span>INDONESIA → TAIWAN</span>
    </div>
  </div>
</section>

        </main>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-coord">06°10′S 106°49′E</div>

        <button className="brand" onClick={() => goTo("home")}>
          <span className="brand-mark">
            <Flame size={18} />
          </span>
          <span>
            FIRE<span className="brand-dot">LAND.</span>
          </span>
        </button>

        <p>{t.footerText}</p>
        <span className="footer-copy">© 2026 FIRELAND</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);