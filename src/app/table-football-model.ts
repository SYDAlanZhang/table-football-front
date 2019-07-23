export class gameDetailsModel {
    constructor(
        public winner: String,
        public loser: String,
        public description: String
    ) {}
}

export class playerDetailsModel {
    constructor(
        public totalGames: String,
        public winGames: String,
        public winRate: String
    ) {}
}