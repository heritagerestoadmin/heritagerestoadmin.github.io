const test = document.querySelector('#menu-container');
const test1 = document.querySelector('#menu-container1');
const test2 = document.querySelector('#menu-container2');
const test3 = document.querySelector('#menu-container3');
const test4 = document.querySelector('#menu-container4');

test.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if(button.textContent === 'remove'){
        ul.removeChild(li);
      }
      else if(button.textContent === 'edit') {
        const span = li.childNodes[7];
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
      } else if(button.textContent === 'save') {
        const input = li.childNodes[7];
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
      }
    }
  });

  test1.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if(button.textContent === 'remove'){
        ul.removeChild(li);
      }
      else if(button.textContent === 'edit') {
        const span = li.childNodes[7];
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
      } else if(button.textContent === 'save') {
        const input = li.childNodes[7];
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
      }
    }
  });  
  
  test2.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if(button.textContent === 'remove'){
        ul.removeChild(li);
      }
      else if(button.textContent === 'edit') {
        const span = li.childNodes[7];
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
      } else if(button.textContent === 'save') {
        const input = li.childNodes[7];
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
      }
    }
  });

  test3.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if(button.textContent === 'remove'){
        ul.removeChild(li);
      }
      else if(button.textContent === 'edit') {
        const span = li.childNodes[7];
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
      } else if(button.textContent === 'save') {
        const input = li.childNodes[7];
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
      }
    }
  });

  test4.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if(button.textContent === 'remove'){
        ul.removeChild(li);
      }
      else if(button.textContent === 'edit') {
        const span = li.childNodes[7];
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
      } else if(button.textContent === 'save') {
        const input = li.childNodes[7];
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
      }
    }
  });