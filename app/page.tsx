"use client";

import { cloneElement, isValidElement, useEffect, useState, type FormEvent, type ReactNode } from "react";

const LINE_URL = "https://line.me/R/ti/p/@CRCWN";
const FACEBOOK_URL = "https://www.facebook.com/craftcodethailand";

type Language = "th" | "en";

const EN_TRANSLATIONS: Record<string, string> = {
  "เมนูหลัก": "Main navigation",
  "Craft Code Robotic หน้าแรก": "Craft Code Robotic home",
  "รูปแบบเรียน": "Learning Plan",
  "ข่าว & ผลงาน": "News & Achievements",
  "เวลาเรียน": "Timetable",
  "ทีมครู": "Our Team",
  "ติดต่อกลับ": "Contact Us",
  "ทดลองเรียนฟรี": "Free Trial",
  "เปิดเมนู": "Open menu",
  "เมนู": "Menu",
  "ปลดล็อกศักยภาพ": "Unlock Potential",
  "สู่อนาคตแห่งนวัตกรรม": "For a Future of Innovation",
  "Coding · Robotics · Game Design · AI และการประยุกต์ใช้ในธุรกิจ ผ่านการลงมือทำจริง เพื่อพัฒนาความคิดเชิงตรรกะ ความคิดสร้างสรรค์ การแก้ปัญหา และความมั่นใจ": "Coding · Robotics · Game Design · AI and real-world business applications through hands-on projects that build logical thinking, creativity, problem-solving and confidence.",
  "สมัครทดลองเรียนฟรี ": "Book a Free Trial ",
  "ดู Roadmap ": "Explore the Roadmap ",
  "จุดเด่น Craft Code": "Craft Code highlights",
  "เส้นทางตามวัยและเป้าหมาย": "Paths for every age and goal",
  "Foundation ถึง Leadership": "Foundation to Leadership",
  "นักเรียน Craft Code ร่วมกิจกรรมหุ่นยนต์": "Craft Code students taking part in a robotics activity",
  "เรียนให้สนุก": "Learn with Joy",
  "เติบโตให้ไกล": "Grow with Purpose",
  "ทุกหลักสูตรออกแบบให้เด็กได้ ": "Every course is designed for students to ",
  "ลงมือสร้างผลงานของตัวเอง": "create work of their own",
  "จากพื้นฐานโค้ดดิ้งไปสู่เทคโนโลยีขั้นสูงและทักษะผู้นำ เราโค้ชให้น้องค้นพบความถนัด พร้อมต่อยอดเป็น Portfolio และเส้นทางอาชีพในอนาคต": "From coding foundations to advanced technology and leadership skills, our coaches help every learner discover their strengths and develop a portfolio for future study and careers.",
  "คิดเป็นลำดับและมองเห็นความสัมพันธ์ของระบบ": "Think step by step and understand how systems connect.",
  "ทดลอง แก้ไข และเรียนรู้จากสิ่งที่ยังไม่สำเร็จ": "Experiment, improve and learn from every attempt.",
  "เปลี่ยนไอเดียเป็นเกม หุ่นยนต์ และผลงานจริง": "Turn ideas into games, robots and real projects.",
  "มี AI Literacy, Portfolio และความมั่นใจในอนาคต": "Build AI literacy, a portfolio and confidence for the future.",
  "4 เส้นทาง": "4 Learning Tracks",
  "สู่ Future Innovator": "to Become a Future Innovator",
  "ผู้เรียนเริ่มจากจุดที่เหมาะกับวัยและประสบการณ์ แล้วเลือกต่อยอดตามความสนใจได้ทั้งสายสร้างสรรค์ เทคโนโลยีขั้นสูง และภาวะผู้นำ": "Learners begin at the right level for their age and experience, then progress through creative technology, advanced tech or future leadership.",
  "อายุ ": "Age ",
  "3–9 ปี": "3–9",
  "8–15 ปี": "8–15",
  "10–18 ปี": "10–18",
  "12+ ปี / ผู้ใหญ่": "12+ / Adults",
  "3–4 ปี": "3–4",
  "4–6 ปี": "4–6",
  "6–9 ปี": "6–9",
  "8–12 ปี": "8–12",
  "9+ ปี": "9+",
  "9–15 ปี": "9–15",
  "12+ ปี": "12+",
  "10–15 ปี": "10–15",
  "13+ ปี": "13+",
  "15+ / ผู้ใหญ่": "15+ / Adults",
  "หลักสูตร Icon Block Coding สำหรับเด็กเล็กของ Craft Code": "Craft Code Icon Block Coding course for young learners",
  "หลักสูตร Roblox Game Design ของ Craft Code": "Craft Code Roblox Game Design course",
  "นักเรียนลงมือเขียนโปรแกรมและควบคุมหุ่นยนต์": "Students programming and controlling a robot",
  "กิจกรรมเรียนรู้ AI และ Cybersecurity ของ Craft Code": "Craft Code AI and Cybersecurity learning activity",
  "สร้างรากฐานตรรกะและความมั่นใจผ่านการเล่น การเล่าเรื่อง และหุ่นยนต์": "Build logic and confidence through play, storytelling and robotics.",
  "เปลี่ยนความชอบเกม ภาพ และงานออกแบบ ให้กลายเป็นทักษะการสร้างดิจิทัล": "Turn a love of games and design into digital creation skills.",
  "ลงลึก Text-based Coding, อุปกรณ์เชื่อมต่อ และความรู้ดิจิทัลที่จำเป็น": "Go deeper into text-based coding, connected devices and essential digital knowledge.",
  "ใช้ AI เพื่อการทำงาน ธุรกิจ การนำเสนอ และการสร้างโอกาสของตัวเอง": "Use AI for work, business, presentations and creating new opportunities.",
  "ดู Curriculum Overview ↗": "View Curriculum Overview ↗",
  "ดูภาพรวมสถาบัน ↗": "View Institute Overview ↗",
  "ดูผลงานและกิจกรรมล่าสุดบน Facebook ↗": "See Latest Activities on Facebook ↗",
  "เทคโนโลยีที่ใช้ในหลักสูตร": "Technology used in our curriculum",
  "ออกแบบเส้นทางเรียน": "Design a Learning Path",
  "ให้พอดีกับชีวิตจริง": "That Fits Real Life",
  "ไม่จำเป็นต้องเริ่มเหมือนกันหรือเรียนด้วยจังหวะเดียวกัน ทีมครูช่วยจัดเส้นทางให้เหมาะกับเป้าหมาย เวลาว่าง ประสบการณ์ และงบประมาณของแต่ละครอบครัว": "Every learner can start differently and progress at their own pace. Our team helps shape a path around each family’s goals, schedule, experience and budget.",
  "ผู้เรียนและเป้าหมาย": "Learner & Goals",
  "อายุผู้เรียน": "Learner Age",
  "สิ่งที่สนใจ": "Interests",
  "เริ่มจากวัยและสิ่งที่ผู้เรียนอยากทำจริง": "Start with the learner’s age and what they genuinely want to create.",
  "เลือกช่วงเวลา": "Choose a Schedule",
  "เลือกรอบหลักที่สะดวกที่สุด ทีมงานจะเช็กที่นั่งให้อีกครั้ง": "Choose the most convenient session; our team will confirm availability.",
  "เลือกจังหวะ": "Choose a Pace",
  "เรียนเท่าที่พร้อม แล้วค่อยต่อยอดตามเป้าหมาย": "Start at a comfortable pace and progress toward the goal.",
  "วางแผนตามงบ": "Plan Around Your Budget",
  "เปรียบเทียบทางเลือกที่เหมาะสม โดยไม่ต้องแสดงราคาบนเว็บไซต์": "Compare suitable learning options with our team without publishing prices online.",
  "3–5 ปี": "Ages 3–5",
  "6–8 ปี": "Ages 6–8",
  "9–12 ปี": "Ages 9–12",
  "13–15 ปี": "Ages 13–15",
  "16+ / ผู้ใหญ่": "16+ / Adults",
  "สร้างเกม": "Game Creation",
  "หุ่นยนต์": "Robotics",
  "วันธรรมดา": "Weekdays",
  "เสาร์–อาทิตย์": "Weekends",
  "รอบเช้า": "Morning",
  "รอบเย็น": "Evening",
  "ทดลองก่อน": "Try a Trial First",
  "เริ่มพื้นฐาน": "Start with Foundations",
  "เรียนต่อเนื่อง": "Continuous Learning",
  "เร่งทำผลงาน": "Portfolio Sprint",
  "เริ่มทีละ Level": "One Level at a Time",
  "แพ็กหลาย Level": "Multi-level Plan",
  "ขอทีมช่วยเทียบแผน": "Ask Our Team to Compare",
  "เลือกข้อมูลด้านบน ระบบจะสร้างข้อความสรุปสำหรับส่งให้ทีม Craft Code": "Make your selections above and the system will prepare a summary for the Craft Code team.",
  "คัดลอกแล้ว · เปิด LINE อีกครั้ง": "Copied · Open LINE Again",
  "คัดลอกผล + เปิด LINE": "Copy Results + Open LINE",
  "เลือกอีก ": "Choose ",
  " หัวข้อ": " more items",
  "เลือกอายุและเป้าหมาย เพื่อดูคอร์สแนะนำเบื้องต้น": "Select an age and goal to see an initial course recommendation.",
  "แนะนำเริ่มจาก Early Coding Explorer หรือ Icon Block Coding": "Recommended: Early Coding Explorer or Icon Block Coding.",
  "แนะนำ Icon Block Coding หรือ Scratch Coding with Robotics": "Recommended: Icon Block Coding or Scratch Coding with Robotics.",
  "แนะนำ Scratch Coding Foundation": "Recommended: Scratch Coding Foundation.",
  "แนะนำ Scratch Game Design หรือ Roblox Game Design": "Recommended: Scratch Game Design or Roblox Game Design.",
  "แนะนำ Scratch Coding with Robotics หรือ Python Coding": "Recommended: Scratch Coding with Robotics or Python Coding.",
  "แนะนำ Creative AI และพื้นฐาน AI & Cybersecurity": "Recommended: Creative AI and AI & Cybersecurity foundations.",
  "แนะนำ Roblox, Python หรือ 3D Design เพื่อสร้าง Portfolio": "Recommended: Roblox, Python or 3D Design for portfolio development.",
  "แนะนำ Roblox Game Design หรือ AI-Assisted Coding": "Recommended: Roblox Game Design or AI-Assisted Coding.",
  "แนะนำ Python Coding, Robotics & IoT": "Recommended: Python Coding, Robotics & IoT.",
  "แนะนำ AI & Cybersecurity หรือ AI-Assisted Coding": "Recommended: AI & Cybersecurity or AI-Assisted Coding.",
  "แนะนำ Advanced Tech Track พร้อมวางแผน Portfolio": "Recommended: Advanced Tech Track with a portfolio plan.",
  "แนะนำ AI for Business และ AI Productivity & Workflow": "Recommended: AI for Business and AI Productivity & Workflow.",
  "แนะนำ Future Leadership Track โดยปรับตามเป้าหมายการใช้งาน": "Recommended: a Future Leadership Track tailored to your goals.",
  "ไม่ได้เรียนแค่ Tool": "More Than Learning Tools",
  "แต่เรียนวิธีคิดแบบ Creator": "Learning to Think Like a Creator",
  "เทคโนโลยีเปลี่ยนได้ทุกปี เราจึงเน้นพื้นฐานที่ใช้ได้ตลอดชีวิต พร้อมเปิดพื้นที่ให้ทดลองเครื่องมือและเทคโนโลยีปัจจุบันผ่านโปรเจกต์จริง": "Technology changes every year, so we teach lifelong foundations while giving learners room to explore today’s tools through real projects.",
  "นักเรียน Craft Code ลงมือสร้างและทดสอบหุ่นยนต์": "Craft Code students building and testing a robot",
  "เข้าใจกลไก มอเตอร์ เซ็นเซอร์ Microcontroller และ IoT ผ่านการสร้าง ทดสอบ และแก้ปัญหาจริง": "Understand mechanisms, motors, sensors, microcontrollers and IoT through building, testing and real problem-solving.",
  "ดูเส้นทาง Robotics ": "Explore Robotics ",
  "บรรยากาศการเรียน Roblox และ Creative Computing ของ Craft Code": "A Craft Code Roblox and Creative Computing class",
  "เปลี่ยนความสนใจในเกมให้เป็นทักษะการคิด ออกแบบ และเขียนโปรแกรมด้วย Scratch, Python และ Roblox Studio": "Transform an interest in games into thinking, design and programming skills with Scratch, Python and Roblox Studio.",
  "ดูเส้นทาง Creative Tech ": "Explore Creative Tech ",
  "นักเรียน Craft Code ออกแบบโมเดลสามมิติและผลงานดิจิทัล": "Craft Code students creating 3D models and digital projects",
  "ต่อยอดจาก 3D Design ไปสู่ Generative AI, Prompting, Digital Workflow และความปลอดภัยทางไซเบอร์": "Progress from 3D Design to Generative AI, prompting, digital workflows and cybersecurity.",
  "ดูเส้นทาง Digital Future ": "Explore Digital Future ",
  "ภาพการจัดการเรียนรู้นอกสถานที่ของ Craft Code": "Craft Code off-site learning program",
  "บรรยากาศการเรียน Coding แบบกลุ่มกับทีม Craft Code": "Group coding class with the Craft Code team",
  "นักเรียนร่วมกิจกรรม Coding และ Robotics กับทีม Craft Code": "Students in a Coding and Robotics activity with Craft Code",
  "ยกห้องเรียนแห่งอนาคต": "Bring the Classroom of the Future",
  "ไปถึงโรงเรียน": "Directly to Your School",
  "Craft Code Robotic ร่วมจัดการเรียนการสอนให้กับ ": "Craft Code Robotic delivers learning programs with ",
  "โรงเรียนนานาชาติอันวิดา (Anvida)": "Anvida International School",
  " พร้อมออกแบบกิจกรรม Coding และ Robotics ให้เหมาะกับช่วงวัย ตารางเรียน และเป้าหมายของโรงเรียน": ", designing Coding and Robotics activities around student age groups, timetables and school goals.",
  "ครูและอุปกรณ์พร้อมสอน": "Teachers & Equipment Included",
  "จัดทีมและชุดการเรียนรู้ไปยังโรงเรียน": "We bring the team and learning kits to school.",
  "ออกแบบตามระดับชั้น": "Designed for Each Grade",
  "ปรับเนื้อหาให้สอดคล้องกับผู้เรียน": "Content is adapted to each learner group.",
  "เรียนรู้ผ่านการลงมือสร้างผลงานจริง": "Learn by creating real projects.",
  "ปรึกษา School Program กับทีม Craft Code ": "Discuss a School Program with Craft Code ",
  "เรียนเป็นรอบ": "Scheduled Class Sessions",
  "จองเวลาก่อนเข้าเรียน": "Reserve Before Attending",
  "สำคัญ": "Important",
  "เวลาเปิดสถาบันไม่ใช่เวลาเริ่มคลาส ผู้เรียนต้องเลือกรอบและยืนยันที่นั่งกับทีมงานก่อน": "Opening hours are not class start times. Learners must select a session and confirm availability with our team.",
  "รอบเรียนมาตรฐานของ Craft Code Robotic": "Standard Craft Code Robotic class sessions",
  "วันเรียน": "Day",
  "รอบบ่าย": "Afternoon",
  "จันทร์–ศุกร์": "Monday–Friday",
  "หรือ 13:30–15:30": "or 13:30–15:30",
  "วันเสาร์": "Saturday",
  "วันอาทิตย์": "Sunday",
  "เวลาเปิดทำการ": "Opening Hours",
  "จ.–ศ. 09:00–18:30 · ส.–อา. 10:00–18:00": "Mon–Fri 09:00–18:30 · Sat–Sun 10:00–18:00",
  "ระยะเวลาเรียนจริงขึ้นอยู่กับหลักสูตร บางคลาสใช้เวลา 1–1.5 ชั่วโมง และบางคลาส 2 ชั่วโมง ตารางวิชาและที่นั่งในแต่ละรอบอาจเปลี่ยนแปลง": "Class duration depends on the course: some sessions run 1–1.5 hours and others 2 hours. Subjects and availability may vary by session.",
  "แจ้งวิชาและจองรอบเรียน ": "Choose a Subject & Reserve ",
  "ตารางเวลาเรียน Craft Code เดือนพฤษภาคม 2026": "Craft Code timetable for May 2026",
  "เปิดตารางฉบับเต็ม ↗": "Open Full Timetable ↗",
  "ห้องเรียนที่ออกแบบ": "A Learning Space Designed",
  "ให้ไอเดียทะยานได้": "For Ideas to Take Flight",
  "พื้นที่ปลอดภัย สนุก และเต็มไปด้วยอุปกรณ์ที่ชวนให้น้องอยากลอง ครูดูแลใกล้ชิดแบบโค้ช ให้คำแนะนำโดยไม่แย่งความภูมิใจในการค้นพบ": "A safe, engaging and well-equipped space where learners want to experiment. Coaches guide closely while preserving the pride of discovery.",
  "ครู Craft Code ดูแลนักเรียนในคลาส Coding": "A Craft Code coach supporting students in a coding class",
  "ห้องเรียน Cassiope ของ Craft Code": "Craft Code Cassiope classroom",
  "ห้องเรียน Stella ของ Craft Code": "Craft Code Stella classroom",
  "เรื่องสำคัญ": "News and Milestones",
  "ที่เราอยากแบ่งปัน": "Worth Sharing",
  "มาตรฐานของสถาบันและประสบการณ์บนเวทีจริง คืออีกส่วนหนึ่งของการเรียนรู้ที่ผู้ปกครองควรได้เห็น": "Our institutional standards and real competition experiences are important parts of the learning journey we want parents to see.",
  "Craft Code Robotic เข้ารับประกาศนียบัตร DBD Franchise Standard 2026": "Craft Code Robotic receiving the DBD Franchise Standard 2026 certificate",
  "ก้าวสำคัญของ Craft Code Robotic": "A Major Milestone for Craft Code Robotic",
  "เข้ารับประกาศนียบัตรจากกรมพัฒนาธุรกิจการค้า ในโครงการ DBD Franchise Standard 2026 สะท้อนความตั้งใจในการพัฒนาระบบการเรียนรู้และการดำเนินงานอย่างมีมาตรฐาน": "Recognized by Thailand’s Department of Business Development under the DBD Franchise Standard 2026, reflecting our commitment to quality learning systems and operations.",
  "นักเรียน Craft Code รับรางวัล Challenge Solution Award": "Craft Code students receiving the Challenge Solution Award",
  "จากห้องเรียน สู่เวทีจริง": "From the Classroom to the Competition Floor",
  "Challenge Solution Award · FIRST LEGO League Thailand พร้อมประสบการณ์แก้โจทย์ ทำงานเป็นทีม และนำเสนอผลงานจริง": "Challenge Solution Award · FIRST LEGO League Thailand, with real experience in problem-solving, teamwork and presenting ideas.",
  "เลือกดูเวทีการแข่งขัน": "Choose a competition",
  "กดชื่อการแข่งขันด้านบนเพื่อเปลี่ยนเรื่องราวและภาพ": "Select a competition above to change the story and image.",
  "SUBMERGED · 15–16 กุมภาพันธ์ 2568 · เซ็นทรัล พระราม 2": "SUBMERGED · 15–16 February 2025 · Central Rama 2",
  "22 สิงหาคม 2568 · ศูนย์การค้าเซียร์ รังสิต": "22 August 2025 · Zeer Rangsit",
  "28 เมษายน 2568 · ศูนย์การค้าเซียร์ รังสิต": "28 April 2025 · Zeer Rangsit",
  "26 ตุลาคม และ 1 พฤศจิกายน 2568 · เมืองเถาหยวน ประเทศไต้หวัน": "26 October & 1 November 2025 · Taoyuan, Taiwan",
  "น้อง ๆ ร่วมแก้โจทย์ฤดูกาล SUBMERGED ผ่านการออกแบบและควบคุมหุ่นยนต์ การแบ่งหน้าที่ในทีม และการนำเสนอแนวคิดต่อกรรมการในสนามจริง": "Students tackled the SUBMERGED season challenge through robot design and control, team roles and live presentations to judges.",
  "สนามแข่งขันที่เปลี่ยนทักษะ Coding และ Robotics ให้เป็นโจทย์เชิงวิศวกรรม เด็ก ๆ ได้วางแผนร่วมกัน ทดสอบหุ่นยนต์ และแก้สถานการณ์ภายใต้เวลาที่กำหนด": "A competition that turns Coding and Robotics skills into engineering challenges, where students plan, test and solve problems under time constraints.",
  "ประสบการณ์แข่งขันหุ่นยนต์ที่เปิดพื้นที่ให้น้อง ๆ ใช้ทักษะเฉพาะทาง ทำงานร่วมกับเพื่อน และเรียนรู้จากทีมอื่น พร้อมต่อยอดความมั่นใจจากผลงานและรางวัลบนเวทีจริง": "A robotics competition where students apply specialist skills, collaborate and learn from other teams while building confidence through real achievements.",
  "เส้นทางต่อยอดจากประเทศไทยสู่การแข่งขันระดับนานาชาติ เด็ก ๆ ได้พบคู่แข่งต่างวัฒนธรรม ลงสนามด้วยผลงานของตนเอง และเก็บเกี่ยวทั้งรางวัล ประสบการณ์ และความภาคภูมิใจกลับมา": "A journey from Thailand to international competition, where students met teams from other cultures, competed with their own work and returned with awards, experience and pride.",
  "ทีมครูที่เชี่ยวชาญ": "Expert Teachers",
  "และเข้าใจผู้เรียน": "Who Understand Learners",
  "“เราไม่ได้แค่สอน Class แต่คอย Feed Forward และดูแลน้อง ๆ เหมือนเป็นลูกของเราเอง”": "“We do more than teach a class. We feed forward, coach closely and care for every learner as one of our own.”",
  "ดูโปสเตอร์ทีมครูฉบับเต็ม ↗": "View Full Academic Staff Poster ↗",
  "ร่วมสร้างอนาคต": "Build the Future",
  "ไปด้วยกัน": "Together",
  "ไม่ว่าจะอยากถ่ายทอดความรู้ให้เด็กรุ่นใหม่ หรือกำลังมองหาธุรกิจการศึกษาที่มีความหมาย เริ่มพูดคุยกับทีม Craft Code ได้จากที่นี่": "Whether you want to inspire the next generation or build a meaningful education business, start a conversation with Craft Code here.",
  "เติบโตไปกับทีมครู": "Grow with the Craft Code",
  "เปิดรับโปรไฟล์ของผู้ที่รักการสอน สนใจ Coding, Robotics และเทคโนโลยี พร้อมเรียนรู้การดูแลผู้เรียนแบบโค้ช": "We welcome profiles from people who love teaching, enjoy Coding, Robotics and technology, and want to coach learners with care.",
  "ตำแหน่งและช่วงเวลารับสมัครขึ้นอยู่กับความต้องการของทีมในแต่ละช่วง": "Roles and recruitment periods depend on current team needs.",
  "ฝากโปรไฟล์กับทีมงาน ": "Send Your Profile ",
  "สร้างสถาบันแห่งอนาคต": "Build a Future-ready Institute",
  "ในพื้นที่ของคุณ": "in Your Community",
  "สำหรับผู้สนใจธุรกิจการศึกษาและต้องการพูดคุยเรื่องพื้นที่ รูปแบบการลงทุน และระบบสถาบัน Craft Code Robotic": "For education entrepreneurs who want to discuss territory, investment models and the Craft Code Robotic institute system.",
  "พื้นที่ศักยภาพ": "Potential Location",
  "รูปแบบลงทุน": "Investment Model",
  "ระบบสถาบัน": "Institute System",
  "เริ่มจากการแนะนำตัวและพื้นที่ที่สนใจ ทีมงานจะติดต่อกลับเพื่อให้ข้อมูลเพิ่มเติม": "Introduce yourself and your preferred area; our team will follow up with more information.",
  "สอบถาม Franchise Partnership ": "Discuss Franchise Partnership ",
  "ก่อนเริ่ม": "Before the First",
  "ภารกิจแรก": "Mission",
  "รวมคำถามที่ผู้ปกครองใช้ตัดสินใจบ่อยที่สุด หากยังไม่แน่ใจ ใช้ Mission Configurator ด้านบนหรือส่งอายุและความสนใจมาให้ทีมช่วยวางแผนได้เลย": "Answers to the questions parents ask most often. If you are unsure, use the Mission Configurator above or send us the learner’s age and interests.",
  "ถามทีม Craft Code ทาง LINE ": "Ask Craft Code on LINE ",
  "เริ่มต้น": "Getting Started",
  "เลือกคอร์ส": "Choosing a Course",
  "ทดลองเรียน": "Trial Class",
  "แผนการเรียน": "Learning Plan",
  "การแข่งขัน": "Competitions",
  "ผลงาน": "Projects",
  "ผู้ใหญ่": "Adults",
  "โรงเรียน": "Schools",
  "ฝากข้อมูลไว้": "Leave Your Details",
  "ให้เราติดต่อกลับ": "and Let Us Contact You",
  "กรอกข้อมูลสั้น ๆ เพื่อให้ทีมเตรียมคำแนะนำที่ตรงกับวัย ความสนใจ และเวลาของผู้เรียนก่อนติดต่อกลับ": "Share a few details so our team can prepare advice suited to the learner’s age, interests and schedule before contacting you.",
  "ส่งข้อมูล": "Submit Details",
  "ใช้เวลาประมาณ 1 นาที": "Takes about one minute",
  "ทีมตรวจความต้องการ": "We Review Your Needs",
  "เลือกคอร์สและรอบที่เหมาะสม": "We identify suitable courses and sessions",
  "ผ่านโทรศัพท์ LINE หรืออีเมลที่ให้ไว้": "By phone, LINE or email",
  "ข้อมูลไปที่ไหน?": "Where does the information go?",
  "ข้อมูลจะถูกเก็บในระบบ Forms ของ Netlify และตั้งแจ้งเตือนไปยัง ": "The information is stored securely in Netlify Forms and can notify ",
  " หลังเปิดใช้งานบนเว็บไซต์จริง": " after the live website is activated.",
  "กรุณาเว้นช่องนี้ว่าง ": "Please leave this field blank ",
  "ข้อมูลสำหรับติดต่อกลับ": "Callback Information",
  "* จำเป็นต้องกรอก": "* Required fields",
  "ชื่อผู้ปกครอง *": "Parent / Guardian Name *",
  "ชื่อ–นามสกุล": "Full name",
  "เบอร์โทรศัพท์ *": "Phone Number *",
  "อีเมล": "Email",
  "สำหรับรับข้อมูลเพิ่มเติม": "For additional information",
  "ถ้าต้องการให้ติดต่อทาง LINE": "If you prefer to be contacted on LINE",
  "อายุผู้เรียน *": "Learner Age *",
  "เลือกช่วงอายุ": "Select an age range",
  "สิ่งที่สนใจ *": "Interests *",
  "เลือกความสนใจ": "Select an interest",
  "Coding พื้นฐาน": "Coding Foundations",
  "Franchise / ร่วมงานกับเรา": "Franchise / Careers",
  "ช่วงเวลาที่สะดวก *": "Preferred Time *",
  "เลือกช่วงเวลาหลัก": "Select a preferred time",
  "วันธรรมดา · รอบเช้า": "Weekday · Morning",
  "วันธรรมดา · รอบบ่าย": "Weekday · Afternoon",
  "วันธรรมดา · รอบเย็น": "Weekday · Evening",
  "เสาร์–อาทิตย์ · รอบเช้า": "Weekend · Morning",
  "เสาร์–อาทิตย์ · รอบบ่าย": "Weekend · Afternoon",
  "ยังไม่แน่ใจ ขอให้ทีมแนะนำ": "Not sure — please advise",
  "รายละเอียดเพิ่มเติม": "Additional Details",
  "เช่น มีพื้นฐานมาก่อน สนใจทดลองเรียน หรือมีวันที่สะดวกเป็นพิเศษ": "For example: previous experience, trial class interest or preferred dates",
  "ยินยอมให้ Craft Code Robotic ใช้ข้อมูลนี้เพื่อติดต่อกลับและแนะนำหลักสูตร โดยจะไม่นำไปเผยแพร่ต่อสาธารณะ *": "I consent to Craft Code Robotic using this information to contact me and recommend courses. It will not be made public. *",
  "กำลังส่งข้อมูล...": "Sending...",
  "ส่งข้อมูลให้ทีม Craft Code": "Send to Craft Code",
  "ยังส่งข้อมูลไม่ได้ในขณะนี้ หากกำลังดูหน้า Preview กรุณาทดลองอีกครั้งหลัง Deploy บน Netlify หรือทัก LINE @CRCWN": "We could not send your information yet. If you are viewing the preview, please try again after the Netlify deployment or contact LINE @CRCWN.",
  "ปิดข้อความ": "Close message",
  "เราได้รับข้อมูลแล้ว": "We Have Received Your Information",
  "ขอบคุณที่สนใจ Craft Code Robotic ทีมงานจะตรวจข้อมูลและติดต่อกลับผ่านช่องทางที่คุณระบุไว้": "Thank you for your interest in Craft Code Robotic. Our team will review your information and contact you through your preferred channel.",
  "รับทราบ": "Done",
  "เริ่มต้นจากคลาสที่ใช่": "Start with the Right Class",
  "แล้วให้ความสามารถพาเขาไปไกล": "and Let Their Potential Take Them Further",
  "แจ้งอายุ ความสนใจ และวันที่สะดวก ทีม Craft Code จะช่วยเลือกเส้นทางและรอบทดลองเรียนที่เหมาะที่สุด": "Tell us the learner’s age, interests and preferred date. Craft Code will recommend the most suitable path and trial session.",
  "LINE @CRCWN · ทดลองเรียนฟรี ": "LINE @CRCWN · Free Trial ",
  "ชั้น 7 เซ็นทรัลแจ้งวัฒนะ ปากเกร็ด นนทบุรี 11120": "7th Floor, Central Chaengwattana, Pak Kret, Nonthaburi 11120",
  "ร่วมงานและ Franchise Partnership ↗": "Careers & Franchise Partnership ↗",
  "กลับขึ้นด้านบน ↑": "Back to Top ↑",
  "เลือกภาษา": "Choose language",
  "เดชชาติ เจิมประไพ": "Dechachart Jermprapai",
  "อาทิชา เจิมประไพ": "Aticha Jermprapai",
  "เอกรัฐ รงค์รัตน์": "Akkarat Rongrat",
  "ศราวุฒิ มณีสุวรรณ": "Sarawut Maneesuwan",
  "วณิชยา ปากโมกข์": "Wanichaya Pakmok",
  "ธัญญาเรศ หมั่นมา": "Thanyaret Manma",
  "วรัญญา อ่อนทอง": "Waranya Onthong",
  "ณัฐพันธ์ โชคดี": "Nattaphan Chokdee",
  "นักเรียน Craft Code ร่วมการแข่งขัน FIRST LEGO League Thailand ฤดูกาล SUBMERGED ที่เซ็นทรัล พระราม 2": "Craft Code students competing in FIRST LEGO League Thailand SUBMERGED at Central Rama 2",
  "นักเรียน Craft Code วางแผนและทดสอบหุ่นยนต์ในการแข่งขัน World Robot Olympiad 2025": "Craft Code students planning and testing their robot at World Robot Olympiad 2025",
  "ทีมนักเรียนและครู Craft Code ในการแข่งขัน International Robotic Showcase Association 2025": "Craft Code students and coaches at the International Robotic Showcase Association 2025",
  "นักเรียน Craft Code แข่งขันและรับรางวัลใน Taiwan International Robotics Tournament 2025 ที่เมืองเถาหยวน": "Craft Code students competing and receiving awards at Taiwan International Robotics Tournament 2025 in Taoyuan",
  "ทีม Academic Staff ของ Craft Code อัปเดตเดือนกุมภาพันธ์ 2026": "Craft Code Academic Staff, updated February 2026",
  "ครู Craft Code ดูแลนักเรียนในห้องเรียน Coding": "Craft Code teacher supporting students in a coding classroom",
  "Craft Code Robotic รับประกาศนียบัตร DBD Franchise Standard 2026": "Craft Code Robotic receiving the DBD Franchise Standard 2026 certificate",
  "สรุปความสนใจสำหรับทีม Craft Code Robotic": "Learning Interest Summary for Craft Code Robotic",
  "เป้าหมายที่สนใจ": "Learning Goal",
  "เวลาที่สะดวก": "Preferred Schedule",
  "รูปแบบการเริ่มเรียน": "Preferred Starting Pace",
  "คำแนะนำเบื้องต้น": "Initial Recommendation",
  "รบกวนทีมช่วยแนะนำคอร์ส รอบทดลองเรียน และแผนที่เหมาะสมเพิ่มเติมด้วยค่ะ/ครับ": "Please help recommend a suitable course, trial session and learning plan.",
  "เริ่มเรียนได้ตั้งแต่อายุเท่าไร?": "At what age can my child start?",
  "เริ่มได้ตั้งแต่อายุประมาณ 3 ปีใน Early Coding Explorer หรือเริ่ม Icon Block Coding ช่วง 4–6 ปี ทีมงานจะช่วยประเมินจุดเริ่มต้นที่เหมาะกับวัยและความพร้อมของน้อง": "Learners can begin at around age 3 with Early Coding Explorer, or Icon Block Coding at ages 4–6. Our team will help identify the right starting point for each child’s age and readiness.",
  "ต้องมีพื้นฐาน Coding มาก่อนไหม?": "Is previous coding experience required?",
  "ไม่จำเป็น หลักสูตรมีตั้งแต่ Foundation ถึง Advanced และออกแบบให้ต่อยอดเป็นลำดับตามประสบการณ์จริงของผู้เรียน": "No. Our curriculum ranges from Foundation to Advanced and is structured so learners can progress from their actual level of experience.",
  "ยังไม่รู้ว่าควรเริ่มคอร์สไหน ทำอย่างไร?": "What if I am unsure which course to choose?",
  "แจ้งอายุ ประสบการณ์ และสิ่งที่สนใจ เช่น เกม หุ่นยนต์ AI หรือการทำ Portfolio ทีมงานจะช่วยแนะนำจุดเริ่มต้น หรือทดลองใช้ Personal Mission Map บนเว็บไซต์ก่อนได้": "Tell us the learner’s age, experience and interests—such as games, robotics, AI or portfolio development. Our team can suggest a starting point, or you can use the Personal Mission Map above.",
  "หนึ่งคลาสเรียนกี่ชั่วโมง และมาเวลาไหนได้บ้าง?": "How long is each class and when can students attend?",
  "ขึ้นอยู่กับหลักสูตร โดยทั่วไปใช้เวลา 1–1.5 ชั่วโมงหรือ 2 ชั่วโมง ผู้เรียนต้องเลือกรอบเช้า บ่าย หรือเย็น และยืนยันที่นั่งก่อน ไม่ใช่ Walk-in เริ่มเรียนได้ตลอดเวลา": "It depends on the course. Sessions generally last 1–1.5 or 2 hours. Learners choose a morning, afternoon or evening session and confirm availability in advance; classes are not open walk-in sessions.",
  "ทดลองเรียนก่อนสมัครได้ไหม?": "Can my child try a class before enrolling?",
  "ได้ ทัก LINE @CRCWN พร้อมแจ้งอายุ ความสนใจ และวันที่สะดวก ทีมงานจะช่วยแนะนำคลาสทดลองและตรวจรอบที่ยังมีที่นั่ง": "Yes. Message LINE @CRCWN with the learner’s age, interests and preferred date. Our team will recommend a trial class and check available sessions.",
  "สามารถเลือกเรียนตามงบประมาณได้อย่างไร?": "Can we choose a learning plan that fits our budget?",
  "สามารถเริ่มทีละ Level หรือวางแผนเรียนต่อเนื่องหลาย Level ได้ ทีมงานจะช่วยเปรียบเทียบทางเลือกให้เหมาะกับเป้าหมาย เวลา และงบของแต่ละครอบครัว โดยสอบถามรายละเอียดล่าสุดผ่าน LINE": "You may begin one level at a time or plan several levels ahead. Our team can compare options around your family’s goals, schedule and budget; contact us on LINE for current details.",
  "เด็กทุกคนต้องลงแข่งขันหรือไม่?": "Does every learner have to compete?",
  "ไม่บังคับ การแข่งขันเป็นโอกาสต่อยอดสำหรับผู้เรียนที่สนใจ การเข้าร่วมขึ้นอยู่กับความพร้อม กติกา การคัดเลือก และรูปแบบของแต่ละรายการ ทีมครูจะแนะนำเส้นทางเตรียมตัวที่เหมาะสม": "No. Competitions are optional opportunities for interested learners. Participation depends on readiness, rules, selection and each event format; our coaches will recommend an appropriate preparation path.",
  "เรียนแล้วจะมีผลงานหรือ Portfolio ไหม?": "Will learners create projects or a portfolio?",
  "ผู้เรียนจะสร้างโปรเจกต์ตามหลักสูตร เช่น เกม โปรแกรม หุ่นยนต์ หรือโมเดล 3D และสามารถคัดเลือกผลงานมาต่อยอดเป็น Portfolio ได้ ทีมครูช่วยแนะนำรูปแบบผลงานให้เหมาะกับเป้าหมาย": "Learners create course projects such as games, programs, robots and 3D models. Selected work can be developed into a portfolio with guidance from our coaches.",
  "มีคอร์สสำหรับวัยรุ่นโตและผู้ใหญ่ไหม?": "Are there courses for older teens and adults?",
  "มี เส้นทาง Future Leadership ครอบคลุม AI for Business, AI Productivity & Workflow, Presentation และทักษะผู้ประกอบการ เหมาะสำหรับผู้เรียนอายุประมาณ 15 ปีขึ้นไปและผู้ใหญ่": "Yes. The Future Leadership track covers AI for Business, AI Productivity & Workflow, presentation and entrepreneurial skills for learners around age 15+ and adults.",
  "Craft Code สามารถไปสอนที่โรงเรียนได้ไหม?": "Can Craft Code deliver programs at our school?",
  "ได้ เรามี School Partnership Program และมีประสบการณ์จัดการเรียนการสอนร่วมกับโรงเรียนนานาชาติอันวิดา โรงเรียนสามารถติดต่อเพื่อออกแบบเนื้อหา ตาราง และรูปแบบกิจกรรมให้เหมาะกับระดับชั้น": "Yes. Our School Partnership Program includes experience delivering classes with Anvida International School. Schools can contact us to design content, schedules and activities for specific grade levels.",
  "ยินยอม": "Consent",
};

