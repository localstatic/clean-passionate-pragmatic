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
        const nFrames = this._frames.length;

        for (let i = 0; i < nFrames; i++) {
            if (!this._frames[i]) {
                break;
            }

            let curFrame: number[] = this._frames[i];
            let isSpare = false;

            if (curFrame[0] === undefined) {
                continue;
            }

            score += curFrame[0];
            
            if (curFrame[1] === undefined) {
                continue;
            }

            score += curFrame[1];

            // Handle spares

            if (curFrame[0] + curFrame[1] === 10) {
                isSpare = true;
            }

            if (isSpare && this._frames[i+1] !== undefined && this._frames[i+1][0] !== undefined) {
                score += this._frames[i+1][0];
            }
        }

        return score;
    }
}