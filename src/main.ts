interface Option {
  height?: number,
  width?: number,
  el: string
}
class BlackBoard {
  private height: number
  private width: number
  private el: HTMLElement | null

  constructor (option: Option) {
    this.width = option.width || 500
    this.height = option.height || 500
    this.el = document.getElementById(option.el)
    this.init()
  }

  private init () {
    const canvas = document.createElement('canvas')
    canvas.width = this.width
    canvas.height = this.height
    if (this.el) {
      this.el.appendChild(canvas)
    } else {
      throw new Error('挂载的根元素不存在！')
    }
  }

  public drawCircle () {
    
  }
}
export default BlackBoard
