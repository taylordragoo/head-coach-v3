export default class Utilities {
    static randInt(a: number, b: number): number {
        return Math.floor(Math.random() * (1 + b - a)) + a;
    }

    static shuffle(list: any[]): void {
        let i, j, l, t;
        l = list.length;
        for (i = 1; i < l; i++) {
            j = this.randInt(0, i);
            if (j !== i) {
                t = list[i];  // swap list[i] and list[j]
                list[i] = list[j];
                list[j] = t;
            }
        }
    }

    static gauss(mu: number, sigma: number): number {
        mu = mu !== undefined ? mu : 0;
        sigma = sigma !== undefined ? sigma : 1;
        return ((Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1)) * sigma + mu;
    }

    static realGauss(mu: number, sigma: number): number {
        let marsaglia, radius, z_1, z_2;
        mu = mu !== undefined ? mu : 0;
        sigma = sigma !== undefined ? sigma : 1;
        do {
            z_1 = 2 * Math.random() - 1;
            z_2 = 2 * Math.random() - 1;
            radius = z_1 * z_1 + z_2 * z_2;
        } while (radius >= 1 || radius === 0); // only use inside the unit circle
        marsaglia = Math.sqrt(-2 * Math.log(radius) / radius);
        return (z_1 * marsaglia) * sigma + mu;
    }

    static truncGauss(mu: number, sigma: number, min: number, max: number): number {
        let val;
        let i = -1;
        do {
            i += 1;
            if (i > 1000000) {
                throw new Error("Could not find valid random number");
            }
            val = this.realGauss(mu, sigma);
        } while (val < min || val > max);
        return val;
    }

    static uniform(a: number, b: number): number {
        return Math.random() * (b - a) + a;
    }

    static choice(x: any[]): any {
        return x[Math.floor(Math.random() * x.length)];
    }

    static bound(x: number, min: number, max: number): number {
        if (x < min) {
            return min;
        }
    
        if (x > max) {
            return max;
        }
    
        return x;
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    static keys<O extends object>(obj: O): Array<keyof O> {
        return Object.keys(obj) as Array<keyof O>;
    }
}