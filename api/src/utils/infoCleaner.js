const cleaner = (videogames) => {
    return videogames.results.map((game) => ({
      id: game.id,
      name: game.name,
      platforms: game.platforms.map((platform) => platform.platform.name).join(', '),
      background_image: game.background_image,
      released: game.released,
      rating: game.rating,
    }));
  };

  module.exports={cleaner}