# pro-cosmetics-shop-v2

Готовый шаблон интернет-магазина на **Next.js 14 + Prisma + SQLite** для ниши натуральной косметики и фитопродукции.

## Что внутри
- Каталог товаров (`/shop`)
- Карточка товара (`/shop/[id]`)
- Блог (`/blog`, `/blog/[slug]`)
- Админ-панель для товаров и постов (`/admin`)
- Checkout endpoint для Stripe (`/api/checkout`)
- Q&A endpoint на OpenAI (`/api/ask`)
- Cron endpoint для автогенерации постов (`/api/cron/generate-post`)

## Требования
- Node.js 18+
- npm 9+

## Быстрый старт
```bash
npm install
cp .env.example .env
npm run db:push
npm run db:seed
npm run dev
```

Открыть: [http://localhost:3000](http://localhost:3000)

## Переменные окружения
Смотрите `.env.example`.

Минимально для локального запуска:
- `DATABASE_URL="file:./dev.db"`
- `NEXTAUTH_URL="http://localhost:3000"`
- `NEXTAUTH_SECRET="change-me"`
- `AUTH_ADMIN_EMAIL="admin@example.com"`
- `AUTH_ADMIN_PASSWORD="admin123"`

Опционально:
- `STRIPE_SECRET_KEY` — для Stripe checkout
- `OPENAI_API_KEY` — для AI Q&A и генерации постов

## Полезные команды
```bash
npm run dev
npm run build
npm run start
npm run db:push
npm run db:seed
```

## Примечания
- Проект ориентирован на быстрый MVP-старт.
- Для production рекомендуется добавить валидацию входных данных, role-based защиту админских API, rate limiting и webhook-обработчики Stripe.
