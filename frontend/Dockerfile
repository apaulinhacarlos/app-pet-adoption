# Fase de desenvolvimento
FROM node:20-alpine AS development

WORKDIR /app-frontend

COPY package*.json .

RUN npm clean-install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# Fase de build
FROM development AS builder

ARG VITE_API_URL

RUN npm run build

# Fase final - Nginx para produção
FROM nginx:1.13-alpine

COPY --from=builder /app-frontend/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/
