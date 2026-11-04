(function () {
  // ================================================================
  // PAGE SWITCHING: the address #about, #sop ... shows the section with that id.
  // The 'next' arrow follows the ORDER of <section class="page"> in index.html.
  // ================================================================
  var pages = [].slice.call(document.querySelectorAll(".page")),
    ids = pages.map(function (p) {
      return p.id;
    });
  function route() {
    var h = (location.hash || "#home").slice(1);
    if (ids.indexOf(h) < 0) h = "home";
    pages.forEach(function (p) {
      p.classList.toggle("on", p.id === h);
    });
    document.getElementById("homeLink").style.display =
      h === "home" ? "none" : "block";
    document.documentElement.classList.toggle("nos", h === "home");
    var k = ids.indexOf(h),
      nx = document.getElementById("nextLink");
    nx.style.display =
      h === "achcats"
        ? "none"
        : h === "achievements"
          ? typeof AL === "undefined" || AL.length > 1
            ? "block"
            : "none"
          : k > 0 && k < ids.length - 1
            ? "block"
            : "none";
    nx.href = "#" + ids[Math.min(k + 1, ids.length - 1)];
    document.getElementById("homeLink").href =
      h === "achievements" ? "#achcats" : "#home";
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();

  // SOP arrow scrolls text
  var t = document.getElementById("sopText");
  document.getElementById("sopArrow").addEventListener("click", function () {
    t.scrollBy({ top: t.clientHeight * 0.8, behavior: "smooth" });
  });

  // ================================================================
  // ACHIEVEMENTS DATA  <-- ADD / EDIT YOUR EVENTS HERE
  // Each { ... } below is ONE event. Copy a whole { ... }, to add another one:
  //   cat  = small title next to 'Achievements' (e.g. Competition)
  //   ev   = 'Event name | prize'
  //   engineIcon = optional { src, alt } game engine icon shown beside the event name
  //   imgs = list of pictures, e.g. ['assets/a1.jpg','assets/a2.jpg']
  //          (more than one picture = they slide every 2.5 s with flower dots)
  //   txt  = the description text (use \n for line breaks)   url = the 'Click here for more info' link
  //          (url:'' removes the link)
  // Put picture files in the assets folder.
  // ================================================================
  // Achievements: each event has its own pictures (imgs). Dots = pictures of that event; slides every 2.5 s
   var A = [
    {
      cat: "Competition",
      ev: "TJ Gaming Hackaton Final Round| รางวัลชนะเลิศเหรียญทอง ระดับนานาชาติ",
      engineIcon: { src: "assets/logo/unity.png", alt: "Unity" },
      imgs: ["assets/ach/tj.jpg", "assets/ach/tj1.jpg", "assets/ach/tj2.jpg"],
      txt: "รางวัลชนะเลิศเหรียญทอง Thailand-Japan Game Programing Hackathon 2024 แข่งขันรอบนานาชาติ ร่วมการแข่งขันสร้างสรรค์เกมในโปรแกรม Unity หัวข้อ NET ZERO ภายในระยะเวลา 3 วัน  เกมที่สร้างขึ้นมีชื่อว่า \"Green Legacy\" โดยได้รับหน้าที่เขียนโค้ดและตอบคำถามการนำเสนอเกมเป็นภาษาอังกฤษ ได้รับประสบการทำงานในระยะเวลาสั้น ทำงานร่วมกันเป็นทีม ทักษะการแก้ปัญหาเฉพาะหน้า ทักษะการสื่อสาร ทำงานภายใต้ความกดดัน ได้พบเจอเพื่อนๆและมิตรภาพ",
      url: "https://canva.link/q8wsqlnensv8qam",
    },
    {
      cat: "Competition",
      ev: "PCSHCR-TGUSHS SCIENCE FAIR 2026 | รางวัลชนะเลิศเหรียญทอง ระดับนานาชาติ",
      engineIcon: { src: "assets/logo/html.png", alt: "HTML" },
      imgs: ["assets/ach/tg1.jpg","assets/ach/tg.png","assets/ach/tg2.jpg"],
      txt: "รางวัลชนะเลิศเหรียญทอง PCSHCR-TGUSHS SCIENCE FAIR 2026 งานนนำเสนอโครงงานวิทยาศาสตร์ โครงงานที่หนูนำเสนอเกี่ยวกับเว็บไซต์เกมเพื่อเสริมสร้างแรงจูงใจในการเรียน ได้รับคำแนะนำในการพัฒมนาโครงงาน และนำเว็บไซต์เกมให้ผู็เข้าร่วมงานได้ลองเล่น",
      url: "https://canva.link/0ptr57l7j1hpvvi",
    },
    {
      cat: "Competition",
      ev: "The Thailand Preliminary Round of the Thailand-Japan Game programing Hackaton 2024 | รางวัลชนะเลิศเหรียญทอง ระดับประเทศ",
      engineIcon: { src: "assets/logo/unity.png", alt: "Unity" },
      imgs: ["assets/ach/tjf.jpg","assets/ach/tjf1.jpg","assets/ach/tjf2.jpg", "assets/ach/tjf3.jpg"],
      txt: "รางวัลชนะเลิศเหรียญทอง The Thailand Preliminary Round of the Thailand-Japan Game programing Hackaton 2024 รอบประดับชาติ โดยแข่งขันร่วมกับโรงเรียนทั้ง 18 จุฬาภรณ แข่งขันสร้างสรรค์เกมในโปรแกรม Unity หัวข้อ SDGS 11 เกมที่สร้างขึ้นมีชื่อว่า \"Super Earth\" ภายในระยะเวลา 3 วัน และนำเสนอเกมที่สร้าง โดยทำหน้าที่เขียนโค้ด ออกแบบ gameplay และนำเสนอและตอบคำถามเป็นภาษาอังกฤษ ได้รับประสบการณ์สร้างสรรค์เกม ทำงานร่วมกับผู้อื่น ได้รับทักษะการเขียนโค้ด แก้ปัญหาเฉพาะหน้า ทำงานภายใต้ความกดดัน",
      url: "https://canva.link/p85acc506p30dgi",
    },
    {
      cat: "Competition",
      ev: "The 6 PCSHS Science Symposium 2026 | รางวัลชนะเลิศเหรียญทอง ระดับประเทศ",
      engineIcon: { src: "assets/logo/html.png", alt: "HTML" },
      imgs: ["assets/ach/ss.png"],
      txt: "รางวัลเหรียญแดง The 6 PCSHS Science Symposium 2026 งานนนำเสนอโครงงานวิทยาศาสตร์ โครงงานที่หนูนำเสนอเกี่ยวกับเว็บไซต์เกมเพื่อเสริมสร้างแรงจูงใจในการเรียน ได้รับคำแนะนำในการพัฒมนาโครงงานต่อไป",
      url: "https://canva.link/0ptr57l7j1hpvvi",    
    },
    {
      cat: "Competition",
      ev: "การแข่งขันการสร้างเกมสร้างสรรค์จากคอมพิวเตอร์ ม.๔-ม.๖ | รองชนะเลิศอันดับ 2 เหรียญทองแดง ระดับจังหวัด",
      engineIcon: { src: "assets/logo/c2.avif", alt: "Construct 2" },
      imgs: ["assets/ach/hg.png"],
      txt: "รองชนะเลิศอันดับ 2 ระดับเหรียญทองแดง การแข่งขันการสร้างเกมสร้างสรรค์จากคอมพิวเตอร์ ม.๔-ม.๖ แข่งขันสร้างสรรค์เกมเกี่ยวกับ AI ใน construct ภายในเวลา 5 ชั่วโมง โดยรับหน้าที่เขียนโค้ด และ ออกแบบ gameplay ได้รับประสบการณ์สร้างสรรค์เกม ทำงานร่วมกับผู้อื่น การคิดเนื้อเรื่องคอนเซปต์เกม แก้ปัญหาเฉพาะหน้า ทำงานภายใต้ความกดดัน"
    },
    {
      cat: "Competition",
      ev: "การแข่งขันการเขียนโปรแกรมด้วยภาษาคอมพิวเตอร์ ม.4-ม.6 | เข้าร่วม เหรียญทอง ระดับจังหวัด",
      engineIcon: { src: "assets/logo/py.png", alt: "Python" },
      imgs: ["assets/ach/hp.jpg"],
      txt: "รางวัลเหรียญทอง เข้าร่วมแข่งขันเขียนโปรแกรมด้วยภาษาคอมพิวเตอร์ภายในเวลา 3 ชั่วโมง ได้รับประสบการณ์ เขียนโปรแกรมตามสถาณการณ์ที่โจทย์กำหนด ทำงานภายใต้เวลาจำกัด ทำงานเป็นทีม และ แก้ปัญหาเฉพาะหน้า"
    },
    {
      cat: "Game Development",
      ev: "เข้าร่วมกิจกรรม Global Game Jam 2026: Chiaing Mai",
      engineIcon: { src: "assets/logo/godot.png", alt: "Godot" },
      imgs: ["assets/ach/gj.png","assets/ach/gj1.png", "assets/ach/gj2.png"],
      txt: "เข้าร่วมกิจกรรม Global Game Jam 2026: Chiaing Mai เข้าร่วมสร้างสรรค์เกมภายใต้คอนเซป หน้ากาก ภายในระยะเวลา 3 วัน ใน Godot โดยได้รับหน้าที่เขียนโค้ด ทำ cutscene และได้นำไปพัฒนาต่อหลังจากจบกิจกรรม ได้รับประสบการณ์สร้างสรรค์เกม ทำงานร่วมกับผู้อื่น การคิดเนื้อเรื่องคอนเซปต์เกม การโปรแกรมมิ่ง แก้ปัญหาเฉพาะหน้า ทำงานภายใต้ความกดดัน",
      url: "https://canva.link/jpjx1uaalvum42p",
    },
    {
      cat: "Game Development",
      ev: "เข้าร่วมกิจกรรมแบบอร์ดเกมรุ่นเยาว์ ประจำปี 2569",
      imgs: ["assets/ach/ybgd.jpg","assets/ach/ybgd1.jpg", "assets/ach/ybgd2.jpg"],
      txt: "เข้าร่วมกิจกรรม (YBGD) ภายใต้โจทย์ \"เรื่องเล่าบ้านฉัน สู่กระดานเกมโลก\" โดยรับหน้าที่ออกแบบกติกา และทำโปสเตอร์โปรโมทบอร์ดเกม ได้รับประสบการณ์สร้างสรรค์บอร์ดเกม ออกแบบวิธีเกมให้สนุก ออกแบบกติกาให้เหมาะสม นำเสนอผลงาน  การสอดแทรกวัฒธรรมในบอร์ดเกมให้น่าสนใจ และทำงานร่วมกับผู้อื่น",
      url: "https://canva.link/jwohykwu2m6mfr6",
    },
    {
      cat: "Game Development", 
      ev: "The hating sim| personal project(In development)",
      engineIcon: { src: "assets/logo/rp.png", alt: "Renpy" },
      imgs: ["assets/ach/ths.jpg","assets/ach/ths1.jpg"],
      txt: `แนวคิด (Concept): เกมแนวเล่าเรื่องผ่านตัวเลือก (Visual Novel) พัฒนาใน Ren'Py ที่มีการแทรกมินิเกมหลากหลายรูปแบบไว้ในฉากสำคัญ
            ระบบการเล่น (Gameplay): ดำเนินเรื่องผ่านนิยายภาพที่ผู้เล่นต้องตัดสินใจเลือกคำตอบ ซึ่งจะส่งผลต่อทิศทางและบทสรุปของเรื่องราว โดยมีมินิเกมรูปแบบต่างๆ สลับเข้ามาเล่นตามธีมของตัวละครนั้นๆ
            เนื้อเรื่อง (Story): ตัวเอกได้รับบทเป็นเพียงตัวประกอบ ให้กับผู้เล่นในเกมจีบสาว แต่ตัวเอกของเรากลับแน่วแน่ว่าจะ \"ไม่ขอมีความรักเด็ดขาด!\" ทว่าชีวิตของเขาดันอยู่ในกำมือของผู้เล่น ซึ่งทุกตัวเลือกของผู้เล่นจะเป็นตัวชี้ชะตาว่าชีวิตของตัวเอกจะดำเนินไปทางไหน`,
      url: "https://canva.link/p2e9mt1v03ci2nj",
    },
    {
      cat: "Game Development",
      ev: "Green Legacy| TJ Gaming Hackaton Final Round",
      engineIcon: { src: "assets/logo/unity.png", alt: "Unity" },
      imgs: ["assets/ach/1.png","assets/ach/gl.png","assets/ach/gl1.png","assets/ach/gl2.png"],
      txt: `Concept: เกมสามมิติสำหรับผู้เล่น 2 คน ที่มีเป้าหมายในการสร้างความสมดุลของทรัพยากร สอดแทรกข้อคิดเรื่องการปล่อยก๊าซเรือนกระจกเป็นศูนย์ (Net Zero) ในรูปแบบที่เข้าใจง่ายและสนุกสนาน
            ระบบการเล่น (Gameplay): ผู้เล่นต้องตัดไม้มาแปรรูปเป็นเฟอร์นิเจอร์และนำไปส่งให้ลูกค้าตามออเดอร์ ขณะเดียวกันก็ต้องปลูกต้นไม้ทดแทนเพื่อรักษาสมดุลสิ่งแวดล้อม หากตัดไม้เพลินจนระดับเกจความร้อนเต็ม เกมจะจบลงทันที
            เนื้อเรื่อง (Story): รับบทเป็นเจ้าของธุรกิจผลิตเฟอร์นิเจอร์ที่ต้องหาทางทำรายได้ให้ได้ตามเป้าหมาย พร้อมๆ กับต้องรับผิดชอบต่อธรรมชาติด้วยการปลูกต้นไม้คืนสู่ป่าเพื่อรักษาสมดุลของสิ่งแวดล้อม`,
      url: "https://canva.link/q8wsqlnensv8qam",
    },
    {
      cat: "Game Development",
      ev: "Super Earth| TJ 2024 first round",
      engineIcon: { src: "assets/logo/unity.png", alt: "Unity" },
      imgs: ["assets/ach/tt.png","assets/ach/tt1.png"],
      txt: `
             แนวคิด (Concept): เกมสามมิติสำหรับผู้เล่น 2 คน ที่เน้นให้ผู้เล่นช่วยเหลือกันฟันฝ่าอุปสรรคเพื่อไปให้ถึงเป้าหมาย ส่งเสริมความสามัคคีและการทำงานร่วมกันในหมู่คณะ
             ระบบการเล่น (Gameplay): ผู้เล่นทั้งสองคนต้องแบ่งหน้าที่และร่วมมือกันปฏิบัติภารกิจ เช่น ในด่านแรกจะต้องช่วยกันเข้าไปกอบกู้วัตถุโบราณกลับมาอนุรักษ์ เพื่อไม่ให้มรดกทางวัฒนธรรมถูกลืมเลือนไป
             เนื้อเรื่อง (Story): เรื่องราวในโลกอนาคตที่มีหน่วยงานหุ่นยนต์คอยช่วยเหลือมนุษย์แก้ไขปัญหาต่างๆ ในสังคม ผู้เล่นจะได้รับบทเป็นหุ่นยนต์คู่หูที่ต้องคอยร่วมมือกันทำภารกิจต่างๆ ให้ลุล่วงสำเร็จ
          `,
      url: "https://canva.link/p85acc506p30dgi",
    },
    {
      cat: "Game Development",
      ev: "Developing Instructional Media Using Gamification and the ARCS Model to Enhance Student Motivation| Science project",
      engineIcon: { src: "assets/logo/html.png", alt: "HTML" },
      imgs: ["assets/ach/sp.jpeg","assets/ach/sp1.jpeg","assets/ach/sp2.jpeg"],
      txt: `แนวคิด (Concept): ต้องการเปลี่ยนการเรียนรู้ให้น่าสนุกยิ่งขึ้น โดยนำระบบเกมต่อสู้สลับเทิร์นมาประยุกต์เข้ากับเนื้อหาบทเรียน สอดแทรกเนื้อเรื่องลงในแบบทดสอบมากกว่า 15 ข้อ ซึ่งผู้เล่นจะได้ต่อสู้กับศัตรูหลากหลายรูปแบบตามด่านต่างๆ และเผชิญหน้ากับบอสใหญ่ของเกมพร้อมฉากจบของเนื้อเรื่องในตอนท้าย
            ระบบการเล่น (Gameplay): อ้างอิงระบบการต่อสู้แบบสลับเทิร์น ผู้เล่นต้องตอบคำถามให้ถูกต้องเพื่อสร้างจังหวะโจมตี หากตอบผิดจะถูกศัตรูโจมตีสวนกลับและเสียแต้มการตอบถูกต่อเนื่อง (Streak) หากตอบถูกติดต่อกันหลายข้อ จะได้รับพลังโจมตีเพิ่มขึ้นเล็กน้อย เมื่อตอบคำถามครบทุกข้อ เกมจะมีหน้าจอสรุปคะแนนพร้อมประเมินระดับความสามารถของผู้เล่น
            เนื้อเรื่อง (Story): รับบทเป็น "เชอร์รี่" ที่หลบหนีออกจากถ้วยไอศกรีมก่อนถูกเสิร์ฟ เพื่อออกตามหาเชอร์รี่คู่หูฝาแฝดที่ถูกทิ้งไว้กับเหล่าผลไม้เน่าเสีย ผู้เล่นจึงต้องต่อสู้ฟันฝ่าผลไม้เน่าตัวอื่นๆ เพื่อพาฝาแฝดกลับมาให้ได้`,
      url: "https://canva.link/0ptr57l7j1hpvvi",
    },
    {
      cat: "Certification",
      ev: "ผลประเมินฝึกทักษะวิจัย NECTEC ผ่านฝึกทักษะวิจัย ระดับดีเยี่ยม",
      imgs: ["assets/ach/nectec.png"],
      txt: "ผ่านการฝึกทักษะวิจัยกับ NECTEC และได้รับผลการประเมินในระดับดีเยี่ยม โดยได้รับการฝึกฝนทักษะด้านการวิจัย การทำงานอย่างเป็นระบบ และความรับผิดชอบในการปฏิบัติงาน จากการฝึกทักษะดังกล่าว ได้พัฒนาความสามารถในการทำงานวิจัยอย่างมีประสิทธิภาพ เรียนรู้การบริหารเวลา และเสริมสร้างความรับผิดชอบต่อหน้าที่ที่ได้รับมอบหมาย",
    },
    {
      cat: "Certification",
      ev: "เข้าร่วมการฝึกทักษะวิจัย ณ ห้องปฎิบัติการวิจัยของศนูย์วิจัยแห่งชาติ สวทช. ภาคฤดูร้อนปี 2569",
      imgs: ["assets/ach/nst.png", "assets/ach/nst1.jpg", "assets/ach/nst2.png"],
      txt: "เข้าร่วมการฝึกทักษะวิจัย ณ ห้องปฏิบัติการวิจัยของศูนย์วิจัยแห่งชาติ สวทช. ภาคฤดูร้อน ปี 2569 โดยฝึกทักษะวิจัยในหัวข้อการเขียนและปรับปรุงโมเดลปัญญาประดิษฐ์เพื่อการตรวจจับ Deepfake จากการฝึกทักษะวิจัยดังกล่าว ได้รับความรู้เกี่ยวกับการพัฒนาโมเดลปัญญาประดิษฐ์ กระบวนการวิจัย การวิเคราะห์ข้อมูล และการแก้ไขปัญหาเชิงเทคนิค ซึ่งช่วยเสริมสร้างทักษะด้านการวิจัยและเทคโนโลยีปัญญาประดิษฐ์"
    },
    {
      cat: "Certification",
      ev: "ผ่านการอบรม 16-week online Academic IELTS Preparation Programme",
      imgs: ["assets/ach/otk.jpg"],
      txt: "ผ่านการอบรมหลักสูตร 16-Week Online Academic IELTS Preparation Programme ซึ่งเป็นการพัฒนาทักษะภาษาอังกฤษเชิงวิชาการ โดยมุ่งเน้นทักษะการฟัง การพูด การอ่าน และการเขียนภาษาอังกฤษประสบการณ์จากการอบรมทำให้ได้พัฒนาความสามารถในการใช้ภาษาอังกฤษเพื่อการสื่อสารและการศึกษา เพิ่มความมั่นใจในการใช้ภาษาอังกฤษในบริบททางวิชาการ และเสริมสร้างพื้นฐานสำหรับการศึกษาต่อในระดับที่สูงขึ้น"
    },
    {
      cat: "Certification",
      ev: "สำเร็จหลักสูตร \"ทักษะสู่ความสำเร็จ สำหรับเยาวชนรุ่นใหม่\" สวทช ภาคฤดูร้อน ปี 2569",
      imgs: ["assets/ach/ntda.jpg"],
      txt: "สำเร็จหลักสูตร \"ทักษะสู่ความสำเร็จ สำหรับเยาวชนรุ่นใหม่\" สวทช ภาคฤดูร้อน ปี 2569 ซึ่งเป็นการพัฒนาทักษะการคิดวิเคราะห์ การสื่อสาร และ บริหารงบประงานในการทำโครงงานทางวิทยาศาสตร์และเทคโนโลยี",
    },
    {
      cat: "Certification",
      ev: "เข้าร่วมค่ายแกนนำรักษ์สิ่งแวดล้อม ขยะเหลือศูนย์ ZERO WASTE",
      imgs: ["assets/ach/zw.jpg"],
      txt: "เข้าร่วมค่ายแกนนำรักษ์สิ่งแวดล้อม ขยะเหลือศูนย์ ZERO WASTE โดยได้รับความรู้เกี่ยวกับการจัดการขยะ การลดปริมาณขยะ และการคำนวณ carbon footprint ของกิจกรรมต่างๆ ซึ่งช่วยเสริมสร้างความตระหนักในการรักษาสิ่งแวดล้อมและการใช้ทรัพยากรอย่างยั่งยืน"
    },
    {
      cat: "Activity",
      ev: "เข้าร่วม NCSA CTF THAILAND TOURNAMENT 2026",
      imgs: ["assets/ach/ctf26.png"],
      txt: "เข้าร่วมการแข่งขัน NCSA CTF THAILAND TOURNAMENT 2026 ซึ่งเป็นการแข่งขันด้านความปลอดภัยไซเบอร์ ได้รับประสบการณณ์ในการประยุกต์ใช้ความรู้ในด้านต่างๆ เช่น การเข้ารหัส การวิเคราะห์เครือข่าย และการแก้ไขปัญหาเชิงเทคนิค เพื่อแก้โจทย์"
    },
    {
      cat: "Activity",
      ev: "เข้าร่วม Thailand Cyber Talent 2025",
      imgs: ["assets/ach/ctf.png"],
      txt: "เข้าร่วมการแข่งขัน Thailand Cyber Talent 2025 ซึ่งเป็นการแข่งขันด้านความปลอดภัยไซเบอร์ ได้รับประสบการณ์ในการแก้ไขโจทย์ที่เกี่ยวข้องกับการกู้คืนไฟล์ การวิเคราะห์เครือข่าย และการแก้ไขปัญหาเชิงเทคนิค เพื่อพัฒนาทักษะด้านความปลอดภัยไซเบอร์และการทำงานร่วมกับทีม"
    },
    {
      cat: "Activity",
      ev: "เข้าร่วมพัฒนาแอพพิเคชั่น IOS",
      imgs: ["assets/ach/ios.png"],
      txt: "เข้าร่วมโครงการพัฒนาแอพพิเคชั่น iOS ซึ่งเป็นการเรียนรู้และประยุกต์ใช้เทคโนโลยีการพัฒนาแอพพลิเคชันสำหรับระบบปฏิบัติการ iOS ได้รับประสบการณ์ในการออกแบบและพัฒนาฟีเจอร์ต่างๆ ของแอพพลิเคชัน รวมถึงการทดสอบและปรับปรุงคุณภาพของแอพพลิเคชัน"
    },
    {
      cat: "Community Service",
      ev: "สอนการใช้ unity ขั้นพื้นฐานให้กับนักเรียนชั้นมัธยมศึกษาตอนปลาย",
      imgs: ["assets/ach/u.jpg"],
      txt: "ให้การสอนพิเศษเกี่ยวกับการใช้โปรแกรม Unity เพื่อพัฒนาเกม โดยถ่ายทอดความรู้พื้นฐานด้านการออกแบบเกม การสร้างฉาก การจัดการวัตถุในเกม การเขียนโปรแกรมด้วยภาษา C# และการพัฒนาเกมเบื้องต้นให้แก่นักเรียนชั้นมัธยมศึกษาปตอนปลาย"
    },
    {
      cat: "Community Service",
      ev: "เป็นตัวแทนนักเรียนเข้าร่วมกิจกรรมประชาสัมพันธ์และแนะแนวการศึกษาศึกษาต่อในโรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ลำปาง",
      imgs: ["assets/ach/sc.jpg","assets/ach/sc1.jpg", "assets/ach/sc2.jpg"],
      txt: "ได้รับโอกาสเป็นตัวแทนโรงเรียนเข้าร่วมกิจกรรมประชาสัมพันธ์และแนะแนวการศึกษาแก่โรงเรียนต่าง ๆ ในเขตพื้นที่จังหวัดเชียงใหม่และลำพูน โดยมีหน้าที่ให้ข้อมูลเกี่ยวกับหลักสูตร กิจกรรม และบรรยากาศการเรียนรู้ของโรงเรียนแก่ผู้สนใจและนักเรียนในพื้นที่"
    },
    {
      cat: "Community Service",
      ev: "เป็นตัวแทนนักเรียนเข้าร่วมงานสมโภช 10 ปี ณ พระธาตุสมปรารถนา วัดป่ายางมน",
      imgs: ["assets/ach/v.jpg"],
      txt: "ได้รับโอกาสในการเป็นตัวแทนนักเรียนเข้าร่วมงานสมโภช 10 ปี ซึ่งเป็นกิจกรรมประจำปีของโรงเรียน โดยมีหน้าที่ให้ข้อมูลและประชาสัมพันธ์เกี่ยวกับหลักสูตรและกิจกรรมต่างๆ ของโรงเรียนแก่ผู้สนใจ"
    },
    {
      cat: "Community Service",
      ev: "ร่วมจัดกิจกรรมวันวิทยาศาสตร์แห่งชาติ ณ โรงเรียนวัดป่ายางมน",
      imgs: ["assets/ach/pm.jpg","assets/ach/pm1.JPG","assets/ach/pm2.JPG"],
      txt: "ได้รับโอกาสในการร่วมจัดกิจกรรมวันวิทยาศาสตร์แห่งชาติ ซึ่งเป็นกิจกรรมประจำปีของโรงเรียน โดยมีหน้าที่ช่วยเหลือในการเตรียมวัสดุและเป็นวิทยากรให้ความรู้จัดการกิจกรรมต่างๆ "
    }
  ];
  var AL = A; // events of the chosen category (all events if none chosen)
  var dc = ["#2f3da8", "#4a58c7", "#7b86e8"],
    tint = ["#ffffff", "#e8ecff", "#d3dafa"],
    dots = document.getElementById("achDots"),
    track,
    ei = 0,
    pi = 0,
    timer;
  function go(k) {
    pi = k;
    track.style.transform = "translateX(-" + k * 100 + "%)";
    [].forEach.call(dots.children, function (b, n) {
      b.classList.toggle("on", n === k);
    });
  }
  function start() {
    clearInterval(timer);
    if (
      matchMedia("(prefers-reduced-motion:reduce)").matches ||
      AL[ei].imgs.length < 2
    )
      return;
    timer = setInterval(function () {
      if (location.hash === "#achievements") go((pi + 1) % AL[ei].imgs.length);
    }, 2500);
  }
  function showEvent(n) {
    ei = n;
    var a = AL[n],
      sh = document.getElementById("achShot");
    document.getElementById("achCat").textContent = a.cat;
    document.getElementById("achEv").textContent = a.ev;
    var engineIcons = document.getElementById("achEngineIcons");
    engineIcons.innerHTML = "";
    if (a.engineIcon) {
      var engineIcon = document.createElement("img");
      engineIcon.src = a.engineIcon.src;
      engineIcon.alt = a.engineIcon.alt;
      engineIcons.appendChild(engineIcon);
    }
    var tx = document.getElementById("achText");
    tx.textContent = a.txt;
    if (a.url) {
      var l = document.createElement("a");
      l.className = "more";
      l.href = a.url;
      l.target = "_blank";
      l.rel = "noopener noreferrer";
      l.innerHTML =
        '<svg class="mf"><use href="#flw"/></svg><span>Click here for more info</span><svg class="mf"><use href="#flw"/></svg>';
      tx.appendChild(l);
    }
    sh.innerHTML = '<div class="track"></div>';
    track = sh.firstChild;
    dots.innerHTML = "";
    a.imgs.forEach(function (src, k) {
      var d = document.createElement("div");
      d.className = "sl";
      if (src) d.innerHTML = '<img alt="" src="' + src + '">';
      else d.style.background = tint[k % 3];
      track.appendChild(d);
      if (a.imgs.length > 1) {
        var b = document.createElement("button");
        b.setAttribute("aria-label", "Picture " + (k + 1));
        b.innerHTML =
          '<svg style="fill:' + dc[k % 3] + '"><use href="#flw"/></svg>';
        b.addEventListener("click", function () {
          go(k);
          start();
        });
        dots.appendChild(b);
      }
    });
    go(0);
    start();
    setTimeout(chk, 0);
  }
  document.getElementById("nextLink").addEventListener("click", function (e) {
    if (location.hash === "#achievements") {
      e.preventDefault();
      showEvent((ei + 1) % AL.length);
    }
  });
  var at = document.getElementById("achText"),
    aa = document.getElementById("achArrow");
  function chk() {
    aa.hidden = !(
      at.scrollHeight - at.clientHeight > 4 &&
      at.scrollTop + at.clientHeight < at.scrollHeight - 4
    );
  }
  at.addEventListener("scroll", chk);
  aa.addEventListener("click", function () {
    at.scrollBy({ top: at.clientHeight * 0.8, behavior: "smooth" });
  });
  addEventListener("resize", chk);
  addEventListener("hashchange", function () {
    setTimeout(chk, 60);
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(chk);
  // CATEGORY MENU: choosing a category shows only its events
  [].forEach.call(document.querySelectorAll("#achcats [data-cat]"), function (a) {
    a.addEventListener("click", function () {
      var c = a.getAttribute("data-cat");
      AL = A.filter(function (e) {
        return e.cat === c;
      });
      if (!AL.length) AL = A;
      showEvent(0);
    });
  });
  showEvent(0);
  route();
  setTimeout(chk, 100);

  // ================================================================
  // TRANSCRIPT PICTURES  <-- the ['',''] near the bottom of this block is the list of
  // pictures, e.g. ['assets/t1.jpg','assets/t2.jpg']  (2+ pictures = slideshow)
  // ================================================================
  // Transcript pictures: slide every 2.5 s when there is more than one
  (function (shot, dots, imgs, hash) {
    var tr,
      i = 0,
      t;
    shot.innerHTML = '<div class="track"></div>';
    tr = shot.firstChild;
    function go(k) {
      i = k;
      tr.style.transform = "translateX(-" + k * 100 + "%)";
      [].forEach.call(dots.children, function (b, n) {
        b.classList.toggle("on", n === k);
      });
    }
    function st() {
      clearInterval(t);
      if (
        imgs.length > 1 &&
        !matchMedia("(prefers-reduced-motion:reduce)").matches
      )
        t = setInterval(function () {
          if (location.hash === hash) go((i + 1) % imgs.length);
        }, 2500);
    }
    imgs.forEach(function (src, k) {
      var d = document.createElement("div");
      d.className = "sl";
      if (src) d.innerHTML = '<img alt="" src="' + src + '">';
      else d.style.background = tint[k % 3];
      tr.appendChild(d);
      if (imgs.length > 1) {
        var b = document.createElement("button");
        b.setAttribute("aria-label", "Picture " + (k + 1));
        b.innerHTML =
          '<svg style="fill:' + dc[k % 3] + '"><use href="#flw"/></svg>';
        b.addEventListener("click", function () {
          go(k);
          st();
        });
        dots.appendChild(b);
      }
    });
    go(0);
    st();
  })(
    document.getElementById("trShot"),
    document.getElementById("trDots"),
    ["assets/ach/ปพ1.jpg", "assets/ach/ปพ11.jpg"],
    "#education2",
  );

  // ================================================================
  // BACKGROUND PHOTO + RIPPLE DISTORTION (WebGL).
  // IMG = the background file. Replace assets/background.jpg to change it.
  // In the shader: 'w*12.' = how strong the bending is (bigger = stronger).
  // NOTE: needs a web server (not double-click) - see README.md
  // ================================================================
  // Background photo, refracted by the ripples (WebGL)
  var IMG = "assets/background.jpg",
    glDraw = null;
  (function () {
    document.body.style.backgroundImage = "url(" + IMG + ")";
    var cv = document.getElementById("bg"),
      gl = null;
    try {
      gl = cv.getContext("webgl", { alpha: false, antialias: false });
    } catch (e) {}
    if (!gl) return;
    var FS =
      "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform sampler2D T;uniform vec2 res,isz;uniform float sc,n,ds;uniform vec4 Q[32];\nvoid main(){\nvec2 p=vec2(gl_FragCoord.x,res.y-gl_FragCoord.y);vec2 d=vec2(0.);float h=0.;\nfor(int i=0;i<32;i++){if(float(i)>=n)break;vec4 q=Q[i];vec2 v=p-q.xy;float L=length(v)+.001;float k=L-q.z;float s=max(6.*ds,q.z*.1);\nfloat w=sin(k*3.1416/s)*exp(-k*k/(4.*s*s))*q.w;d+=v/L*w*12.*ds;h+=w;}\nvec2 t=(p+d-res*.5)/(isz*sc)+.5;\ngl_FragColor=vec4(texture2D(T,t).rgb+h*.04,1.);}";
    function sh(t, src) {
      var o = gl.createShader(t);
      gl.shaderSource(o, src);
      gl.compileShader(o);
      return o;
    }
    var pr = gl.createProgram();
    gl.attachShader(
      pr,
      sh(
        gl.VERTEX_SHADER,
        "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}",
      ),
    );
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
    gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    var ap = gl.getAttribLocation(pr, "a");
    gl.enableVertexAttribArray(ap);
    gl.vertexAttribPointer(ap, 2, gl.FLOAT, false, 0, 0);
    var U = function (n) {
        return gl.getUniformLocation(pr, n);
      },
      uR = U("res"),
      uI = U("isz"),
      uS = U("sc"),
      uN = U("n"),
      uQ = U("Q"),
      uD = U("ds");
    var ok = false,
      iw = 1,
      ih = 1,
      s = 1,
      buf = new Float32Array(128);
    function fit() {
      s = Math.min(devicePixelRatio || 1, 1.5);
      cv.width = Math.round(innerWidth * s);
      cv.height = Math.round(innerHeight * s);
      gl.viewport(0, 0, cv.width, cv.height);
    }
    function paint() {
      var n = 0,
        i,
        p,
        u,
        e,
        a,
        r;
      for (i = 0; i < rp.length && n < 32; i++) {
        p = rp[i];
        u = p.t / p.life;
        if (u >= 1) continue;
        e = 1 - Math.pow(1 - u, 2.2);
        a = Math.sin(Math.min(u * 3, 1) * 1.5708) * (1 - u);
        r = p.m * e;
        if (r < 3) continue;
        buf[n * 4] = p.x * s;
        buf[n * 4 + 1] = p.y * s;
        buf[n * 4 + 2] = r * s;
        buf[n * 4 + 3] = a;
        n++;
      }
      var w = cv.width,
        h = cv.height;
      gl.uniform2f(uR, w, h);
      gl.uniform2f(uI, iw, ih);
      gl.uniform1f(uS, Math.max(w / iw, h / ih));
      gl.uniform1f(uN, n);
      gl.uniform1f(uD, s);
      gl.uniform4fv(uQ, buf);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    var im = new Image();
    im.onload = function () {
      var t = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, t);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, im);
      } catch (err) {
        cv.style.display = "none";
        return;
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      iw = im.width;
      ih = im.height;
      ok = true;
      fit();
      paint();
    };
    im.src = IMG;
    glDraw = function () {
      if (ok) paint();
    };
    addEventListener("resize", function () {
      if (ok) {
        fit();
        paint();
      }
    });
  })();

  // ================================================================
  // RAIN RIPPLES (the blue rings).  Change here:
  //   W*H/80000   -> bigger number = fewer ripples
  //   R()<.02     -> how often a new ripple starts
  //   m=...       -> ripple size (small: 80-190px, big: 200-420px)
  //   cols list   -> the 3 ripple blue colors (in function mk: c:[...])
  //   al*.7       -> ripple opacity
  // ================================================================
  // Top-view rain: broken concentric ripple rings
  var c = document.getElementById("rain"),
    x = c.getContext("2d"),
    W,
    H,
    rp = [],
    dpr = Math.min(devicePixelRatio || 1, 2),
    last = 0;
  var reduce = matchMedia("(prefers-reduced-motion:reduce)").matches,
    R = Math.random;
  function arcs() {
    var n = 1 + Math.floor(R() * 4),
      a = R() * 6.283,
      o = [],
      seg = 6.283 / n;
    for (var i = 0; i < n; i++) {
      o.push([a + i * seg + R() * 0.3, seg * (0.45 + R() * 0.45)]);
    }
    return o;
  }
  function mk(age) {
    var big = R() < 0.18,
      m = big ? 200 + R() * 220 : 80 + R() * 110,
      k = 2 + Math.floor(R() * 3),
      rs = [];
    for (var i = 0; i < k; i++)
      rs.push({
        f: 1 - i * (0.22 + R() * 0.12),
        a: arcs(),
        w: i ? 1 : 1.6,
        d: [],
      });
    return {
      c: ["50,120,185", "75,160,225", "125,195,245"][Math.floor(R() * 3)],
      x: R() * W,
      y: R() * H,
      m: m,
      t: age || 0,
      life: (big ? 9 : 6) + R() * 4,
      rs: rs,
      rot: (R() - 0.5) * 0.25,
    };
  }
  function size() {
    W = innerWidth;
    H = innerHeight;
    c.width = W * dpr;
    c.height = H * dpr;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    rp = [];
    var n = Math.round((W * H) / 80000) + 2;
    for (var i = 0; i < n; i++) {
      var p = mk();
      p.t = R() * p.life * 0.8;
      rp.push(p);
    }
  }
  function draw(dt) {
    x.clearRect(0, 0, W, H);
    x.lineCap = "round";
    for (var i = rp.length - 1; i >= 0; i--) {
      var p = rp[i];
      p.t += dt;
      var u = p.t / p.life;
      if (u >= 1) {
        rp.splice(i, 1);
        continue;
      }
      var e = 1 - Math.pow(1 - u, 2.2),
        al = Math.sin(Math.min(u * 3, 1) * 1.5708) * (1 - u),
        r = p.m * e;
      for (var k = 0; k < p.rs.length; k++) {
        var q = p.rs[k],
          rr = r * q.f;
        if (rr < 1.5) continue;
        x.strokeStyle = "rgba(" + p.c + "," + (al * 0.7).toFixed(3) + ")";
        x.lineWidth = q.w;
        x.setLineDash(q.d);
        for (var j = 0; j < q.a.length; j++) {
          var a0 = q.a[j][0] + p.rot * p.t;
          x.beginPath();
          x.arc(p.x, p.y, rr, a0, a0 + q.a[j][1]);
          x.stroke();
        }
      }
    }
    x.setLineDash([]);
    if (glDraw) glDraw();
  }
  function frame(ts) {
    var dt = Math.min((ts - last) / 1000 || 0, 0.1);
    last = ts;
    if (rp.length < Math.round((W * H) / 80000) + 2 && R() < 0.02)
      rp.push(mk());
    draw(dt);
    requestAnimationFrame(frame);
  }
  addEventListener("resize", size);
  size();
  if (reduce) draw(0);
  else requestAnimationFrame(frame);
})();
