const siteData = {
  stats: [
    {
      value: "2+",
      label: "ปีประสบการณ์",
      description: "ประสบการณ์ด้านการสอนและพัฒนาสื่อเทคโนโลยีเพื่อการเรียนรู้",
    },
    {
      value: "3",
      label: "ผลงานเด่น",
      description: "โครงการและชิ้นงานที่นำไปใช้จริงทั้งในชั้นเรียนและกิจกรรมพิเศษ",
    },
    {
      value: "4",
      label: "ทักษะหลัก",
      description: "ทักษะด้านการสอน Coding, Web, Digital Tools และการออกแบบกิจกรรม",
    },
    {
      value: "100%",
      label: "พร้อมนำเสนอ",
      description: "โครงสร้างข้อมูลเหมาะสำหรับใช้ประกอบการประเมิน PA อย่างเป็นระบบ",
    },
  ],
  portfolio: [
    {
      tag: "Teaching Innovation",
      title: "ระบบห้องเรียนดิจิทัลสำหรับวิชาคอมพิวเตอร์",
      description:
        "ออกแบบสื่อการเรียนรู้และพื้นที่ส่งงานออนไลน์เพื่อให้ผู้เรียนเข้าถึงบทเรียน ใบงาน และการประเมินได้อย่างต่อเนื่อง",
      points: [
        "ช่วยลดขั้นตอนการติดตามงานและเพิ่มความชัดเจนในการสื่อสารกับผู้เรียน",
        "รองรับการใช้งานทั้งบนมือถือและเดสก์ท็อป",
      ],
    },
    // {
    //   tag: "Project-Based Learning",
    //   title: "โครงงานเว็บไซต์และแอปต้นแบบของนักเรียน",
    //   description:
    //     "ส่งเสริมการเรียนรู้แบบลงมือปฏิบัติจริงผ่านการพัฒนาเว็บไซต์และแอปพลิเคชันอย่างเป็นขั้นตอน",
    //   points: [
    //     "เน้นการคิดเชิงออกแบบและการนำเสนอผลงานอย่างมืออาชีพ",
    //     "เชื่อมโยงทักษะ Coding กับปัญหาในชีวิตจริง",
    //   ],
    // },
    // {
    //   tag: "Assessment",
    //   title: "ชุดประเมินผลและแฟ้มสะสมงานออนไลน์",
    //   description:
    //     "พัฒนารูปแบบการประเมินผลที่สามารถเก็บหลักฐานการเรียนรู้ได้เป็นระบบและตรวจสอบย้อนหลังได้ง่าย",
    //   points: [
    //     "จัดเก็บผลงานนักเรียนตามตัวชี้วัดและชิ้นงานสำคัญ",
    //     "ช่วยให้การสรุปผลการเรียนมีข้อมูลประกอบชัดเจน",
    //   ],
    // },
    {
      tag: "Professional Development",
      title: "การบูรณาการ AI เพื่อสนับสนุนการจัดการเรียนรู้",
      description:
        "นำเครื่องมือ AI มาใช้ช่วยออกแบบกิจกรรม สร้างสื่อ และพัฒนาคำถามเพื่อกระตุ้นการคิดของผู้เรียน",
      points: [
        "ใช้งานอย่างเหมาะสมและคำนึงถึงความเข้าใจของผู้เรียนเป็นหลัก",
        "ช่วยลดเวลาเตรียมสอนและเพิ่มคุณภาพของสื่อประกอบการเรียนรู้",
      ],
    },
  ],
  teachingSubjects: [
    { code: "21900-1003", title: "การออกแบบและการจัดการฐานข้อมูล", hours: 3 },
    { code: "21900-1004", title: "หลักการวิเคราะห์และออกแบบระบบเชิงวัตถุ", hours: 3 },
    { code: "21901-2001", title: "ภาษาสอบถามข้อมูลเชิงโครงสร้างเบื้องต้น", hours: 3 },
    { code: "21901-2006", title: "การโปรแกรมควบคุมอุปกรณ์", hours: 3 },
    { code: "21901-2015", title: "การติดตั้งระบบเครือข่ายคอมพิวเตอร์เบื้องต้น", hours: 4 },
    { code: "21909-2009", title: "การใช้งานแอปพลิเคชันปัญญาประดิษฐ์เบื้องต้น", hours: 4 },
    { code: "21901-2013", title: "การออกแบบและพัฒนาเว็บไซต์", hours: 3 },
    { code: "20001-2001", title: "คอมพิวเตอร์และสารสนเทศเพื่องานอาชีพ", hours: 3 },
    { code: "20001-2001", title: "คอมพิวเตอร์และสารสนเทศเพื่องานอาชีพ", hours: 3 },
    { code: "20000-2004", title: "กิจกรรมองค์การวิชาชีพ 1", hours: 2 },
    { code: "20901-8501", title: "โครงงาน", hours: 4 },
    { code: "20001-1003", title: "ธุรกิจเบื้องต้น", hours: 3 },
  ],
  teachingSchedule: [
    {
      day: "วันจันทร์",
      sessions: [
        {
          period: "คาบ 2-4",
          time: "09:00-12:00",
          subject: "21901-2015 การติดตั้งระบบเครือข่ายคอมพิวเตอร์เบื้องต้น",
          className: "ปวช. 1/1 (ปกติ), 1/2 (ทวิศึกษา), 1/3 (ทวิศึกษา) ทส.",
          room: "ห้อง 221",
        },
        {
          period: "คาบ 6-8",
          time: "13:00-16:00",
          subject: "21900-1003 การออกแบบและการจัดการฐานข้อมูล",
          className: "ปวช. 1/1 (ปกติ), 1/2 (ทวิศึกษา), 1/3 (ทวิศึกษา) ทส.",
          room: "ห้อง 221",
        },
        {
          period: "คาบ 9-11",
          time: "16:00-19:00",
          subject: "21900-1004 หลักการวิเคราะห์และออกแบบระบบเชิงวัตถุ",
          className: "ปวช. 1/1 (ปกติ), 1/2 (ทวิศึกษา), 1/3 (ทวิศึกษา) ทส.",
          room: "ห้อง 221",
        },
      ],
    },
    {
      day: "วันอังคาร",
      sessions: [
        {
          period: "คาบ 2-3",
          time: "09:00-11:00",
          subject: "21901-2006 การโปรแกรมควบคุมอุปกรณ์",
          className: "ปวช. 1/1 (ปกติ), 1/2 (ทวิศึกษา), 1/3 (ทวิศึกษา) ทส.",
          room: "ห้อง 221",
        },
        {
          period: "คาบ 4",
          time: "11:00-12:00",
          subject: "21901-2001 ภาษาสอบถามข้อมูลเชิงโครงสร้างเบื้องต้น",
          className: "กลุ่มเรียนห้อง 221",
          room: "ห้อง 221",
        },
        {
          period: "คาบ 6-7",
          time: "13:00-15:00",
          subject: "21901-2001 ภาษาสอบถามข้อมูลเชิงโครงสร้างเบื้องต้น",
          className: "ปวช. 1/1 (ปกติ), 1/2 (ทวิศึกษา), 1/3 (ทวิศึกษา) ทส.",
          room: "ห้อง 221",
        },
        {
          period: "คาบ 8-10",
          time: "15:00-18:00",
          subject: "21909-2009 การใช้งานแอปพลิเคชันปัญญาประดิษฐ์เบื้องต้น",
          className: "ปวช. 1/1 (ปกติ), 1/2 (ทวิศึกษา), 1/3 (ทวิศึกษา) ทส.",
          room: "ห้อง 221",
        },
      ],
    },
    {
      day: "วันพุธ",
      sessions: [
        {
          period: "คาบ 2-3",
          time: "09:00-11:00",
          subject: "20001-1003 ธุรกิจเบื้องต้น",
          className: "ปวช. 2/1 ทส.",
          room: "ห้อง 224",
        },
        {
          period: "คาบ 6",
          time: "13:00-14:00",
          subject: "PLC",
          className: "กิจกรรมพัฒนาวิชาชีพ",
          room: "ตามมอบหมาย",
        },
        {
          period: "คาบ 7",
          time: "14:00-15:00",
          subject: "20901-8501 โครงงาน",
          className: "ปวช. 3/1 ทส.",
          room: "ห้อง 226",
        },
        {
          period: "คาบ 8-9",
          time: "15:00-17:00",
          subject: "20000-2004 กิจกรรมองค์การวิชาชีพ 1",
          className: "ปวช. 2/1 ทส.",
          room: "ห้อง 225",
        },
        {
          period: "คาบ 10-11",
          time: "17:00-19:00",
          subject: "20901-8501 โครงงาน",
          className: "ปวช. 3/1 ทส",
          room: "ห้อง 226",
        },
      ],
    },
    {
      day: "วันพฤหัสบดี",
      sessions: [
        {
          period: "คาบ 2-3",
          time: "09:00-11:00",
          subject: "20001-2001 คอมพิวเตอร์และสารสนเทศเพื่องานอาชีพ",
          className: "ปวช. 3/1 ชย.",
          room: "ห้อง 226",
        }
      ],
    },
    {
      day: "วันศุกร์",
      sessions: [
        {
          period: "คาบ 2-3",
          time: "09:00-11:00",
          subject: "20001-2001 คอมพิวเตอร์และสารสนเทศเพื่องานอาชีพ",
          className: "ปวช. 3/1 ชช.",
          room: "ห้อง 321",
        },
        ,
        {
          period: "คาบ 7-8",
          time: "14:00-16:00",
          subject: "21901-2013 การออกแบบและพัฒนาเว็บไซต์",
          className: "ปวช. 2/1 ทส.",
          room: "ห้อง 225",
        },
        {
          period: "คาบ 9",
          time: "16:00-17:00",
          subject: "Homeroom",
          className: "ปวช. 2/1 ทส.",
          room: "ห้อง 225",
        }
      ],
    },
  ],
  additionalDuties: [
    {
      title: "ผู้ช่วยงานสื่อการเรียนการสอน",
      description:
        "สนับสนุนการจัดเตรียม พัฒนา และดูแลสื่อจัดทำสื่อวิดีทัศน์วิทยาลัยกับคณะกรรมการและอาจารย์",
    },
    {
      title: "งานแผนงานและความร่วมมือ",
      description:
        "ร่วมดำเนินงานด้านแผนงาน โครงการ และการประสานความร่วมมือกับหน่วยงานที่เกี่ยวข้อง เพื่อสนับสนุนภารกิจและการพัฒนาของสถานศึกษา",
    },
    {
      title: "ครูที่ปรึกษาชั้น ปวช. 2 เทคโนโลยีสารสนเทศ",
      description:
        "ดูแล ช่วยเหลือ ให้คำปรึกษา และติดตามพฤติกรรมการเรียนของนักเรียนระดับชั้น ปวช. 2 สาขาเทคโนโลยีสารสนเทศ ทั้งด้านการเรียน การประพฤติ และการพัฒนาศักยภาพรายบุคคล",
    },
  ],
  evaluation: [
    {
      id: "teaching",
      title: "ด้านการจัดการเรียนรู้",
      summary:
        "แสดงกระบวนการวางแผนการสอน การออกแบบกิจกรรม การใช้สื่อ และการประเมินผลที่สอดคล้องกับเป้าหมายการเรียนรู้",
      points: [
        "แผนการจัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ",
        "กิจกรรมการเรียนรู้เชิงปฏิบัติและบูรณาการเทคโนโลยี",
        "หลักฐานการวัดและประเมินผลที่ชัดเจน",
      ],
      resources: ["แผนการสอน", "ภาพกิจกรรมในชั้นเรียน", "ตัวอย่างชิ้นงานผู้เรียน"],
    },
    {
      id: "support",
      title: "ด้านการส่งเสริมและสนับสนุนผู้เรียน",
      summary:
        "รวบรวมบทบาทในการดูแลผู้เรียน การให้คำปรึกษา และการส่งเสริมศักยภาพผ่านกิจกรรมหรือโครงงานที่เหมาะสม",
      points: [
        "การติดตามพัฒนาการของผู้เรียนรายบุคคล",
        "การสนับสนุนกิจกรรม Coding และนวัตกรรม",
        "การสร้างแรงจูงใจและโอกาสในการแสดงศักยภาพ",
      ],
      resources: ["บันทึกดูแลช่วยเหลือ", "รายงานกิจกรรม", "แฟ้มสะสมผลงานนักเรียน"],
    },
    {
      id: "development",
      title: "ด้านการพัฒนาตนเองและวิชาชีพ",
      summary:
        "นำเสนอหลักฐานการอบรม การแลกเปลี่ยนเรียนรู้ และการพัฒนานวัตกรรมที่สะท้อนการเติบโตทางวิชาชีพอย่างต่อเนื่อง",
      points: [
        "เข้าร่วมอบรมด้านเทคโนโลยีและการจัดการเรียนรู้",
        "พัฒนาสื่อหรือนวัตกรรมเพื่อยกระดับการสอน",
        "สรุปผลการนำองค์ความรู้ใหม่ไปใช้จริง",
      ],
      resources: ["เกียรติบัตรการอบรม", "บันทึก PLC", "เอกสารสรุปผลการพัฒนา"],
    },
  ],
  certificates: [
    {
      tag: "AI",
      title: "อบรมการใช้ AI เพื่อการศึกษา",
      description: "หลักฐานการพัฒนาความรู้ด้านเทคโนโลยีสมัยใหม่เพื่อนำมาประยุกต์ใช้กับการจัดการเรียนรู้",
    },
    {
      tag: "Web",
      title: "อบรมการออกแบบเว็บไซต์เพื่อการเรียนรู้",
      description: "สะท้อนทักษะด้านการพัฒนาและออกแบบสื่อออนไลน์ที่มีโครงสร้างชัดเจนและใช้งานได้จริง",
    },
    {
      tag: "Innovation",
      title: "รางวัลผลงานนวัตกรรมการสอน",
      description: "แสดงถึงคุณภาพผลงานเชิงวิชาชีพและผลลัพธ์ที่เกิดกับผู้เรียนจากการนำไปใช้จริง",
    },
  ],
  contacts: [
    {
      title: "Email",
      value: "tnpopor@gmail.com",
      href: "mailto:tnpopor@gmail.com",
    },
    {
      title: "Phone",
      value: "0985149986",
    },
    {
      title: "School",
      value: "วิทยาลัยการอาชีพศีขรภูมิ",
    },
    // {
    //   title: "Portfolio Note",
    //   value: "สามารถแนบลิงก์เอกสาร, PDF และหลักฐานเพิ่มเติมในส่วนนี้ได้",
    // },
  ],
};

