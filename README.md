# 🎯 Seller Admin Panel# React + Vite



Complete Admin Panel for Seller Management - Built with React, Vite, and Tailwind CSS v4.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 📁 Project StructureCurrently, two official plugins are available:



```- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

seller_web/- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

├── src/

│   ├── core/                      # Core functionality## React Compiler

│   │   ├── constants/             # App constants

│   │   │   ├── colors.js          # Color palette (same as Flutter app)The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

│   │   │   ├── routes.js          # Route definitions

│   │   │   ├── dimensions.js      # Spacing, sizes, etc.## Expanding the ESLint configuration

│   │   │   └── strings.js         # App strings

│   │   ├── theme/                 # Theme configurationIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

│   │   │   └── theme.js           # Main theme config
│   │   └── utils/                 # Utility functions
│   │       └── router.jsx         # React Router configuration
│   │
│   ├── features/                  # Feature modules
│   │   ├── auth/                  # Authentication
│   │   ├── dashboard/             # Dashboard & Analytics
│   │   ├── products/              # Product Management
│   │   ├── orders/                # Order Management
│   │   ├── catalog/               # Catalog Management
│   │   ├── wallet/                # Wallet & Transactions
│   │   ├── profile/               # Profile Management
│   │   ├── notifications/         # Notifications
│   │   ├── support/               # Support & Help
│   │   └── settings/              # Settings
│   │
│   ├── shared/                    # Shared components
│   │   ├── components/            # Reusable components
│   │   └── layouts/               # Layout components
│   │
│   ├── App.jsx                    # Main App component
│   └── main.jsx                   # Entry point
```

## 🎨 Design System

### Color Palette (Matching Flutter App)

- **Primary**: `#6B46C1` (Purple)
- **Secondary**: `#EC4899` (Pink)
- **Accent**: `#10B981` (Green)
- **Background**: `#F8FAFC`
- **Success**: `#10B981`
- **Warning**: `#F59E0B`
- **Error**: `#EF4444`

### Typography

- **Font Family**: Poppins
- **Font Weights**: 300, 400, 500, 600, 700

## 📑 Features & Pages

### ✅ All Pages (Coming Soon UI)

1. **Dashboard** - Dashboard Overview, Analytics
2. **Products** - List, Add, Edit, Details
3. **Orders** - List, Details, Update Status
4. **Catalog** - List, Create, Details, Analytics
5. **Wallet** - Overview, Transactions, Withdraw, Bank Details
6. **Profile** - View, Edit, Business, GST/PAN
7. **Notifications** - List
8. **Support** - Center, Chat, FAQ
9. **Settings** - General, Account, Privacy, Terms
10. **Authentication** - Login, Signup, Forgot Password

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Language**: JavaScript (ES6+)

## 📝 Author

Seller Admin Panel - Built for comprehensive seller management

---

**Note**: Color scheme matches the Flutter Seller App
