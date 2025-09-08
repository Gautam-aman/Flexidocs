# 🚀 Flexidocs

Flexidocs is a modern full-stack SaaS platform designed to provide a seamless document experience.  
Built with **Next.js 13.5 (App Router)**, **tRPC**, **Prisma**, **Tailwind CSS**, and **TypeScript**, it comes with end-to-end SaaS architecture, subscription plans, authentication, and AI-powered features.

---

## ✨ Features

- 📄 **PDF Viewer** – Smooth and responsive document viewing.  
- 💳 **Stripe Integration** – Free & Pro subscription plans.  
- 🔑 **Authentication with Kinde** – Secure login and user management.  
- ⚡ **Real-time AI Streaming** – Instant streaming responses from APIs.  
- 🔄 **Optimistic Updates** – Seamless user interactions.  
- ♾️ **Infinite Loading** – Effortless scrolling for messages.  
- 🖱️ **Drag & Drop Uploads** – Intuitive file upload experience.  
- 🧠 **AI Memory with LangChain** – Smart contextual memory for docs.  
- 📦 **Vector Storage (Pinecone)** – High-performance document embeddings.  
- 🎨 **Modern UI** – Built with `shadcn/ui` + Tailwind.  
- 🛠️ **100% TypeScript** – End-to-end type safety.  

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 13.5](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)  
- **Backend**: [tRPC](https://trpc.io/), [Prisma](https://www.prisma.io/)  
- **Database**: PostgreSQL (via Prisma ORM)  
- **Authentication**: [Kinde](https://kinde.com/)  
- **Payments**: [Stripe](https://stripe.com/)  
- **AI**: [LangChain](https://www.langchain.com/) + [Pinecone](https://www.pinecone.io/)  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Gautam-aman/Flexidocs.git
cd Flexidocs

### 2️⃣ Install Dependencies
npm install
# or
yarn install

### 3️⃣ Setup Environment Variables

Create a .env file in the root and add:

DATABASE_URL=your_postgres_url
STRIPE_SECRET_KEY=your_stripe_secret
KINDE_CLIENT_ID=your_kinde_id
KINDE_CLIENT_SECRET=your_kinde_secret
PINECONE_API_KEY=your_pinecone_key

npx prisma migrate dev
npm run dev

