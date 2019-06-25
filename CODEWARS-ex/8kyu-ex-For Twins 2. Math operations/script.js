function iceBrickVolume(radius, bottleLength, rimLength) {

  const iceBrickVolume = radius * radius * (bottleLength - rimLength) * 2;
  return iceBrickVolume
  }

  iceBrickVolume(1, 10, 2)