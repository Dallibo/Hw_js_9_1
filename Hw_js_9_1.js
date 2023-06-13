let rect = {
    topLeft: { x: 0, y: 0 },
    bottomRight: { x: 5, y: 3 }
}

function getRectangleWidth(rect){
    const width = rect.bottomRight.x - rect.topLeft.x
    return width 
}
const width = getRectangleWidth(rect)
console.log(`Ширина прямоугольника: ${width}`)

function getRectangleHeight(rect){
    const height = rect.bottomRight.y - rect.topLeft.y
    return height 
}
const height = getRectangleHeight(rect)
console.log(`Высота прямоугольника: ${height}`)

function getRectangleS(rect){
    const s = width * height
    return s 
}
const s = getRectangleS(rect)
console.log(`Площадь прямоугольника: ${s}`)

function getRectangleP(rect){
    const p = 2* (width + height)
    return p 
}
const p = getRectangleP(rect)
console.log(`Периметр прямоугольника: ${p}`)

console.log('Начальный прямоугольник:');
console.log(rect);

function changeWidth(rect, change) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.bottomRight.x += change;
    return newRect;
  }
const newWidthRect = changeWidth(rect, 2);
  console.log('Измененная ширина:');
  console.log(newWidthRect);

function changeHeight(rect, change) {
    const newRect = {
        topLeft: { ...rect.topLeft },
        bottomRight: { ...rect.bottomRight }
      };
    newRect.bottomRight.y += change;
    return newRect;
    }
const newHeightRect = changeHeight(rect, 1)
  console.log('Измененная высота:');
  console.log(newHeightRect);

  function changeSize(rect, widthChange, heightChange) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.bottomRight.x += widthChange;
    newRect.bottomRight.y += heightChange;
    return newRect;
  }
  const newSizeRect = changeSize(rect, -1, 2);
  console.log('Измененная ширина и высота:');
  console.log(newSizeRect);

  function offsetRectangleX(rect, offsetX) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.topLeft.x += offsetX;
    newRect.bottomRight.x += offsetX;
    return newRect;
  }
  const newXOffsetRect = offsetRectangleX(rect, 3);
  console.log('Смещение по оси X:');
  console.log(newXOffsetRect);

  function offsetRectangleY(rect, offsetY) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.topLeft.y += offsetY;
    newRect.bottomRight.y += offsetY;
    return newRect;
  }
  const newYOffsetRect = offsetRectangleY(rect, 2);
console.log('Смещение по оси Y:');
console.log(newYOffsetRect);

function offsetRectangleXY(rect, offsetX, offsetY) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.topLeft.x += offsetX;
    newRect.topLeft.y += offsetY;
    newRect.bottomRight.x += offsetX;
    newRect.bottomRight.y += offsetY;
    return newRect;
  }
  const newXOffsetYOffsetRect = offsetRectangleXY(rect, 3, -1);
console.log('Смещение по оси X та Y:');
console.log(newXOffsetYOffsetRect);

function isPointInsideRectangle(rect, point) {
    const { x, y } = point;
    const { topLeft, bottomRight } = rect;
    const { x: leftX, y: topY } = topLeft;
    const { x: rightX, y: bottomY } = bottomRight;
  
    if (x >= leftX && x <= rightX && y >= topY && y <= bottomY) {
      return true;
    }
    return false;
  }

  const point = { x: 2, y: 1 };
const isInside = isPointInsideRectangle(rect, point);
console.log(`Точка (${point.x}, ${point.y}) находиться в середине прямоугольника: ${isInside}`);