const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
const downloadButton = document.getElementById("download-button");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function renderStats() {
  const container = document.getElementById("stats-grid");
  container.innerHTML = siteData.stats
    .map(
      (item) => `
        <div class="col-12 col-sm-6 col-xl-3">
          <article class="stat-card h-100">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
            <p>${item.description}</p>
          </article>
        </div>
      `
    )
    .join("");
}

function renderPortfolio() {
  const container = document.getElementById("portfolio-grid");
  container.innerHTML = siteData.portfolio
    .map(
      (item) => `
        <div class="col-12 col-lg-6">
          <article class="portfolio-card h-100">
            <div class="portfolio-content">
              <span class="portfolio-tag">${item.tag}</span>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <ul>
                ${item.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </div>
            <a class="card-button" href="#evaluation">ดูรายละเอียด</a>
          </article>
        </div>
      `
    )
    .join("");
}

function renderTeachingSubjects() {
  const tableBody = document.getElementById("teaching-table-body");
  const totalHours = document.getElementById("teaching-total-hours");
  const sumHours = siteData.teachingSubjects.reduce((total, item) => total + item.hours, 0);

  if (totalHours) {
    totalHours.textContent = `${sumHours} ชั่วโมง`;
  }

  tableBody.innerHTML = siteData.teachingSubjects
    .map(
      (item) => `
        <tr>
          <td>${item.code}</td>
          <td>${item.title}</td>
          <td>${item.hours}</td>
        </tr>
      `
    )
    .join("");
}

