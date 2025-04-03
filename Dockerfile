# Используем минимальный Node.js образ
FROM node:20-alpine AS runner

WORKDIR /app

# Копируем билд и зависимости из CI
COPY .next node_modules package.json package-lock.json public ./

# Expose порты (3000 — стандартный порт Next.js)
EXPOSE 3000

# Запускаем Next.js сервер
CMD ["npm", "run", "start"]
