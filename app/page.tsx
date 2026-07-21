const LINE_URL = "https://lin.ee/jBAa9MV";

const programs = [
  {
    step: "01",
    age: "3–6 ปี",
    title: "ICON BLOCK",
    subtitle: "Coding ผ่านการเล่น",
    description:
      "เริ่มคิดเป็นลำดับ เข้าใจเหตุและผล และสั่งงานหุ่นยนต์ผ่าน Icon Block โดยไม่ต้องอ่านโค้ดยาว ๆ",
    tags: ["Unplug Coding", "LEGO® Essential", "Creative Play"],
    tone: "gold",
  },
  {
    step: "02",
    age: "6–12 ปี",
    title: "SCRATCH + ROBOTICS",
    subtitle: "เปลี่ยนไอเดียให้เคลื่อนไหว",
    description:
      "ออกแบบเกม แอนิเมชัน และหุ่นยนต์ด้วย Scratch พร้อมฝึกแก้ปัญหาผ่านโปรเจกต์ที่จับต้องได้",
    tags: ["Scratch", "LEGO® EV3", "SPIKE™ Prime"],
    tone: "blue",
  },
  {
    step: "03",
    age: "9–15+ ปี",
    title: "PYTHON · AI · DESIGN",
    subtitle: "สร้างของจริงด้วยโค้ดจริง",
    description:
      "ต่อยอดสู่ Python, AI, 3D Design, Roblox และการทำ Portfolio เพื่อค้นหาความถนัดของตัวเอง",
    tags: ["Python", "AI Academy", "3D & Roblox"],
    tone: "violet",
  },
];

const outcomes = [
  ["01", "คิดเป็นระบบ", "มองโจทย์ใหญ่เป็นขั้นตอน และลงมือแก้ทีละส่วน"],
  ["02", "กล้าสร้างสรรค์", "เปลี่ยนจินตนาการเป็นเกม หุ่นยนต์ และโปรเจกต์ของตัวเอง"],
  ["03", "ทำงานเป็นทีม", "สื่อสาร รับฟัง และร่วมกันพาไอเดียไปถึงเส้นชัย"],
  ["04", "เชื่อมั่นในตัวเอง", "เรียนรู้จากการลองผิดลองถูก และภูมิใจกับผลงานจริง"],
];

