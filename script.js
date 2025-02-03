// Пример данных новостей
const newsData = [
    {
        title: "Школьный турнир по шахматам",
        description: "В школе прошел турнир по шахматам среди учеников 5-7 классов.",
        link: "news1.html" // Ссылка на полную новость
    },
    {
        title: "Выставка осенних поделок",
        description: "Ученики начальной школы представили свои работы на выставке.",
        link: "news2.html" // Ссылка на полную новость
    },
    {
        title: "Спортивные соревнования",
        description: "Команда школы заняла первое место в районных соревнованиях.",
        link: "news3.html" // Ссылка на полную новость
    },
    {
        title: "ЭТО СВЕРШИЛОСЬ",
        description: "В школе наконец-то будет интернет-газета!",
        link: "news4.html" // Ссылка на полную новость
    },
	

];


const newsSection = document.getElementById('news-section');

// Функция для добавления новостей на страницу
function addNews() {
    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const newsTitle = document.createElement('h2');
        newsTitle.textContent = news.title;

        const newsDescription = document.createElement('p');
        newsDescription.textContent = news.description;

        const newsButton = document.createElement('button');
        newsButton.textContent = "Читать далее";

        // Открываем полную новость в новой вкладке
        newsButton.addEventListener('click', () => {
            window.open(news.link, '_blank');
        });

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsDescription);
        newsItem.appendChild(newsButton);

        newsSection.appendChild(newsItem);
    });
}

// Вызов функции для добавления новостей
addNews();