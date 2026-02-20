# 🗑️ Smart Bins System - نظام صناديق القمامة الذكية

نظام متكامل لإدارة ومراقبة صناديق القمامة الذكية باستخدام تقنيات IoT.

## 📋 المحتويات
- [نظرة عامة](#نظرة-عامة)
- [الميزات](#الميزات)
- [التقنيات المستخدمة](#التقنيات-المستخدمة)
- [التثبيت والتشغيل](#التثبيت-والتشغيل)
- [البنية المعمارية](#البنية-المعمارية)
- [API Documentation](#api-documentation)

## 🎯 نظرة عامة

نظام ذكي متكامل لإدارة صناديق القمامة يتضمن:
- 📊 لوحة تحكم شاملة (Dashboard)
- 🚛 إدارة العربات والرحلات
- 📍 تتبع الموقع الجغرافي (GPS Tracking)
- 🔔 نظام الإنذارات والتنبيهات
- 👥 إدارة المستخدمين والصلاحيات
- 📈 تقارير وإحصائيات تفصيلية

## ✨ الميزات

### للمسؤولين (Admins)
- ✅ إدارة كاملة للنظام
- ✅ مراقبة حالة جميع الصناديق
- ✅ إدارة العربات والسائقين
- ✅ تخطيط الرحلات وتحسين المسارات
- ✅ تقارير مفصلة وتحليلات

### للسائقين (Drivers)
- ✅ عرض الرحلات المخصصة
- ✅ تحديث حالة التجميع
- ✅ التنقل باستخدام GPS
- ✅ تسجيل الملاحظات

### للمشرفين
- ✅ مراقبة الأداء
- ✅ إدارة الإنذارات
- ✅ متابعة التقارير

## 🛠️ التقنيات المستخدمة

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Responsive Design
- Real-time Updates

### Backend
- PHP 8.1
- RESTful API
- PDO (MySQL)

### Database
- MySQL 8.0
- Normalized Schema
- Optimized Indexes

### DevOps
- Docker & Docker Compose
- Nginx (Reverse Proxy)
- Apache (PHP Server)
- Git Version Control

## 🚀 التثبيت والتشغيل

### المتطلبات
- Docker Desktop
- Docker Compose
- Git

### التشغيل السريع

#### 1. استنساخ المشروع
```bash
git clone https://github.com/mhgqwer3/test_project.git
cd test_project
```

#### 2. تشغيل باستخدام Docker

**على Windows:**
```bash
start.bat
```

**على Linux/Ubuntu:**
```bash
chmod +x start.sh
./start.sh
```

**أو مباشرة:**
```bash
docker-compose up -d --build
```

#### 3. الوصول للنظام
- **Frontend:** http://localhost
- **Backend API:** http://localhost:8080/API.php
- **Database:** localhost:3306

### إيقاف النظام
```bash
docker-compose down
```

### عرض السجلات (Logs)
```bash
docker-compose logs -f
```

## 🏗️ البنية المعمارية

```
┌─────────────────────────────────────────┐
│         Nginx (Frontend)                │
│         Port: 80                        │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│    Apache + PHP (Backend API)           │
│         Port: 8080                      │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         MySQL Database                  │
│         Port: 3306                      │
└─────────────────────────────────────────┘
```

### هيكل المشروع
```
.
├── frontend/              # Frontend Files
│   ├── CSS/              # Stylesheets
│   ├── JAVASCRIPT/       # JavaScript Files
│   └── pages/            # HTML Pages
│
├── backend/              # Backend API
│   ├── API.php          # Main API Endpoint
│   ├── auth.php         # Authentication
│   ├── Helpers.php      # Helper Functions
│   ├── Dockerfile       # Backend Container
│   └── Database/        # SQL Schema
│
├── docker-compose.yaml  # Docker Configuration
├── nginx.conf          # Nginx Configuration
├── README.md           # Documentation
└── README_DOCKER.md    # Docker Guide (Arabic)
```

## 📡 API Documentation

### Authentication
```http
POST /auth.php
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

### Get Bins
```http
GET /API.php?action=list
Authorization: Bearer {token}
```

### Create Trip
```http
POST /API.php?action=trip_create
Content-Type: application/json

{
  "cart_id": 1,
  "driver_id": 1,
  "bin_ids": [1, 2, 3]
}
```

للمزيد من التفاصيل، راجع [API_DOCUMENTATION.md](backend/api/API_DOCUMENTATION.md)

## 🔒 الأمان

- ✅ Password Hashing (bcrypt)
- ✅ JWT Authentication
- ✅ SQL Injection Prevention (PDO Prepared Statements)
- ✅ XSS Protection
- ✅ CORS Configuration
- ✅ Environment Variables للبيانات الحساسة

## 📊 قاعدة البيانات

### الجداول الرئيسية:
- `users` - المستخدمون
- `bins` - الصناديق
- `carts` - العربات
- `trips` - الرحلات
- `collections` - عمليات التجميع
- `alerts` - الإنذارات
- `notifications` - الإشعارات

## 🤝 المساهمة

نرحب بالمساهمات! يرجى:
1. Fork المشروع
2. إنشاء Branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للـ Branch (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📝 الترخيص

هذا المشروع مرخص تحت [MIT License](LICENSE)

## 👥 الفريق

مشروع تخرج - Smart Bins Management System

## 📞 التواصل

- GitHub: [@mhgqwer3](https://github.com/mhgqwer3)
- Repository: [test_project](https://github.com/mhgqwer3/test_project)

---

⭐ إذا أعجبك المشروع، لا تنسى تقييمه بنجمة!
