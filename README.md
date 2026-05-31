# Архангельск · наследие

Публичный фронтенд каталога достопримечательностей Архангельска.

## Стек

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- TanStack Query

## Запуск

```bash
npm install
npm run dev
```

Приложение будет доступно на [http://localhost:3000](http://localhost:3000).

## Переменные окружения

Скопируйте `.env.example` в `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://backend-sj8b.onrender.com
```

## Скрипты

- `npm run dev` — режим разработки
- `npm run build` — production-сборка
- `npm run start` — запуск production-сервера
- `npm run test` — unit-тесты
- `npm run test:coverage` — отчёт о покрытии

## Страницы

- `/` — каталог объектов с фильтрами и поиском
- `/objects/[slug]` — детальная страница объекта
- `/about` — информация о проекте
