import type { Metadata } from "next";
import Image from "next/image";
import InterestForm from "./InterestForm";
import styles from "./page.module.css";

const HOME_URL = "https://www.craftcoderobotic.com/";
const LINE_URL = "https://line.me/R/ti/p/@CRCWN";
const FACEBOOK_URL = "https://www.facebook.com/craftcodethailand";
const PAPER_BOOK_URL = "https://www.phetpraguy.com/?action=showproducts&id=11500";
const EBOOK_URL = "https://www.mebmarket.com/index.php?action=BookDetails&book_id=476208";

export const metadata: Metadata = {
  title: "Future-Ready Parenting | Craft Code Robotic",
  description: "เลี้ยงลูกให้คิดเป็น ในโลกที่มี AI — หนังสือ Coding AI Psychology for Kids และคลาสสำหรับผู้ปกครองจาก Craft Code Robotic",
  alternates: { canonical: "/parent-ai" },
  openGraph: {
    title: "Future-Ready Parenting — เลี้ยงลูกให้คิดเป็น ในโลกที่มี AI",
    description: "แนวคิดและกิจกรรมสำหรับพ่อแม่ เพื่อช่วยลูกคิดเป็น ถามเป็น และใช้ AI เป็นผู้ช่วยอย่างเหมาะสมกับวัย",
    url: "/parent-ai",
    type: "website",
    images: [{
      url: "/parent-ai/book-front-original.jpeg",
      width: 1206,
      height: 1792,
      alt: "ปกหนังสือ Coding AI Psychology for Kids",
    }],
  },
};

const benefits = [
  ["01", "คิดเป็น", "ฝึกคิดอย่างเป็นระบบ และกล้าลองผิดลองถูก"],
  ["02", "ถามเป็น", "ไม่หยุดเพียงคำตอบแรก แต่ชวนลูกตรวจสอบและตั้งคำถามต่อ"],
  ["03", "ใช้ AI เป็น", "ใช้เทคโนโลยีอย่างเหมาะสมกับวัย ปลอดภัย และมีความรับผิดชอบ"],
] as const;

const activitySteps = [
  ["คิด", "ให้ลูกลองเดาคำตอบก่อน เพื่อเปิดพื้นที่ให้ความสงสัยและเหตุผลของเขา"],
  ["ถาม", "ใช้ AI ช่วยอธิบายด้วยคำถามที่มีเป้าหมาย ไม่ใช่รับคำตอบทันที"],
  ["เช็ก", "ชวนกันหาหลักฐานจากแหล่งอื่น แล้วเปรียบเทียบว่าสิ่งใดน่าเชื่อถือ"],
] as const;

