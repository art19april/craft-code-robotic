const LINE_URL = "https://line.me/R/ti/p/@CRCWN";
const FACEBOOK_URL = "https://www.facebook.com/craftcodethailand";

const tracks = [
  {
    number: "01", title: "FOUNDATION", age: "3–9 ปี", tone: "gold",
    intro: "สร้างรากฐานตรรกะและความมั่นใจผ่านการเล่น การเล่าเรื่อง และหุ่นยนต์",
    courses: [
      ["Early Coding Explorer", "3–4 ปี", "2 Levels"],
      ["Icon Block Coding", "4–6 ปี", "10 Levels"],
      ["Scratch Coding Foundation", "6–9 ปี", "10 Levels"],
    ],
  },
  {
    number: "02", title: "CREATIVE TECH", age: "8–15 ปี", tone: "cyan",
    intro: "เปลี่ยนความชอบเกม ภาพ และงานออกแบบ ให้กลายเป็นทักษะการสร้างดิจิทัล",
    courses: [
      ["Scratch Game Design", "8–12 ปี", "2D Games"],
      ["Roblox Game Design", "9+ ปี", "12 Levels"],
      ["3D Design & Modeling", "9–15 ปี", "3 Levels"],
      ["Creative AI", "12+ ปี", "Photo & Video"],
    ],
  },
  {
    number: "03", title: "ADVANCED TECH", age: "10–18 ปี", tone: "violet",
    intro: "ลงลึก Text-based Coding, อุปกรณ์เชื่อมต่อ และความรู้ดิจิทัลที่จำเป็น",
    courses: [
      ["Python Coding", "10–15 ปี", "10 Levels"],
      ["Robotics & IoT", "12+ ปี", "Connected Devices"],
      ["AI & Cybersecurity", "12+ ปี", "Digital Safety"],
      ["AI-Assisted Coding", "13+ ปี", "Modern Coding"],
    ],
  },
  {
    number: "04", title: "FUTURE LEADERSHIP", age: "12+ ปี / ผู้ใหญ่", tone: "blue",
    intro: "ใช้ AI เพื่อการทำงาน ธุรกิจ การนำเสนอ และการสร้างโอกาสของตัวเอง",
    courses: [
      ["AI for Business", "15+ / Adults", "Productivity"],
      ["Presentation Skills", "12+ ปี", "Public Speaking"],
      ["AI Productivity & Workflow", "15+ / Adults", "Work Systems"],
      ["Entrepreneur Skills", "12+ ปี", "Business Mindset"],
    ],
  },
];

const staff = [
  ["T. ART", "เดชชาติ เจิมประไพ", "Director"],
  ["T. PIM", "อาทิชา เจิมประไพ", "Asst. Director"],
  ["T. PU", "เอกรัฐ รงค์รัตน์", "Senior Teacher & Branch Manager"],
  ["T. KAN", "ศราวุฒิ มณีสุวรรณ", "Advanced Technical Teacher & Coach"],
  ["T. TAK", "วณิชยา ปากโมกข์", "Unplug & Icon Block English Program"],
  ["T. AOMAMM", "ธัญญาเรศ หมั่นมา", "Robot & Coding Teacher"],
  ["T. GIFT", "วรัญญา อ่อนทอง", "Scratch Part-time Teacher"],
  ["T. POONPUN", "ณัฐพันธ์ โชคดี", "Python Part-time Teacher"],
];

