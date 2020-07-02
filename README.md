#  EAZA

![badge](https://img.shields.io/badge/EAZA-Frontend-critical)![badge](https://img.shields.io/david/cbian03/EAZA-WEB)![badge](https://img.shields.io/github/license/cbian03/EAZA-WEB)[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)![badge](https://img.shields.io/github/last-commit/cbian03/EAZA-WEB)

This a frontend of website [EAZA](https://www.eaza.cc), which is a great platform for UW-Madison students to explore courses and professors. Details such as course requirements and descriptions are provided in a user-friendly way.



## Install

1. Clone this project to your PC

```powershell
git clone https://www.example.com
```

2. Run npm install in terminal to install required modules

```powershell
npm install
```

3. Run the project

```
npm run start
```

## Usage

This project follows Restful API rules. 

Please go to the secure dictory to update API url.

## API

* Search a course

```
www.eaza.cc/api/v1/search?query=""&page=1
```

| Fields | Type    | Description           |
| :----- | ------- | --------------------- |
| query  | String  | Key words             |
| page   | Integer | Page numbe of results |

* Search course by breadths

```
www.eaza.cc/api/v1/search/breadth?query='all'&breadths=''&page=1
```

| Fields   | Type    | Description                                                  |
| -------- | ------- | ------------------------------------------------------------ |
| query    | String  | Key words. 'all' indicates all courses.                      |
| breadths | String  | A string of subject code (see followed) seperated by '1'. e.g. 'S1H1B' |
| page     | Integer | Page numbe of results                                        |

| Subject Code | Subject              |
| ------------ | -------------------- |
| A            | Communication Part A |
| B            | Biological Science   |
| C            | Communication Part B |
| E            | Ethnic Studies       |
| H            | Humanities           |
| L            | Literatures          |
| S            | Social Science       |
| P            | Physical Science     |
| N            | Natural Science      |

* Search a professor

```
www.eaza.cc/api/v1/get/prof?name=""
```

| Fields | Type   | Description           |
| ------ | ------ | --------------------- |
| name   | String | The name of professor |



## To Do

- [x] More friendly mobile compatible degisn
- [x] Add Google Analysis
- [ ] Course requirement graphs
- [ ] ...

## License

[MIT © Richard McRichface.](../LICENSE)