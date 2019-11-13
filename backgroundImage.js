function createBackgroundImage() {
  const loader = new THREE.TextureLoader();

  const material = new THREE.MeshLambertMaterial({
    map: loader.load("./kanji-template.png")
  });

  const geometry = new THREE.PlaneGeometry(25, 25);
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);
}

createBackgroundImage();