const outcomes = [
  ["01", "Logical Thinking", "คิดเป็นลำดับและมองเห็นความสัมพันธ์ของระบบ"],
  ["02", "Problem Solving", "ทดลอง แก้ไข และเรียนรู้จากสิ่งที่ยังไม่สำเร็จ"],
  ["03", "Creativity", "เปลี่ยนไอเดียเป็นเกม หุ่นยนต์ และผลงานจริง"],
  ["04", "Future Readiness", "มี AI Literacy, Portfolio และความมั่นใจในอนาคต"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="เมนูหลัก">
        <a className="brand official-brand" href="#top" aria-label="Craft Code Robotic หน้าแรก">
          <img src="/images/craft-code-horizontal-logo.jpg" alt="Craft Code Robotic" />
        </a>
        <div className="nav-links">
          <a href="#programs">Roadmap</a>
          <a href="#flexible">รูปแบบเรียน</a>
          <a href="#news">ข่าว & ผลงาน</a>
          <a href="#schedule">เวลาเรียน</a>
          <a href="#team">ทีมครู</a>
        </div>
        <a className="nav-cta" href={LINE_URL} target="_blank" rel="noreferrer">ทดลองเรียนฟรี <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="เปิดเมนู">เมนู</summary>
          <div>
            <a href="#programs">Roadmap</a><a href="#flexible">รูปแบบเรียน</a><a href="#news">ข่าว & ผลงาน</a><a href="#schedule">เวลาเรียน</a><a href="#team">ทีมครู</a>
            <a href={LINE_URL} target="_blank" rel="noreferrer">ทดลองเรียนฟรี ↗</a>
          </div>
        </details>
      </nav>

      <section className="hero" id="top">
        <div className="stars" aria-hidden="true" /><div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-hud hud-left" aria-hidden="true"><span>SYS.CRAFT</span><b>CORE ONLINE</b></div>
        <div className="hero-hud hud-right" aria-hidden="true"><span>MISSION 2026</span><b>FUTURE READY</b></div>
        <div className="hero-copy">
          <div className="eyebrow"><span /> UPDATED CURRICULUM · MAY 2026</div>
          <h1>ปลดล็อกศักยภาพ<em>สู่อนาคตแห่งนวัตกรรม</em></h1>
          <p>Coding · Robotics · Game Design · AI และการประยุกต์ใช้ในธุรกิจ ผ่านการลงมือทำจริง เพื่อพัฒนาความคิดเชิงตรรกะ ความคิดสร้างสรรค์ การแก้ปัญหา และความมั่นใจ</p>
          <div className="hero-actions">
            <a className="primary-button" href={LINE_URL} target="_blank" rel="noreferrer">สมัครทดลองเรียนฟรี <span>↗</span></a>
            <a className="text-link" href="#programs">ดู Roadmap <span>↓</span></a>
          </div>
          <div className="hero-proof" aria-label="จุดเด่น Craft Code">
            <div><strong>3–18+</strong><span>เส้นทางตามวัยและเป้าหมาย</span></div>
            <div><strong>4 TRACKS</strong><span>Foundation ถึง Leadership</span></div>
            <div><strong>PBL</strong><span>Project-Based Learning</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portal-frame"><img src="/images/craft-code-community.jpeg" alt="นักเรียน Craft Code ร่วมกิจกรรมหุ่นยนต์" /><span className="portal-label">UNLOCKING POTENTIAL THROUGH CODING & INNOVATION</span></div>
          <div className="floating-card card-top"><b>ROBOTICS</b><small>build · test · improve</small></div>
          <div className="floating-card card-bottom"><b>AI LITERACY</b><small>create · work · lead</small></div>
        </div>
        <div className="horizon" aria-hidden="true" />
      </section>

      <section className="manifesto" id="why">
        <div className="section-kicker">WHY CRAFT CODE <span>01</span></div>
        <div className="manifesto-grid">
          <h2>เรียนให้สนุก<br />เติบโตให้ไกล</h2>
          <div><p className="manifesto-lead">ทุกหลักสูตรออกแบบให้เด็กได้ <strong>ลงมือสร้างผลงานของตัวเอง</strong></p><p>จากพื้นฐานโค้ดดิ้งไปสู่เทคโนโลยีขั้นสูงและทักษะผู้นำ เราโค้ชให้น้องค้นพบความถนัด พร้อมต่อยอดเป็น Portfolio และเส้นทางอาชีพในอนาคต</p></div>
        </div>
        <div className="outcome-grid">{outcomes.map(([n,title,body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="program-section" id="programs">
        <div className="program-intro">
          <div><div className="section-kicker light">CURRICULUM ROADMAP <span>02</span></div><h2>4 เส้นทาง<br />สู่ Future Innovator</h2></div>
          <p>ผู้เรียนเริ่มจากจุดที่เหมาะกับวัยและประสบการณ์ แล้วเลือกต่อยอดตามความสนใจได้ทั้งสายสร้างสรรค์ เทคโนโลยีขั้นสูง และภาวะผู้นำ</p>
        </div>
        <div className="track-grid">
          {tracks.map((track) => (
            <article className={`track-card ${track.tone}`} key={track.title}>
              <div className="track-top"><span>{track.number}</span><div className="age-pill">อายุ {track.age}</div></div>
              <h3>{track.title}</h3><p>{track.intro}</p>
              <div className="track-courses">{track.courses.map(([name,age,detail]) => <div key={name}><strong>{name}</strong><span>{age}</span><small>{detail}</small></div>)}</div>
            </article>
          ))}
        </div>
        <div className="roadmap-actions"><a href="/updates/curriculum-overview.jpg" target="_blank">ดู Curriculum Overview ↗</a><a href="/updates/free-trial-standee.jpg" target="_blank">ดูภาพรวมสถาบัน ↗</a></div>
      </section>

      <section className="flex-section" id="flexible">
        <div className="tech-ticker" aria-label="เทคโนโลยีที่ใช้ในหลักสูตร"><div className="ticker-track"><span>SCRATCH</span><i>◆</i><span>PYTHON</span><i>◆</i><span>ROBOTICS</span><i>◆</i><span>IoT</span><i>◆</i><span>GENERATIVE AI</span><i>◆</i><span>CYBERSECURITY</span><i>◆</i><span>3D DESIGN</span><i>◆</i><span aria-hidden="true">SCRATCH</span><i aria-hidden="true">◆</i><span aria-hidden="true">PYTHON</span><i aria-hidden="true">◆</i><span aria-hidden="true">ROBOTICS</span><i aria-hidden="true">◆</i><span aria-hidden="true">IoT</span><i aria-hidden="true">◆</i><span aria-hidden="true">GENERATIVE AI</span><i aria-hidden="true">◆</i><span aria-hidden="true">CYBERSECURITY</span><i aria-hidden="true">◆</i><span aria-hidden="true">3D DESIGN</span><i aria-hidden="true">◆</i></div></div>
        <div className="section-kicker light">MISSION CONFIGURATOR <span>03</span></div>
        <div className="flex-head"><div><h2>ออกแบบเส้นทางเรียน<br />ให้พอดีกับชีวิตจริง</h2><p>ไม่จำเป็นต้องเริ่มเหมือนกันหรือเรียนด้วยจังหวะเดียวกัน ทีมครูช่วยจัดเส้นทางให้เหมาะกับเป้าหมาย เวลาว่าง ประสบการณ์ และงบประมาณของแต่ละครอบครัว</p></div><div className="system-status"><span>PERSONAL LEARNING PATH</span><strong>READY TO CONFIGURE</strong><small>CRAFT CODE ADVISOR · ONLINE</small></div></div>
        <div className="config-grid">
          <article><span>INPUT 01</span><h3>เลือกเป้าหมาย</h3><div><b>สร้างเกม</b><b>หุ่นยนต์</b><b>AI</b><b>Portfolio</b></div><p>เริ่มจากสิ่งที่ผู้เรียนอยากทำจริง</p></article>
          <article><span>INPUT 02</span><h3>เลือกช่วงเวลา</h3><div><b>วันธรรมดา</b><b>เสาร์–อาทิตย์</b><b>รอบเช้า</b><b>รอบเย็น</b></div><p>จัดรอบเรียนให้เข้ากับตารางชีวิต</p></article>
          <article><span>INPUT 03</span><h3>เลือกจังหวะ</h3><div><b>ทดลองก่อน</b><b>เริ่มพื้นฐาน</b><b>เรียนต่อเนื่อง</b><b>เร่งทำผลงาน</b></div><p>เรียนเท่าที่พร้อม แล้วค่อยต่อยอด</p></article>
          <article className="budget-card"><span>INPUT 04</span><h3>วางแผนตามงบ</h3><div><b>แผนยืดหยุ่น</b><b>เลือกจำนวน Level</b></div><p>ให้ทีมช่วยออกแบบทางเลือกที่คุ้มค่า โดยไม่ต้องลดเป้าหมายของผู้เรียน</p></article>
        </div>
        <div className="config-output"><div className="output-orb">AI</div><div><span>OUTPUT</span><h3>YOUR PERSONAL MISSION MAP</h3><p>รับคำแนะนำหลักสูตรและรอบเรียนที่เหมาะกับคุณโดยไม่มีค่าใช้จ่าย</p></div><a className="primary-button" href={LINE_URL} target="_blank" rel="noreferrer">ให้ทีมช่วยวางแผน <span>↗</span></a></div>
      </section>

      <section className="lab-section">
        <div className="section-kicker">TECHNOLOGY LABS <span>04</span></div>
        <div className="lab-head"><h2>ไม่ได้เรียนแค่ Tool<br />แต่เรียนวิธีคิดแบบ Creator</h2><p>เทคโนโลยีเปลี่ยนได้ทุกปี เราจึงเน้นพื้นฐานที่ใช้ได้ตลอดชีวิต พร้อมเปิดพื้นที่ให้ทดลองเครื่องมือและเทคโนโลยีปัจจุบันผ่านโปรเจกต์จริง</p></div>
        <div className="lab-grid">
          <article><div className="lab-code">LAB_A</div><h3>ROBOTICS SYSTEMS</h3><p>กลไก มอเตอร์ เซ็นเซอร์ Microcontroller และ IoT</p><span>BUILD / CONNECT / AUTOMATE</span></article>
          <article><div className="lab-code">LAB_B</div><h3>CREATIVE COMPUTING</h3><p>Scratch, Python, Roblox Studio และ 3D Modeling</p><span>CODE / DESIGN / PLAY</span></article>
          <article><div className="lab-code">LAB_C</div><h3>AI & DIGITAL FUTURE</h3><p>LLMs, Prompting, Generative Media, Workflow และ Cybersecurity</p><span>CREATE / THINK / LEAD</span></article>
        </div>
      </section>

      <section className="schedule-section" id="schedule">
        <div className="schedule-copy"><div className="section-kicker light">TIMETABLE <span>05</span></div><h2>เปิดทุกวัน<br />เลือกเวลาที่ลงตัว</h2><div className="open-hours"><div><span>MON–FRI</span><strong>09:00–18:30</strong></div><div><span>SAT–SUN</span><strong>10:00–18:00</strong></div></div><p>ช่วงเวลาเรียนมาตรฐานเริ่มตั้งแต่ 10:00 น. มีรอบเช้า บ่าย และเย็น โดยที่นั่งและวิชาที่เปิดในแต่ละรอบอาจเปลี่ยนแปลง</p><a className="primary-button" href={LINE_URL} target="_blank" rel="noreferrer">เช็กที่นั่งกับทีมงาน <span>↗</span></a></div>
        <a className="schedule-poster" href="/updates/timetable.jpg" target="_blank"><img src="/updates/timetable.jpg" alt="ตารางเวลาเรียน Craft Code เดือนพฤษภาคม 2026" /><span>เปิดตารางฉบับเต็ม ↗</span></a>
      </section>

      <section className="experience-section">
        <div className="section-kicker">LEARNING EXPERIENCE <span>06</span></div>
        <div className="experience-head"><h2>ห้องเรียนที่ออกแบบ<br />ให้ไอเดียทะยานได้</h2><p>พื้นที่ปลอดภัย สนุก และเต็มไปด้วยอุปกรณ์ที่ชวนให้น้องอยากลอง ครูดูแลใกล้ชิดแบบโค้ช ให้คำแนะนำโดยไม่แย่งความภูมิใจในการค้นพบ</p></div>
        <div className="photo-grid"><figure className="photo-large"><img src="/images/coding-class.jpeg" alt="ครู Craft Code ดูแลนักเรียนในคลาส Coding" /><figcaption>SMALL CLASS · CLOSE COACHING</figcaption></figure><figure><img src="/images/cassiope-room.jpeg" alt="ห้องเรียน Cassiope ของ Craft Code" /><figcaption>ROBOTICS LAB</figcaption></figure><figure><img src="/images/stella-room.jpeg" alt="ห้องเรียน Stella ของ Craft Code" /><figcaption>CREATIVE PLAY SPACE</figcaption></figure></div>
      </section>

      <section className="news-section" id="news">
        <div className="section-kicker light">NEWS & MILESTONES <span>06</span></div>
        <div className="news-head"><h2>เรื่องสำคัญ<br />ที่เราอยากแบ่งปัน</h2><p>มาตรฐานของสถาบันและประสบการณ์บนเวทีจริง คืออีกส่วนหนึ่งของการเรียนรู้ที่ผู้ปกครองควรได้เห็น</p></div>
        <div className="milestone-grid">
          <article className="milestone-card dbd-story">
            <img src="/images/dbd-franchise-standard-2026.jpg" alt="Craft Code Robotic เข้ารับประกาศนียบัตร DBD Franchise Standard 2026" />
            <div className="milestone-overlay"><div className="news-badge">LATEST · 2026</div><img className="dbd-mark" src="/images/dbd-franchise-standard-logo.jpg" alt="DBD Franchise Standard" /><h3>ก้าวสำคัญของ Craft Code Robotic</h3><p>เข้ารับประกาศนียบัตรจากกรมพัฒนาธุรกิจการค้า ในโครงการ DBD Franchise Standard 2026 สะท้อนความตั้งใจในการพัฒนาระบบการเรียนรู้และการดำเนินงานอย่างมีมาตรฐาน</p></div>
          </article>
          <article className="milestone-card award-story">
            <img src="/images/fll-award.jpeg" alt="นักเรียน Craft Code รับรางวัล Challenge Solution Award" />
            <div className="milestone-overlay"><div className="news-badge gold-badge">COMPETITION</div><h3>จากห้องเรียน สู่เวทีจริง</h3><p>Challenge Solution Award · FIRST LEGO League Thailand พร้อมประสบการณ์แก้โจทย์ ทำงานเป็นทีม และนำเสนอผลงานจริง</p></div>
          </article>
        </div>
        <div className="competition-gallery" aria-label="ภาพบรรยากาศการเรียนรู้และการแข่งขัน">
          <figure><img src="/images/craft-code-community.jpeg" alt="ทีมนักเรียน Craft Code ร่วมกิจกรรม" /><figcaption><span>01</span>TEAM EXPERIENCE</figcaption></figure>
          <figure><img src="/images/robot-activity.jpeg" alt="กิจกรรมหุ่นยนต์ของ Craft Code" /><figcaption><span>02</span>ROBOTICS CHALLENGE</figcaption></figure>
          <figure><img src="/images/coding-class.jpeg" alt="ครูดูแลนักเรียนในคลาสโค้ดดิ้ง" /><figcaption><span>03</span>COACHING & PRACTICE</figcaption></figure>
        </div>
        <div className="competition-row"><span>FIRST LEGO LEAGUE</span><span>WRO</span><span>IRSA</span><span>TIRT TAIWAN</span></div>
      </section>

      <section className="team-section" id="team">
        <div className="team-head"><div><div className="section-kicker">ACADEMIC STAFF <span>07</span></div><h2>ทีมครูที่เชี่ยวชาญ<br />และเข้าใจผู้เรียน</h2></div><blockquote>“เราไม่ได้แค่สอน Class แต่คอย Feed Forward และดูแลน้อง ๆ เหมือนเป็นลูกของเราเอง”</blockquote></div>
        <div className="team-layout"><div className="team-list">{staff.map(([name,thai,role],i) => <article key={name}><span>0{i+1}</span><div className="team-monogram">{name.replace("T. ","").charAt(0)}</div><h3>{name}<small>{thai}</small></h3><p>{role}</p></article>)}</div><a className="staff-poster" href="/updates/academic-staff.jpg" target="_blank"><img src="/updates/academic-staff.jpg" alt="ทีม Academic Staff ของ Craft Code อัปเดตเดือนกุมภาพันธ์ 2026" /><span>ดูโปสเตอร์ทีมครูฉบับเต็ม ↗</span></a></div>
      </section>

      <section className="faq-section"><div className="section-kicker light">PARENT FAQ <span>08</span></div><div className="faq-layout"><h2>ก่อนเริ่ม<br />ภารกิจแรก</h2><div className="faq-list"><details><summary>เริ่มเรียนได้ตั้งแต่อายุเท่าไร?<span>+</span></summary><p>เริ่มได้ตั้งแต่อายุประมาณ 3 ปีใน Early Coding Explorer หรือเริ่ม Icon Block Coding ช่วง 4–6 ปี ทีมงานจะช่วยประเมินจุดเริ่มต้นที่เหมาะกับน้อง</p></details><details><summary>ต้องมีพื้นฐานมาก่อนไหม?<span>+</span></summary><p>ไม่จำเป็น หลักสูตรมีตั้งแต่ Foundation ถึง Advanced และออกแบบให้ต่อยอดเป็นลำดับตามประสบการณ์จริงของผู้เรียน</p></details><details><summary>เรียนที่ไหนและเปิดวันไหน?<span>+</span></summary><p>เรียน On-site ที่ Craft Code Robotic ชั้น 7 เซ็นทรัลแจ้งวัฒนะ เปิดทุกวัน จันทร์–ศุกร์ 09:00–18:30 และเสาร์–อาทิตย์ 10:00–18:00</p></details><details><summary>ทดลองเรียนก่อนสมัครได้ไหม?<span>+</span></summary><p>ได้ ทัก LINE @CRCWN พร้อมแจ้งอายุและความสนใจ ทีมงานจะช่วยแนะนำคลาสทดลองและรอบที่มีที่นั่ง</p></details></div></div></section>

      <section className="final-cta" id="contact"><div className="cta-orbit" aria-hidden="true" /><div className="section-kicker light">READY FOR LAUNCH?</div><h2>เริ่มต้นจากคลาสที่ใช่<br /><em>แล้วให้ความสามารถพาเขาไปไกล</em></h2><p>แจ้งอายุ ความสนใจ และวันที่สะดวก ทีม Craft Code จะช่วยเลือกเส้นทางและรอบทดลองเรียนที่เหมาะที่สุด</p><a className="primary-button large" href={LINE_URL} target="_blank" rel="noreferrer">LINE @CRCWN · ทดลองเรียนฟรี <span>↗</span></a></section>

      <footer><div className="footer-brand footer-official"><img src="/images/craft-code-horizontal-logo.jpg" alt="Craft Code Robotic" /></div><div className="footer-contact"><strong>CRAFT CODE · CENTRAL CHAENGWATTANA</strong><p>ชั้น 7 เซ็นทรัลแจ้งวัฒนะ ปากเกร็ด นนทบุรี 11120</p><a href="tel:0924255655">092 425 5655</a></div><div className="footer-links"><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook: Craft Code Robotic ↗</a><a href={LINE_URL} target="_blank" rel="noreferrer">LINE: @CRCWN ↗</a><a href="#top">กลับขึ้นด้านบน ↑</a></div><small className="copyright">© 2026 CRAFT CODE ROBOTIC THAILAND · CURRICULUM UPDATED MAY 2026</small></footer>
    </main>
  );
}
