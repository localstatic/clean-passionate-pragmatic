export class BowlingGame {
    private _frames: Array<Array<number>> = [[]];

    roll(_pins: number): void {
        let frame = this._frames[this._frames.length - 1];

        if (frame.length < 2) {
            frame.push(_pins);
        } else {
            this._frames.push([_pins]);
        }
    }

    score(): number {
        let score = 0;

        this._frames.forEach((fr) => {
            score += fr.reduce((prevTotal, rollPins) => {
                return prevTotal + rollPins;
            }, 0);
        }); 

        return score;
    }
}