function renderTeachingSchedule() {
  const container = document.getElementById("teaching-schedule-grid");
  container.innerHTML = siteData.teachingSchedule
    .map(
      (day) => `
        <div class="col-12 col-xl-6">
          <article class="schedule-card">
            <span class="schedule-day">${day.day}</span>
            <div class="schedule-list">
              ${day.sessions
                .map(
                  (session) => `
                    <div class="schedule-item">
                      <div class="schedule-item-top">
                        <span class="schedule-period">${session.period} | ${session.time}</span>
                        <span class="schedule-room">${session.room}</span>
                      </div>
                      <h4>${session.subject}</h4>
                      <p class="schedule-meta">${session.className}</p>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
        </div>
      `
    )
    .join("");
}

function renderAdditionalDuties() {
  const container = document.getElementById("duties-grid");
  container.innerHTML = siteData.additionalDuties
    .map(
      (item) => `
        <div class="col-12 col-md-6">
          <article class="portfolio-card h-100">
            <div class="portfolio-content">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </article>
        </div>
      `
    )
    .join("");
}

function renderCertificates() {
  const container = document.getElementById("certificates-grid");
  container.innerHTML = siteData.certificates
    .map(
      (item) => `
        <div class="col-12 col-sm-6 col-lg-4">
          <article class="certificate-card h-100">
            <div class="certificate-preview"></div>
            <span class="certificate-tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        </div>
      `
    )
    .join("");
}

function renderContacts() {
  const container = document.getElementById("contact-grid");
  container.innerHTML = siteData.contacts
    .map((item) => {
      const value = item.href
        ? `<a href="${item.href}">${item.value}</a>`
        : `<p>${item.value}</p>`;

      return `
        <div class="col-12 col-md-6">
          <article class="contact-card h-100">
            <h3>${item.title}</h3>
            ${value}
          </article>
        </div>
      `;
    })
    .join("");
}

function renderEvaluation(activeId) {
  const tabsContainer = document.getElementById("evaluation-tabs");
  const panelContainer = document.getElementById("evaluation-panel");
  const activeItem = siteData.evaluation.find((item) => item.id === activeId) || siteData.evaluation[0];

  tabsContainer.innerHTML = siteData.evaluation
    .map(
      (item) => `
        <button
          class="evaluation-tab ${item.id === activeItem.id ? "is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${item.id === activeItem.id}"
          data-evaluation-tab="${item.id}"
        >
          ${item.title}
        </button>
      `
    )
    .join("");

  panelContainer.innerHTML = `
    <h3>${activeItem.title}</h3>
    <p class="evaluation-summary">${activeItem.summary}</p>
    <div class="evaluation-grid">
      <div>
        <h4 class="evaluation-list-title">หัวข้อสำคัญ</h4>
        <ul class="evaluation-points">
          ${activeItem.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  `;

  tabsContainer.querySelectorAll("[data-evaluation-tab]").forEach((button) => {
    button.addEventListener("click", () => renderEvaluation(button.dataset.evaluationTab));
  });
}

function applyTheme(theme) {
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("portfolio-theme", theme);

  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", theme === "dark" ? "#0b1220" : "#ffffff");
  }
}

function initTheme() {
  const storedTheme = localStorage.getItem("portfolio-theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(storedTheme || (preferredDark ? "dark" : "light"));
}

function initMenu() {
  if (!menuToggle || !mobileMenu) return;

  mobileMenu.addEventListener("show.bs.collapse", () => {
    menuToggle.setAttribute("aria-expanded", "true");
  });

  mobileMenu.addEventListener("hide.bs.collapse", () => {
    menuToggle.setAttribute("aria-expanded", "false");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const collapseInstance = bootstrap.Collapse.getOrCreateInstance(mobileMenu);
      collapseInstance.hide();
    });
  });
}

function initThemeToggle() {
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

function initDownloadButton() {
  if (!downloadButton) return;

  downloadButton.addEventListener("click", () => {
    window.print();
  });
}

function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function initParallaxScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const parallaxElements = document.querySelectorAll(".parallax-soft");
  if (!parallaxElements.length) return;

  let ticking = false;

  const updateParallax = () => {
    const viewportHeight = window.innerHeight || 1;

    parallaxElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const translateY = Math.max(-14, Math.min(14, centerOffset * -0.04));
      element.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  updateParallax();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

renderStats();
renderPortfolio();
renderTeachingSubjects();
renderTeachingSchedule();
renderAdditionalDuties();
renderEvaluation("teaching");
renderCertificates();
renderContacts();
initTheme();
initThemeToggle();
initMenu();
initDownloadButton();
initRevealAnimations();
initParallaxScroll();
