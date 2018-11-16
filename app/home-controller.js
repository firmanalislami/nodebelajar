class HomeController {
    static index(req, res) {
        res.send({ "message": "static nih" });
    }
}
module.exports = HomeController;