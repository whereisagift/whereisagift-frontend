# Используем минимальный Node.js образ
FROM node:20-alpine AS runner

WORKDIR /app

# Копируем билд и зависимости из CI
COPY next-build.tar.gz ./
RUN tar -xzf next-build.tar.gz && rm next-build.tar.gz

# Expose порты (3000 — стандартный порт Next.js)
EXPOSE 3000

# Запускаем Next.js сервер
CMD ["npm", "run", "start"]
