import layout from './keyboard-layout';

const Keyboard = {
  elements: {
    main: null,
    keyContainer: null,
    textarea: null,
    OSinformation: '',
    changeLang: '',
    keys: [],
  },
  properties: {
    lang: 'eng',
    caps: false,
    shiftLeft: false,
    shiftRight: false,
    value: '1',
    case: 'lower',
  },
  current: {
    event: null,
    element: null,
    code: null,
    char: null,
  },
  previous: {
    event: null,
    element: null,
    code: null,
    char: null,
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.main.classList.add('container');
    this.elements.textarea = document.createElement('textarea');
    this.elements.textarea.classList.add('keyboard--textarea', 'textarea');
    this.elements.keyContainer = document.createElement('div');
    this.elements.keyContainer.classList.add('keyboard--body', 'keyboard');
    this.elements.keyContainer.append(this.createKeys());
    this.elements.keys = document.querySelectorAll('.keyboard--key');
    this.elements.OSinformation = document.createElement('p');
    this.elements.OSinformation.classList.add('OSinfo');
    this.elements.OSinformation.textContent = 'Keyboard created in Windows OS';
    this.elements.changeLang = document.createElement('p');
    this.elements.changeLang.classList.add('lang');
    this.elements.changeLang.textContent = 'Language change: left alt+ctrl';
    this.elements.main.append(this.elements.textarea);
    this.elements.main.append(this.elements.keyContainer);
    this.elements.main.append(this.elements.OSinformation);
    this.elements.main.append(this.elements.changeLang);
    document.body.append(this.elements.main);
    if (localStorage.lang === 'rus') this.toggleLang();
    document.body.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.body.addEventListener('keyup', this.keyUpHandler.bind(this));
    document.body.addEventListener(
      'mousedown',
      this.mouseDownHandler.bind(this),
    );
    document.body.addEventListener('mouseup', this.mouseUpHandler.bind(this));
  },

  addActive() {
    this.current.element.classList.add('active');
  },
  removeActive() {
    this.current.element.classList.remove('active');
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    /* eslint-disable-next-line */
    for (const row of layout.ROWS) {
      const newRow = document.createElement('div');
      newRow.classList.add('keyboard--row', 'row');
      /* eslint-disable-next-line */
      for (const key of row) {
        const newKey = document.createElement('div');
        newKey.classList.add('keyboard--key', 'key', key.code);
        const rusPart = document.createElement('span');
        rusPart.classList.add('rus', 'hidden');
        /* eslint-disable-next-line */
        for (const variant in key.rus) {
          const newVariant = document.createElement('span');
          newVariant.classList.add(variant, 'hidden');
          newVariant.textContent = key.rus[variant];
          rusPart.append(newVariant);
        }
        const engPart = document.createElement('span');
        engPart.classList.add('eng');
        /* eslint-disable-next-line */
        for (const variant in key.eng) {
          const newVariant = document.createElement('span');
          newVariant.classList.add(variant, 'hidden');
          if (variant === 'lower') {
            newVariant.classList.remove('hidden');
          }
          newVariant.textContent = key.eng[variant];
          engPart.append(newVariant);
        }
        newKey.append(rusPart);
        newKey.append(engPart);
        newRow.append(newKey);
      }
      fragment.append(newRow);
    }
    return fragment;
  },

  toggleLang() {
    let langElems = document.querySelectorAll(`div>.${this.properties.lang}`);
    /* eslint-disable-next-line */
    for (const elem of langElems) {
      elem.classList.add('hidden');
      elem
        .querySelectorAll(`span.${this.properties.case}`)[0]
        .classList.add('hidden');
    }
    if (this.properties.lang === 'rus') {
      this.properties.lang = 'eng';
    } else {
      this.properties.lang = 'rus';
    }
    // this.properties.lang === 'rus'
    //   ? (this.properties.lang = 'eng')
    //   : (this.properties.lang = 'rus');
    langElems = document.querySelectorAll(`div>.${this.properties.lang}`);
    /* eslint-disable-next-line */
    for (const elem of langElems) {
      elem.classList.remove('hidden');
      elem
        .querySelectorAll(`span.${this.properties.case}`)[0]
        .classList.remove('hidden');
    }
    localStorage.setItem('lang', this.properties.lang);
  },

  toggleCase() {
    const thisLangElems = document.querySelectorAll(
      `div>.${this.properties.lang}`,
    );
    /* eslint-disable-next-line */
    for (const elem of thisLangElems) {
      elem
        .querySelectorAll(`span.${this.properties.case}`)[0]
        .classList.toggle('hidden');
    }
    if (
      this.properties.caps
      && (this.properties.shiftLeft || this.properties.shiftRight)
    ) {
      this.properties.case = 'capsShift';
    } else if (this.properties.caps) {
      this.properties.case = 'caps';
    } else if (this.properties.shiftLeft || this.properties.shiftRight) {
      this.properties.case = 'upper';
    } else {
      this.properties.case = 'lower';
    }
    /* eslint-disable-next-line */
    for (const elem of thisLangElems) {
      elem
        .querySelectorAll(`span.${this.properties.case}`)[0]
        .classList.toggle('hidden');
    }
  },

  keyAction() {
    let text = this.elements.textarea.value;
    const textSelector = this.elements.textarea.selectionStart;
    /* eslint-disable-next-line */
    const addChar = function () {
      if (textSelector >= 0 && textSelector <= text.length) {
        this.elements.textarea.value = text.slice(0, textSelector)
          + this.current.char
          + text.slice(textSelector, text.length);
        this.elements.textarea.selectionStart = textSelector + this.current.char.length;
        this.elements.textarea.selectionEnd = textSelector + this.current.char.length;
      } else {
        this.elements.textarea.value += this.current.char;
      }
    }.bind(this);
    if (
      [
        'Backspace',
        'Tab',
        'Enter',
        'CapsLock',
        'ShiftLeft',
        'ShiftRight',
        'AltLeft',
        'AltRight',
        'ControlLeft',
        'ControlRight',
        'MetaLeft',
        'Delete',
      ].includes(this.current.code)
    ) {
      switch (this.current.code) {
        case 'Backspace':
          if (textSelector > 0 && textSelector <= text.length) {
            text = text.slice(0, textSelector - 1)
              + text.slice(textSelector, text.length);
            this.elements.textarea.value = text;
            this.elements.textarea.selectionStart = textSelector - 1;
            this.elements.textarea.selectionEnd = textSelector - 1;
          }
          break;
        case 'Tab':
          this.current.char = '    ';
          addChar();
          break;
        case 'Enter':
          this.current.char = '\n';
          addChar();
          break;
        case 'CapsLock':
          if (this.properties.caps && !this.current.event.repeat) {
            this.properties.caps = false;
            this.removeActive();
          } else {
            this.addActive();
            this.properties.caps = true;
          }
          this.toggleCase();
          break;
        case 'ShiftLeft':
          if (!this.properties.shiftLeft) {
            this.properties.shiftLeft = true;
            this.addActive();
            this.toggleCase();
          }
          break;
        case 'ShiftRight':
          if (!this.properties.shiftRight) {
            this.properties.shiftRight = true;
            this.addActive();
            this.toggleCase();
          }
          break;
        case 'Delete':
          if (textSelector > 0 && textSelector <= text.length - 1) {
            text = text.slice(0, textSelector)
              + text.slice(textSelector + 1, text.length);
            this.elements.textarea.value = text;
            this.elements.textarea.selectionStart = textSelector;
            this.elements.textarea.selectionEnd = textSelector;
          }
          break;
        default:
          break;
      }
    } else {
      addChar();
    }
    if (this.current.event.ctrlKey && this.current.event.altKey) {
      this.toggleLang();
    }
  },

  keyDownHandler(e) {
    e.preventDefault();
    this.current.event = e;
    this.current.code = e.code;
    [this.current.element] = this.elements.main.getElementsByClassName(e.code);
    if (this.current.element) {
      this.current.char = this.current.element.querySelectorAll(':not(.hidden)')[1].textContent;
      this.keyAction();
      if (this.current.code !== 'CapsLock') {
        this.addActive();
      }
    }
  },
  keyUpHandler(e) {
    const temp = this.elements.main.getElementsByClassName(e.code)[0];
    if (temp) {
      this.current.element = temp.closest('div');
      if (e.code !== 'CapsLock') this.removeActive();
      if (e.code === 'ShiftLeft') {
        this.properties.shiftLeft = false;
        this.toggleCase();
      }
      if (e.code === 'ShiftRight') {
        this.properties.shiftRight = false;
        this.toggleCase();
      }
    }
  },

  mouseDownHandler(e) {
    this.current.event = e;
    this.current.element = e.target.closest('.key');
    if (this.current.element) {
      this.current.char = this.current.element.querySelectorAll(':not(.hidden)')[1].textContent;
      [, , this.current.code] = this.current.element.classList;
      // this.current.code = this.current.element.classList[2];
      if (this.current.code !== 'CapsLock') {
        this.addActive();
      }
      this.keyAction();
      this.previous = { ...this.current };
      e.preventDefault();
    }
  },

  mouseUpHandler(e) {
    this.current.element = e.target.closest('.key');
    if (this.current.element) {
      [, , this.current.code] = this.current.element.classList;
      // this.current.code = this.current.element.classList[2];
    } else {
      this.current = { ...this.previous };
    }
    if (this.current.element) {
      if (this.current.element === this.previous.element) {
        [, , this.current.code] = this.current.element.classList;
      } else {
        this.current = { ...this.previous };
      }
      if (this.current.code !== 'CapsLock') {
        this.removeActive();
      }
      if (this.properties.shiftLeft && this.current.code === 'ShiftLeft') {
        this.properties.shiftLeft = false;
        this.toggleCase();
      }
      if (this.properties.shiftRight && this.current.code === 'ShiftRight') {
        this.properties.shiftRight = false;
        this.toggleCase();
      }
    }
    // if (this.current.element) {
    //   if (!this.current.element.classList.contains("CapsLock")) {
    //     this.removeActive();
    //   }
    //   if (this.current.element.classList.contains("ShiftLeft")) {
    //     this.properties.shiftLeft = false;
    //     this.toggleCase();
    //   }
    //   if (this.current.element.classList.contains("ShiftRight")) {
    //     this.properties.shiftRight = false;
    //     this.toggleCase();
    //   }
    //   this.current.element = null;
    // }
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
