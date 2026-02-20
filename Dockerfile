FROM php:8.1-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mysqli

# Enable Apache modules
RUN a2enmod rewrite headers

# Configure Apache - Allow all access
RUN echo '<Directory /var/www/html>' > /etc/apache2/conf-available/smart-bins.conf && \
    echo '    Options Indexes FollowSymLinks' >> /etc/apache2/conf-available/smart-bins.conf && \
    echo '    AllowOverride All' >> /etc/apache2/conf-available/smart-bins.conf && \
    echo '    Require all granted' >> /etc/apache2/conf-available/smart-bins.conf && \
    echo '</Directory>' >> /etc/apache2/conf-available/smart-bins.conf && \
    a2enconf smart-bins

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY ./backend /var/www/html/backend
COPY ./frontend /var/www/html/frontend

# Create index.html to redirect to login
RUN echo '<!DOCTYPE html>' > /var/www/html/index.html && \
    echo '<html><head><meta http-equiv="refresh" content="0; url=/frontend/pages/login.html"></head>' >> /var/www/html/index.html && \
    echo '<body><p>Redirecting to login...</p></body></html>' >> /var/www/html/index.html

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && find /var/www/html -type f -exec chmod 644 {} \; \
    && find /var/www/html -type d -exec chmod 755 {} \;

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
