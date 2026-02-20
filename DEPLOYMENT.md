# 🚀 دليل النشر على AWS EC2

## معلومات الخادم
- **Public IP:** 54.145.4.239
- **Frontend:** http://54.145.4.239
- **Backend API:** http://54.145.4.239:8080/API.php

## 📦 خطوات النشر

### 1. الاتصال بالخادم
```bash
ssh -i your-key.pem ubuntu@54.145.4.239
```

### 2. تثبيت المتطلبات
```bash
# تحديث النظام
sudo apt update && sudo apt upgrade -y

# تثبيت Docker
sudo apt install -y docker.io docker-compose

# تفعيل Docker
sudo systemctl start docker
sudo systemctl enable docker

# إضافة المستخدم لمجموعة docker
sudo usermod -aG docker $USER
```

### 3. استنساخ المشروع
```bash
cd ~
git clone https://github.com/mhgqwer3/test_project.git
cd test_project
```

### 4. تشغيل المشروع
```bash
# تشغيل باستخدام Docker Compose
sudo docker-compose up -d --build

# متابعة السجلات
sudo docker-compose logs -f
```

### 5. التحقق من التشغيل
```bash
# التحقق من الحاويات
sudo docker-compose ps

# يجب أن ترى:
# smart_bins_frontend  - Up (healthy)
# smart_bins_backend   - Up (healthy)
# smart_bins_db        - Up (healthy)
```

## 🔒 Security Groups (AWS Console)

### Inbound Rules المطلوبة:
| Type | Protocol | Port | Source | Description |
|------|----------|------|---------|-------------|
| HTTP | TCP | 80 | 0.0.0.0/0 | Frontend |
| Custom TCP | TCP | 8080 | 0.0.0.0/0 | Backend API |
| SSH | TCP | 22 | Your IP | SSH Access |

## 🌐 الوصول للنظام

### للمستخدمين:
- **الصفحة الرئيسية:** http://54.145.4.239
- **تسجيل الدخول:** http://54.145.4.239/pages/login.html
- **لوحة التحكم:** http://54.145.4.239/pages/overview.html

### للمطورين:
- **API Endpoint:** http://54.145.4.239:8080/API.php
- **Auth Endpoint:** http://54.145.4.239:8080/auth.php

### أمثلة API:
```bash
# الحصول على قائمة الصناديق
curl http://54.145.4.239:8080/API.php?action=list

# تسجيل الدخول
curl -X POST http://54.145.4.239:8080/auth.php \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password"}'
```

## 🔄 إدارة النظام

### إيقاف الخدمات
```bash
cd ~/test_project
sudo docker-compose down
```

### إعادة التشغيل
```bash
sudo docker-compose restart
```

### تحديث الكود
```bash
cd ~/test_project
git pull origin main
sudo docker-compose up -d --build
```

### عرض السجلات
```bash
# جميع الخدمات
sudo docker-compose logs -f

# خدمة محددة
sudo docker-compose logs -f backend
sudo docker-compose logs -f frontend
sudo docker-compose logs -f database
```

### الدخول لحاوية معينة
```bash
# Backend
sudo docker exec -it smart_bins_backend bash

# Database
sudo docker exec -it smart_bins_db bash
sudo docker exec -it smart_bins_db mysql -uroot -prootpassword smart_bins_system
```

## 🗄️ النسخ الاحتياطي

### نسخ احتياطي لقاعدة البيانات
```bash
sudo docker exec smart_bins_db mysqldump -uroot -prootpassword smart_bins_system > backup_$(date +%Y%m%d).sql
```

### استعادة قاعدة البيانات
```bash
sudo docker exec -i smart_bins_db mysql -uroot -prootpassword smart_bins_system < backup_20260220.sql
```

## 📊 المراقبة

### استهلاك الموارد
```bash
# مراقبة Docker
sudo docker stats

# مراقبة النظام
htop
df -h
free -h
```

### فحص الصحة
```bash
# حالة الخدمات
sudo docker-compose ps

# فحص Backend
curl -I http://localhost:8080/API.php

# فحص Frontend
curl -I http://localhost
```

## ⚠️ استكشاف الأخطاء

### المشكلة: الحاويات لا تعمل
```bash
# التحقق من الأخطاء
sudo docker-compose logs

# إعادة البناء
sudo docker-compose down
sudo docker-compose up -d --build --force-recreate
```

### المشكلة: قاعدة البيانات لا تعمل
```bash
# التحقق من logs
sudo docker-compose logs database

# إعادة تشغيل Database فقط
sudo docker-compose restart database
```

### المشكلة: لا يمكن الوصول من الخارج
```bash
# تحقق من البورتات
sudo netstat -tulpn | grep -E '80|8080'

# تحقق من Firewall
sudo ufw status
sudo ufw allow 80/tcp
sudo ufw allow 8080/tcp
```

## 🔐 الأمان

### تغيير كلمات المرور (مهم!)
```bash
# تحديث .env أو docker-compose.yaml
nano docker-compose.yaml

# غير القيم:
MYSQL_ROOT_PASSWORD: your_strong_password
DB_PASSWORD: your_strong_password

# أعد التشغيل
sudo docker-compose down -v
sudo docker-compose up -d
```

### تفعيل HTTPS (موصى به)
```bash
# تثبيت Certbot
sudo apt install certbot python3-certbot-nginx

# الحصول على شهادة SSL (يحتاج domain name)
sudo certbot --nginx -d yourdomain.com
```

## 📞 الدعم

- **GitHub:** https://github.com/mhgqwer3/test_project
- **Issues:** https://github.com/mhgqwer3/test_project/issues

---

آخر تحديث: February 20, 2026
