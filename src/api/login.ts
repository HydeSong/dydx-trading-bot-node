import express from "express";
import {Dydx} from "../services/index";
import {Market, PositionResponseObject, PositionStatus} from "@dydxprotocol/v3-client";

const router = express.Router();
const client = new Dydx();

router.post < {} > ("/", async(req, res) => {
    console.log(client.public)
    console.log(client.private)
    const positions : {
        positions : PositionResponseObject[]
    } = await client
        .private
        .getPositions({
            market: Market.BTC_USD,
            status: PositionStatus.OPEN
        },);

    console.log("positions", positions)
    res.json(["😀", "😳", "🙄"]);
});

export default router;