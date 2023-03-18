export function addOffset(map, offset) {
   const offsetY = map.getSize().y * offset;
   map.panBy([0, -offsetY], {animate:false})
}