const staff = [
  ["T. ART", "ครูอาร์ต", "Director · Coaching & Coding Expert"],
  ["T. PIM", "ครูปิ๋ม", "Asst. Director · Learning Designer"],
  ["T. PU", "ครูปุ๊", "Branch Manager · Robotics Coach"],
  ["CRAFT TEAM", "ทีมครูผู้เชี่ยวชาญ", "Coding · Robotics · AI · Design"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="เมนูหลัก">
        <a className="brand" href="#top" aria-label="Craft Code Robotic หน้าแรก">
          <img src="/images/craft-code-mark.png" alt="" />
          <span>
            <strong>CRAFT CODE</strong>
            <small>ROBOTIC THAILAND</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#why">ทำไมต้อง Craft Code</a>
          <a href="#programs">หลักสูตร</a>
          <a href="#achievement">ผลงาน</a>
          <a href="#team">ทีมครู</a>
        </div>
        <a className="nav-cta" href={LINE_URL} target="_blank" rel="noreferrer">
          ทดลองเรียนฟรี <span>↗</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="เปิดเมนู">เมนู</summary>
          <div>
            <a href="#why">ทำไมต้อง Craft Code</a>
            <a href="#programs">หลักสูตร</a>
            <a href="#achievement">ผลงาน</a>
            <a href="#team">ทีมครู</a>
            <a href={LINE_URL} target="_blank" rel="noreferrer">ทดลองเรียนฟรี ↗</a>
          </div>
        </details>
      </nav>

      <section className="hero" id="top">
        <div className="stars" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> FUTURE SKILLS FOR GEN ALPHA</div>
          <h1>
            เด็กไม่ควรแค่ใช้เทคโนโลยี
            <em>แต่ควรสร้างมันได้</em>
          </h1>
          <p>
            Coding · Robotics · AI ที่ทำให้เรื่องยากกลายเป็นการผจญภัย
            พร้อมโค้ชที่ช่วยให้น้องค้นพบความถนัดและความมั่นใจของตัวเอง
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={LINE_URL} target="_blank" rel="noreferrer">
              สมัครทดลองเรียนฟรี <span>↗</span>
            </a>
            <a className="text-link" href="#programs">สำรวจหลักสูตร <span>↓</span></a>
          </div>
          <div className="hero-proof" aria-label="สถิติ Craft Code">
            <div><strong>500+</strong><span>นักเรียนที่เราเคยดูแล</span></div>
            <div><strong>3–15+</strong><span>หลักสูตรตามช่วงวัย</span></div>
            <div><strong>PROJECT</strong><span>เรียนรู้ผ่านการลงมือจริง</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portal-frame">
            <img src="/images/craft-code-community.jpeg" alt="นักเรียน Craft Code ร่วมกิจกรรมหุ่นยนต์" />
            <span className="portal-label">MISSION 001 · DISCOVER YOUR POTENTIAL</span>
          </div>
          <div className="floating-card card-top"><b>CODING</b><small>turn logic into motion</small></div>
          <div className="floating-card card-bottom"><b>ROBOTICS</b><small>build · test · improve</small></div>
        </div>
        <div className="horizon" aria-hidden="true" />
      </section>

      <section className="manifesto" id="why">
        <div className="section-kicker">CRAFT CODE PHILOSOPHY <span>01</span></div>
        <div className="manifesto-grid">
          <h2>เราไม่ได้สอนให้เด็ก<br />จำคำตอบ</h2>
          <div>
            <p className="manifesto-lead">เราโค้ชให้เขา <strong>ตั้งคำถาม ทดลอง และสร้างคำตอบด้วยตัวเอง</strong></p>
            <p>เพราะทักษะที่สำคัญที่สุดในโลกที่เปลี่ยนเร็ว ไม่ใช่การรู้ทุกอย่าง แต่คือการเรียนรู้สิ่งใหม่ได้เสมอ</p>
          </div>
        </div>
        <div className="outcome-grid">
          {outcomes.map(([n, title, body]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="program-section" id="programs">
        <div className="program-intro">
          <div>
            <div className="section-kicker light">LEARNING PATH <span>02</span></div>
            <h2>เริ่มจากความสนุก<br />ไปถึงการสร้างอนาคต</h2>
          </div>
          <p>หลักสูตรถูกออกแบบตามพัฒนาการและความสนใจของผู้เรียน แต่ละระดับจึงท้าทายพอดี และเห็นความก้าวหน้าได้จริง</p>
        </div>
        <div className="program-list">
          {programs.map((program) => (
            <article className={`program-card ${program.tone}`} key={program.title}>
              <div className="program-number">{program.step}</div>
              <div className="program-main">
                <div className="age-pill">อายุ {program.age}</div>
                <h3>{program.title}</h3>
                <h4>{program.subtitle}</h4>
              </div>
              <div className="program-detail">
                <p>{program.description}</p>
                <div className="tags">{program.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a href={LINE_URL} target="_blank" rel="noreferrer" aria-label={`สอบถามหลักสูตร ${program.title}`}>↗</a>
            </article>
          ))}
        </div>
        <p className="course-note">ยังมี Passion Finding, Hackathon, Portfolio Development และ Public Speaking สำหรับน้องที่ต้องการต่อยอดสู่สนามแข่งขันและการศึกษาต่อ</p>
      </section>

      <section className="experience-section">
        <div className="section-kicker">LEARNING EXPERIENCE <span>03</span></div>
        <div className="experience-head">
          <h2>ห้องเรียนที่ออกแบบ<br />ให้ไอเดียทะยานได้</h2>
          <p>พื้นที่ปลอดภัย สนุก และเต็มไปด้วยอุปกรณ์ที่ชวนให้น้องอยากลอง ครูดูแลใกล้ชิดแบบโค้ช—ให้คำแนะนำโดยไม่แย่งความภูมิใจในการค้นพบ</p>
        </div>
        <div className="photo-grid">
          <figure className="photo-large"><img src="/images/coding-class.jpeg" alt="ครู Craft Code ดูแลนักเรียนในคลาส Coding" /><figcaption>SMALL CLASS · CLOSE COACHING</figcaption></figure>
          <figure><img src="/images/cassiope-room.jpeg" alt="ห้องเรียน Cassiope ของ Craft Code" /><figcaption>ROBOTICS LAB</figcaption></figure>
          <figure><img src="/images/stella-room.jpeg" alt="ห้องเรียน Stella ของ Craft Code" /><figcaption>CREATIVE PLAY SPACE</figcaption></figure>
        </div>
      </section>

      <section className="achievement-section" id="achievement">
        <div className="achievement-image">
          <img src="/images/fll-award.jpeg" alt="นักเรียน Craft Code รับรางวัล Challenge Solution Award" />
          <div className="scanline" aria-hidden="true" />
        </div>
        <div className="achievement-copy">
          <div className="section-kicker light">BEYOND THE CLASSROOM <span>04</span></div>
          <h2>จากห้องเรียน<br />สู่เวทีจริง</h2>
          <p>การแข่งขันคือพื้นที่ให้น้องใช้ทั้งตรรกะ ความคิดสร้างสรรค์ และทีมเวิร์ก ภายใต้สถานการณ์จริง—ไม่ใช่เพื่อชนะอย่างเดียว แต่เพื่อเห็นว่าตัวเองไปได้ไกลแค่ไหน</p>
          <div className="award-card">
            <span>2025</span>
            <div><strong>STEM AWARD · FLL THAILAND</strong><small>พร้อมผลงาน Robot Game อันดับ 8</small></div>
          </div>
          <div className="competition-row"><span>FIRST LEGO LEAGUE</span><span>WRO</span><span>IRSA</span><span>TIRT TAIWAN</span></div>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="team-head">
          <div>
            <div className="section-kicker">THE COACHES <span>05</span></div>
            <h2>โค้ชที่มองเห็น<br />มากกว่าโค้ด</h2>
          </div>
          <blockquote>“เราไม่ได้แค่สอน Class แต่คอย Feed Forward และดูแลน้อง ๆ เหมือนเป็นลูกของเราเอง”</blockquote>
        </div>
        <div className="team-list">
          {staff.map(([name, thai, role], index) => (
            <article key={name}>
              <span>0{index + 1}</span>
              <div className="team-monogram">{name.charAt(0)}</div>
              <h3>{name}<small>{thai}</small></h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-kicker light">PARENT FAQ <span>06</span></div>
        <div className="faq-layout">
          <h2>ก่อนเริ่ม<br />ภารกิจแรก</h2>
          <div className="faq-list">
            <details><summary>เริ่มเรียนได้ตั้งแต่อายุเท่าไร?<span>+</span></summary><p>เริ่มได้ตั้งแต่อายุประมาณ 3 ขวบครึ่ง โดยเริ่มจาก Unplug Coding เพื่อทำความเข้าใจลำดับ ความสัมพันธ์ และปรับตัวกับครูผ่านกิจกรรมสนุก ๆ</p></details>
            <details><summary>เรียนที่ไหนได้บ้าง?<span>+</span></summary><p>เรียนแบบ On-site ที่ Craft Code Robotic ชั้น 7 เซ็นทรัลแจ้งวัฒนะ พร้อมห้องเรียนและอุปกรณ์สำหรับแต่ละช่วงวัย</p></details>
            <details><summary>ต้องมีพื้นฐานมาก่อนไหม?<span>+</span></summary><p>ไม่จำเป็น ครูจะประเมินช่วงวัย ความสนใจ และประสบการณ์เดิม เพื่อแนะนำจุดเริ่มต้นที่เหมาะกับน้องแต่ละคน</p></details>
            <details><summary>ทดลองเรียนก่อนสมัครได้ไหม?<span>+</span></summary><p>ได้ สามารถทัก LINE เพื่อแจ้งอายุและความสนใจของน้อง ทีมงานจะช่วยแนะนำคลาสทดลองที่เหมาะสม</p></details>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="cta-orbit" aria-hidden="true" />
        <div className="section-kicker light">READY FOR LAUNCH?</div>
        <h2>อนาคตไม่ได้รอให้เด็กพร้อม<br /><em>เราเตรียมให้เขาพร้อมสำหรับอนาคต</em></h2>
        <p>บอกเราเกี่ยวกับน้องสักนิด แล้วทีม Craft Code จะช่วยเลือกเส้นทางเริ่มต้นที่เหมาะที่สุด</p>
        <a className="primary-button large" href={LINE_URL} target="_blank" rel="noreferrer">จองทดลองเรียนฟรีทาง LINE <span>↗</span></a>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/images/craft-code-mark.png" alt="" />
          <div><strong>CRAFT CODE ROBOTIC</strong><p>CODING · ROBOTICS · AI</p></div>
        </div>
        <div className="footer-contact">
          <strong>CRAFT CODE · CENTRAL CHAENGWATTANA</strong>
          <p>ชั้น 7 เซ็นทรัลแจ้งวัฒนะ ปากเกร็ด นนทบุรี 11120</p>
          <a href="tel:0924255655">092 425 5655</a>
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com/CraftCodeRobotic" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href={LINE_URL} target="_blank" rel="noreferrer">LINE ↗</a>
          <a href="#top">กลับขึ้นด้านบน ↑</a>
        </div>
        <small className="copyright">© 2026 CRAFT CODE ROBOTIC THAILAND</small>
      </footer>
    </main>
  );
}
