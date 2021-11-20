import {Module} from "./Module";
import {readDirRecursively} from "../utils/DirUtils";
import { Client } from ".";


export interface HandlerOptions {
    defaultDir: string;
}

export class Handler {
    modules: Map<string, Module>;
    defaultDir: string;

    constructor(public client: Client, options: HandlerOptions) {
        this.modules = new Map();
        this.defaultDir = options.defaultDir;
    }

    get (id: string): Module {
        return this.modules.get(id) as Module;
    }

    getAll (): Module[] {
        return Array.from(this.modules.values());
    }

    filter (filter: (module: Module) => boolean = () => true): Module[] {
        return this.getAll().filter(filter);
    }

    find (filter: (module: Module) => boolean = () => true): Module {
        return this.getAll().find(filter) as Module;
    }

    register (module: Module, path?: string): Module {
        module.path = path as string;
        module.handler = this;
        module.client = this.client;
        module.dispatcher = this.client.dispatcher;

        this.modules.set(module.id, module);
        return module;
    }

    unregister (module: Module): boolean {
        delete require.cache[module.path];
        return this.modules.delete(module.id);
    }

    load (module: Module | string): Module | undefined {
        let moduleClass;

        try {
            moduleClass = (typeof module === "string") ? require(module) : module;
            if ("default" in moduleClass) { moduleClass = moduleClass.default; }
        } catch { return; }

        if (!(moduleClass.prototype instanceof Module)) {
            if (typeof module === "string") {
                delete require.cache[require.resolve(module)];
            }

            return;
        }

        const moduleObject = new moduleClass();
        const modulePath = (typeof module === "string") ? module : undefined;

        if (this.modules.has(moduleObject.id)) {
            throw new Error(`Module ${moduleObject.id} already loaded`);
        }
        return this.register(moduleObject, modulePath);
    }

    loadAll (directory: string = this.defaultDir): void {
        for (const module of readDirRecursively(directory)) {
            this.load(module);
        }
    }

    unload (module: Module | string): boolean | undefined {
        if (typeof module === "string") {
            module = this.modules.get(module) as Module;
        }

        if (module) { return this.unregister(module); }
    }

    unloadAll (): void {
        for (const module of this.modules.values()) {
            this.unload(module);
        }
    }

    reload (module: Module | string): void {
        if (this.unload(module)) { this.load(module); }
    }

    reloadAll (): void {
        for (const module of this.modules.values()) {
            this.reload(module);
        }
    }
}
