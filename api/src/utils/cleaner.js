const infoCleaner = (videogames) => {
    return videogames.map((game) => ({
      id: game.id,
      name: game.name,
      platforms: game.platforms.map((platform) => platform.platform.name).join(', '),
      background_image: game.background_image,
      released: game.released,
      rating: game.rating,
      description:game.description,
    }));
  };

  module.exports={infoCleaner}
