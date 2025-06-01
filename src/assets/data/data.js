const data = {
  tr: {
    projectsData: [
      {
        title: "WeatherWay",
        description:
        "WeatherWay, çıkış ve varış şehirleri arasında rota oluşturarak güzergah üzerindeki saatlik hava durumu verilerini ayrıntılı şekilde sunan bir mobil uygulamadır. OSRM ile rota, Google Maps ile harita ve OpenWeather API ile 4 güne kadar tahmin sağlanır. Kullanıcılar, seyahat tarih ve saatini seçerek rotalarındaki olası sis, yağmur, rüzgar ve sıcaklık gibi detaylara önceden ulaşabilir. Uygulama, güvenli ve planlı yolculuklar için kişisel bir hava durumu rehberi gibi çalışır. ",
        link: "https://github.com/Berkayilmz/WeatherWay-Showcase",
        images: [
          "/assets/AppPng/weatherwayPNG/ana-ekran-rota.jpeg",
          "/assets/AppPng/weatherwayPNG/1.jpeg",
          "/assets/AppPng/weatherwayPNG/2.jpeg",
          "/assets/AppPng/weatherwayPNG/3.jpeg",
          "/assets/AppPng/weatherwayPNG/4.jpeg",
          "/assets/AppPng/weatherwayPNG/5.jpeg",
          "/assets/AppPng/weatherwayPNG/6.jpeg",
        ],
      },
      {
        title: "Secretum",
        description:
        "React Native (Expo) ile geliştirilen, Firebase Auth & Firestore altyapısını kullanan mobil günlük uygulaması. Kullanıcılar günlüklerine başlık, içerik, emoji ve görsel ekleyebilir. AES algoritması ile cihazda yerel olarak şifreleme uygulanır; bu sayede uygulama sahibi dahi kullanıcı içeriklerini okuyamaz. Takvim görünümü, gizli günlük gösterimi ve kullanıcı istatistikleri gibi özellikler sunar.",
        link: "https://github.com/Berkayilmz/Secretum",
        images: [
          "/assets/AppPng/secretumPNG/home-screen.jpeg",
          "/assets/AppPng/secretumPNG/1.jpeg",
          "/assets/AppPng/secretumPNG/2.jpeg",
          "/assets/AppPng/secretumPNG/3.jpeg",
          "/assets/AppPng/secretumPNG/4.jpeg",
          "/assets/AppPng/secretumPNG/5.jpeg",
          "/assets/AppPng/secretumPNG/6.jpeg",
          "/assets/AppPng/secretumPNG/7.jpeg",
        ],
      },
      {
        title: "Deal-Eye",
        description:
        "Deal-Eye, marketfiyati fiyat verilerini Selenium ile toplayan, makine öğrenimi modelleriyle (XGBoost, regresyon, zaman serisi) günlük ve haftalık tahminler yapan, verileri MongoDB’de saklayıp MERN stack (MongoDB, Express, React, Node.js) ile kullanıcıya modern bir arayüzde sunan entegre bir piyasa analiz ve öngörü sistemidir.",
        link: "https://github.com/Berkayilmz/Deal-Eye",
        images: [
          "/assets/AppPng/dealeyePNG/Deal-Eye.jpeg",
          "/assets/AppPng/dealeyePNG/1.jpeg",
          "/assets/AppPng/dealeyePNG/2.jpeg",
          "/assets/AppPng/dealeyePNG/3.jpeg",
        ],
      },
      {
        title: "RentCar.NET",
        description:
        ".NetBackendProject, ASP.NET Core Web API (.NET 6) ile geliştirilmiş, katmanlı mimariye sahip bir backend altyapı projesidir. Temiz kod, sürdürülebilirlik ve genişletilebilirlik ön plandadır. Öğrenme, geliştirme veya hızlı başlangıç (boilerplate) için idealdir. Controller, Service, Repository, DTO katmanlarına sahiptir; veritabanı işlemleri Entity Framework Core ile yapılır. Swagger UI ile REST API testleri kolaydır. JWT, AutoMapper ve Serilog ile genişletilebilir.",
        link: "https://github.com/Berkayilmz/rentacar-.net",
        images: [
          "/assets/AppPng/rentacarPNG/1.jpeg",
          "/assets/AppPng/rentacarPNG/2.jpeg",
          "/assets/AppPng/rentacarPNG/3.jpeg"
        ],
      },
      {
        title: "Bookstore",
        description:
          "Bookstore, MERN (MongoDB, Express.js, React, Node.js) yapısı kullanılarak geliştirdiğim bir kitap takip uygulamasıdır. Uygulama üzerinden kitap ekleme, düzenleme, silme ve listeleme gibi temel CRUD işlemleri yapılabilmektedir. Bu projeyi, tam anlamıyla MERN mimarisini öğrenmek, front-end ve back-end tarafını entegre bir şekilde çalıştırmak amacıyla geliştirdim. Özellikle RESTful API tasarımı ve veri yönetimi konularında deneyim kazandığım bir çalışma oldu.",
        link: "https://github.com/Berkayilmz/BookStoreMERN",
        images: [
          "/assets/AppPng/bookstorePNG/1.jpeg",
          "/assets/AppPng/bookstorePNG/2.jpeg",
          "/assets/AppPng/bookstorePNG/3.jpeg"
        ],
      },
    ],
    educationData: [
      { label: "Bilgisayar Mühendisliği", value: "Süleyman Demirel Üniversitesi • 2021 - Halen" },
      { label: "Rusça Hazırlık (Dil Okulu)", value: "Igor Sikorsky Kyiv Polytechnic Institute • 2019 - 2020" },
    ],
    skillsData: [
      { label: "React", value: "80%" },
      { label: "React Native", value: "80%" },
      { label: "Node.js", value: "80%" },
      { label: "Firebase", value: "70%" },
      { label: "MongoDB", value: "65%" },
      { label: "Network", value: "40%" },
      { label: "Python (Selenium)", value: "30%" },
    ],
    cardContent: "Yazılım geliştirici ve teknoloji tutkunu",
    aboutTitle: "Hakkımda",
    aboutTexts: [
      "Yazılım geliştirici ve teknoloji tutkunu olarak, modern mobil ve web uygulamalar geliştirmeye odaklanıyorum. Projelerimde genellikle React Native, Firebase, React, Node.js ve MongoDB gibi teknolojileri kullanıyorum.",
      "GitHub profilimde pek çok açık kaynak proje ve kişisel çalışmalarımı bulabilirsiniz. Yazılım geliştirme yolculuğumda, sürekli öğrenmeye ve yeni teknolojilere adapte olmaya önem veriyorum.",
      "Hedefim, kaliteli, sürdürülebilir ve kullanıcı dostu çözümler üretmek. İşbirliği yapmayı ve birlikte öğrenmeyi çok seviyorum.",
      "Daha fazla bilgi için GitHub, LinkedIn ve diğer sosyal medya hesaplarımı inceleyebilirsiniz.",
    ],
    educationTitle: "Eğitim",
    skillsTitle: "Yetenekler",
    projectsTitle: "Projelerim",
    viewOnGitHub: "GitHub'da Görüntüle",
    cvText: "CV’mi görüntülemek için tıklayın",
  },
  en: {
    projectsData: [
      {
        title: "WeatherWay",
        description:
        "WeatherWay is a mobile app that generates routes between cities and provides detailed hourly weather data along the path. It uses OSRM for routing, Google Maps for visualization, and OpenWeather API for up to 4 days of forecasts. Users can select their departure date and time, and get advanced warnings for fog, rain, wind, or freezing temperatures on their route. The app acts like a personal weather assistant for safe and well-informed travels.",
        link: "https://github.com/Berkayilmz/WeatherWay-Showcase",
        images: [
          "/assets/AppPng/weatherwayPNG/ana-ekran-rota.jpeg",
          "/assets/AppPng/weatherwayPNG/1.jpeg",
          "/assets/AppPng/weatherwayPNG/2.jpeg",
          "/assets/AppPng/weatherwayPNG/3.jpeg",
          "/assets/AppPng/weatherwayPNG/4.jpeg",
          "/assets/AppPng/weatherwayPNG/5.jpeg",
          "/assets/AppPng/weatherwayPNG/6.jpeg",
        ],
      },
      {
        title: "Secretum",
        description:
        "A mobile journaling app built with React Native (Expo) and powered by Firebase Auth & Firestore. Users can write daily notes with a title, content, emoji, and image. Local AES encryption ensures that even the app owner cannot access user data. Includes calendar view, private entry display, and user statistics features.",
        link: "https://github.com/Berkayilmz/Secretum",
        images: [
          "/assets/AppPng/secretumPNG/home-screen.jpeg",
          "/assets/AppPng/secretumPNG/1.jpeg",
          "/assets/AppPng/secretumPNG/2.jpeg",
          "/assets/AppPng/secretumPNG/3.jpeg",
          "/assets/AppPng/secretumPNG/4.jpeg",
          "/assets/AppPng/secretumPNG/5.jpeg",
          "/assets/AppPng/secretumPNG/6.jpeg",
          "/assets/AppPng/secretumPNG/7.jpeg",
        ],
      },
      {
        title: "Deal-Eye",
        description:
        "Deal-Eye is an integrated market analysis and forecasting system that collects price data from marketfiyati using Selenium, performs daily and weekly predictions with machine learning models (XGBoost, regression, time series), stores the data in MongoDB, and delivers a modern user interface built with the MERN stack (MongoDB, Express, React, Node.js).",
        link: "https://github.com/Berkayilmz/Deal-Eye",
        images: [
          "/assets/AppPng/dealeyePNG/Deal-Eye.jpeg",
          "/assets/AppPng/dealeyePNG/1.jpeg",
          "/assets/AppPng/dealeyePNG/2.jpeg",
          "/assets/AppPng/dealeyePNG/3.jpeg",
        ],
      },
      {
        title: "RentCar.NET",
        description:
        ".NetBackendProject is a backend infrastructure project developed using ASP.NET Core Web API (.NET 6) with a layered architecture. It prioritizes clean code, maintainability, and scalability. Ideal for learning, development, or as a boilerplate for quick project setup. The project includes Controller, Service, Repository, and DTO layers, with database operations handled via Entity Framework Core. REST API testing is easy with Swagger UI. It is extensible with tools like JWT, AutoMapper, and Serilog.",
        link: "https://github.com/Berkayilmz/rentacar-.net",
        images: [
          "/assets/AppPng/rentacarPNG/1.jpeg",
          "/assets/AppPng/rentacarPNG/2.jpeg",
          "/assets/AppPng/rentacarPNG/3.jpeg"
        ],
      },
      {
        title: "Bookstore",
        description:
          "Bookstore is a book tracking application I developed using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to perform core CRUD operations such as adding, editing, deleting, and listing books. I built this project to learn and internalize how the full MERN architecture works together in an integrated manner. It was especially valuable for gaining hands-on experience with RESTful API design and data management across front-end and back-end layers.",
        link: "https://github.com/Berkayilmz/BookStoreMERN",
        images: [
          "/assets/AppPng/bookstorePNG/1.jpeg",
          "/assets/AppPng/bookstorePNG/2.jpeg",
          "/assets/AppPng/bookstorePNG/3.jpeg"
        ],
      }
    ],
    educationData: [
      { label: "Computer Science", value: "Süleyman Demirel University • 2021 - Present" },
      { label: "Russian Prep (Language School)", value: "Igor Sikorsky Kyiv Polytechnic Institute • 2019 - 2020" },
    ],
    skillsData: [
      { label: "React", value: "80%" },
      { label: "React Native", value: "80%" },
      { label: "Node.js", value: "80%" },
      { label: "Firebase", value: "70%" },
      { label: "MongoDB", value: "65%" },
      { label: "Network", value: "40%" },
      { label: "Python (Selenium)", value: "30%" },
    ],
    cardContent: "Software developer and technology enthusiast",
    aboutTitle: "About Me",
    aboutTexts: [
      "As a software developer and technology enthusiast, I focus on creating modern mobile and web applications. I mainly use React Native, Firebase, React, Node.js, and MongoDB in my projects.",
      "You can find many open-source projects and personal works on my GitHub profile. I emphasize continuous learning and adapting to new technologies throughout my development journey.",
      "My goal is to deliver high-quality, sustainable, and user-friendly solutions. I really enjoy collaboration and learning together.",
      "For more information, feel free to check my GitHub, LinkedIn, and other social media profiles.",
    ],
    educationTitle: "Education",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    viewOnGitHub: "View on GitHub",
    cvText: "Click here to view my CV",
  },
};

export default data;