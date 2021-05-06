interface Option {
    height?: number;
    width?: number;
    el: string;
}
declare class BlackBoard {
    private height;
    private width;
    private el;
    constructor(option: Option);
    private init;
}
export default BlackBoard;
