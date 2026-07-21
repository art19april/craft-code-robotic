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

const fees = [
  ["Early Coding Explorer / Unplug", "8 ครั้ง · 1 ชม.", "17,900", "–", "–"],
  ["Icon Block Coding", "8 ครั้ง · 1.5 ชม.", "14,900", "28,310", "40,230"],
  ["Scratch Coding & Game Design", "8 ครั้ง · 2 ชม.", "17,900", "34,010", "48,330"],
  ["Python Coding", "8 ครั้ง · 2 ชม.", "18,900", "35,910", "51,030"],
  ["3D Design & Modeling", "4 ครั้ง · 2 ชม.", "19,900", "37,810", "–"],
  ["Roblox Game Design", "6 ครั้ง · 2 ชม.", "16,900", "32,110", "45,630"],
  ["Extensions / Special Workshops", "8 ครั้ง · 3 ชม.", "27,900", "53,010", "–"],
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
          <a href="#fees">ค่าเรียน</a>
          <a href="#schedule">เวลาเรียน</a>
          <a href="#team">ทีมครู</a>
        </div>
        <a className="nav-cta" href={LINE_URL} target="_blank" rel="noreferrer">ทดลองเรียนฟรี <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="เปิดเมนู">เมนู</summary>
          <div>
            <a href="#programs">Roadmap</a><a href="#fees">ค่าเรียน</a><a href="#schedule">เวลาเรียน</a><a href="#team">ทีมครู</a>
            <a href={LINE_URL} target="_blank" rel="noreferrer">ทดลองเรียนฟรี ↗</a>
          </div>
        </details>
      </nav>

      <section className="hero" id="top">
        <div className="stars" aria-hidden="true" /><div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
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
        <div className="roadmap-actions">
          <a href="/updates/curriculum-overview.jpg" target="_blank">ดู Curriculum Overview ↗</a>
          <a href="/updates/roadmap-and-fees.jpg" target="_blank">ดู Roadmap ฉบับโปสเตอร์ ↗</a>
        </div>
      </section>

      <section className="fees-section" id="fees">
        <div className="section-kicker">COURSE FEES <span>03</span></div>
        <div className="fees-head"><h2>เลือกแพ็กที่เหมาะ<br />กับจังหวะการเรียน</h2><div><p>ราคาอัปเดตเดือนพฤษภาคม 2026</p><strong>ค่าธรรมเนียมแรกเข้า 1,000 บาท</strong><small>English Program เพิ่ม 4,000 บาท / คอร์ส</small></div></div>
        <div className="fee-table-wrap"><table className="fee-table"><thead><tr><th>หลักสูตร</th><th>ต่อ Level</th><th>Pack S<br/><small>2 Levels</small></th><th>Pack M<br/><small>4 Levels · ลด 5%</small></th><th>Pack L<br/><small>6 Levels · ลด 10%</small></th></tr></thead><tbody>{fees.map(row => <tr key={row[0]}>{row.map((cell,i) => <td key={i}>{i > 1 && cell !== "–" ? `฿${cell}` : cell}</td>)}</tr>)}</tbody></table></div>
        <p className="fee-note">ราคาอาจเปลี่ยนแปลงตามโปรโมชัน กรุณาติดต่อ Facebook หรือ LINE Official เพื่อรับข้อมูลและสิทธิพิเศษล่าสุด</p>
      </section>

      <section className="schedule-section" id="schedule">
        <div className="schedule-copy"><div className="section-kicker light">TIMETABLE <span>04</span></div><h2>เปิดทุกวัน<br />เลือกเวลาที่ลงตัว</h2><div className="open-hours"><div><span>MON–FRI</span><strong>09:00–18:30</strong></div><div><span>SAT–SUN</span><strong>10:00–18:00</strong></div></div><p>ช่วงเวลาเรียนมาตรฐานเริ่มตั้งแต่ 10:00 น. มีรอบเช้า บ่าย และเย็น โดยที่นั่งและวิชาที่เปิดในแต่ละรอบอาจเปลี่ยนแปลง</p><a className="primary-button" href={LINE_URL} target="_blank" rel="noreferrer">เช็กที่นั่งกับทีมงาน <span>↗</span></a></div>
        <a className="schedule-poster" href="/updates/timetable.jpg" target="_blank"><img src="/updates/timetable.jpg" alt="ตารางเวลาเรียน Craft Code เดือนพฤษภาคม 2026" /><span>เปิดตารางฉบับเต็ม ↗</span></a>
      </section>

      <section className="experience-section">
        <div className="section-kicker">LEARNING EXPERIENCE <span>05</span></div>
        <div className="experience-head"><h2>ห้องเรียนที่ออกแบบ<br />ให้ไอเดียทะยานได้</h2><p>พื้นที่ปลอดภัย สนุก และเต็มไปด้วยอุปกรณ์ที่ชวนให้น้องอยากลอง ครูดูแลใกล้ชิดแบบโค้ช ให้คำแนะนำโดยไม่แย่งความภูมิใจในการค้นพบ</p></div>
        <div className="photo-grid"><figure className="photo-large"><img src="/images/coding-class.jpeg" alt="ครู Craft Code ดูแลนักเรียนในคลาส Coding" /><figcaption>SMALL CLASS · CLOSE COACHING</figcaption></figure><figure><img src="/images/cassiope-room.jpeg" alt="ห้องเรียน Cassiope ของ Craft Code" /><figcaption>ROBOTICS LAB</figcaption></figure><figure><img src="/images/stella-room.jpeg" alt="ห้องเรียน Stella ของ Craft Code" /><figcaption>CREATIVE PLAY SPACE</figcaption></figure></div>
      </section>

      <section className="achievement-section" id="achievement"><div className="achievement-image"><img src="/images/fll-award.jpeg" alt="นักเรียน Craft Code รับรางวัล Challenge Solution Award" /><div className="scanline" aria-hidden="true" /></div><div className="achievement-copy"><div className="section-kicker light">BEYOND THE CLASSROOM <span>06</span></div><h2>จากห้องเรียน<br />สู่เวทีจริง</h2><p>การแข่งขันคือพื้นที่ให้น้องใช้ทั้งตรรกะ ความคิดสร้างสรรค์ และทีมเวิร์ก ภายใต้สถานการณ์จริง ไม่ใช่เพื่อชนะอย่างเดียว แต่เพื่อเห็นว่าตัวเองไปได้ไกลแค่ไหน</p><div className="award-card"><span>2025</span><div><strong>STEM AWARD · FLL THAILAND</strong><small>พร้อมผลงาน Robot Game อันดับ 8</small></div></div><div className="competition-row"><span>FIRST LEGO LEAGUE</span><span>WRO</span><span>IRSA</span><span>TIRT TAIWAN</span></div></div></section>

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
