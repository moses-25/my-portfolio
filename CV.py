from fpdf import FPDF

cv_content = """
MOSES OTIENO OCHIENG
📧 mosesotieno8363@gmail.com | 📞 +254 757 268 162
🔗 GitHub: [Insert Link] | LinkedIn: [Insert Link]

🎓 Education
Moringa School — Hybrid (Nairobi & Online)
Software Engineering Bootcamp _Full Stack Development
Feb 2025 _ Nov 2025 (Ongoing)

Otieno Oyoo High School — Kisumu, Kenya
Kenya Certificate of Secondary Education (KCSE)
2021 _ 2024

💻 Technical Skills
Languages & Frameworks:
HTML, CSS, JavaScript, React, Python, Flask, SQL

Tools & Platforms:
Git & GitHub, Vercel, GitHub Pages

🧠 Soft Skills
- Self-management & Accountability
- Emotional Intelligence
- Problem-solving & Critical Thinking
- Performance & Time Management
- Public Speaking & Leadership

🧰 Project & Work Experience
Frontend Developer _ Personal Project
E-Commerce Coffee Shop (React) | Apr 2025 _ May 2025
- Developed a fully responsive e-commerce website with product listings, user authentication, cart, and mock payment functionality.
- Deployed the project on Vercel.
- GitHub: [Insert Link] | Live Demo: [Insert Link]

Backend Developer _ Moringa Capstone Project
Health Records Management System (Python/Flask) | 2025
- Built a secure RESTful API for managing patient records in small clinics.
- Reduced data retrieval time by 50% through efficient querying.
- Collaborated with a 3-member Agile team to complete the project within 3 weeks.

Freelance Web Developer _ Client Project
Photographer's Portfolio Website | 2025
- Designed and developed a clean, mobile-optimized portfolio site using HTML, CSS, and JavaScript.
- Increased client inquiries by 20% post-launch.

Web Developer _School Project
Personal Website | 2025
- Designed and deployed a basic personal website to showcase skills and projects.
- Practiced GitHub Pages deployment, DOM manipulation, and basic animations.

🤝 Volunteering & Other Experience
Business Assistant
Auntie's Small Grocery Shop _ Nairobi | Jun 2024 _ Dec 2024
- Managed daily sales, tracked inventory, and processed customer orders via WhatsApp.
- Gained practical experience in customer service and multitasking.

Volunteer _ Tech & Child Support Team
P.C.E.A Emmanuel Church _ Nairobi | Jan 2023 _ Present
- Supported weekly services by managing sound systems and live streaming.
- Assisted in training and educating children on child protection and safety.
- Helped create a safe, welcoming environment through outreach and collaboration.

🌟 Additional Highlights
- Comfortable with version control and team collaboration using Git & GitHub.
- Currently learning testing, deployment, and best practices in documentation.
- Passionate about building tech solutions that positively impact local communities.
"""

class PDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, "Curriculum Vitae – Moses Otieno Ochieng", ln=True, align="C")
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font("Arial", "I", 8)
        self.cell(0, 10, f"Page {self.page_no()}", align="C")

pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Arial", "", 11)
pdf.multi_cell(0, 8, cv_content)

pdf.output("Moses_Ochieng_CV.pdf")
