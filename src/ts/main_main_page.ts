
import OpenAI from "openai";

//const OPENAI_API_KEY = localStorage.getItem('api_key');
const openai = new OpenAI({
    apiKey: localStorage.getItem('api_key') as string,
    dangerouslyAllowBrowser: true
});

function referenceToAPi(userInput: HTMLTextAreaElement) {
    let userInputText = userInput.value;
    let chad = document.querySelector('.chad-logo') as HTMLElement;
    chad.style.display = 'none';
    userInput.value = '';

    openai.chat.completions.create({
        messages: [{ role: "user", content: userInputText }],
        model: "gpt-3.5-turbo",
    }).then(completion => {
        const backgroundColorGptCont = document.createElement("div");
        backgroundColorGptCont.className = "background-color-gpt-cont";

        const gptResponseCont = document.createElement("div");
        gptResponseCont.className = "gpt-response-cont";

        const gptResponse = document.createElement("p");
        gptResponse.className = "gpt-response";
        gptResponse.textContent = completion.choices[0].message.content;

        const gptImg = document.createElement("img");
        gptImg.className = "gpt-img";
        gptImg.src = "src/assets/chat-gpt-logo.svg";
        gptImg.alt = "GPT";

        gptResponseCont.appendChild(gptResponse);
        gptResponseCont.appendChild(gptImg);

        backgroundColorGptCont.appendChild(gptResponseCont);

        let dialog = document.querySelector('.cont-dialog') as HTMLElement;
        dialog?.appendChild(backgroundColorGptCont);
    }).catch(error => {
        console.error("Произошла ошибка:", error);
    });
}

function createUserMassage(textMessage: string): void {
    let dialogBroken = document.querySelector('.cont-dialog-bg') as HTMLElement;
    let chadLogo = document.querySelector('.chad-logo') as HTMLElement;
    chadLogo.style.display = 'none';

    dialogBroken?.classList.replace('cont-dialog-bg', 'cont-dialog')


    const backgroundColorUserCont = document.createElement("div");
    backgroundColorUserCont.className = "background-color-user-cont";

    const userResponseCont = document.createElement("div");
    userResponseCont.className = "user-response-cont";

    const chadImg = document.createElement("img");
    chadImg.className = "chad-img";
    chadImg.src = "src/assets/gigachad-3.png";
    chadImg.alt = "chad";

    const userResponse = document.createElement("p");
    userResponse.className = "user-response";
    userResponse.textContent = textMessage;

    userResponseCont.appendChild(chadImg);
    userResponseCont.appendChild(userResponse);

    backgroundColorUserCont.appendChild(userResponseCont);


    let dialog = document.querySelector('.cont-dialog') as HTMLElement;
    dialog?.appendChild(backgroundColorUserCont);
}
// Псевдо мейн функция
document.addEventListener('DOMContentLoaded', () => {

    let inputArea = document.querySelector('.input-user') as HTMLTextAreaElement || null;
    inputArea?.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            createUserMassage(inputArea.value);
            referenceToAPi(inputArea);
        }
    });

    let inputButton = document.querySelector('.input-user-button') as HTMLButtonElement || null;
    inputButton?.addEventListener('click', () => {
        createUserMassage(inputArea.value);
        referenceToAPi(inputArea);
    });


});