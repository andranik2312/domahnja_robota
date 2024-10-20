window.onload = function() {
    // Клас Cat
    class Cat {
        constructor(nickname) {
            this._breed = 'Сіамський';
            this._nickname = nickname;
            this._caughtMice = 0;
        }

        get nickname() {
            return this._nickname;
        }

        set nickname(newNickname) {
            this._nickname = newNickname;
        }

        catchMouse() {
            this._caughtMice++;
            console.log(`${this._nickname} зловив мишу! Загальна кількість мишей: ${this._caughtMice}`);
        }

        getInfo() {
            return `Кіт породи: ${this._breed}, прізвисько: ${this._nickname}, кількість зловлених мишей: ${this._caughtMice}`;
        }
    }

    // Клас StrayCat (Дворовий Кіт)
    class StrayCat extends Cat {
        constructor(nickname) {
            super(nickname);
            this._strayStatus = true; // Властивість, що вказує на те, що кіт дворовий
        }

        // Ловити мишу з випадковим шансом успіху
        catchMouse() {
            const successChance = Math.random(); // Випадковий шанс успіху
            if (successChance > 0.5) {
                this._caughtMice++;
                console.log(`${this._nickname} (дворовий) зловив мишу! Тепер він зловив ${this._caughtMice} мишей.`);
            } else {
                console.log(`${this._nickname} (дворовий) не зловив мишу.`);
            }
        }

        getInfo() {
            return `Дворовий кіт породи: ${this._breed}, прізвисько: ${this._nickname}, кількість зловлених мишей: ${this._caughtMice}`;
        }
    }

    let myCat;

    // Створення кота
    document.getElementById('catForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const nickname = document.getElementById('nickname').value;
        myCat = new Cat(nickname);
        document.getElementById('catInfo').textContent = myCat.getInfo();
    });

    // Зміна прізвиська
    document.getElementById('changeNicknameForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const newNickname = document.getElementById('newNickname').value;
        if (myCat) {
            myCat.nickname = newNickname;
            document.getElementById('catInfo').textContent = myCat.getInfo();
        }
    });

    // Ловля мишей для звичайного кота
    document.getElementById('catchMouseButton').addEventListener('click', function() {
        if (myCat) {
            myCat.catchMouse();
            document.getElementById('catInfo').textContent = myCat.getInfo();
        }
    });

    // Полювання (StrayCat)
    document.getElementById('strayCatButton').addEventListener('click', function() {
        const strayCat = new StrayCat('Вуличний кіт'); // Створюємо нового дворового кота
        strayCat.catchMouse(); // Викликаємо метод полювання для дворового кота
        document.getElementById('catInfo').textContent = strayCat.getInfo(); // Оновлюємо інформацію про дворового кота
    });
};
