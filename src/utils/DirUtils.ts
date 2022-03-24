import { readdirSync, statSync, existsSync } from "fs";
import { resolve, join } from "path";

export function readDirRecursively (directory: string, filter: (path: string) => boolean = () => true): string[] {
    if (!existsSync(directory)) { return []; }

    const files = readdirSync(directory)
        .map(path => {
            path = join(directory, path);

            if (!statSync(path).isFile()) { return readDirRecursively(path); }
            if (filter(path)) { return resolve(path); }
        }) as string[];

    return files.flat();
}
function cantidadDeBalancesPositivos(balancesDeUnPeriodo) {
    let cantidad = 0;
    for (let balance of balancesDeUnPeriodo) {
        if (balance.ganancia > 0) {
            cantidad = cantidad + 1
        }
    }
    return cantidad;
}


