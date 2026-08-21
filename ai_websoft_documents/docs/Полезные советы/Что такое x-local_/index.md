## Что такое x-local?

**x-local** \- это обращение к файлу в папке клиента WebTutorAdmin.

Например:

_x-local://_custom\_library/custom\_file.js   - обращение к файлу WebTutorAdmin_/_custom\_library/custom\_file.js 

Для того, чтобы в этом примере **x-local** обращался к папке сервера //WebSoftServer, а не к папке клиента //WebTutorAdmin, нужно явно определить подпапку **custom\_****library** в файле //WebTutorAdmin/SpXml.ini:

_SHARED-DATABASE: custom\_library_

---

