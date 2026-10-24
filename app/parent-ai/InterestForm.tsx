"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import styles from "./page.module.css";

const interests = [
  "AI Literacy",
  "ทักษะการคิดและตั้งคำถาม",
  "ความปลอดภัยออนไลน์",
  "กิจกรรมทำร่วมกันที่บ้าน",
];

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function InterestForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const currentUrl = new URL(window.location.href);

    formData.set("page_path", currentUrl.pathname);
    formData.set("utm_source", currentUrl.searchParams.get("utm_source") ?? "");
    formData.set("utm_medium", currentUrl.searchParams.get("utm_medium") ?? "");
    formData.set("utm_campaign", currentUrl.searchParams.get("utm_campaign") ?? "");

    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className={styles.interestForm}
      name="parent-ai-workshop-interest"
      method="POST"
      action="/parent-ai?submitted=true"
      data-netlify="true"
      onSubmit={handleSubmit}
      aria-describedby="form-privacy-note"
    >
      <input type="hidden" name="form-name" value="parent-ai-workshop-interest" />
      <p className={styles.honeypot} aria-hidden="true">
        <label>ไม่ต้องกรอกช่องนี้ <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <div className={styles.formHead}>
        <span>WORKSHOP INTEREST • OPEN</span>
        <h3>รับข่าวสารเมื่อคลาสพร้อม</h3>
        <p id="form-privacy-note">
          ลงชื่อรับความคืบหน้าได้โดยยังไม่มีค่าใช้จ่าย และยังไม่ใช่การจองที่นั่ง
        </p>
      </div>

      <label className={styles.field}>
        <span>อีเมลสำหรับติดต่อ <b aria-hidden="true">*</b></span>
        <input type="email" name="email" autoComplete="email" placeholder="name@example.com" required />
      </label>

      <label className={styles.field}>
        <span>ช่วงอายุบุตรหลาน <small>(ไม่บังคับ)</small></span>
        <select name="child_age" defaultValue="">
          <option value="">เลือกช่วงอายุ</option>
          <option value="3-5">3–5 ปี</option>
          <option value="6-8">6–8 ปี</option>
          <option value="9-12">9–12 ปี</option>
          <option value="13-15">13–15 ปี</option>
          <option value="16+">16+ ปี</option>
          <option value="not-specified">ไม่ประสงค์ระบุ</option>
        </select>
      </label>

      <fieldset className={styles.interestChoices}>
        <legend>หัวข้อที่สนใจ <small>(เลือกได้มากกว่า 1 ข้อ)</small></legend>
        {interests.map((interest) => (
          <label key={interest}>
            <input type="checkbox" name="interest" value={interest} />
            <span>{interest}</span>
          </label>
        ))}
      </fieldset>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          ยินยอมให้ Craft Code Robotic ใช้ข้อมูลนี้เพื่อติดต่อเรื่อง Future-Ready Parenting
          ตาม <Link href="/parent-ai/privacy">ประกาศความเป็นส่วนตัว</Link>
        </span>
      </label>

      <button className={styles.previewSubmit} type="submit" disabled={status === "sending"}>
        {status === "sending" ? "กำลังส่งข้อมูล…" : "ลงชื่อรับข่าวสาร Workshop"}
        <span aria-hidden="true">↗</span>
      </button>

      {status === "success" && (
        <div className={styles.previewSuccess} role="status" aria-live="polite">
          <strong>✓ เราได้รับข้อมูลแล้ว</strong>
          <p>ขอบคุณที่สนใจ ทีม Craft Code จะส่งข่าวสารให้เมื่อรายละเอียด Workshop พร้อม</p>
          <button type="button" onClick={() => setStatus("idle")}>ปิดข้อความ</button>
        </div>
      )}

      {status === "error" && (
        <div className={styles.formError} role="alert">
          <strong>ยังส่งข้อมูลไม่สำเร็จ</strong>
          <p>กรุณาลองอีกครั้ง หรือติดต่อทีมงานทาง LINE @CRCWN</p>
          <button type="button" onClick={() => setStatus("idle")}>ลองอีกครั้ง</button>
        </div>
      )}

      <small className={styles.retentionNote}>
        ข้อมูลใช้เพื่อแจ้งข่าวสารโครงการนี้เท่านั้น และเก็บไม่เกิน 90 วันในช่วงพัฒนาหลักสูตร
      </small>
    </form>
  );
}
