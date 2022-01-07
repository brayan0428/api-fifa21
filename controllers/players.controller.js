const Player = require("../models/players.model");
const axios = require("axios");

const playersRouter = require("express").Router();

playersRouter.get("/script", async (req, res) => {
  const totalPages = 908;
  const players = [];
  for (let i = 1; i <= totalPages; i++) {
    const result = await axios.get(
      `https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${i}`
    );
    const currentPlayers = result.data.items.map((player) => ({
      name: player.name,
      team: player.club.name,
      position: player.position,
      nation: player.nation.name,
    }));
    players.push(...currentPlayers);
  }
  Player.insertMany(players)
    .then(() => {
      res.send("Información guardada");
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

playersRouter.post("/team", async (req, res) => {
  let { page = 1, limit = 12, name } = req.body;
  page = parseInt(page);

  try {
    const players = await Player.find({
      team: { $regex: new RegExp(name, "i") },
    })
      .select("name position nation")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Player.countDocuments({
      team: { $regex: new RegExp(name, "i") },
    });

    res.json({
      page,
      totalPages: Math.ceil(count / limit),
      items: players.length,
      totalItems: count,
      players,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

playersRouter.get("/players", async (req, res) => {
  try {
    let { search, order = "asc", page = 1, limit = 12 } = req.query;
    page = parseInt(page);

    const players = await Player.find({
      name: { $regex: new RegExp(search, "i") },
    })
      .select("name position nation team")
      .sort({ name: order })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Player.countDocuments({
      name: { $regex: new RegExp(search, "i") },
    });

    res.json({
      page,
      totalPages: Math.ceil(count / limit),
      items: players.length,
      totalItems: count,
      players,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = playersRouter;
