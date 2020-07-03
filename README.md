#  EAZA

![badge](https://img.shields.io/badge/EAZA-Frontend-critical)![badge](https://img.shields.io/david/cbian03/EAZA-WEB)![badge](https://img.shields.io/github/license/cbian03/EAZA-WEB)[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)![badge](https://img.shields.io/github/last-commit/cbian03/EAZA-WEB)

This a frontend of website [EAZA](https://www.eaza.cc), which is a great platform for UW-Madison students to explore courses and professors. Details such as course requirements and descriptions are provided in a user-friendly way.



## Install

1. Clone this project to your PC

```bash
git clone https://www.example.com
```

2. Run npm install in terminal to install required modules

```bash
npm install
```

3. Run the project

```bash
npm run start
```

## Usage

This project follows Restful API rules. 

Please go to the secure folder to update API url.

## API

* Search a course

```markdown
www.eaza.cc/api/v1/search/<query>/<page>
```

| Fields | Type    | Description            |
| :----- | ------- | ---------------------- |
| query  | String  | Key words              |
| page   | Integer | Page number of results |

* Search course by breadths

```markdown
www.eaza.cc/api/v1/breadth/<query>/<breadths>/<page>
```

| Fields   | Type    | Description                                          |
| -------- | ------- | ---------------------------------------------------- |
| query    | String  | Key words. 'all' indicates all courses.              |
| breadths | String  | A string of subject code (see followed) e. g.  'SHB' |
| page     | Integer | Page number of results                               |

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

```markdown
www.eaza.cc/api/v1/prof/<name>
```

| Fields | Type   | Description           |
| ------ | ------ | --------------------- |
| name   | String | The name of professor |

* Get a course by its abbreviation and number

```markdown
www.eaza.cc/get/<abbreviation>/<number>
```

| Fields       | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| abbreviation | String  | abbreviation of  a course name e. g.'CS','Math' |
| number       | Integer | Number of a course                              |



## To Do

- [x] More friendly mobile compatible design
- [x] Add Google Analysis
- [ ] Course requirement graphs
- [ ] ...

## License

[MIT © Richard McRichface.](../LICENSE)