export default function ParentAiPage() {
  return (
    <main className={styles.page} id="top">
      <a className={styles.skipLink} href="#main-content">ข้ามไปยังเนื้อหาหลัก</a>

      <header className={styles.navWrap}>
        <nav className={styles.nav} aria-label="เมนู Future-Ready Parenting">
          <a className={styles.brand} href={HOME_URL} aria-label="กลับสู่หน้าแรก Craft Code Robotic">
            <Image src="/parent-ai/craft-code-official-logo.jpg" alt="Craft Code Robotic" width={2047} height={1083} sizes="116px" />
          </a>
          <div className={styles.navLinks}>
            <a href="#book">หนังสือ</a>
            <a href="#benefits">สิ่งที่ลูกจะได้ฝึก</a>
            <a href="#workshop">คลาสพ่อแม่</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className={styles.navCta} href="#workshop">สนใจ Workshop <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className={styles.hero} id="main-content">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>CRAFT CODE ROBOTIC PRESENTS <i /> FUTURE-READY PARENTING</p>
          <h1>เลี้ยงลูกให้<span>คิดเป็น</span><br />ในโลกที่มี AI</h1>
          <p className={styles.heroBody}>
            ไม่จำเป็นต้องเก่ง Coding หรือซื้ออุปกรณ์ราคาแพง ก็ช่วยลูกฝึกคิด ตั้งคำถาม
            และใช้เทคโนโลยีอย่างเหมาะสมกับวัยได้ เริ่มจากสิ่งเล็ก ๆ ที่บ้านของเรา
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#workshop">สนใจคลาสสำหรับผู้ปกครอง <span aria-hidden="true">↓</span></a>
            <a className={styles.secondaryButton} href="#book">รู้จักหนังสือเล่มนี้</a>
          </div>
          <div className={styles.messageCard}>
            <span>ONE BIG MESSAGE</span>
            <p>เราไม่ได้เลี้ยงลูกให้เก่งกว่า AI<br />แต่เลี้ยงลูกให้คิดเป็น และใช้ AI เป็นผู้ช่วย</p>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="หนังสือ Coding AI Psychology for Kids">
          <div className={styles.orbit} aria-hidden="true"><span>THINK</span><span>ASK</span><span>VERIFY</span></div>
          <div className={styles.bookFrame}>
            <Image src="/parent-ai/book-front-original.jpeg" alt="ปกหนังสือ Coding AI Psychology for Kids 10 เทคนิคจิตวิทยาพัฒนาลูกให้พร้อมโลก AI" width={1206} height={1792} sizes="(max-width: 780px) 66vw, 390px" loading="eager" />
          </div>
          <div className={styles.authorChip}>
            <Image src="/parent-ai/author-dechchart-photo.jpeg" alt="ครูพี่อาร์ต ผู้เขียนหนังสือ" width={1365} height={2048} sizes="56px" />
            <p><span>เขียนโดย</span><strong>เดชชาติ เจิมประไพ</strong><small>ครูพี่อาร์ต / พ่ออาร์ต AI</small></p>
          </div>
        </div>
      </section>

      <section className={styles.bookSection} id="book">
        <div className={styles.sectionLabel}><span>01</span> BOOK SPOTLIGHT</div>
        <div className={styles.bookGallery}>
          <div className={styles.frontCover}>
            <Image src="/parent-ai/book-front-original.jpeg" alt="ด้านหน้าหนังสือ Coding AI Psychology for Kids" width={1206} height={1792} sizes="(max-width: 780px) 57vw, 300px" />
          </div>
          <div className={styles.backCover}>
            <Image src="/parent-ai/book-back-original.jpeg" alt="ด้านหลังหนังสือ Coding AI Psychology for Kids" width={1206} height={1774} sizes="(max-width: 780px) 57vw, 300px" />
          </div>
          <span className={styles.galleryNote}>ACTUAL BOOK • FRONT / BACK</span>
        </div>
        <div className={styles.bookCopy}>
          <p className={styles.eyebrowDark}>BOOK <i /> 10 เทคนิคจิตวิทยาพัฒนาลูก</p>
          <h2>Coding AI<br />Psychology <em>for Kids</em></h2>
          <h3>10 เทคนิคจิตวิทยาพัฒนาลูกให้พร้อมโลก AI</h3>
          <p>หนังสือสำหรับพ่อแม่ที่อยากช่วยให้ลูกคิดเป็น ตั้งคำถามเป็น ตรวจสอบข้อมูลเป็น และใช้ AI อย่างมีสติ โดยไม่จำเป็นต้องมีพื้นฐานด้านเทคโนโลยี</p>
          <dl className={styles.bookFacts}>
            <div><dt>ราคาปก</dt><dd>295 บาท</dd></div>
            <div><dt>จำนวนหน้า</dt><dd>208 หน้า</dd></div>
            <div><dt>ISBN</dt><dd>978-616-609-403-9</dd></div>
          </dl>
          <div className={styles.bookActions}>
            <a className={styles.primaryButton} href={PAPER_BOOK_URL} target="_blank" rel="noreferrer">ซื้อหนังสือกระดาษ <span aria-hidden="true">↗</span></a>
            <a className={styles.outlineButton} href={EBOOK_URL} target="_blank" rel="noreferrer">อ่านแบบ E-book <span aria-hidden="true">↗</span></a>
          </div>
          <small className={styles.merchantNote}>ราคาและสถานะสินค้าจริงเป็นไปตามผู้จัดจำหน่าย</small>
        </div>
      </section>

      <section className={styles.benefitSection} id="benefits">
        <div className={styles.sectionLabelLight}><span>02</span> THE FUTURE-READY MINDSET</div>
        <div className={styles.benefitHead}>
          <h2>สามทักษะที่ช่วยให้ลูก<br /><em>อยู่กับ AI อย่างมีความหมาย</em></h2>
          <p>ไม่ใช่คำรับประกันผลลัพธ์ แต่คือแนวทางการเรียนรู้ที่พ่อแม่ค่อย ๆ ฝึกกับลูกได้ในชีวิตประจำวัน</p>
        </div>
        <div className={styles.benefitGrid}>
          {benefits.map(([number, title, body]) => (
            <article key={number}>
              <div className={styles.benefitIcon} aria-hidden="true"><span>{number}</span></div>
              <h3>{title}</h3>
              <p>{body}</p>
              <small>LEARN • PRACTICE • GROW</small>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.activitySection}>
        <div className={styles.activityIntro}>
          <div className={styles.sectionLabel}><span>03</span> TRY IT AT HOME</div>
          <p className={styles.activityQuote}>“ทำไมท้องฟ้าเป็นสีฟ้า?”</p>
          <h2>เริ่มต้นวันนี้:<br /><em>ถามก่อนเชื่อ</em></h2>
          <p>เมื่อลูกถาม ลองให้เขาเดาคำตอบก่อน จากนั้นใช้ AI ช่วยอธิบาย และชวนกันหาหลักฐานจากแหล่งอื่นเพื่อเปรียบเทียบ</p>
          <div className={styles.safetyNote}><strong>AI SAFETY NOTE</strong><span>ผู้ปกครองควรเลือกเครื่องมือและระดับการใช้งาน AI ให้เหมาะกับวัย และดูแลการใช้งานร่วมกัน</span></div>
        </div>
        <div className={styles.activityFlow}>
          {activitySteps.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><small>STEP {index + 1}</small><h3>{title}</h3><p>{body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.workshopSection} id="workshop">
        <div className={styles.workshopCopy}>
          <div className={styles.sectionLabelLight}><span>04</span> COMING SOON • IN DEVELOPMENT</div>
          <div className={styles.statusLine}><i aria-hidden="true" /> หลักสูตรกำลังพัฒนา</div>
          <h2>Parent AI<br /><em>Starter</em></h2>
          <p>เรากำลังพัฒนาคลาสสำหรับพ่อแม่และผู้ปกครอง เพื่อแปลงแนวคิดจากหนังสือให้เป็นกิจกรรมที่ทำได้จริงที่บ้าน ครอบคลุมการสื่อสาร การตั้งคำถาม และการใช้ AI ร่วมกับลูกอย่างเหมาะสม</p>
          <div className={styles.pilotCard}>
            <span>WORKSHOP FORMAT</span>
            <strong>Workshop 1 วัน สำหรับผู้ปกครอง</strong>
            <p>เรียนรู้และลงมือทำกิจกรรมที่นำกลับไปใช้กับลูกได้จริง <small>ค่าใช้จ่ายอยู่ระหว่างสรุป</small></p>
          </div>
          <div className={styles.caveat}>ยังไม่เปิดรับชำระเงินหรือจองที่นั่ง วันจัด Workshop และค่าใช้จ่ายจะแจ้งเมื่อยืนยันแล้ว</div>
        </div>
        <InterestForm />
        <div className={styles.futurePrograms}>
          <article><span>FUTURE CONCEPT 01</span><strong>Family AI Discovery Lab</strong><p>กิจกรรมการเรียนรู้ร่วมกันระหว่างพ่อแม่และลูก</p><small>อยู่ระหว่างพัฒนา</small></article>
          <article><span>FUTURE CONCEPT 02</span><strong>Parent AI Coaching Program</strong><p>โปรแกรมเรียนรู้ต่อเนื่องสำหรับผู้ปกครอง</p><small>อยู่ระหว่างพัฒนา</small></article>
        </div>
      </section>

      <section className={styles.authorSection}>
        <div className={styles.authorPhoto}>
          <Image src="/parent-ai/author-dechchart-photo.jpeg" alt="เดชชาติ เจิมประไพ ผู้เขียน Coding AI Psychology for Kids" width={1365} height={2048} sizes="(max-width: 780px) 100vw, 45vw" />
          <div><span>AUTHOR PORTRAIT</span><small>ภาพจริงจากผู้เขียน</small></div>
        </div>
        <div className={styles.authorCopy}>
          <div className={styles.sectionLabel}><span>05</span> AUTHOR &amp; FOUNDER</div>
          <h2>จากประสบการณ์จริง<br />สู่เครื่องมือสำหรับ<br /><em>พ่อแม่ยุค AI</em></h2>
          <p className={styles.authorName}>เดชชาติ เจิมประไพ <span>ครูพี่อาร์ต / พ่ออาร์ต AI</span></p>
          <ul>
            <li>ผู้ก่อตั้ง Craft Code Robotic &amp; AI Learning Center</li>
            <li>ผู้ก่อตั้ง AI Growth LAB by Termtem Lifestyle</li>
          </ul>
          <p>จากการทำงานด้านเทคโนโลยี การสร้างพื้นที่การเรียนรู้สำหรับเด็ก และประสบการณ์ในฐานะคุณพ่อ สู่ความตั้งใจที่จะเชื่อมโลก AI กับวิธีเลี้ยงลูกที่เข้าใจพัฒนาการและการเรียนรู้</p>
          <a className={styles.textLink} href={HOME_URL}>รู้จัก Craft Code Robotic <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className={styles.faqSection} id="faq">
        <div className={styles.sectionLabelLight}><span>06</span> PARENT FAQ</div>
        <div className={styles.faqLayout}>
          <div><h2>คำถามที่พ่อแม่<br /><em>อยากรู้ก่อนเริ่ม</em></h2><p>หากยังมีคำถามเกี่ยวกับหนังสือหรือแนวคิดของคลาส สามารถคุยกับทีม Craft Code ได้ทาง LINE</p><a href={LINE_URL} target="_blank" rel="noreferrer">คุยกับทีมทาง LINE @CRCWN <span aria-hidden="true">↗</span></a></div>
          <div className={styles.faqList}>
            <details><summary>ต้องเขียนโค้ดเป็นมาก่อนหรือไม่?<span aria-hidden="true">+</span></summary><p>ไม่จำเป็น เนื้อหาเริ่มจากวิธีคิด การสื่อสาร และกิจกรรมที่พ่อแม่ทำได้ที่บ้าน</p></details>
            <details><summary>คลาสเหมาะกับผู้ปกครองของเด็กอายุเท่าไร?<span aria-hidden="true">+</span></summary><p>ตั้งใจออกแบบสำหรับผู้ปกครองเด็กวัยเรียน โดยจะยืนยันช่วงอายุที่เหมาะสมหลังทดสอบหลักสูตร</p></details>
            <details><summary>คลาสเปิดรับสมัครแล้วหรือยัง?<span aria-hidden="true">+</span></summary><p>ยังอยู่ระหว่างพัฒนา โดยวางรูปแบบเป็น Workshop 1 วันสำหรับผู้ปกครอง ค่าใช้จ่ายยังไม่สรุป สามารถลงชื่อรับข่าวสารไว้ก่อนได้โดยยังไม่ใช่การจองที่นั่ง</p></details>
            <details><summary>หนังสือซื้อที่ไหน?<span aria-hidden="true">+</span></summary><p>หนังสือเล่มสั่งซื้อได้จากเว็บไซต์สำนักพิมพ์เช็ก และ e-book อ่านได้ทาง MEB โดยราคาและสถานะสินค้าจริงเป็นไปตามผู้จัดจำหน่าย</p><div className={styles.faqLinks}><a href={PAPER_BOOK_URL} target="_blank" rel="noreferrer">หนังสือเล่ม ↗</a><a href={EBOOK_URL} target="_blank" rel="noreferrer">MEB E-book ↗</a></div></details>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <p>FUTURE-READY PARENTING</p>
        <h2>โลกเปลี่ยนเร็ว<br /><em>แต่พ่อแม่ไม่ต้องเริ่มคนเดียว</em></h2>
        <div><a className={styles.primaryButton} href="#book">เริ่มจากหนังสือ</a><a className={styles.secondaryButtonLight} href="#workshop">ดูคลาสที่กำลังพัฒนา</a></div>
      </section>

      <footer className={styles.footer} id="contact">
        <a className={styles.footerBrand} href={HOME_URL}>
          <Image src="/parent-ai/craft-code-official-logo.jpg" alt="Craft Code Robotic" width={2047} height={1083} sizes="150px" />
        </a>
        <div><strong>FUTURE-READY PARENTING</strong><p>เลี้ยงลูกให้คิดเป็น ในโลกที่มี AI</p></div>
        <div className={styles.footerLinks}><a href={HOME_URL}>เว็บไซต์หลัก ↗</a><a href={LINE_URL} target="_blank" rel="noreferrer">LINE @CRCWN ↗</a><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook ↗</a><a href="/parent-ai/privacy">ความเป็นส่วนตัว ↗</a><a href="#top">กลับด้านบน ↑</a></div>
        <small>© 2026 CRAFT CODE ROBOTIC · FUTURE-READY PARENTING</small>
      </footer>
    </main>
  );
}
