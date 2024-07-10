// using intersection type
type Draggable = {
    drag: () => void
}
type Resizeable = {
    resizeable: () => void
}
type Combo = Draggable & Resizeable
let textBox : Combo = {
    drag: () => {},
    resizeable: () => {}
}