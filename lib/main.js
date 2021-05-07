(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['black-board'] = factory());
}(this, (function () { 'use strict';

  const getTwoPointDistance = (point1, point2) => {
      const absX = Math.abs(point1.x - point2.x);
      const absY = Math.abs(point1.y - point2.y);
      return Math.sqrt(absX * absX + absY * absY);
  };

  class BlackBoard {
      constructor(option) {
          this.canvas = document.createElement('canvas');
          this.ctx = this.canvas.getContext('2d');
          this.width = option.width || 500;
          this.height = option.height || 500;
          this.el = document.getElementById(option.el);
          this.x = 0;
          this.y = 0;
          this.currentPath = new Path2D();
          this.paths = new Map();
          this.init();
      }
      init() {
          this.canvas.width = this.width;
          this.canvas.height = this.height;
          if (this.el) {
              this.el.appendChild(this.canvas);
          }
          else {
              throw new Error('挂载的根元素不存在！');
          }
      }
      drawAction(event) {
          this.x = event.offsetX;
          this.y = event.offsetY;
          this.currentPath = new Path2D();
          this.currentPath.moveTo(this.x, this.y);
          this.canvas.addEventListener('mousemove', this.mouseMoveEvent.bind(this));
          this.canvas.addEventListener('mouseup', this.mouseUpEvent.bind(this));
      }
      mouseMoveEvent(event) {
          const radius = getTwoPointDistance({ x: this.x, y: this.y }, { x: event.offsetX, y: event.offsetY });
          this.currentPath.arc(this.x, this.y, radius, 0, 2 * Math.PI);
          this.ctx.stroke(this.currentPath);
      }
      mouseUpEvent(event) {
          this.canvas.removeEventListener('mousemove', this.mouseMoveEvent.bind(this));
          this.canvas.removeEventListener('mouseup', this.mouseUpEvent.bind(this));
      }
      drawCircle() {
          this.canvas.addEventListener('mousedown', this.drawAction.bind(this));
      }
  }

  return BlackBoard;

})));
