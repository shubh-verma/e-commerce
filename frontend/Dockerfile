FROM --platform=linux/amd64 node:16.17.0-alpine AS builder

# ENV NODE_ENV production

WORKDIR /app
COPY package* ./ 
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Use Nginx as the production server
FROM --platform=linux/amd64 nginx:alpine
# Copy the built React app to Nginx's web server directory
COPY --from=builder /app/build /var/www/html
# COPY utils/nginx.conf etc/nginx/nginx.conf
COPY utils/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80 for the Nginx server
EXPOSE 80
# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]