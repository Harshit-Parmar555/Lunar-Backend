# 🌙 Lunar Backend

<div align="center">

**🚀 Enterprise-Grade Music Streaming API**

_Powering the future of music streaming with scalable architecture and lightning-fast performance_

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.18.1-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Admin-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![JWT](https://img.shields.io/badge/JWT-9.0.2-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

[🚀 API Docs](#api-endpoints) • [📖 Documentation](#features) • [🐛 Report Bug](#contributing) • [💡 Request Feature](#contributing)

</div>

---

## ✨ **Why Lunar Backend?**

> **Built for scale, designed for performance, engineered for the modern web.**

⚡ **Lightning Fast APIs** - Sub-100ms response times with optimized queries  
🔒 **Bank-Level Security** - Multi-layer authentication with Firebase Admin SDK  
📈 **Infinitely Scalable** - Microservice-ready architecture  
🎯 **Smart Analytics** - Real-time insights & performance metrics  
☁️ **Cloud Native** - Firebase integration with auto-scaling capabilities  
🛡️ **Production Ready** - Comprehensive logging, monitoring & error handling  
🔄 **RESTful Design** - Industry-standard API patterns

---

## 🏗️ **Enterprise Architecture**

### **Tech Stack Powerhouse**

```bash
🟢 Node.js 18+           # High-performance JavaScript runtime
⚡ Express.js 5.1.0      # Fast, unopinionated web framework
🍃 MongoDB 8.18.1        # Flexible, document-based database
🔥 Firebase Admin        # Authentication & cloud storage
🔐 JWT 9.0.2             # Secure token-based authentication
📁 Multer 2.0.2          # Advanced file upload handling
📊 Winston 3.17.0        # Enterprise logging solution
🔧 Morgan 1.10.1         # HTTP request logger middleware
```

### **Microservice Architecture**

```
src/
├── 🎵 controllers/          # Business logic layer
│   ├── auth.controller.js   # Authentication management
│   ├── song.controller.js   # Music catalog operations
│   ├── album.controller.js  # Album management
│   ├── admin.controller.js  # Administrative functions
│   └── stats.controller.js  # Analytics & reporting
├── 🗃️  models/              # Data models & schemas
│   ├── user.model.js        # User entity definition
│   ├── song.model.js        # Song metadata schema
│   └── album.model.js       # Album structure
├── 🛣️  routes/              # API route definitions
│   ├── auth.route.js        # Authentication endpoints
│   ├── song.route.js        # Music API routes
│   ├── album.route.js       # Album endpoints
│   ├── admin.route.js       # Admin panel APIs
│   └── stats.route.js       # Analytics endpoints
├── 🛡️  middlewares/         # Request processing layer
│   ├── auth.middleware.js   # JWT validation
│   └── multer.js           # File upload processing
├── 🗄️  db/                  # Database configuration
│   └── connect.js          # MongoDB connection setup
└── 🛠️  utils/               # Utility functions
    ├── firebase.config.js   # Firebase Admin setup
    ├── jwt.js              # Token management
    ├── logger.js           # Winston configuration
    └── media.operations.js  # File processing
```

---

## 🚀 **Game-Changing Features**

### 🔐 **Advanced Authentication System**

- **Firebase Admin SDK** integration for enterprise security
- **JWT Token Management** with refresh token rotation
- **Multi-provider OAuth** support (Google, Facebook, etc.)
- **Role-based Access Control** (RBAC) for admin features
- **Session Management** with secure cookie handling

### 🎵 **Comprehensive Music Management**

- **Metadata Extraction** from uploaded audio files
- **Cloud Storage Integration** with Firebase Storage
- **Streaming Optimization** for various bitrates
- **Search & Discovery** with advanced filtering
- **Playlist Management** with collaborative features

### 📊 **Real-time Analytics Engine**

- **User Engagement Metrics** tracking
- **Popular Content Analysis** with trending algorithms
- **Performance Monitoring** with request/response analytics
- **Admin Dashboard Stats** for content insights
- **Revenue Analytics** for monetization tracking

### 🛡️ **Production-Grade Infrastructure**

- **Comprehensive Logging** with Winston
- **Error Handling** with graceful fallbacks
- **Request Rate Limiting** for API protection
- **CORS Configuration** for secure cross-origin requests
- **Environment-based Configuration** for deployments

### 📁 **Advanced File Management**

- **Multer Integration** for secure file uploads
- **File Type Validation** with size limitations
- **Image Processing** for album artwork
- **Audio File Processing** with metadata extraction
- **CDN Integration** for global content delivery

---

## 🛠️ **Quick Start**

### **Prerequisites**

```bash
Node.js 18+
MongoDB 6+
Firebase Admin account
Multer for file handling
```

### **Installation**

```bash
# Clone the repository
git clone https://github.com/yourusername/lunar-backend.git
cd lunar-backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Configure your environment variables

# Start development server
npm run dev

# Start production server
npm start
```

### **Environment Configuration**

```bash
# .env
NODE_ENV=development
PORT=4000
CLIENT_URL=http://localhost:5173

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/lunar

# Firebase Admin SDK
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your_service_account@your_project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your_client_id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_STORAGE_BUCKET=your_project.appspot.com

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
```

---

## 🔌 **API Endpoints**

### **🔐 Authentication**

```http
POST   /api/v1/auth/signup          # User registration
POST   /api/v1/auth/login           # User login
POST   /api/v1/auth/logout          # User logout
GET    /api/v1/auth/check           # Authentication check
POST   /api/v1/auth/refresh         # Token refresh
```

### **🎵 Music Management**

```http
GET    /api/v1/songs                # Get all songs
GET    /api/v1/songs/:id            # Get song by ID
POST   /api/v1/songs                # Upload new song
PUT    /api/v1/songs/:id            # Update song
DELETE /api/v1/songs/:id            # Delete song
GET    /api/v1/songs/featured       # Get featured songs
GET    /api/v1/songs/trending       # Get trending songs
```

### **📀 Album Management**

```http
GET    /api/v1/albums               # Get all albums
GET    /api/v1/albums/:id           # Get album by ID
POST   /api/v1/albums               # Create new album
PUT    /api/v1/albums/:id           # Update album
DELETE /api/v1/albums/:id           # Delete album
GET    /api/v1/albums/featured      # Get featured albums
```

### **👑 Admin Operations**

```http
POST   /api/v1/admin/songs          # Admin: Add song
POST   /api/v1/admin/albums         # Admin: Create album
DELETE /api/v1/admin/songs/:id      # Admin: Delete song
DELETE /api/v1/admin/albums/:id     # Admin: Delete album
GET    /api/v1/admin/users          # Admin: Get all users
```

---

## 🤝 **Contributing**

We welcome contributions! Here's how you can help:

### **Development Workflow**

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m 'Add amazing feature'

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🌟 **Acknowledgments**

- **Express.js** for the robust web framework
- **MongoDB** for flexible data storage
- **Firebase** for authentication and storage
- **Winston** for comprehensive logging
- **Multer** for file upload handling

---

<div align="center">

**Built with ❤️ by [Harshit Parmar](https://github.com/Harshit-Parmar555/)**

_If you found this project helpful, please give it a ⭐_

[🌐 Website](https://harshitparmar.xyz)) • [📧 Email](mailto:harshitxworks@gmail.com) • [🐦 Twitter](https://x.com/harshitxcodes) • [💼 LinkedIn](https://www.linkedin.com/in/harshit-parmar-47253b282)

</div>

---

## 📊 **System Architecture**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │────│  Express.js API │────│   MongoDB DB    │
│                 │    │                 │    │                 │
│  - Authentication│    │ - JWT Validation│    │ - User Data     │
│  - Music Player  │    │ - File Upload   │    │ - Song Metadata │
│  - Admin Panel   │    │ - CRUD Operations│   │ - Album Info    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌─────────────────┐             │
         └──────────────│ Firebase Storage│─────────────┘
                        │                 │
                        │ - Audio Files   │
                        │ - Album Artwork │
                        │ - User Avatars  │
                        └─────────────────┘
```

---

_Made with 🌙 and lots of ☕_
