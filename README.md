# 🌐 SAP UI5 / Fiori Developer Portfolio

A modern, responsive personal portfolio built with **React.js** and **Tailwind CSS v3**, showcasing professional experience in **SAP UI5, SAP Fiori, SAP BTP**, and **CAPM-aligned project delivery**.

This portfolio is designed to reflect enterprise and consulting standards suitable for organizations like **Accenture, Big-4 firms, and SAP ecosystem partners**.

---

## 👤 About Me

**Subham Ghosh**  
Software Engineer | SAP UI5 & SAP Fiori Developer | CAPM Certified  

I have hands-on experience in developing enterprise-grade SAP UI5 and SAP Fiori applications, integrating OData V2 services, and deploying applications on SAP BTP Cloud Foundry. I also bring strong project management fundamentals aligned with Agile and CAPM methodologies.

---

## 🚀 Features

- ✅ **Modern UI with React & Tailwind CSS v3**
- ✅ **Dark / Light Mode Toggle**
- ✅ **Animated Hero Section (fade & slide effects)**
- ✅ **Resume Download Section**
- ✅ **Projects Section (Resume-aligned, enterprise use cases)**
- ✅ **Gmail-based Contact Form**
  - Pre-filled subject
  - Message-only body
  - Auto-added professional signature (Name, Email, LinkedIn, GitHub)
- ✅ **Fully Responsive** (Mobile, Tablet, Desktop)
- ✅ **Consulting-friendly design & content**

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS v3
- **State Management:** React Hooks
- **Deployment Ready:** Netlify / Vercel / GitHub Pages
- **Version Control:** Git

---

## 📂 Project Structure

sap-portfolio/
│
├── public/
│ └── Subham_Ghosh_Resume.pdf
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── Resume.jsx
│ │ ├── Projects.jsx
│ │ ├── Contact.jsx
│ │ └── Footer.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── tailwind.config.cjs
├── postcss.config.cjs
├── package.json
└── README.md


---

## 📄 Resume Download

The **Resume section** allows users to download the latest PDF resume directly.

📌 Resume file location:


---

## ✉️ Contact Form Behavior

- Clicking **Send via Gmail** opens Gmail Compose
- Email details:
  - **To:** `ghoshsubham778@gmail.com`
  - **Subject:** Professional portfolio inquiry
  - **Body:** User message only
  - **Signature:**
    ```
    Regards,
    Name: <User Name>
    Email: <User Email>
    LinkedIn: <Profile Link>
    GitHub: <Profile Link>
    ```

> ⚠️ Gmail security does not allow changing the actual “From” address — user email is included in the signature for reply.

---

## 🧑‍💻 Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/subham-Gh/portfolio.git
cd portfolio
