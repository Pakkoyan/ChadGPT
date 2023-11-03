# Tauri + Vanilla TS = shell-gpt4
## Оглавление
- [Зависимости](#Зависимости)
- [Тестирование](#Тестирование)
- [Сборка из исходников](#Сборка-из-исходников)



## Зависимости
- Установка [Rust](https://www.rust-lang.org/learn/get-started) 
- Установка TauriApp: `cargo install create-tauri-app --locked`
- Установка TauriCLI: `cargo install tauri-cli`

## Тестирование
- Запуск проекта: `cargo tauri dev`

## Сборка из исходников
- Установка проекта локально: `git clone https://github.com/Pakkoyan/shell-gpt4`
- Сборка проекта: `cargo tauri build`
- Запускаймый файл находится в `/src-tauri/src/target/release`

