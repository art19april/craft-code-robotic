import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./privacy.module.css";

const CONTACT_EMAIL = "admin@craftcoderobotic.com";
const LINE_URL = "https://line.me/R/ti/p/@CRCWN";

export const metadata: Metadata = {
  title: "Privacy Policy | Craft Code Robotic",
  description:
    "นโยบายความเป็นส่วนตัวของ Craft Code Robotic สำหรับเว็บไซต์ แบบฟอร์ม LINE Official Account และ Facebook Messenger",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Craft Code Robotic",
    description:
      "รายละเอียดการเก็บ ใช้ เปิดเผย และลบข้อมูลส่วนบุคคลสำหรับเว็บไซต์ LINE และ Facebook Messenger",
    url: "/privacy",
    type: "website",
  },
};

const thaiSections = [
  {
    number: "01",
    title: "ขอบเขตของนโยบาย",
    body: (
      <p>
        นโยบายนี้ใช้กับเว็บไซต์ของ Craft Code Robotic, แบบฟอร์มออนไลน์, LINE Official Account,
        Facebook Page และ Messenger รวมถึงระบบตอบแชตอัตโนมัติที่เชื่อมต่อกับช่องทางดังกล่าว
      </p>
    ),
  },
  {
    number: "02",
    title: "ข้อมูลที่เราอาจเก็บ",
    body: (
      <ul>
        <li>ข้อมูลที่ท่านให้โดยสมัครใจ เช่น ชื่อ อีเมล เบอร์โทร LINE ID อายุหรือช่วงอายุของผู้เรียน และความสนใจด้านการเรียน</li>
        <li>เนื้อหาข้อความ รูปภาพ หรือไฟล์ที่ส่งผ่าน LINE หรือ Messenger เพื่อสอบถามข้อมูล</li>
        <li>ข้อมูลโปรไฟล์และรหัสผู้ใช้ของแพลตฟอร์ม เช่น Facebook Page-scoped ID หรือ LINE user ID ตามสิทธิ์ที่แพลตฟอร์มอนุญาต</li>
        <li>ข้อมูลการใช้งาน เช่น วันเวลา ช่องทาง แหล่งที่มา และบันทึกทางเทคนิคที่จำเป็นต่อความปลอดภัยและการแก้ไขปัญหา</li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "วัตถุประสงค์ในการใช้ข้อมูล",
    body: (
      <ul>
        <li>ตอบคำถาม ให้ข้อมูลหลักสูตร หนังสือ กิจกรรม Workshop และบริการของสถาบัน</li>
        <li>ให้ระบบตอบกลับอัตโนมัติคัดกรองความต้องการเบื้องต้น และส่งต่อให้เจ้าหน้าที่เมื่อจำเป็น</li>
        <li>ติดต่อกลับตามที่ท่านร้องขอ จัดการการสมัคร การนัดหมาย และการดูแลผู้เรียน</li>
        <li>ดูแลความปลอดภัย ป้องกันสแปม วิเคราะห์และปรับปรุงคุณภาพบริการ</li>
        <li>ปฏิบัติตามกฎหมาย หรือใช้สิทธิโดยชอบด้วยกฎหมายของ Craft Code Robotic</li>
      </ul>
    ),
  },
  {
    number: "04",
    title: "ระบบตอบแชตอัตโนมัติ",
    body: (
      <p>
        ข้อความบางส่วนอาจได้รับคำตอบจากระบบอัตโนมัติเพื่อให้ข้อมูลทั่วไป ระบบนี้ไม่ใช้ข้อมูลเพื่อทำคำตัดสินที่มีผลทางกฎหมายต่อท่าน
        และท่านสามารถพิมพ์ขอคุยกับเจ้าหน้าที่ได้ทุกเมื่อ ข้อความที่ส่งเข้ามาอาจถูกประมวลผลโดยผู้ให้บริการแพลตฟอร์มและระบบที่เราใช้ดำเนินงาน
      </p>
    ),
  },
  {
    number: "05",
    title: "การเปิดเผยข้อมูลและผู้ให้บริการ",
    body: (
      <p>
        เราไม่ขายข้อมูลส่วนบุคคล ข้อมูลอาจถูกส่งให้ Meta/Facebook, LINE, ผู้ให้บริการเว็บไซต์ แบบฟอร์ม โฮสติ้ง
        ระบบอัตโนมัติ หรือผู้ให้บริการด้านไอทีเท่าที่จำเป็น โดยผู้ให้บริการเหล่านี้ประมวลผลข้อมูลภายใต้เงื่อนไขและมาตรการของตน
        เราอาจเปิดเผยข้อมูลเมื่อกฎหมายกำหนดหรือเมื่อจำเป็นเพื่อคุ้มครองสิทธิและความปลอดภัย
      </p>
    ),
  },
  {
    number: "06",
    title: "ระยะเวลาเก็บรักษา",
    body: (
      <p>
        เราเก็บข้อมูลเท่าที่จำเป็นตามวัตถุประสงค์ โดยทั่วไปข้อมูลการสอบถามและประวัติแชตจะเก็บไม่เกิน 12 เดือนนับจากการติดต่อครั้งล่าสุด
        ข้อมูลลงชื่อสนใจโครงการที่ยังพัฒนาอาจเก็บไม่เกิน 90 วัน เว้นแต่ท่านให้ความยินยอมใหม่
        ส่วนข้อมูลที่เกี่ยวข้องกับธุรกรรมหรือข้อกำหนดทางกฎหมายจะเก็บตามระยะเวลาที่กฎหมายกำหนด หลังจากนั้นจะลบหรือทำให้ไม่สามารถระบุตัวบุคคลได้
      </p>
    ),
  },
  {
    number: "07",
    title: "สิทธิของเจ้าของข้อมูล",
    body: (
      <p>
        ภายใต้กฎหมายที่ใช้บังคับ ท่านอาจขอเข้าถึง รับสำเนา แก้ไข ลบ จำกัดหรือคัดค้านการประมวลผล
        ถอนความยินยอม หรือขอให้โอนข้อมูลได้ การถอนความยินยอมไม่กระทบการประมวลผลที่ชอบด้วยกฎหมายก่อนถอน
      </p>
    ),
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="กลับหน้าแรก Craft Code Robotic">
          <Image
            src="/images/craft-code-horizontal-logo.jpg"
            alt="Craft Code Robotic"
            width={420}
            height={164}
            priority
          />
        </Link>
        <Link className={styles.backLink} href="/">กลับหน้าแรก <span aria-hidden="true">↗</span></Link>
      </header>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>LEGAL • DATA PROTECTION • PDPA</p>
          <h1>นโยบาย<br /><em>ความเป็นส่วนตัว</em></h1>
        </div>
        <div className={styles.heroCopy}>
          <strong>PRIVACY POLICY</strong>
          <p>
            Craft Code Robotic เคารพความเป็นส่วนตัวของผู้เรียน ผู้ปกครอง และผู้ติดต่อทุกท่าน
            เอกสารนี้อธิบายว่าเราเก็บ ใช้ เปิดเผย และดูแลข้อมูลอย่างไร
          </p>
          <dl>
            <div><dt>ผู้ควบคุมข้อมูล</dt><dd>Craft Code Robotic &amp; AI Learning Center</dd></div>
            <div><dt>วันที่มีผล</dt><dd>15 พฤศจิกายน 2569</dd></div>
            <div><dt>ติดต่อ</dt><dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd></div>
          </dl>
        </div>
      </section>

      <section className={styles.policyGrid} aria-label="นโยบายความเป็นส่วนตัวภาษาไทย">
        {thaiSections.map((section) => (
          <article key={section.number} className={styles.policyCard}>
            <span>{section.number}</span>
            <div><h2>{section.title}</h2>{section.body}</div>
          </article>
        ))}
      </section>

      <section className={styles.deletion} id="data-deletion">
        <div className={styles.deletionIntro}>
          <p className={styles.eyebrow}>DATA DELETION INSTRUCTIONS</p>
          <h2>ต้องการให้เรา<br /><em>ลบข้อมูล?</em></h2>
          <p>ส่งคำขอได้โดยไม่เสียค่าใช้จ่าย เราอาจขอข้อมูลเพิ่มเติมเพื่อยืนยันตัวตนและค้นหาบันทึกที่เกี่ยวข้อง</p>
        </div>
        <div className={styles.steps}>
          <div><b>1</b><p>ส่งอีเมลหัวข้อ <strong>“ขอลบข้อมูล / Data Deletion Request”</strong> ไปที่ <a href={`mailto:${CONTACT_EMAIL}?subject=Data%20Deletion%20Request`}>{CONTACT_EMAIL}</a></p></div>
          <div><b>2</b><p>ระบุช่องทางที่เคยติดต่อ เช่น Facebook Messenger, LINE หรือแบบฟอร์มเว็บไซต์ พร้อมชื่อโปรไฟล์หรืออีเมลที่ใช้</p></div>
          <div><b>3</b><p>ทีมงานจะยืนยันการรับคำขอ ตรวจสอบตัวตนตามความเหมาะสม และดำเนินการภายใน 30 วัน เว้นแต่กฎหมายกำหนดให้เก็บข้อมูลบางส่วนต่อไป</p></div>
        </div>
      </section>

      <section className={styles.additional}>
        <article>
          <h2>ข้อมูลของเด็กและเยาวชน</h2>
          <p>บริการของเรามุ่งให้ผู้ปกครองเป็นผู้ติดต่อและให้ข้อมูลที่จำเป็น เราไม่ตั้งใจเก็บข้อมูลเด็กโดยไม่มีฐานทางกฎหมายหรือความยินยอมจากผู้ปกครอง หากพบว่ามีการส่งข้อมูลเด็กมาโดยไม่เหมาะสม กรุณาติดต่อเราเพื่อลบข้อมูล</p>
        </article>
        <article>
          <h2>ความปลอดภัยและลิงก์ภายนอก</h2>
          <p>เราใช้มาตรการที่เหมาะสมเพื่อลดความเสี่ยงจากการเข้าถึงโดยไม่ได้รับอนุญาต อย่างไรก็ตามไม่มีระบบออนไลน์ใดปลอดภัยอย่างสมบูรณ์ เว็บไซต์อาจเชื่อมไปยังบริการภายนอกซึ่งมีนโยบายของตนเอง</p>
        </article>
        <article>
          <h2>การเปลี่ยนแปลงนโยบาย</h2>
          <p>เราอาจปรับปรุงนโยบายนี้เมื่อบริการหรือกฎหมายเปลี่ยนแปลง โดยจะแสดงวันที่มีผลฉบับล่าสุดบนหน้านี้ การใช้งานบริการต่อหลังการปรับปรุงถือเป็นการรับทราบนโยบายฉบับใหม่</p>
        </article>
      </section>

      <section className={styles.english} lang="en" aria-label="Privacy policy English summary">
        <p className={styles.eyebrow}>ENGLISH SUMMARY</p>
        <h2>Privacy Policy</h2>
        <p>
          Craft Code Robotic &amp; AI Learning Center processes information submitted through our website,
          forms, LINE Official Account, Facebook Page, Messenger, and connected automated chat services.
          This may include contact details supplied by you, message content, platform profile identifiers,
          interaction timestamps, referral information, and essential technical logs.
        </p>
        <p>
          We use this information to answer enquiries, provide course and event information, operate automated
          replies and human handoff, manage requested contact, protect our services, and improve support. We do
          not sell personal information. Data may be processed by Meta, LINE, Netlify, hosting, automation, and
          IT providers as necessary to deliver these services.
        </p>
        <p>
          Enquiry and chat records are generally retained for no longer than 12 months after the last interaction.
          Pilot-program interest data may be retained for up to 90 days unless consent is renewed. Legal or
          transaction records may be retained where required by law. Automated replies provide general information
          and do not make decisions producing legal effects. You may request a human staff member at any time.
        </p>
        <p>
          To request access, correction, withdrawal of consent, or deletion, email
          {" "}<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the subject “Data Deletion Request”
          and identify the channel and profile used. We may verify your identity and will normally respond within
          30 days, subject to applicable law.
        </p>
      </section>

      <footer className={styles.footer}>
        <div><strong>CRAFT CODE ROBOTIC</strong><p>Central Chaengwattana · Nonthaburi, Thailand</p></div>
        <nav aria-label="ช่องทางติดต่อ">
          <a href={`mailto:${CONTACT_EMAIL}`}>Email ↗</a>
          <a href={LINE_URL} target="_blank" rel="noreferrer">LINE @CRCWN ↗</a>
          <a href="#top">กลับด้านบน ↑</a>
        </nav>
        <small>© 2026 CRAFT CODE ROBOTIC · PRIVACY POLICY</small>
      </footer>
    </main>
  );
}
