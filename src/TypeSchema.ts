import type {DefinitionType} from "./DefinitionType";
import type {ArrayDefinitionType} from "./ArrayDefinitionType";
import type {MapDefinitionType} from "./MapDefinitionType";
import type {StructDefinitionType} from "./StructDefinitionType";

/**
 * The root object of a TypeSchema document containing imports, definitions, and the entry point.
 */
export interface TypeSchema {
    definitions?: Record<string, ArrayDefinitionType|MapDefinitionType|StructDefinitionType>
    import?: Record<string, string>
    root?: string
}

