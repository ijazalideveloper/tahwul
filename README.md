# Tahwul - Digital Transformation Audit Compliance Platform

A comprehensive audit compliance tracking platform for digital transformation initiatives, built with Next.js 16 and modern web technologies.

## 🔗 Links

- **Live Demo**: [https://tahwul-nine.vercel.app/](https://tahwul-nine.vercel.app/)
- **GitHub Repository**: [https://github.com/ijazalideveloper/tahwul](https://github.com/ijazalideveloper/tahwul)

## 🚀 How to Run the Project

### Prerequisites
- Node.js 18+ installed
- pnpm package manager (recommended) or npm/yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ijazalideveloper/tahwul.git
   cd tahwul
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts
- `pnpm dev` / `npm run dev` - Start development server
- `pnpm build` / `npm run build` - Build for production
- `pnpm start` / `npm start` - Start production server
- `pnpm lint` / `npm run lint` - Run ESLint

## 🏗️ How the Code Was Built

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Charts**: ApexCharts
- **Analytics**: Vercel Analytics

### Architecture
- **Component-based structure**: Modular, reusable components in `/components`
- **Server & Client Components**: Leveraging Next.js 16 features with "use client" directives
- **Type Safety**: Full TypeScript implementation with strict typing
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **State Management**: React hooks (useState) for local state

### Key Features Implemented
1. **Collapsible Sidebar**: Icon-only mode with smooth transitions
2. **Dashboard**: Stats cards, project timeline, progress tracking
3. **Perspectives Page**: Detailed view with tabbed panels
4. **Tracking Screen**: Comprehensive audit tracking interface
5. **Notifications**: Popover panel with real-time updates
6. **User Dropdown**: Profile, settings, and logout options
7. **Responsive Design**: Optimized for mobile, tablet, and desktop
8. **Interactive Charts**: Performance visualization with ApexCharts

## 📋 Assumptions Made

1. **Mock Data**: All data is currently static/mock data in `/lib/data.tsx`
2. **Authentication**: No real authentication implemented - UI only
3. **API Integration**: No backend API calls - ready for integration
4. **Image Assets**: Placeholder images used (avatar.jpg, logo.svg, etc.)
5. **Browser Support**: Modern browsers with ES6+ support
6. **Permissions**: All users have full access to all features
7. **Data Persistence**: No database - data resets on refresh

## 📁 Project Structure

```
tahwul/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Dashboard page
│   ├── perspectives/      # Perspectives page
│   ├── tracking-screen/   # Tracking page
│   └── layout.tsx         # Root layout
├── components/
│   ├── common/            # Shared components
│   ├── dashboard/         # Dashboard-specific components
│   ├── perspective/       # Perspective-specific components
│   └── ui/                # Reusable UI primitives
├── lib/                   # Utilities and data
├── hook/                  # Custom Reusable Hook logic
├── public/                # Static assets
├── types/                 # Reusable Types
```

## 🤝 Contributing

This is a public project. For any questions or suggestions, please contact the development team.

## 📄 License

Proprietary - All rights reserved
