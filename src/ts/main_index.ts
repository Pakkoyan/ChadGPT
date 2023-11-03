
// Псевдомейн функция
document.addEventListener('DOMContentLoaded', () => {

    // Переключение на основную страницу, при нажатие Enter в поле apiKeys
    let apiKeyInput = document.querySelector('#apiKey') as HTMLInputElement || null;
    apiKeyInput?.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            localStorage.setItem('api_key', apiKeyInput.value )
            window.location.href = "main_page.html";
        }
    });


});