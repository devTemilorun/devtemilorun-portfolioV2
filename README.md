# devTemilorun — Personal Portfolio v2

A fast, modern personal portfolio built with Next.js 16 and React 19. Showcases my work as a Full Stack Developer — projects, tech stack, and a working contact form, all in one place.

Live site: (https://temilorun.vercel.app)


## What's inside

- **Hero section** with a typing role animation and tech stack pills
- **Projects showcase** with live/repo links
- **Tech Stack section** with filterable categories
- **Contact form** powered by Nodemailer — emails land directly in my inbox
- **Smooth animations** via Framer Motion
- **Fully responsive** — works on mobile, tablet, and desktop


## Tech Stack

Framework | Next.js 16 | React 19 
Language | TypeScript 
Styling | Tailwind CSS v4 
Animation | Framer Motion | React Spring 
Forms | React Hook Form | Zod validation 
Email | Nodemailer 
Icons | Lucide React | React Icons 


## Getting started

You'll need Node.js 18+ installed.

**1. Clone the repo**

git clone https://github.com/devTemilorun/devtemilorun-portfolioV2
cd portfolio-v2

**2. Install dependencies**

npm install

**3. Set up environment variables**

Create a `.env.local` file in the root of the project and add your email credentials for the contact form:
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

> If you're using Gmail, generate an **App Password** from your Google Account settings (under Security → 2-Step Verification → App Passwords). Don't use your regular Gmail password here.

**4. Run the dev server**

npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser.


## Project structure

portfolio-v2/
├── app/                  # Next.js app router pages and layouts
├── components/           # Reusable UI components (Button, SectionTitle, etc.)
├── scenes/               # Page sections (Hero, Projects, TechStack, Contact)
├── assets/               # Images, icons, and static data
├── public/               # Public assets served at root
└── app/globals.css       # Global styles and Tailwind custom utilities


## Deployment

This project deploys cleanly to **Vercel** with zero configuration.

npm run build   # make sure it builds without errors first

Then push to GitHub and import the repo on [vercel.com](https://vercel.com). Add your `.env.local` variables in the Vercel project settings under Environment Variables before deploying.


## Contact

Built by **Olawuni Israel** — if you want to work together or just say hi, hit the contact form on the site or reach me at:

- GitHub: (https://github.com/devTemilorun)
- LinkedIn: (https://linkedin.com/in/olawuni-israel)
- Email: dev.temilorun@gmail.com