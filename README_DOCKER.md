# Smart Bins System - Docker Setup

نظام إدارة صناديق القمامة الذكية

## المتطلبات
- Docker Desktop
- Docker Compose

## التشغيل

### 1. تشغيل جميع الخدمات
```bash
docker-compose up -d
```

### 2. إيقاف الخدمات
```bash
docker-compose down
```

### 3. إعادة بناء الخدمات
```bash
docker-compose up -d --build
```

### 4. عرض السجلات (logs)
```bash
docker-compose logs -f
```

## الخدمات

### Frontend (Nginx)
- المنفذ (Port): 80
- الرابط: http://localhost

### Backend (PHP + Apache)
- المنفذ (Port): 8080
- الرابط: http://localhost:8080
- API Endpoint: http://localhost:8080/API.php

### Database (MySQL)
- المنفذ (Port): 3306
- اسم قاعدة البيانات: smart_bins_system
- المستخدم: root
- كلمة المرور: rootpassword

## ملاحظات
- سيتم تحميل قاعدة البيانات تلقائياً من ملف `backend/Database/smart_bins_system.sql` عند أول تشغيل
- البيانات محفوظة في Docker Volume باسم `db_data`
- جميع الخدمات متصلة عبر شبكة `smart_bins_network`

## الأوامر المفيدة

### الدخول إلى حاوية (container) محددة
```bash
# Backend
docker exec -it smart_bins_backend bash

# Database
docker exec -it smart_bins_db bash
```

### الاتصال بقاعدة البيانات
```bash
docker exec -it smart_bins_db mysql -uroot -prootpassword smart_bins_system
```

### حذف البيانات وإعادة التشغيل من الصفر
```bash
docker-compose down -v
docker-compose up -d
```
