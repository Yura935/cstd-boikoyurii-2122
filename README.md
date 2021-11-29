# Messanger with translating

Group: KI-47
Student: Boiko Yurii
Variant: 3
HW i-face: I2C
Game: chrome dragon game
Data driven format: BINARY

Project: Messenger with translating(Bachelor work)

# Інструкція для завантаження і запуску проекту
Щоб заранити проект потрібно дістати його з репозиторію. Потім скачати NodeJs версії не нижче 14 і VS Code або WebStorm. Бажано налаштувати NodeJs, щоб можна було через термінал запустити скачування пакетів. Потрібно відкрити проект через Vs Code чи WebStorm і в терміналі (я використовую термінал cmd) прописати перше команду (npm install або npm i). Після  того як всі пакети встановляться, слід прописати команду (ng serve -o) - це потрібно для того, щоб запустити проект на локальному сервері.

# Messanger v1.0:
 - Логінування відбувається з використанням email та password. На поля накладена валідація. Якщо поля заповнено не вірно, вискочить вікно з відповідною інформацією. Щоб увійти, потрібно натиснути на кнопку "Sign In". (Email та password для тестування програми: email - user@gmail.com, passwoed - qwerty123);
 - В нас є можливість змінити логінування на реєстрацію. Щоб це зробити клікаємо на посилання "Registration", що знаходиться під кнопкою "Sign In". Наше вікно зміниться відповідно до реєстрації. Ми маємо 3 поля для вводу: username(ім'я користувача), email(електронна скринька коричтувача) та password(пароль користувача). Щоб увійти, потрібно натиснути на кнопку "Sign Up"; Після натискання на кнопку вас перекине на освновну сторінку, тобто автоматично виконується вхід.
 -  Увійшовши до системи, ви побачите головну сторінку, яка розділена на 2 блоки: блок з контактами юзера та блок з вибраним юзером для написання повідомлень. 
 - Блок з контактами юзера. В даному блоці ми маємо випадаюче меню, поле для пошуку контактів та блок з контактами користувача. При натисканні на кнопку меню, з'являється випадаюче меню. На даному вікні ми маємо знову ж таки 2 секції(head та body). В head-і є:
   * кнопка "<" - закриває випадаюче меню;
   * фото юзера а також його nickname;
   * кнопка "Редагувати" - відкриває нове вікно для редагування прсональних даних;
   * кнопка "Вихід" - для виходу з системи;
 В body:
   * "Налаштування" - кнопка для відривання вікна з додатковими налаштуваннями(На даний момент не працює);
   * "Мова" - кнопка для вибору мови. Якщо натиснути з'явиться блок з вибором: EN або UA(EN по замовчуванню).
   * "Розмір шрифту" - кнопка для редагування розмірів тексту(На даний момент не працює);
   * "Темний режим" - кнопка для зміни режиму(теми) на темну(Світла тема по замовчуванню).
  Поле для пошуку контактів. Як тільки ми почнемо писати, в блоці котактів користувача будуть відображатися доступні контакти. Тобто буде відбуватися фільтрування. Якщо юзер не має контактів, йому будуть підтягуватися всі доступні контакти.(Функціонал додавання контакту ще не реалізований). На даний момент, якщо ми щось напишемо в полі вводу, то будуть відображатись всі доступні користувачі(крім нас).
 - Блок з вибраним юзером для написання повідомлень. Знову ж таки має 2 секції: head та body. В head ми можемо бачити фото нашого контакту і його nickname. Якщо натиснути на head( весь верхній блок), то відкриється вікно з інофмацією про даного користувача. Body це поле з історією повідомлень, ті що зліва це від даного контакту те що зліва це наші повідомлення. Під повідомленням є дата та час відправлення повідомлення. Знизу є поле для вводу повідомлень. Даний функціонал ще не реалізований. Також дані в body і взагалі весь цей блок є по дефолту і не підтягується при виборі якогось користувача, а зроблений щоб ознайомитись з зовнішним виглядом.

 # Messanger v1.0 unit-tests
  - До даної версії було зроблені unit tests, покрито практично 80% всього проекту, включаючи в себе guard, service, pipe & components.
  - Щоб запустити тестування потрібно у терміналі прописати ng test --code-coverage. Після того як тести пройшли, знизу буде показано загальний результат покриття тестами. А щоб побачити що і як покрито, треба відкрити через браузер оцей файл cstd-boikoyurii-2122\coverage\taskChat\index.html і побачите всю картину тестів.

 # Messanger v1.1 
 - До даної версії було додано новий функціонал:
  * додавання користувачів у свої контакти (біля імені вибраного контакту тепер є кнопка "Додати до контактів"). Якщо натиснути на відповідну кнопку, то цей користувач буде доданий до ваших контактів і перенесений з блоку "Інші користувачі" в "Чати", а також кнопка додавання зникне.
  * відображення контактів користувача. Тепер маємо 2 блоки користувачів - наші контакти та усі користувачі, які не є нашиси контактами.
  * тепер можна змінювати вибраного користувача, і його дані будуть підтягуватися. 
  * при виборі певного користувача, в урлі прописується nickname вибраного користувача. Якщо ніхто не вибраний(тобто урла закінчується main/), то вибирається або перший контакт(якщо контакти є), або перший інший користувач.
 - Також було дописано Unit-тести для нового функціоналу. Зараз проект покрито десь на 65-70%, що досить добре.
 - Також було відформатовано і відредаговано деякі частини коду.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
