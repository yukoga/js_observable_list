import { addBaz } from './baz.js'


window.onload = function () {
    const app = document.getElementById('foo') as HTMLParagraphElement;
    app.innerHTML = 'Hello, TypeScript - foo';
    addBaz(app);
};
