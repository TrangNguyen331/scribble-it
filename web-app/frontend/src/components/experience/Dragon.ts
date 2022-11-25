import * as $ from 'three'

export default class Dragon {
  body!: $.Group;
  belly!: $.Mesh;
  threeGroup: $.Group;

  constructor() {
    // BODY
    this.threeGroup = new $.Group();
    this._createBody();
  }
  _createBody() {
    const greenMat = new $.MeshLambertMaterial({
      color: 0x5da683
    });

    this.body = new $.Group();
    this.belly = makeCube(greenMat, 30, 30, 40, 0, 0, 0, 0, 0, Math.PI / 4);
    this.body.add(this.belly);
    this.threeGroup.add(this.body);
  }

  update() {
    this.body.rotation.x += 0.01
  }
}

function makeCube(
  mat: $.Material, 
  w: number, 
  h: number, 
  d: number, 
  posX: number,
  posY: number, 
  posZ: number, 
  rotX: number, 
  rotY: number, 
  rotZ: number) {
  var geom = new $.BoxGeometry(w, h, d);
  var mesh = new $.Mesh(geom, mat);
  mesh.position.x = posX;
  mesh.position.y = posY;
  mesh.position.z = posZ;
  mesh.rotation.x = rotX;
  mesh.rotation.y = rotY;
  mesh.rotation.z = rotZ;
  return mesh;
}