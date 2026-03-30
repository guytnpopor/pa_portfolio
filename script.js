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
        <h4 class="evaluation-list-title">หลักฐานประกอบ</h4>
        <ul class="evaluation-resources">
          ${activeItem.resources
            .map((resource) => `<li class="evaluation-resource">${resource}</li>`)
            .join("")}
        </ul>
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

renderStats();
renderPortfolio();
renderEvaluation("teaching");
renderCertificates();
renderContacts();
initTheme();
initThemeToggle();
initMenu();
initDownloadButton();
