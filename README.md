# Литовский: урок за уроком

Интерактивное веб-приложение на **Next.js 15** для русскоязычных: **12 уроков** по структуре и грамматическому ходу учебника *«Nė dienos be lietuvių kalbos»* (VU, 2020). **Тексты, диалоги и упражнения оригинальные** — не копия книги.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm start
```

## Уроки

- **Уроки 1–3**: полный контент (диалоги, словарь, грамматика, упражнения, аудирование с предзаписанным MP3, чтение).
- **Уроки 4–12**: цели и темы (каркас), интерактив появится позже.

## Прогресс и озвучка

- Прогресс по разделам хранится в **localStorage** (ключ `lt-progress`).
- Озвучка — **готовые MP3** в [`public/audio/`](public/audio/) (пути задаются в [`lib/lesson-audio-paths.ts`](lib/lesson-audio-paths.ts)). Список доступных файлов — [`lib/generated/audio-manifest.ts`](lib/generated/audio-manifest.ts) (генерируется скриптом).
- **Перегенерация после правок текста урока** (нужен ключ Azure Speech, не используется в рантайме приложения):

  ```bash
  export AZURE_SPEECH_KEY=...
  export AZURE_SPEECH_REGION=westeurope   # ваш регион ресурса Speech
  npm run generate:audio
  ```

- **Без ключа** можно собрать короткие заглушки (тишина) для проверки UI — нужен `ffmpeg` в PATH:

  ```bash
  npm run generate:audio:silence
  ```

  Затем замените файлы на нормальную озвучку через `npm run generate:audio` с Azure.

- **Локально на macOS** можно собрать настоящую литовскую озвучку системным голосом `Ona` — нужны `say` и `ffmpeg`:

  ```bash
  npm run generate:audio -- --macos-say --force
  ```

## Как добавить контент урока

1. Откройте или создайте файл в `lib/lessons/` (см. `lesson-01.ts`).
2. Заполните поля типа `Lesson` (`lib/lessons/types.ts`).
3. Подключите урок в `lib/lessons/index.ts` (массив `LESSONS`).
4. После добавления или изменения литовских фраз, для которых нужна озвучка, снова выполните `npm run generate:audio` (или локальный `--macos-say`, или `generate:audio:silence` для заглушек) и закоммитьте новые/изменённые файлы в `public/audio/` и обновлённый `lib/generated/audio-manifest.ts`.

## Лицензия кода

MIT (или по желанию владельца репозитория). Учебник *Nė dienos be lietuvių kalbos* защищён авторским правом; в приложении используется только **оригинальный** учебный материал.
