[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">ToDo Vue</h3>

  <p align="center">
    Small application to manage a to do list created with vue framework
    <br />
    <a href="https://github.com/igomezal/todo-vue">View Demo</a>
    ·
    <a href="https://github.com/igomezal/todo-vue/issues">Report Bug</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

Small application to manage a to do list, created using vue framework.

### Built With

* [VueJS](https://vuejs.org/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to have node and npm installed.

* node https://nodejs.org/es/ 

* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/igomezal/todo-vue.git
```
2. Install NPM packages
```sh
npm install
```
or

```sh
yarn
```

3. Run it locally

```sh
npm run start
```
or

```sh
yarn start
```

4. Just build it

```sh
npm run build
```
or

```sh
yarn build
```



<!-- USAGE EXAMPLES -->
## Usage

There is the main component which is ToDoApp which can be found in `./src/ToDoApp.vue` which loads the rest of the components used in this project:

* AddTodoItem - Used to create new tasks - `./src/components/AddTodoItem.vue`
* TodoList - Used to render the list of tasks - `./src/components/TodoList.vue`
* TodoItem - Defines each task which can be completed or deleted - `./src/components/TodoItem.vue`

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/igomezal/todo-vue/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Iván Gómez Alonso - [@ivanusatuiter](https://twitter.com/ivanusatuiter) - yvangomezalonso@gmail.com

Project Link: [https://github.com/igomezal/todo-vue](https://github.com/igomezal/todo-vue)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/igomezal/todo-vue.svg?style=flat-square
[issues-url]: https://github.com/igomezal/todo-vue/issues
[license-shield]: https://img.shields.io/github/license/igomezal/todo-vue.svg?style=flat-square
[license-url]: https://github.com/igomezal/todo-vue/blob/master/LICENSE
