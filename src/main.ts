import {
  getTwoPointDistance
} from './utils/utill'
interface Option {
  height?: number,
  width?: number,
  el: string
}
class BlackBoard {
  private height: number
  private width: number
  private el: HTMLElement | null
  private ctx: CanvasRenderingContext2D
  private canvas: HTMLCanvasElement
  // 绘制相关
  private x: number
  private y: number
  private currentPath: Path2D
  // 记录
  private paths: Map<number, Path2D>
  constructor (option: Option) {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.width = option.width || 500
    this.height = option.height || 500
    this.el = document.getElementById(option.el)
    // ..
    this.x = 0
    this.y = 0
    this.currentPath = new Path2D()
    this.paths = new Map()
    this.init()
  }

  private init () {
    this.canvas.width = this.width
    this.canvas.height = this.height
    if (this.el) {
      this.el.appendChild(this.canvas)
    } else {
      throw new Error('挂载的根元素不存在！')
    }
  }

  private drawAction (event: MouseEvent) {
    this.x = event.offsetX
    this.y = event.offsetY
    this.currentPath = new Path2D()
    this.currentPath.moveTo(this.x, this.y)
    this.canvas.addEventListener('mousemove', this.mouseMoveEvent.bind(this))
    this.canvas.addEventListener('mouseup', this.mouseUpEvent.bind(this))
  }

  private mouseMoveEvent (event: MouseEvent) {
    const radius = getTwoPointDistance({ x: this.x, y: this.y }, { x: event.offsetX, y: event.offsetY })
    this.currentPath.arc(this.x, this.y, radius, 0, 2 * Math.PI)
    this.ctx.stroke(this.currentPath)
  }

  private mouseUpEvent (event: MouseEvent) {
    // this.paths
    this.canvas.removeEventListener('mousemove', this.mouseMoveEvent.bind(this))
    this.canvas.removeEventListener('mouseup', this.mouseUpEvent.bind(this))
  }

  public drawCircle () {
    this.canvas.addEventListener('mousedown', this.drawAction.bind(this))
  }
}
export default BlackBoard
