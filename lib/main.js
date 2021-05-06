(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['black-board'] = factory());
}(this, (function () { 'use strict';

  class BlackBoard {
      constructor(option) {
          this.width = option.width || 500;
          this.height = option.height || 500;
          this.el = document.getElementById(option.el);
          this.init();
      }
      init() {
          const canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          if (this.el) {
              this.el.appendChild(canvas);
          }
          else {
              throw new Error('挂载的根元素不存在！');
          }
      }
  }

  return BlackBoard;

})));
