import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "ประกาศความเป็นส่วนตัว | Future-Ready Parenting",
  description: "ประกาศความเป็นส่วนตัวสำหรับแบบฟอร์ม Future-Ready Parenting โดย Craft Code Robotic",
  robots: { index: true, follow: true },
};

export default function ParentAiPrivacyPage() {
  return (
    <main className={styles.privacyPage}>
      <div className={styles.privacyShell}>
        <Link className={styles.privacyBack} href="/parent-ai">← กลับหน้า Future-Ready Parenting</Link>
        <p className={styles.privacyEyebrow}>PRIVACY NOTICE</p>
        <h1>ประกาศความเป็นส่วนตัว</h1>
        <p className={styles.privacyLead}>
          Craft Code Robotic &amp; AI Learning Center ให้ความสำคัญกับข้อมูลของผู้ปกครอง
          ประกาศนี้อธิบายการใช้ข้อมูลจากแบบฟอร์มรับข่าวสาร Parent AI Starter
        </p>

        <section>
          <h2>ข้อมูลที่เราเก็บ</h2>
          <p>อีเมลเป็นข้อมูลที่จำเป็น ส่วนช่วงอายุของบุตรหลานและหัวข้อที่สนใจเป็นข้อมูลโดยสมัครใจ เราไม่ขอชื่อเด็กหรือวันเกิดของเด็ก แบบฟอร์มอาจบันทึกแหล่งที่มาของการเข้าชม (UTM) เพื่อวัดผลการสื่อสาร</p>
        </section>
        <section>
          <h2>วัตถุประสงค์</h2>
          <p>ใช้เพื่อติดต่อแจ้งความคืบหน้า Workshop, สำรวจความสนใจเพื่อพัฒนาหลักสูตร และตอบคำถามที่เกี่ยวข้องกับ Future-Ready Parenting เท่านั้น</p>
        </section>
        <section>
          <h2>การจัดเก็บและผู้ให้บริการ</h2>
          <p>ข้อมูลแบบฟอร์มประมวลผลผ่าน Netlify Forms และเข้าถึงได้เฉพาะทีมงานที่เกี่ยวข้อง เราไม่ขายข้อมูลและไม่เผยแพร่ต่อสาธารณะ ข้อมูลช่วงพัฒนาหลักสูตรจะเก็บไม่เกิน 90 วัน เว้นแต่ได้รับความยินยอมใหม่หรือจำเป็นต้องเก็บตามกฎหมาย</p>
        </section>
        <section>
          <h2>สิทธิของคุณ</h2>
          <p>คุณสามารถขอแก้ไข ถอนความยินยอม หรือขอให้ลบข้อมูลได้ทุกเมื่อ โดยติดต่อ <a href="mailto:admin@craftcoderobotic.com">admin@craftcoderobotic.com</a> หรือ LINE <a href="https://line.me/R/ti/p/@CRCWN" target="_blank" rel="noreferrer">@CRCWN</a></p>
        </section>
        <section>
          <h2>วันที่มีผล</h2>
          <p>24 ตุลาคม 2569 หากมีการเปลี่ยนแปลงสาระสำคัญ เราจะปรับปรุงประกาศบนหน้านี้</p>
        </section>
      </div>
    </main>
  );
}
