# Анализ кода проекта fito-apteka-shop-v2

Дата: 2026-02-10

## 1) Краткое описание

Проект — интернет-магазин на **Next.js 14 (App Router)** с:
- каталогом товаров,
- блогом,
- административными CRUD-страницами,
- простым Q&A API с OpenAI,
- черновой интеграцией Stripe Checkout,
- Prisma + SQLite.

## 2) Текущий стек

- **Frontend**: Next.js, React, Tailwind CSS.
- **Backend**: Route Handlers (`app/api/*`) + Prisma.
- **DB**: SQLite.
- **Auth**: next-auth (Credentials).
- **Payments**: Stripe (опционально, по ключу).
- **AI**: OpenAI Chat Completions (`gpt-4o-mini`).

## 3) Архитектура и модули

### UI/страницы
- Главная: `app/page.tsx`.
- Каталог и карточка товара: `app/shop/page.tsx`, `app/shop/[id]/page.tsx`.
- Блог: `app/blog/*`.
- Админка: `app/admin/*`.
- Q&A UI: `app/ask/page.tsx`.

### API
- Товары: `GET/POST /api/products`, `GET/PUT/DELETE /api/products/[id]`.
- Посты: `GET/POST /api/posts`, `PUT/DELETE /api/posts/[id]`.
- Checkout: `POST /api/checkout`.
- AI Q&A: `POST /api/ask`.
- Автогенерация поста: `POST /api/cron/generate-post`.
- Auth: `app/api/auth/[...nextauth]/route.ts`.

### Данные
- Модели Prisma: `Product`, `Post`, `Order`, `User`.
- Связи между сущностями не заданы (плоская схема).

## 4) Сильные стороны

1. Быстрый MVP-скелет с рабочими CRUD-операциями.
2. Простая и понятная структура проекта.
3. Единая Prisma-инстанция в `lib/prisma.ts` (good practice для dev hot reload).
4. Feature-флаги через env (Stripe/OpenAI отключаются мягко).

## 5) Обнаруженные риски и техдолг

### Высокий приоритет

1. **Нет валидации входных данных** в большинстве API (`products`, `posts`, `checkout`, `ask`).
   - Риск: некорректные данные в БД, 500-ошибки, неустойчивость API.

2. **Нет авторизационной защиты админских API/страниц**.
   - CRUD API доступны без проверки роли.
   - Риск: несанкционированное изменение данных.

3. **Нет обработки исключений БД/внешних API**.
   - Риск: утечки stacktrace/500 без контролируемого ответа.

### Средний приоритет

4. **Использование `any` в клиентских компонентах**.
   - Снижает типобезопасность.

5. **`NEXT_PUBLIC_URL` как базовый URL для server fetch**.
   - Возможны проблемы в разных средах деплоя.

6. **Отсутствие rate limiting и anti-abuse** в `/api/ask` и `/api/cron/generate-post`.

7. **Нет тестов/линтинга в scripts**.

### Низкий приоритет

8. **Order модель не интегрирована с checkout/webhooks**.
9. **Нет пагинации для списка товаров/постов**.

## 6) Рекомендованный план улучшений

### Этап 1 (безопасность и стабильность)
- Добавить `zod`-валидацию для всех mutating endpoints.
- Ввести auth/role guard для `/admin` и административных API.
- Добавить `try/catch` вокруг Prisma/Stripe/OpenAI вызовов + единый формат ошибок.

### Этап 2 (качество кода)
- Вынести DTO-типы и заменить `any`.
- Добавить `eslint` и `npm run lint`.
- Добавить smoke-тесты API (Vitest/Playwright/supertest).

### Этап 3 (продуктовые улучшения)
- Реализовать Stripe webhook + сохранение `Order`.
- Пагинация/фильтры каталога и блога.
- Ограничение частоты запросов для AI API.

## 7) Быстрые метрики

- Route handlers API: 8 файлов.
- Страницы app router: 12 файлов (включая admin/blog/shop и системные).
- Модели Prisma: 4.

## 8) Что сгенерировано в рамках анализа

1. Этот отчёт: `docs/ANALYSIS_REPORT.md`.
2. Машиночитаемый каталог API: `docs/API_ENDPOINTS.generated.json`.

