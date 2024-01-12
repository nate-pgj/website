// 十六进制转换为rgba
function hexToRgba(hex) {
   const [r, g, b] = hex.match(/\w\w/g).map(val => parseInt(val, 16))
   return `rgba(${r}, ${g}, ${b}, 1)`;
}
// 将rgba转换为十六进制 
function rgbaToHex(r, g, b) {
   return "#" + [r, g, b].map(num => parseInt(num).toString(16).padStart(2, '0')).join('')
}
// 删除数组中的重复元素
function uniqueArray(arr) {
   return [...new Set(arr)]
}

// 十六进制转换为rgba2
function hexToRgba(hex) {
   const [r, g, b] = hex.match(/\w\w/g).map(val => parseInt(val, 16))
   return `rgba(${r}, ${g}, ${b}, 1)`;
}
// 将rgba转换为十六进制2
function rgbaToHex(r, g, b) {
   return "#" + [r, g, b].map(num => parseInt(num).toString(16).padStart(2, '0')).join('')
}
// 删除数组中的重复元素34567890123
function uniqueArray(arr) {
   return [...new Set(arr)]
} 