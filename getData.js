document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const carWrapper = document.querySelector('.apply__carsAlreadyExist');
    const title = document.querySelector('.apply__title');
    const anchor = document.getElementById('carInfo');

    const fetchData = async (filter) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${filter ? 1 : 2}`);
            const data = response.json();
            return data;
        } catch (error) {
            throw new Error('⚠ Что-то пошло не так');
        }
    };

    const renderData = (data) => {
        preloader.style.display = 'none';
        carInfo.style.display = 'block';
        const fragment = document.createDocumentFragment();
        data.forEach((car) => {
            const carInfo = document.createElement('div');
            carInfo.classList.add("car__style");
            carInfo.innerHTML = `<p>Марка: ${car.title}</p><p>Модель: ${car.body}</p><p>Год: ${car.userId}</p>`;
            fragment.appendChild(carInfo, anchor.nextSibling)
        });
       carWrapper.appendChild(fragment); 
    };

    const getRandomFilter = () => {
        return Math.random() < 0.5;
    };

    const init = async () => {
        const filter = getRandomFilter();

        try {
            const data = await fetchData(filter);
            renderData(data);
        } catch (error) {
            // Обработка ошибок, например, вывод сообщения под элементом carInfo
            carInfo.innerHTML = error.message;
        }
    };

    init();
});