#!/bin/bash

echo "===================================="
echo "Smart Bins System - Docker Setup"
echo "===================================="
echo ""

echo "[1] Starting Docker containers..."
docker-compose up -d --build

echo ""
echo "[2] Waiting for services to be ready..."
sleep 10

echo ""
echo "[3] Checking container status..."
docker-compose ps

echo ""
echo "===================================="
echo "Setup Complete!"
echo "===================================="
echo ""
echo "Frontend: http://localhost"
echo "Backend API: http://localhost:8080/API.php"
echo "Database: localhost:3306"
echo ""
echo "To view logs: docker-compose logs -f"
echo "To stop: docker-compose down"
echo ""
