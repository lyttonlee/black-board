interface Option {
    height?: number;
    width?: number;
    el: string;
}
declare class BlackBoard {
    private height;
    private width;
    private el;
    private ctx;
    private canvas;
    private x;
    private y;
    private currentPath;
    private paths;
    constructor(option: Option);
    private init;
    private drawAction;
    private mouseMoveEvent;
    private mouseUpEvent;
    drawCircle(): void;
}
export default BlackBoard;
