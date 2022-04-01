# Adonisjs MailerLite

[![typescript-image]][typescript-url] [![license-image]][license-url]

# Installation
```bash
npm i --save adonis-mailerlite
```

Connect all dependencies:
```bash
node ace invoke adonis-mailerlite
```

# Sample Usage

  ```js
  import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
  import MailerLite from '@ioc:Adonis/Addons/MailerLite';
  
  export default class TestsController {
    public async test({response}: HttpContextContract) {
      const subs = await MailerLite.getSubscribers();
      return response.ok(subs);
    }
  }

  ```
  
[For more ](https://github.com/zygos/mailerlite-api-v2-node)

[typescript-image]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]:  "typescript"

[license-image]: https://img.shields.io/badge/License-MIT-blueviolet.svg?style=for-the-badge
[license-url]: LICENSE "license"