const TRANSLATION_ENTRIES = Object.entries(EN_TRANSLATIONS).sort(([a], [b]) => b.length - a.length);

function translateText(text: string) {
  if (EN_TRANSLATIONS[text]) return EN_TRANSLATIONS[text];
  return TRANSLATION_ENTRIES.reduce((result, [thai, english]) => result.replaceAll(thai, english), text);
}

function localizeNode(node: ReactNode, language: Language): ReactNode {
  if (language === "th") return node;
  if (typeof node === "string") return translateText(node);
  if (Array.isArray(node)) return node.map((child) => localizeNode(child, language));
  if (!isValidElement<{ children?: ReactNode; alt?: string; placeholder?: string; title?: string; "aria-label"?: string }>(node)) return node;

  const translatedProps = { ...node.props };
  (["alt", "placeholder", "title", "aria-label"] as const).forEach((key) => {
    const value = node.props[key];
    if (typeof value === "string") translatedProps[key] = translateText(value);
  });
  return cloneElement(node, translatedProps, localizeNode(node.props.children, language));
}

const tracks = [
  {
    number: "01", title: "FOUNDATION", age: "3–9 ปี", tone: "gold",
    image: "/images/courses/foundation-icon-block.jpg",
    imageAlt: "หลักสูตร Icon Block Coding สำหรับเด็กเล็กของ Craft Code",
    visualLabel: "PLAY · BUILD · CODE",
    intro: "สร้างรากฐานตรรกะและความมั่นใจผ่านการเล่น การเล่าเรื่อง และหุ่นยนต์",
    courses: [
      ["Early Coding Explorer", "3–4 ปี", "2 Levels"],
      ["Icon Block Coding", "4–6 ปี", "10 Levels"],
      ["Scratch Coding Foundation", "6–9 ปี", "10 Levels"],
    ],
  },
  {
    number: "02", title: "CREATIVE TECH", age: "8–15 ปี", tone: "cyan",
    image: "/images/courses/creative-tech-roblox.jpg",
    imageAlt: "หลักสูตร Roblox Game Design ของ Craft Code",
    visualLabel: "DESIGN · CREATE · PLAY",
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
    image: "/images/courses/advanced-robotics.jpg",
    imageAlt: "นักเรียนลงมือเขียนโปรแกรมและควบคุมหุ่นยนต์",
    visualLabel: "CODE · CONNECT · INVENT",
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
    image: "/images/courses/future-ai-cybersecurity.jpg",
    imageAlt: "กิจกรรมเรียนรู้ AI และ Cybersecurity ของ Craft Code",
    visualLabel: "AI · BUSINESS · LEADERSHIP",
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

const competitions = [
  {
    id: "fll",
    tab: "FIRST LEGO LEAGUE",
    eyebrow: "TEAMWORK · ROBOT DESIGN · PRESENTATION",
    title: "FIRST LEGO League Thailand 2024/25",
    result: "SUBMERGED · 15–16 กุมภาพันธ์ 2568 · เซ็นทรัล พระราม 2",
    description: "น้อง ๆ ร่วมแก้โจทย์ฤดูกาล SUBMERGED ผ่านการออกแบบและควบคุมหุ่นยนต์ การแบ่งหน้าที่ในทีม และการนำเสนอแนวคิดต่อกรรมการในสนามจริง",
    image: "/images/competitions/fll-submerged-2025.jpg",
    imageAlt: "นักเรียน Craft Code ร่วมการแข่งขัน FIRST LEGO League Thailand ฤดูกาล SUBMERGED ที่เซ็นทรัล พระราม 2",
    position: "center",
  },
  {
    id: "wro",
    tab: "WRO",
    eyebrow: "ROBOTICS · ENGINEERING · TEAMWORK",
    title: "World Robot Olympiad 2025",
    result: "22 สิงหาคม 2568 · ศูนย์การค้าเซียร์ รังสิต",
    description: "สนามแข่งขันที่เปลี่ยนทักษะ Coding และ Robotics ให้เป็นโจทย์เชิงวิศวกรรม เด็ก ๆ ได้วางแผนร่วมกัน ทดสอบหุ่นยนต์ และแก้สถานการณ์ภายใต้เวลาที่กำหนด",
    image: "/images/competitions/wro-2025.jpg",
    imageAlt: "นักเรียน Craft Code วางแผนและทดสอบหุ่นยนต์ในการแข่งขัน World Robot Olympiad 2025",
    position: "center",
  },
  {
    id: "irsa",
    tab: "IRSA",
    eyebrow: "COMPETITION · COMMUNITY · ACHIEVEMENT",
    title: "International Robotic Showcase Association 2025",
    result: "28 เมษายน 2568 · ศูนย์การค้าเซียร์ รังสิต",
    description: "ประสบการณ์แข่งขันหุ่นยนต์ที่เปิดพื้นที่ให้น้อง ๆ ใช้ทักษะเฉพาะทาง ทำงานร่วมกับเพื่อน และเรียนรู้จากทีมอื่น พร้อมต่อยอดความมั่นใจจากผลงานและรางวัลบนเวทีจริง",
    image: "/images/competitions/irsa-2025.jpg",
    imageAlt: "ทีมนักเรียนและครู Craft Code ในการแข่งขัน International Robotic Showcase Association 2025",
    position: "center",
  },
  {
    id: "tirt",
    tab: "TIRT TAIWAN",
    eyebrow: "INTERNATIONAL MISSION · TAOYUAN",
    title: "Taiwan International Robotics Tournament 2025",
    result: "26 ตุลาคม และ 1 พฤศจิกายน 2568 · เมืองเถาหยวน ประเทศไต้หวัน",
    description: "เส้นทางต่อยอดจากประเทศไทยสู่การแข่งขันระดับนานาชาติ เด็ก ๆ ได้พบคู่แข่งต่างวัฒนธรรม ลงสนามด้วยผลงานของตนเอง และเก็บเกี่ยวทั้งรางวัล ประสบการณ์ และความภาคภูมิใจกลับมา",
    image: "/images/competitions/tirt-taiwan-2025.jpg",
    imageAlt: "นักเรียน Craft Code แข่งขันและรับรางวัลใน Taiwan International Robotics Tournament 2025 ที่เมืองเถาหยวน",
    position: "center",
  },
];

const plannerOptions = {
  age: ["3–5 ปี", "6–8 ปี", "9–12 ปี", "13–15 ปี", "16+ / ผู้ใหญ่"],
  goal: ["สร้างเกม", "หุ่นยนต์", "AI", "Portfolio"],
  time: ["วันธรรมดา", "เสาร์–อาทิตย์", "รอบเช้า", "รอบเย็น"],
  pace: ["ทดลองก่อน", "เริ่มพื้นฐาน", "เรียนต่อเนื่อง", "เร่งทำผลงาน"],
  budget: ["เริ่มทีละ Level", "แพ็กหลาย Level", "ขอทีมช่วยเทียบแผน"],
};

type PlannerKey = keyof typeof plannerOptions;
type PlannerSelections = Record<PlannerKey, string>;

const emptyPlanner: PlannerSelections = { age: "", goal: "", time: "", pace: "", budget: "" };

function recommendCourse({ age, goal }: PlannerSelections) {
  if (!age || !goal) return "เลือกอายุและเป้าหมาย เพื่อดูคอร์สแนะนำเบื้องต้น";
  if (age === "3–5 ปี") return "แนะนำเริ่มจาก Early Coding Explorer หรือ Icon Block Coding";
  if (age === "6–8 ปี") return goal === "หุ่นยนต์" ? "แนะนำ Icon Block Coding หรือ Scratch Coding with Robotics" : "แนะนำ Scratch Coding Foundation";
  if (age === "9–12 ปี") {
    if (goal === "สร้างเกม") return "แนะนำ Scratch Game Design หรือ Roblox Game Design";
    if (goal === "หุ่นยนต์") return "แนะนำ Scratch Coding with Robotics หรือ Python Coding";
    if (goal === "AI") return "แนะนำ Creative AI และพื้นฐาน AI & Cybersecurity";
    return "แนะนำ Roblox, Python หรือ 3D Design เพื่อสร้าง Portfolio";
  }
  if (age === "13–15 ปี") {
    if (goal === "สร้างเกม") return "แนะนำ Roblox Game Design หรือ AI-Assisted Coding";
    if (goal === "หุ่นยนต์") return "แนะนำ Python Coding, Robotics & IoT";
    if (goal === "AI") return "แนะนำ AI & Cybersecurity หรือ AI-Assisted Coding";
    return "แนะนำ Advanced Tech Track พร้อมวางแผน Portfolio";
  }
  return goal === "AI" ? "แนะนำ AI for Business และ AI Productivity & Workflow" : "แนะนำ Future Leadership Track โดยปรับตามเป้าหมายการใช้งาน";
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("th");
  const [activeCompetition, setActiveCompetition] = useState(competitions[0]);
  const [planner, setPlanner] = useState<PlannerSelections>(emptyPlanner);
  const [plannerCopied, setPlannerCopied] = useState(false);
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const completedPlannerSteps = Object.values(planner).filter(Boolean).length;
  const plannerComplete = completedPlannerSteps === Object.keys(plannerOptions).length;
  const plannerRecommendation = recommendCourse(planner);
  const plannerSummary = [
    "สรุปความสนใจสำหรับทีม Craft Code Robotic",
    `อายุผู้เรียน: ${planner.age}`,
    `เป้าหมายที่สนใจ: ${planner.goal}`,
    `เวลาที่สะดวก: ${planner.time}`,
    `รูปแบบการเริ่มเรียน: ${planner.pace}`,
    `แผนการเรียน: ${planner.budget}`,
    `คำแนะนำเบื้องต้น: ${plannerRecommendation}`,
    "รบกวนทีมช่วยแนะนำคอร์ส รอบทดลองเรียน และแผนที่เหมาะสมเพิ่มเติมด้วยค่ะ/ครับ",
  ].join("\n");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("craft-code-language");
    if (savedLanguage === "en" || savedLanguage === "th") setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("craft-code-language", nextLanguage);
  };

  const choosePlannerOption = (key: PlannerKey, value: string) => {
    setPlanner((current) => ({ ...current, [key]: value }));
    setPlannerCopied(false);
  };

  const copyPlannerSummary = () => {
    const fallbackCopy = () => {
      const textArea = document.createElement("textarea");
      textArea.value = language === "en" ? translateText(plannerSummary) : plannerSummary;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      setPlannerCopied(true);
    };
    if (navigator.clipboard && window.isSecureContext) {
      const localizedSummary = language === "en" ? translateText(plannerSummary) : plannerSummary;
      void navigator.clipboard.writeText(localizedSummary).then(() => setPlannerCopied(true)).catch(fallbackCopy);
      return;
    }
    fallbackCopy();
  };

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const encoded = new URLSearchParams();
    formData.forEach((value, key) => encoded.append(key, String(value)));
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setContactStatus("success");
    } catch {
      setContactStatus("error");
    }
  };

  const page = (
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
          <a href="#callback">ติดต่อกลับ</a>
        </div>
        <div className="language-switcher" role="group" aria-label="เลือกภาษา">
          <button type="button" className={language === "th" ? "active" : ""} aria-pressed={language === "th"} onClick={() => changeLanguage("th")}>TH</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => changeLanguage("en")}>EN</button>
        </div>
        <a className="nav-cta" href={LINE_URL} target="_blank" rel="noreferrer">ทดลองเรียนฟรี <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="เปิดเมนู">เมนู</summary>
          <div>
            <a href="#programs">Roadmap</a><a href="#flexible">รูปแบบเรียน</a><a href="#news">ข่าว & ผลงาน</a><a href="#schedule">เวลาเรียน</a><a href="#team">ทีมครู</a><a href="#callback">ติดต่อกลับ</a>
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
              <figure className="track-visual"><img src={track.image} alt={track.imageAlt} /><figcaption>{track.visualLabel}</figcaption></figure>
              <div className="track-top"><span>{track.number}</span><div className="age-pill">อายุ {track.age}</div></div>
              <h3>{track.title}</h3><p>{track.intro}</p>
              <div className="track-courses">{track.courses.map(([name,age,detail]) => <div key={name}><strong>{name}</strong><span>{age}</span><small>{detail}</small></div>)}</div>
            </article>
          ))}
        </div>
        <div className="roadmap-actions"><a href="/updates/curriculum-overview.jpg" target="_blank">ดู Curriculum Overview ↗</a><a href="/updates/free-trial-standee.jpg" target="_blank">ดูภาพรวมสถาบัน ↗</a><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">ดูผลงานและกิจกรรมล่าสุดบน Facebook ↗</a></div>
      </section>

      <section className="flex-section" id="flexible">
        <div className="tech-ticker" aria-label="เทคโนโลยีที่ใช้ในหลักสูตร"><div className="ticker-track"><span>SCRATCH</span><i>◆</i><span>PYTHON</span><i>◆</i><span>ROBOTICS</span><i>◆</i><span>IoT</span><i>◆</i><span>GENERATIVE AI</span><i>◆</i><span>CYBERSECURITY</span><i>◆</i><span>3D DESIGN</span><i>◆</i><span aria-hidden="true">SCRATCH</span><i aria-hidden="true">◆</i><span aria-hidden="true">PYTHON</span><i aria-hidden="true">◆</i><span aria-hidden="true">ROBOTICS</span><i aria-hidden="true">◆</i><span aria-hidden="true">IoT</span><i aria-hidden="true">◆</i><span aria-hidden="true">GENERATIVE AI</span><i aria-hidden="true">◆</i><span aria-hidden="true">CYBERSECURITY</span><i aria-hidden="true">◆</i><span aria-hidden="true">3D DESIGN</span><i aria-hidden="true">◆</i></div></div>
        <div className="section-kicker light">MISSION CONFIGURATOR <span>03</span></div>
        <div className="flex-head"><div><h2>ออกแบบเส้นทางเรียน<br />ให้พอดีกับชีวิตจริง</h2><p>ไม่จำเป็นต้องเริ่มเหมือนกันหรือเรียนด้วยจังหวะเดียวกัน ทีมครูช่วยจัดเส้นทางให้เหมาะกับเป้าหมาย เวลาว่าง ประสบการณ์ และงบประมาณของแต่ละครอบครัว</p></div><div className="system-status"><span>PERSONAL LEARNING PATH</span><strong>READY TO CONFIGURE</strong><small>CRAFT CODE ADVISOR · ONLINE</small></div></div>
        <div className="config-grid">
          <article>
            <span>INPUT 01</span><h3>ผู้เรียนและเป้าหมาย</h3>
            <small className="option-label">อายุผู้เรียน</small>
            <div className="planner-options">{plannerOptions.age.map((option) => <button type="button" className={planner.age === option ? "selected" : ""} aria-pressed={planner.age === option} onClick={() => choosePlannerOption("age", option)} key={option}>{option}</button>)}</div>
            <small className="option-label">สิ่งที่สนใจ</small>
            <div className="planner-options">{plannerOptions.goal.map((option) => <button type="button" className={planner.goal === option ? "selected" : ""} aria-pressed={planner.goal === option} onClick={() => choosePlannerOption("goal", option)} key={option}>{option}</button>)}</div>
            <p>เริ่มจากวัยและสิ่งที่ผู้เรียนอยากทำจริง</p>
          </article>
          <article><span>INPUT 02</span><h3>เลือกช่วงเวลา</h3><div className="planner-options">{plannerOptions.time.map((option) => <button type="button" className={planner.time === option ? "selected" : ""} aria-pressed={planner.time === option} onClick={() => choosePlannerOption("time", option)} key={option}>{option}</button>)}</div><p>เลือกรอบหลักที่สะดวกที่สุด ทีมงานจะเช็กที่นั่งให้อีกครั้ง</p></article>
          <article><span>INPUT 03</span><h3>เลือกจังหวะ</h3><div className="planner-options">{plannerOptions.pace.map((option) => <button type="button" className={planner.pace === option ? "selected" : ""} aria-pressed={planner.pace === option} onClick={() => choosePlannerOption("pace", option)} key={option}>{option}</button>)}</div><p>เรียนเท่าที่พร้อม แล้วค่อยต่อยอดตามเป้าหมาย</p></article>
          <article className="budget-card"><span>INPUT 04</span><h3>วางแผนตามงบ</h3><div className="planner-options">{plannerOptions.budget.map((option) => <button type="button" className={planner.budget === option ? "selected" : ""} aria-pressed={planner.budget === option} onClick={() => choosePlannerOption("budget", option)} key={option}>{option}</button>)}</div><p>เปรียบเทียบทางเลือกที่เหมาะสม โดยไม่ต้องแสดงราคาบนเว็บไซต์</p></article>
        </div>
        <div className={`config-output ${plannerComplete ? "complete" : ""}`} aria-live="polite">
          <div className="output-orb">{completedPlannerSteps}/5</div>
          <div><span>OUTPUT · PERSONAL MISSION MAP</span><h3>{plannerRecommendation}</h3><p>{completedPlannerSteps === 0 ? "เลือกข้อมูลด้านบน ระบบจะสร้างข้อความสรุปสำหรับส่งให้ทีม Craft Code" : [planner.age, planner.goal, planner.time, planner.pace, planner.budget].filter(Boolean).join(" · ")}</p></div>
          {plannerComplete ? <a className="primary-button planner-share" href={LINE_URL} target="_blank" rel="noreferrer" onClick={copyPlannerSummary}>{plannerCopied ? "คัดลอกแล้ว · เปิด LINE อีกครั้ง" : "คัดลอกผล + เปิด LINE"} <span>↗</span></a> : <button className="primary-button planner-disabled" type="button" disabled>เลือกอีก {5 - completedPlannerSteps} หัวข้อ</button>}
        </div>
      </section>

      <section className="lab-section" id="technology-labs">
        <div className="section-kicker">TECHNOLOGY LABS <span>04</span></div>
        <div className="lab-head"><h2>ไม่ได้เรียนแค่ Tool<br />แต่เรียนวิธีคิดแบบ Creator</h2><p>เทคโนโลยีเปลี่ยนได้ทุกปี เราจึงเน้นพื้นฐานที่ใช้ได้ตลอดชีวิต พร้อมเปิดพื้นที่ให้ทดลองเครื่องมือและเทคโนโลยีปัจจุบันผ่านโปรเจกต์จริง</p></div>
        <div className="lab-grid">
          <article className="lab-card robotics-lab">
            <figure><img src="/images/robot-activity.jpeg" alt="นักเรียน Craft Code ลงมือสร้างและทดสอบหุ่นยนต์" /><div className="lab-scan" aria-hidden="true" /><span className="lab-number">01</span><figcaption>REAL ROBOT · REAL MISSION</figcaption></figure>
            <div className="lab-card-copy"><div className="lab-code">LAB_A · PHYSICAL TECH</div><h3>ROBOTICS SYSTEMS</h3><p>เข้าใจกลไก มอเตอร์ เซ็นเซอร์ Microcontroller และ IoT ผ่านการสร้าง ทดสอบ และแก้ปัญหาจริง</p><div className="lab-tags"><span>LEGO</span><span>SENSORS</span><span>IoT</span></div><a href="#programs">ดูเส้นทาง Robotics <span>↗</span></a></div>
          </article>
          <article className="lab-card creative-lab">
            <figure><img src="/images/labs/creative-computing.jpg" alt="บรรยากาศการเรียน Roblox และ Creative Computing ของ Craft Code" /><div className="lab-scan" aria-hidden="true" /><span className="lab-number">02</span><figcaption>FROM PLAYER TO CREATOR</figcaption></figure>
            <div className="lab-card-copy"><div className="lab-code">LAB_B · CREATIVE CODE</div><h3>CREATIVE COMPUTING</h3><p>เปลี่ยนความสนใจในเกมให้เป็นทักษะการคิด ออกแบบ และเขียนโปรแกรมด้วย Scratch, Python และ Roblox Studio</p><div className="lab-tags"><span>SCRATCH</span><span>PYTHON</span><span>ROBLOX</span></div><a href="#programs">ดูเส้นทาง Creative Tech <span>↗</span></a></div>
          </article>
          <article className="lab-card future-lab">
            <figure><img src="/images/labs/digital-design.jpg" alt="นักเรียน Craft Code ออกแบบโมเดลสามมิติและผลงานดิจิทัล" /><div className="lab-scan" aria-hidden="true" /><span className="lab-number">03</span><figcaption>IMAGINE · MODEL · CREATE</figcaption></figure>
            <div className="lab-card-copy"><div className="lab-code">LAB_C · DIGITAL FUTURE</div><h3>AI & DIGITAL FUTURE</h3><p>ต่อยอดจาก 3D Design ไปสู่ Generative AI, Prompting, Digital Workflow และความปลอดภัยทางไซเบอร์</p><div className="lab-tags"><span>3D DESIGN</span><span>GEN AI</span><span>CYBER</span></div><a href="#programs">ดูเส้นทาง Digital Future <span>↗</span></a></div>
          </article>
        </div>
      </section>

      <section className="school-section" id="school-program">
        <div className="school-gallery" aria-label="ภาพการจัดการเรียนรู้นอกสถานที่ของ Craft Code">
          <figure className="school-photo-primary"><img src="/images/partners/school-program-class.jpg" alt="บรรยากาศการเรียน Coding แบบกลุ่มกับทีม Craft Code" /><figcaption>ON-CAMPUS LEARNING</figcaption></figure>
          <figure><img src="/images/partners/school-program-team.jpg" alt="นักเรียนร่วมกิจกรรม Coding และ Robotics กับทีม Craft Code" /><figcaption>LEARN · BUILD · SHARE</figcaption></figure>
        </div>
        <div className="school-copy">
          <div className="section-kicker light">SCHOOL PARTNERSHIP <span>05</span></div>
          <div className="school-signal"><span>PARTNER SCHOOL</span><strong>ANVIDA</strong><small>INTERNATIONAL SCHOOL PROGRAM</small></div>
          <h2>ยกห้องเรียนแห่งอนาคต<br />ไปถึงโรงเรียน</h2>
          <p>Craft Code Robotic ร่วมจัดการเรียนการสอนให้กับ <strong>โรงเรียนนานาชาติอันวิดา (Anvida)</strong> พร้อมออกแบบกิจกรรม Coding และ Robotics ให้เหมาะกับช่วงวัย ตารางเรียน และเป้าหมายของโรงเรียน</p>
          <div className="school-features"><div><span>01</span><strong>ครูและอุปกรณ์พร้อมสอน</strong><small>จัดทีมและชุดการเรียนรู้ไปยังโรงเรียน</small></div><div><span>02</span><strong>ออกแบบตามระดับชั้น</strong><small>ปรับเนื้อหาให้สอดคล้องกับผู้เรียน</small></div><div><span>03</span><strong>Project-Based Learning</strong><small>เรียนรู้ผ่านการลงมือสร้างผลงานจริง</small></div></div>
          <a className="school-link" href={LINE_URL} target="_blank" rel="noreferrer">ปรึกษา School Program กับทีม Craft Code <span>↗</span></a>
        </div>
      </section>

      <section className="schedule-section" id="schedule">
        <div className="schedule-copy">
          <div className="section-kicker light">CLASS TIMETABLE <span>05</span></div>
          <h2>เรียนเป็นรอบ<br />จองเวลาก่อนเข้าเรียน</h2>
          <div className="schedule-alert"><strong>สำคัญ</strong><span>เวลาเปิดสถาบันไม่ใช่เวลาเริ่มคลาส ผู้เรียนต้องเลือกรอบและยืนยันที่นั่งกับทีมงานก่อน</span></div>
          <div className="schedule-table-wrap">
            <table className="class-timetable">
              <caption>รอบเรียนมาตรฐานของ Craft Code Robotic</caption>
              <thead><tr><th>วันเรียน</th><th><span>01</span>รอบเช้า</th><th><span>02</span>รอบบ่าย</th><th><span>03</span>รอบเย็น</th></tr></thead>
              <tbody>
                <tr><th>จันทร์–ศุกร์<small>MON–FRI</small></th><td>10:00–12:00</td><td>13:00–15:00<small>หรือ 13:30–15:30</small></td><td>16:00–18:00</td></tr>
                <tr><th>วันเสาร์<small>SATURDAY</small></th><td>10:00–12:00</td><td>13:00–15:00</td><td>15:30–17:30</td></tr>
                <tr><th>วันอาทิตย์<small>SUNDAY</small></th><td>10:00–12:00</td><td>13:00–15:00</td><td>15:30–17:30</td></tr>
              </tbody>
            </table>
          </div>
          <div className="schedule-footnote"><div><span>เวลาเปิดทำการ</span><strong>จ.–ศ. 09:00–18:30 · ส.–อา. 10:00–18:00</strong></div><p>ระยะเวลาเรียนจริงขึ้นอยู่กับหลักสูตร บางคลาสใช้เวลา 1–1.5 ชั่วโมง และบางคลาส 2 ชั่วโมง ตารางวิชาและที่นั่งในแต่ละรอบอาจเปลี่ยนแปลง</p></div>
          <a className="primary-button" href={LINE_URL} target="_blank" rel="noreferrer">แจ้งวิชาและจองรอบเรียน <span>↗</span></a>
        </div>
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
        <div className="competition-explorer">
          <div className="competition-tabs" role="tablist" aria-label="เลือกดูเวทีการแข่งขัน">
            {competitions.map((competition, index) => <button key={competition.id} type="button" role="tab" aria-selected={activeCompetition.id === competition.id} className={activeCompetition.id === competition.id ? "active" : ""} onClick={() => setActiveCompetition(competition)}><span>0{index + 1}</span>{competition.tab}</button>)}
          </div>
          <article className="competition-feature" role="tabpanel" aria-live="polite" key={activeCompetition.id}>
            <figure><img src={activeCompetition.image} alt={activeCompetition.imageAlt} style={{ objectPosition: activeCompetition.position }} /></figure>
            <div className="competition-copy"><span>{activeCompetition.eyebrow}</span><h3>{activeCompetition.title}</h3><strong>{activeCompetition.result}</strong><p>{activeCompetition.description}</p><small>กดชื่อการแข่งขันด้านบนเพื่อเปลี่ยนเรื่องราวและภาพ</small></div>
          </article>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="team-head"><div><div className="section-kicker">ACADEMIC STAFF <span>07</span></div><h2>ทีมครูที่เชี่ยวชาญ<br />และเข้าใจผู้เรียน</h2></div><blockquote>“เราไม่ได้แค่สอน Class แต่คอย Feed Forward และดูแลน้อง ๆ เหมือนเป็นลูกของเราเอง”</blockquote></div>
        <div className="team-layout"><div className="team-list">{staff.map(([name,thai,role],i) => <article key={name}><span>0{i+1}</span><div className="team-monogram">{name.replace("T. ","").charAt(0)}</div><h3>{name}<small>{thai}</small></h3><p>{role}</p></article>)}</div><a className="staff-poster" href="/updates/academic-staff.jpg" target="_blank"><img src="/updates/academic-staff.jpg" alt="ทีม Academic Staff ของ Craft Code อัปเดตเดือนกุมภาพันธ์ 2026" /><span>ดูโปสเตอร์ทีมครูฉบับเต็ม ↗</span></a></div>
      </section>

      <section className="opportunity-section" id="opportunities">
        <div className="section-kicker light">GROW WITH CRAFT CODE <span>08</span></div>
        <div className="opportunity-head"><h2>ร่วมสร้างอนาคต<br />ไปด้วยกัน</h2><p>ไม่ว่าจะอยากถ่ายทอดความรู้ให้เด็กรุ่นใหม่ หรือกำลังมองหาธุรกิจการศึกษาที่มีความหมาย เริ่มพูดคุยกับทีม Craft Code ได้จากที่นี่</p></div>
        <div className="opportunity-grid">
          <article className="opportunity-card career-card">
            <img src="/images/coding-class.jpeg" alt="ครู Craft Code ดูแลนักเรียนในห้องเรียน Coding" />
            <div className="opportunity-shade" />
            <div className="opportunity-content"><div className="opportunity-label">CAREERS · JOIN OUR CREW</div><h3>{language === "en" ? <>Grow with the<br />Craft Code Team</> : <>เติบโตไปกับทีมครู<br />Craft Code</>}</h3><p>เปิดรับโปรไฟล์ของผู้ที่รักการสอน สนใจ Coding, Robotics และเทคโนโลยี พร้อมเรียนรู้การดูแลผู้เรียนแบบโค้ช</p><div className="opportunity-tags"><span>Coding Coach</span><span>Part-time Teacher</span><span>School Program</span></div><small>ตำแหน่งและช่วงเวลารับสมัครขึ้นอยู่กับความต้องการของทีมในแต่ละช่วง</small><a href={LINE_URL} target="_blank" rel="noreferrer">ฝากโปรไฟล์กับทีมงาน <span>↗</span></a></div>
          </article>
          <article className="opportunity-card franchise-card">
            <img src="/images/dbd-franchise-standard-2026.jpg" alt="Craft Code Robotic รับประกาศนียบัตร DBD Franchise Standard 2026" />
            <div className="opportunity-shade" />
            <div className="opportunity-content"><div className="opportunity-label">FRANCHISE · BUSINESS PARTNERSHIP</div><div className="franchise-standard"><img src="/images/dbd-franchise-standard-logo.jpg" alt="DBD Franchise Standard" /><span>STANDARD<br />2026</span></div><h3>สร้างสถาบันแห่งอนาคต<br />ในพื้นที่ของคุณ</h3><p>สำหรับผู้สนใจธุรกิจการศึกษาและต้องการพูดคุยเรื่องพื้นที่ รูปแบบการลงทุน และระบบสถาบัน Craft Code Robotic</p><div className="opportunity-tags"><span>พื้นที่ศักยภาพ</span><span>รูปแบบลงทุน</span><span>ระบบสถาบัน</span></div><small>เริ่มจากการแนะนำตัวและพื้นที่ที่สนใจ ทีมงานจะติดต่อกลับเพื่อให้ข้อมูลเพิ่มเติม</small><a href={LINE_URL} target="_blank" rel="noreferrer">สอบถาม Franchise Partnership <span>↗</span></a></div>
          </article>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-kicker light">PARENT FAQ <span>09</span></div>
        <div className="faq-layout">
          <div className="faq-intro"><h2>ก่อนเริ่ม<br />ภารกิจแรก</h2><p>รวมคำถามที่ผู้ปกครองใช้ตัดสินใจบ่อยที่สุด หากยังไม่แน่ใจ ใช้ Mission Configurator ด้านบนหรือส่งอายุและความสนใจมาให้ทีมช่วยวางแผนได้เลย</p><a href={LINE_URL} target="_blank" rel="noreferrer">ถามทีม Craft Code ทาง LINE <span>↗</span></a></div>
          <div className="faq-list">
            <details><summary><span><small>เริ่มต้น</small>เริ่มเรียนได้ตั้งแต่อายุเท่าไร?</span><b>+</b></summary><p>เริ่มได้ตั้งแต่อายุประมาณ 3 ปีใน Early Coding Explorer หรือเริ่ม Icon Block Coding ช่วง 4–6 ปี ทีมงานจะช่วยประเมินจุดเริ่มต้นที่เหมาะกับวัยและความพร้อมของน้อง</p></details>
            <details><summary><span><small>เริ่มต้น</small>ต้องมีพื้นฐาน Coding มาก่อนไหม?</span><b>+</b></summary><p>ไม่จำเป็น หลักสูตรมีตั้งแต่ Foundation ถึง Advanced และออกแบบให้ต่อยอดเป็นลำดับตามประสบการณ์จริงของผู้เรียน</p></details>
            <details><summary><span><small>เลือกคอร์ส</small>ยังไม่รู้ว่าควรเริ่มคอร์สไหน ทำอย่างไร?</span><b>+</b></summary><p>แจ้งอายุ ประสบการณ์ และสิ่งที่สนใจ เช่น เกม หุ่นยนต์ AI หรือการทำ Portfolio ทีมงานจะช่วยแนะนำจุดเริ่มต้น หรือทดลองใช้ Personal Mission Map บนเว็บไซต์ก่อนได้</p></details>
            <details><summary><span><small>เวลาเรียน</small>หนึ่งคลาสเรียนกี่ชั่วโมง และมาเวลาไหนได้บ้าง?</span><b>+</b></summary><p>ขึ้นอยู่กับหลักสูตร โดยทั่วไปใช้เวลา 1–1.5 ชั่วโมงหรือ 2 ชั่วโมง ผู้เรียนต้องเลือกรอบเช้า บ่าย หรือเย็น และยืนยันที่นั่งก่อน ไม่ใช่ Walk-in เริ่มเรียนได้ตลอดเวลา</p></details>
            <details><summary><span><small>ทดลองเรียน</small>ทดลองเรียนก่อนสมัครได้ไหม?</span><b>+</b></summary><p>ได้ ทัก LINE @CRCWN พร้อมแจ้งอายุ ความสนใจ และวันที่สะดวก ทีมงานจะช่วยแนะนำคลาสทดลองและตรวจรอบที่ยังมีที่นั่ง</p></details>
            <details><summary><span><small>แผนการเรียน</small>สามารถเลือกเรียนตามงบประมาณได้อย่างไร?</span><b>+</b></summary><p>สามารถเริ่มทีละ Level หรือวางแผนเรียนต่อเนื่องหลาย Level ได้ ทีมงานจะช่วยเปรียบเทียบทางเลือกให้เหมาะกับเป้าหมาย เวลา และงบของแต่ละครอบครัว โดยสอบถามรายละเอียดล่าสุดผ่าน LINE</p></details>
            <details><summary><span><small>การแข่งขัน</small>เด็กทุกคนต้องลงแข่งขันหรือไม่?</span><b>+</b></summary><p>ไม่บังคับ การแข่งขันเป็นโอกาสต่อยอดสำหรับผู้เรียนที่สนใจ การเข้าร่วมขึ้นอยู่กับความพร้อม กติกา การคัดเลือก และรูปแบบของแต่ละรายการ ทีมครูจะแนะนำเส้นทางเตรียมตัวที่เหมาะสม</p></details>
            <details><summary><span><small>ผลงาน</small>เรียนแล้วจะมีผลงานหรือ Portfolio ไหม?</span><b>+</b></summary><p>ผู้เรียนจะสร้างโปรเจกต์ตามหลักสูตร เช่น เกม โปรแกรม หุ่นยนต์ หรือโมเดล 3D และสามารถคัดเลือกผลงานมาต่อยอดเป็น Portfolio ได้ ทีมครูช่วยแนะนำรูปแบบผลงานให้เหมาะกับเป้าหมาย</p></details>
            <details><summary><span><small>ผู้ใหญ่</small>มีคอร์สสำหรับวัยรุ่นโตและผู้ใหญ่ไหม?</span><b>+</b></summary><p>มี เส้นทาง Future Leadership ครอบคลุม AI for Business, AI Productivity & Workflow, Presentation และทักษะผู้ประกอบการ เหมาะสำหรับผู้เรียนอายุประมาณ 15 ปีขึ้นไปและผู้ใหญ่</p></details>
            <details><summary><span><small>โรงเรียน</small>Craft Code สามารถไปสอนที่โรงเรียนได้ไหม?</span><b>+</b></summary><p>ได้ เรามี School Partnership Program และมีประสบการณ์จัดการเรียนการสอนร่วมกับโรงเรียนนานาชาติอันวิดา โรงเรียนสามารถติดต่อเพื่อออกแบบเนื้อหา ตาราง และรูปแบบกิจกรรมให้เหมาะกับระดับชั้น</p></details>
          </div>
        </div>
      </section>

      <section className="callback-section" id="callback">
        <form className="netlify-form-blueprint" name="parent-callback" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" aria-hidden="true">
          <input name="bot-field" /><input name="parent_name" /><input name="phone" /><input name="email" /><input name="line_id" /><input name="child_age" /><input name="interest" /><input name="convenient_time" /><textarea name="message" /><input name="consent" />
        </form>
        <div className="callback-copy">
          <div className="section-kicker light">CONTACT MISSION CONTROL <span>10</span></div>
          <h2>ฝากข้อมูลไว้<br />ให้เราติดต่อกลับ</h2>
          <p>กรอกข้อมูลสั้น ๆ เพื่อให้ทีมเตรียมคำแนะนำที่ตรงกับวัย ความสนใจ และเวลาของผู้เรียนก่อนติดต่อกลับ</p>
          <div className="callback-flow"><div><span>01</span><strong>ส่งข้อมูล</strong><small>ใช้เวลาประมาณ 1 นาที</small></div><div><span>02</span><strong>ทีมตรวจความต้องการ</strong><small>เลือกคอร์สและรอบที่เหมาะสม</small></div><div><span>03</span><strong>ติดต่อกลับ</strong><small>ผ่านโทรศัพท์ LINE หรืออีเมลที่ให้ไว้</small></div></div>
          <div className="callback-data-note"><strong>ข้อมูลไปที่ไหน?</strong><p>ข้อมูลจะถูกเก็บในระบบ Forms ของ Netlify และตั้งแจ้งเตือนไปยัง <a href="mailto:admin@craftcoderobotic.com">admin@craftcoderobotic.com</a> หลังเปิดใช้งานบนเว็บไซต์จริง</p></div>
        </div>
        <form className="callback-form" name="parent-callback" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submitContactForm}>
          <input type="hidden" name="form-name" value="parent-callback" />
          <p className="honeypot-field"><label>กรุณาเว้นช่องนี้ว่าง <input name="bot-field" /></label></p>
          <div className="form-heading"><span>PARENT CALLBACK REQUEST</span><strong>ข้อมูลสำหรับติดต่อกลับ</strong><small>* จำเป็นต้องกรอก</small></div>
          <div className="form-grid">
            <label><span>ชื่อผู้ปกครอง *</span><input type="text" name="parent_name" autoComplete="name" required placeholder="ชื่อ–นามสกุล" /></label>
            <label><span>เบอร์โทรศัพท์ *</span><input type="tel" name="phone" autoComplete="tel" inputMode="tel" required placeholder="08X-XXX-XXXX" /></label>
            <label><span>อีเมล</span><input type="email" name="email" autoComplete="email" placeholder="สำหรับรับข้อมูลเพิ่มเติม" /></label>
            <label><span>LINE ID</span><input type="text" name="line_id" placeholder="ถ้าต้องการให้ติดต่อทาง LINE" /></label>
            <label><span>อายุผู้เรียน *</span><select name="child_age" required defaultValue=""><option value="" disabled>เลือกช่วงอายุ</option><option>3–5 ปี</option><option>6–8 ปี</option><option>9–12 ปี</option><option>13–15 ปี</option><option>16+ / ผู้ใหญ่</option></select></label>
            <label><span>สิ่งที่สนใจ *</span><select name="interest" required defaultValue=""><option value="" disabled>เลือกความสนใจ</option><option>Coding พื้นฐาน</option><option>Robotics</option><option>Game Design / Roblox</option><option>Python</option><option>3D Design</option><option>AI & Cybersecurity</option><option>AI for Business</option><option>การแข่งขัน</option><option>School Program</option><option>Franchise / ร่วมงานกับเรา</option></select></label>
            <label className="form-wide"><span>ช่วงเวลาที่สะดวก *</span><select name="convenient_time" required defaultValue=""><option value="" disabled>เลือกช่วงเวลาหลัก</option><option>วันธรรมดา · รอบเช้า</option><option>วันธรรมดา · รอบบ่าย</option><option>วันธรรมดา · รอบเย็น</option><option>เสาร์–อาทิตย์ · รอบเช้า</option><option>เสาร์–อาทิตย์ · รอบบ่าย</option><option>ยังไม่แน่ใจ ขอให้ทีมแนะนำ</option></select></label>
            <label className="form-wide"><span>รายละเอียดเพิ่มเติม</span><textarea name="message" rows={4} placeholder="เช่น มีพื้นฐานมาก่อน สนใจทดลองเรียน หรือมีวันที่สะดวกเป็นพิเศษ" /></label>
          </div>
          <label className="consent-field"><input type="checkbox" name="consent" value="ยินยอม" required /><span>ยินยอมให้ Craft Code Robotic ใช้ข้อมูลนี้เพื่อติดต่อกลับและแนะนำหลักสูตร โดยจะไม่นำไปเผยแพร่ต่อสาธารณะ *</span></label>
          <button className="callback-submit" type="submit" disabled={contactStatus === "sending"}>{contactStatus === "sending" ? "กำลังส่งข้อมูล..." : "ส่งข้อมูลให้ทีม Craft Code"}<span>↗</span></button>
          {contactStatus === "error" && <p className="form-error" role="alert">ยังส่งข้อมูลไม่ได้ในขณะนี้ หากกำลังดูหน้า Preview กรุณาทดลองอีกครั้งหลัง Deploy บน Netlify หรือทัก LINE @CRCWN</p>}
        </form>
        {contactStatus === "success" && <div className="success-modal" role="presentation"><div role="alertdialog" aria-modal="true" aria-labelledby="success-title"><button type="button" className="modal-close" aria-label="ปิดข้อความ" onClick={() => setContactStatus("idle")}>×</button><div className="success-signal">✓</div><span>TRANSMISSION RECEIVED</span><h3 id="success-title">เราได้รับข้อมูลแล้ว</h3><p>ขอบคุณที่สนใจ Craft Code Robotic ทีมงานจะตรวจข้อมูลและติดต่อกลับผ่านช่องทางที่คุณระบุไว้</p><button type="button" onClick={() => setContactStatus("idle")}>รับทราบ</button></div></div>}
      </section>

      <section className="final-cta"><div className="cta-orbit" aria-hidden="true" /><div className="section-kicker light">READY FOR LAUNCH?</div><h2>เริ่มต้นจากคลาสที่ใช่<br /><em>แล้วให้ความสามารถพาเขาไปไกล</em></h2><p>แจ้งอายุ ความสนใจ และวันที่สะดวก ทีม Craft Code จะช่วยเลือกเส้นทางและรอบทดลองเรียนที่เหมาะที่สุด</p><a className="primary-button large" href={LINE_URL} target="_blank" rel="noreferrer">LINE @CRCWN · ทดลองเรียนฟรี <span>↗</span></a></section>

      <footer><div className="footer-brand footer-official"><img src="/images/craft-code-horizontal-logo.jpg" alt="Craft Code Robotic" /></div><div className="footer-contact"><strong>CRAFT CODE · CENTRAL CHAENGWATTANA</strong><p>ชั้น 7 เซ็นทรัลแจ้งวัฒนะ ปากเกร็ด นนทบุรี 11120</p><a href="tel:0924255655">092 425 5655</a></div><div className="footer-links"><a href="#opportunities">ร่วมงานและ Franchise Partnership ↗</a><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook: Craft Code Robotic ↗</a><a href={LINE_URL} target="_blank" rel="noreferrer">LINE: @CRCWN ↗</a><a href="#top">กลับขึ้นด้านบน ↑</a></div><small className="copyright">© 2026 CRAFT CODE ROBOTIC THAILAND · CURRICULUM UPDATED MAY 2026</small></footer>
    </main>
  );
  return <>{localizeNode(page, language)}</>;
}
