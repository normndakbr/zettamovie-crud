const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/movies", movieController.showAll);
router.get("/movies/:id", movieController.showById);
router.post("/movies", movieController.addMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);

module.exports = router;