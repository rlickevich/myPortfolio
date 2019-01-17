## Учебный проект Portfolio

```sh
Студент: Лицкевич Роман Витальевич
Курс: Продвинутый веб (17.12.2018 - 26.01.2019)
```

##  Чтобы развернуть проект необходимо:

> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/)

```sh
$ git clone git@github.com:rlickevich/portfolio-website.git
$ cd advanced-boilerplate
$ npm install
```

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev:mpa | Разработка основного сайта. Страницы **обо мне**, **блог** и т.п. Запустит dev сценарии **Gulp**. |
| dev:spa | Разработка админ панели в стиле **SPA** на **Vue.js** |
| build  | Сборка обоеих частей проекта. Все файлы будут доступны из директории **dist** |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```